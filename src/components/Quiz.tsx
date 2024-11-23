import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Lesson } from "@/data/types";

interface QuizProps {
  lesson: Lesson;
  onComplete: (lessonId: number, correctAnswers: number) => void;
}

export const Quiz = ({ lesson, onComplete }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const currentQuestion = lesson.questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      toast.success(currentQuestion.feedback || "Correct! Here's why: This answer best aligns with professional email practices.");
      setCorrectAnswers(prev => prev + 1);
    } else {
      toast.error(currentQuestion.incorrectFeedback || "Incorrect. Consider the professional implications of your choice.");
    }
    
    // Move to next question regardless of correct/incorrect answer
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      onComplete(lesson.id, correctAnswers + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Quiz - Question {currentQuestionIndex + 1}</CardTitle>
        <CardDescription>
          {currentQuestionIndex + 1} of {lesson.questions.length}
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