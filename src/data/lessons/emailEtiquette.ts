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
      text: "When is it appropriate to use 'Reply All'?",
      options: [
        "Always, to keep everyone informed",
        "When all recipients need to see your response",
        "Never, to avoid cluttering inboxes",
        "Only when responding to your boss"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "What should you do if you need more time to respond to an email?",
      options: [
        "Ignore the email until you can respond fully",
        "Send a quick acknowledgment with an estimated response time",
        "Forward it to someone else",
        "Respond immediately with incomplete information"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Which file naming convention is most appropriate for email attachments?",
      options: [
        "doc1.pdf",
        "Project_Report_Final_v2_2024.pdf",
        "final_final_really_final.pdf",
        "123.pdf"
      ],
      correctAnswer: 1
    }
  ]
};