import { professionalToneLessonData } from "./lessons/professionalTone";
import { emailStructureLessonData } from "./lessons/emailStructure";
import { responseTimingLessonData } from "./lessons/responseTiming";
import { emailEtiquetteLessonData } from "./lessons/emailEtiquette";
import { emailSecurityLessonData } from "./lessons/emailSecurity";
import { emailAutomationLessonData } from "./lessons/emailAutomation";

export type { Lesson } from "./types";

export const INITIAL_LESSONS: Lesson[] = [
  professionalToneLessonData,
  emailStructureLessonData,
  responseTimingLessonData,
  emailEtiquetteLessonData,
  emailSecurityLessonData,
  emailAutomationLessonData
];