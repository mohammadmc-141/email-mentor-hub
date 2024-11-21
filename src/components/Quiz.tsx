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
  const [showFireworks, setShowFireworks] = useState(false);
  const currentQuestion = lesson.questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 2000);
      toast.success(currentQuestion.feedback || "Correct! Here's why: This answer best aligns with professional email practices.");
      setCorrectAnswers(prev => prev + 1);
    } else {
      toast.error(currentQuestion.incorrectFeedback || "Incorrect. Consider the professional implications of your choice.");
    }
    
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      onComplete(lesson.id, correctAnswers + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  return (
    <>
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-scale-in">
              <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-lg animate-ping" />
            </div>
            <div className="absolute animate-scale-in delay-100">
              <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg animate-ping" />
            </div>
            <div className="absolute animate-scale-in delay-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full shadow-lg animate-ping" />
            </div>
            <div className="absolute animate-scale-in delay-300">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg animate-ping" />
            </div>
          </div>
        </div>
      )}
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
    </>
  );
};