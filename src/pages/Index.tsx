import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, ArrowLeft, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import { SignIn } from "@/components/SignIn";
import { INITIAL_LESSONS, type Lesson } from "@/data/lessons";
import { Quiz } from "@/components/Quiz";
import { LessonContent } from "@/components/LessonContent";
import { FinalQuiz } from "@/components/FinalQuiz";
import { FallingEmails } from "@/components/FallingEmails";

const Index = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [lessons, setLessons] = useState(INITIAL_LESSONS);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showFinalQuiz, setShowFinalQuiz] = useState(false);

  const handleLessonClick = (lessonId: number) => {
    if (!lessons[lessonId - 1].locked) {
      setSelectedLesson(lessonId);
      setShowQuiz(false);
      setShowFinalQuiz(false);
    } else {
      toast.info("Complete the previous lesson first!");
    }
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
    setShowQuiz(false);
    setShowFinalQuiz(false);
  };

  const completeLesson = (lessonId: number, correctAnswers: number) => {
    setLessons(prevLessons => {
      const newLessons = [...prevLessons];
      newLessons[lessonId - 1].progress = 100;
      if (lessonId < newLessons.length && correctAnswers >= 3) {
        newLessons[lessonId].locked = false;
      }
      return newLessons;
    });
    
    if (correctAnswers >= 3) {
      toast.success("Lesson completed! Great job!");
    } else {
      toast.error("You need at least 3 correct answers to unlock the next lesson!");
    }
    
    setShowQuiz(false);
  };

  const allLessonsCompleted = lessons.every(lesson => lesson.progress === 100);

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 flex items-center justify-center p-4">
        <FallingEmails />
        <SignIn onSignIn={() => setIsSignedIn(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 transition-all duration-500">
      <FallingEmails />
      <header className="bg-white/90 backdrop-blur-sm border-b border-violet-100 sticky top-0 z-10 transition-all duration-300">
        <div className="container py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
            Email Etiquette Training
          </h1>
          <p className="mt-2 text-muted-foreground text-lg animate-fade-in delay-100">
            Master the art of professional email communication
          </p>
        </div>
      </header>

      <main className="container py-8 animate-fade-in">
        {showFinalQuiz ? (
          <div className="space-y-6">
            <Button 
              variant="ghost" 
              onClick={handleBackClick} 
              className="mb-4 hover:bg-violet-50 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </Button>
            <FinalQuiz />
          </div>
        ) : selectedLesson ? (
          <div className="space-y-6">
            <Button 
              variant="ghost" 
              onClick={handleBackClick} 
              className="mb-4 hover:bg-violet-50 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </Button>
            {showQuiz ? (
              <Quiz 
                lesson={lessons[selectedLesson - 1]} 
                onComplete={completeLesson}
              />
            ) : (
              <>
                <LessonContent lesson={lessons[selectedLesson - 1]} />
                <Button 
                  onClick={() => setShowQuiz(true)} 
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Take Quiz
                </Button>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center space-x-4 mb-8">
              <div className="flex space-x-4">
                <Button
                  variant={showSimulator ? "outline" : "default"}
                  onClick={() => {
                    setShowSimulator(false);
                    setShowFinalQuiz(false);
                  }}
                  className="group transition-all duration-300 hover:bg-violet-100 hover:text-violet-700"
                >
                  <BookOpen className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Lessons
                </Button>
                <Button
                  variant={showSimulator ? "default" : "outline"}
                  onClick={() => {
                    setShowSimulator(true);
                    setShowFinalQuiz(false);
                  }}
                  className="group transition-all duration-300 hover:bg-violet-100 hover:text-violet-700"
                >
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Practice
                </Button>
                {allLessonsCompleted && (
                  <Button
                    variant={showFinalQuiz ? "default" : "outline"}
                    onClick={() => {
                      setShowSimulator(false);
                      setShowFinalQuiz(true);
                    }}
                    className="group transition-all duration-300 hover:bg-violet-100 hover:text-violet-700"
                  >
                    <GraduationCap className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Final Quiz
                  </Button>
                )}
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsSignedIn(false)}
                className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
              >
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