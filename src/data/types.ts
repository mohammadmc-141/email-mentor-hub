export interface LessonContent {
  title: string;
  text: string;
}

export interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
  feedback?: string;
  incorrectFeedback?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  progress: number;
  locked: boolean;
  content?: LessonContent[];
  questions: Question[];
}