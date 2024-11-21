import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignIn } from "@/components/SignIn";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { INITIAL_LESSONS, type Lesson } from "@/data/lessons";

const Index = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [lessons, setLessons] = useState(INITIAL_LESSONS);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleLessonClick = (lessonId: number) => {
    if (!lessons[lessonId - 1].locked) {
      setSelectedLesson(lessonId);
      setShowQuiz(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
    } else {
      toast.info("Complete the previous lesson first!");
    }
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
    setShowQuiz(false);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const currentLesson = lessons[selectedLesson! - 1];
    const currentQuestion = currentLesson.questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      toast.success("Correct answer!");
      if (currentQuestionIndex < currentLesson.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        completeLesson(selectedLesson!);
        setShowQuiz(false);
      }
    } else {
      toast.error("Incorrect answer. Try again!");
    }
  };

  const completeLesson = (lessonId: number) => {
    setLessons(prevLessons => {
      const newLessons = [...prevLessons];
      newLessons[lessonId - 1].progress = 100;
      if (lessonId < newLessons.length) {
        newLessons[lessonId].locked = false;
      }
      return newLessons;
    });
    toast.success("Lesson completed! Great job!");
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <SignIn onSignIn={() => setIsSignedIn(true)} />
      </div>
    );
  }

  const renderQuiz = () => {
    const currentLesson = lessons[selectedLesson! - 1];
    const currentQuestion = currentLesson.questions[currentQuestionIndex];

    return (
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Quiz - Question {currentQuestionIndex + 1}</CardTitle>
          <CardDescription>
            {currentQuestionIndex + 1} of {currentLesson.questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg font-medium">{currentQuestion.text}</p>
            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => setSelectedAnswer(parseInt(value))}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleAnswerSubmit} className="mt-4">
              Submit Answer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container py-6">
          <h1 className="text-3xl font-bold text-primary">Email Etiquette Training</h1>
          <p className="mt-2 text-muted-foreground">Master the art of professional email communication</p>
        </div>
      </header>

      <main className="container py-8 animate-fade-in">
        {selectedLesson ? (
          <div className="space-y-6">
            <Button variant="ghost" onClick={handleBackClick} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </Button>
            {showQuiz ? (
              renderQuiz()
            ) : (
              <div className="grid gap-6">
                {lessons[selectedLesson - 1].content?.map((section, index) => (
                  <Card key={index} className="animate-fade-in">
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{section.text}</p>
                    </CardContent>
                  </Card>
                ))}
                <Button onClick={startQuiz} className="animate-fade-in">
                  Take Quiz
                </Button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center space-x-4 mb-8">
              <div className="flex space-x-4">
                <Button
                  variant={showSimulator ? "outline" : "default"}
                  onClick={() => setShowSimulator(false)}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Lessons
                </Button>
                <Button
                  variant={showSimulator ? "default" : "outline"}
                  onClick={() => setShowSimulator(true)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Practice
                </Button>
              </div>
              <Button variant="outline" onClick={() => setIsSignedIn(false)}>
                Sign Out
              </Button>
            </div>

            {showSimulator ? (
              <EmailSimulator />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {lessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    title={lesson.title}
                    description={lesson.description}
                    progress={lesson.progress}
                    isLocked={lesson.locked}
                    onClick={() => handleLessonClick(lesson.id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Index;