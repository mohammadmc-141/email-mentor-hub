import { Lesson } from "./types";
import { professionalToneLessonData } from "./lessons/professionalTone";
import { emailStructureLessonData } from "./lessons/emailStructure";
import { responseTimingLessonData } from "./lessons/responseTiming";

export type { Lesson } from "./types";

export const INITIAL_LESSONS: Lesson[] = [
  professionalToneLessonData,
  emailStructureLessonData,
  responseTimingLessonData
];