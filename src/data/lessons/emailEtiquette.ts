import { Lesson } from "../types";

export const emailEtiquetteLessonData: Lesson = {
  id: 4,
  title: "Email Etiquette & Best Practices",
  description: "Learn essential email etiquette rules and best practices for professional communication",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Understanding Email Etiquette",
      text: "Email etiquette encompasses the principles and guidelines for professional email communication:\n\n1. Basic Principles\n- Respect recipient's time\n- Maintain professionalism\n- Consider cultural differences\n- Follow organizational guidelines\n\n2. Key Elements\n- Appropriate greetings and closings\n- Professional tone and language\n- Clear and concise writing\n- Proper formatting and presentation"
    },
    {
      title: "Common Courtesies",
      text: "Professional email communication requires attention to courtesy:\n\n1. Response Expectations\n- Acknowledge receipt when appropriate\n- Set realistic response timeframes\n- Use auto-replies when unavailable\n- Follow up appropriately\n\n2. Group Email Etiquette\n- Use CC and BCC appropriately\n- Consider 'Reply All' necessity\n- Maintain distribution list relevance\n- Respect chain of command"
    },
    {
      title: "Digital Professionalism",
      text: "Maintain professional standards in digital communication:\n\n1. Email Signature\n- Include essential contact information\n- Keep formatting consistent\n- Follow company guidelines\n- Update when necessary\n\n2. File Attachments\n- Use appropriate file formats\n- Consider file size limitations\n- Provide clear file names\n- Mention attachments in the email body"
    }
  ],

  questions: [
    {
      id: 1,
      text: "In a situation involving conflicting stakeholder interests, what is the most appropriate email etiquette approach?",
      options: [
        "Copy all parties for transparency",
        "Implement a strategic communication plan with separate targeted messages and careful stakeholder management",
        "Maintain minimal communication",
        "Use group emails only"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "How should you handle sensitive personnel matters in email communications?",
      options: [
        "Brief, direct messages",
        "Comprehensive documentation with appropriate confidentiality measures, legal considerations, and clear action plans",
        "Verbal communication only",
        "Standard HR templates"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the most effective approach for managing email threads with multiple decision-makers?",
      options: [
        "Separate emails to each person",
        "Structured thread management with clear decision points, stakeholder roles, and action tracking",
        "Group emails only",
        "Minimal communication"
      ],
      correctAnswer: 1
    }
  ]
};
