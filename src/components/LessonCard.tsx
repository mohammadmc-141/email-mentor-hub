import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  progress: number;
  isLocked?: boolean;
  onClick: () => void;
}

export function LessonCard({ title, description, progress, isLocked, onClick }: LessonCardProps) {
  return (
    <Card 
      className={`w-full transition-all duration-300 hover:shadow-lg ${isLocked ? 'opacity-75' : 'hover:-translate-y-1 cursor-pointer'}`}
      onClick={isLocked ? undefined : onClick}
    >
      <CardHeader className="relative">
        {isLocked && (
          <div className="absolute right-4 top-4">
            <Lock className="h-5 w-5 text-muted-foreground" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{progress}% Complete</span>
            {progress === 100 && <Badge variant="secondary">Completed</Badge>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}