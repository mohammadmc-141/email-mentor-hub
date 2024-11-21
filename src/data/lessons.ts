interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface LessonContent {
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

export const INITIAL_LESSONS: Lesson[] = [
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
    ],
    questions: [
      {
        id: 1,
        text: "Which of the following is most appropriate for a professional email?",
        options: [
          "Hey! Need that report ASAP!!!",
          "Dear Mr. Smith, I hope this email finds you well.",
          "yo, where's the report?",
          "hi can u send report pls"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "What should you avoid in professional emails?",
        options: [
          "Clear and concise language",
          "Proper greetings",
          "Emoticons and slang",
          "Formal closings"
        ],
        correctAnswer: 2
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
    ],
    questions: [
      {
        id: 1,
        text: "What is the recommended maximum length for email paragraphs?",
        options: [
          "1-2 lines",
          "3-4 lines",
          "7-8 lines",
          "10+ lines"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "What is the ideal length for a subject line?",
        options: [
          "1-2 words",
          "3-4 words",
          "5-7 words",
          "10+ words"
        ],
        correctAnswer: 2
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
    ],
    questions: [
      {
        id: 1,
        text: "How quickly should you respond to urgent business matters?",
        options: [
          "Within 2-4 hours",
          "Within 24 hours",
          "Within 48 hours",
          "Within 72 hours"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "What is the appropriate response time for standard business requests?",
        options: [
          "Immediately",
          "Within 2-4 hours",
          "Within 24 hours",
          "Within one week"
        ],
        correctAnswer: 2
      }
    ]
  }
];
