import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { SignIn } from "@/components/SignIn";
import { INITIAL_LESSONS, type Lesson } from "@/data/lessons";
import { Quiz } from "@/components/Quiz";
import { LessonContent } from "@/components/LessonContent";

const Index = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [lessons, setLessons] = useState(INITIAL_LESSONS);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLessonClick = (lessonId: number) => {
    if (!lessons[lessonId - 1].locked) {
      setSelectedLesson(lessonId);
      setShowQuiz(false);
    } else {
      toast.info("Complete the previous lesson first!");
    }
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
    setShowQuiz(false);
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
    setShowQuiz(false);
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <SignIn onSignIn={() => setIsSignedIn(true)} />
      </div>
    );
  }

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
              <Quiz 
                lesson={lessons[selectedLesson - 1]} 
                onComplete={completeLesson}
              />
            ) : (
              <>
                <LessonContent lesson={lessons[selectedLesson - 1]} />
                <Button onClick={() => setShowQuiz(true)} className="animate-fade-in">
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