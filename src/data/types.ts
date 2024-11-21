export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface LessonContent {
  title: string;
  text: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  progress: number;
  locked?: boolean;
  content: LessonContent[];
  questions: Question[];
}