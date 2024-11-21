import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { FINAL_QUIZ_QUESTIONS } from "@/data/finalQuiz";

export const FinalQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = FINAL_QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = FINAL_QUIZ_QUESTIONS.length;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      toast.success(currentQuestion.feedback || "Correct!");
      setCorrectAnswers(prev => prev + 1);
    } else {
      toast.error("Incorrect. Consider reviewing the material.");
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      const score = ((correctAnswers + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)) / totalQuestions) * 100;
      setQuizCompleted(true);
      
      if (score >= 60) {
        toast.success(`Congratulations! You passed with ${score.toFixed(1)}%`);
      } else {
        toast.error(`You scored ${score.toFixed(1)}%. 60% required to pass. Try again!`);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Final Assessment</CardTitle>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
        </CardHeader>
        <CardContent>
          {!quizCompleted ? (
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
                {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold">
                Quiz Completed!
              </h3>
              <p>
                You got {correctAnswers} out of {totalQuestions} questions correct
                ({((correctAnswers / totalQuestions) * 100).toFixed(1)}%)
              </p>
              <Button onClick={resetQuiz}>
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};