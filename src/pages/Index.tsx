import { useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { EmailSimulator } from "@/components/EmailSimulator";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignIn } from "@/components/SignIn";

const INITIAL_LESSONS = [
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
      },
      {
        title: "Examples Comparison",
        text: "Unprofessional:\n'Hey! Need that report ASAP!!! Thx'\n\nProfessional:\n'Hello [Name],\n\nI hope this email finds you well. Could you please send me the report when possible? I would appreciate receiving it by [specific date/time].\n\nThank you for your help.\n\nBest regards,\n[Your name]'",
      }
    ]
  },
  {
    id: 2,
    title: "Email Structure & Formatting",
    description: "Master the art of structuring clear, readable emails",
    progress: 0,
    locked: true,
    content: [
      {
        title: "Basic Email Structure",
        text: "A well-structured email consists of:\n\n1. Subject Line: Clear and specific\n2. Greeting: Appropriate salutation\n3. Introduction: Purpose of the email\n4. Body: Main content in clear paragraphs\n5. Conclusion: Clear action items or next steps\n6. Signature: Professional closing"
      },
      {
        title: "Formatting Best Practices",
        text: "• Use short paragraphs (3-4 lines maximum)\n• Include white space between paragraphs\n• Use bullet points for lists\n• Bold important information sparingly\n• Keep sentences concise\n• Use proper spacing and alignment"
      },
      {
        title: "Subject Line Guidelines",
        text: "Good subject lines should be:\n\n• Specific and relevant\n• 5-7 words maximum\n• Action-oriented when needed\n• Searchable for future reference\n\nExample:\nPoor: 'Meeting'\nBetter: 'Marketing Strategy Meeting - Dec 15, 2pm'"
      },
      {
        title: "Email Body Organization",
        text: "1. Start with the main point\n2. Provide necessary context\n3. Detail specific requests or information\n4. End with clear next steps\n\nExample Structure:\n\nDear [Name],\n\nI hope this email finds you well. I'm writing to [main purpose].\n\n[Context and details]\n\n[Specific request or action items]\n\nPlease let me know if you have any questions.\n\nBest regards,\n[Your name]"
      }
    ]
  },
  {
    id: 3,
    title: "Response Timing & Urgency",
    description: "Understand when and how quickly to respond to different types of emails",
    progress: 0,
    locked: true,
    content: [
      {
        title: "Response Time Guidelines",
        text: "General response time expectations:\n\n• Urgent matters: Within 2-4 hours\n• Standard business requests: Within 24 hours\n• Non-urgent matters: Within 48 hours\n• FYI emails: Within 72 hours or no response needed"
      },
      {
        title: "Identifying Email Urgency",
        text: "Factors to consider:\n\n1. Sender's position and relationship\n2. Subject line indicators (e.g., 'Urgent', 'Action Required')\n3. Content and deadline mentions\n4. Project timeline impact\n5. Number of recipients (fewer usually means more urgent)"
      },
      {
        title: "Managing Response Expectations",
        text: "Best practices:\n\n• Set up an auto-reply when unavailable\n• Send acknowledgment emails for complex requests\n• Communicate delays proactively\n• Use 'urgent' flags responsibly\n• Consider time zones for international communication"
      },
      {
        title: "Out-of-Office Protocol",
        text: "When away:\n\n1. Set clear away dates\n2. Provide alternative contact\n3. Set expectations for response timing\n4. List emergency procedures\n5. Update calendar and team members\n\nExample:\n\nThank you for your email. I am out of the office from [date] to [date] with limited email access. For urgent matters, please contact [name] at [contact info]. I will respond to all other emails upon my return."
      }
    ]
  }
];

const Index = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [lessons, setLessons] = useState(INITIAL_LESSONS);

  const handleLessonClick = (lessonId: number) => {
    if (!lessons[lessonId - 1].locked) {
      setSelectedLesson(lessonId);
    } else {
      toast.info("Complete the previous lesson first!");
    }
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
  };

  const completeLesson = (lessonId: number) => {
    setLessons(prevLessons => {
      const newLessons = [...prevLessons];
      // Set current lesson to 100%
      newLessons[lessonId - 1].progress = 100;
      // Unlock next lesson if it exists
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
              <div className="flex gap-4">
                <Button 
                  onClick={() => {
                    completeLesson(selectedLesson);
                    setShowSimulator(true);
                    setSelectedLesson(null);
                    toast.success("Now try what you've learned in the simulator!");
                  }}
                  className="animate-fade-in"
                >
                  Complete Lesson & Practice
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    completeLesson(selectedLesson);
                    setSelectedLesson(null);
                  }}
                  className="animate-fade-in"
                >
                  Complete Lesson
                </Button>
              </div>
            </div>
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