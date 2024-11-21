import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen } from "lucide-react";
import { toast } from "sonner";

const LESSONS = [
  {
    id: 1,
    title: "Professional Tone & Language",
    description: "Learn how to write emails that strike the perfect professional tone",
    progress: 0,
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container py-6">
          <h1 className="text-3xl font-bold text-primary">Email Etiquette Training</h1>
          <p className="mt-2 text-muted-foreground">Master the art of professional email communication</p>
        </div>
      </header>

      <main className="container py-8 animate-fade-in">
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
                onClick={() => toast.info("Lesson viewer coming soon!")}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;