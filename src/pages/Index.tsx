import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LESSONS = [
  {
    id: 1,
    title: "Professional Tone & Language",
    description: "Learn how to write emails that strike the perfect professional tone",
    progress: 0,
    content: [
      {
        title: "Understanding Professional Tone",
        text: "Professional tone in emails is about finding the right balance between being formal and approachable. Avoid using slang, emoticons, or overly casual language.",
      },
      {
        title: "Key Elements",
        text: "1. Clear and concise language\n2. Respectful and courteous tone\n3. Proper greetings and closings\n4. Appropriate level of formality",
      },
      {
        title: "Common Mistakes to Avoid",
        text: "• Using informal abbreviations (e.g., 'thx', 'asap')\n• Writing in all caps\n• Being too casual or too formal\n• Including emotional language",
      }
    ]
  },
  {
    id: 2,
    title: "Email Structure & Formatting",
    description: "Master the art of structuring clear, readable emails",
    progress: 0,
    locked: true,
  },
  {
    id: 3,
    title: "Response Timing & Urgency",
    description: "Understand when and how quickly to respond to different types of emails",
    progress: 0,
    locked: true,
  },
];

const Index = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const handleLessonClick = (lessonId: number) => {
    if (!LESSONS[lessonId - 1].locked) {
      setSelectedLesson(lessonId);
    } else {
      toast.info("Complete the previous lesson first!");
    }
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
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
            <div className="grid gap-6">
              {LESSONS[selectedLesson - 1].content?.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-line">{section.text}</p>
                  </CardContent>
                </Card>
              ))}
              <Button 
                onClick={() => {
                  setShowSimulator(true);
                  setSelectedLesson(null);
                  toast.success("Now try what you've learned in the simulator!");
                }}
              >
                Practice in Simulator
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-end space-x-4 mb-8">
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

            {showSimulator ? (
              <EmailSimulator />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {LESSONS.map((lesson) => (
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