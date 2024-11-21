import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lesson } from "@/data/types";

interface LessonContentProps {
  lesson: Lesson;
}

export const LessonContent = ({ lesson }: LessonContentProps) => (
  <div className="grid gap-6">
    {lesson.content?.map((section, index) => (
      <Card key={index} className="animate-fade-in">
        <CardHeader>
          <CardTitle>{section.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{section.text}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);