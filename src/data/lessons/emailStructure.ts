import { Lesson } from "../types";

export const emailStructureLessonData: Lesson = {
  id: 2,
  title: "Email Structure & Formatting",
  description: "Master the art of structuring clear, readable emails",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Comprehensive Email Structure Guide",
      text: "A well-structured email is essential for effective communication. Each component serves a specific purpose:\n\n1. Subject Line\n- Clear and specific (5-7 words)\n- Action-oriented when necessary\n- Searchable keywords\n- Indicates priority level appropriately\n\n2. Greeting\n- Formal: 'Dear Mr./Ms. [Last Name]'\n- Semi-formal: 'Hello [First Name]'\n- Group: 'Dear Team/Colleagues'\n- Consider cultural norms and hierarchy\n\n3. Opening Paragraph\n- Clear purpose statement\n- Context if necessary\n- Reference to previous communications\n- Acknowledgment of time/situation"
    },
    {
      title: "Advanced Formatting Techniques",
      text: "Proper formatting enhances readability and professionalism:\n\n1. Paragraph Structure\n- One main idea per paragraph\n- 3-4 lines maximum per paragraph\n- Clear transition between paragraphs\n- Logical flow of information\n\n2. Visual Elements\n- Consistent font and size\n- Strategic use of bold for emphasis\n- Bullet points for lists\n- Appropriate spacing\n\n3. Mobile Optimization\n- Short paragraphs for mobile viewing\n- Simple formatting that translates well\n- Limited use of tables or complex elements\n- Testing on different devices\n\n4. Attachment Handling\n- Clear references to attachments\n- Proper naming conventions\n- Size considerations\n- Alternative sharing methods when needed"
    },
    {
      title: "Email Body Organization Strategies",
      text: "Organize your email content effectively:\n\n1. Information Hierarchy\n- Most important information first\n- Supporting details follow\n- Clear action items\n- Deadline information\n\n2. Content Sections\n- Background information\n- Current situation\n- Required actions\n- Timeline and deadlines\n- Available resources\n\n3. Action Items\n- Clearly marked requests\n- Specific deadlines\n- Assigned responsibilities\n- Follow-up expectations\n\n4. Supporting Information\n- Relevant background\n- Referenced documents\n- Contact information\n- Additional resources"
    },
    {
      title: "Professional Closing Techniques",
      text: "End your emails effectively:\n\n1. Closing Statements\n- Clear next steps\n- Expression of gratitude\n- Offer of assistance\n- Follow-up expectations\n\n2. Signature Options\n- Formal: 'Sincerely,' 'Best regards,'\n- Semi-formal: 'Best,' 'Kind regards,'\n- Include relevant contact information\n- Professional credentials when appropriate\n\n3. Additional Elements\n- Confidentiality notices\n- Company disclaimers\n- Social media links\n- Environmental messages"
    },
    {
      title: "Email Templates and Examples",
      text: "Example 1: Project Update Email\n\nSubject: Q4 Marketing Campaign Update - Action Required by Dec 15\n\nDear Marketing Team,\n\nI hope this email finds you well. I'm writing to provide an update on our Q4 marketing campaign and outline next steps.\n\nCurrent Status:\n- Website updates: 90% complete\n- Social media content: Scheduled through December\n- Email sequences: Under review\n\nRequired Actions:\n1. Review attached content calendar\n2. Submit feedback by December 15\n3. Schedule team meeting for final approval\n\nPlease let me know if you have any questions.\n\nBest regards,\n[Name]\n\nExample 2: Client Follow-up Email\n\nSubject: Thank You for Meeting - Next Steps for Project Implementation\n\nDear [Client Name],\n\nThank you for taking the time to meet with us yesterday. This email summarizes our discussion and outlines the next steps.\n\nKey Points Discussed:\n- Project timeline\n- Budget considerations\n- Resource allocation\n\nNext Steps:\n1. [Action item]\n2. [Action item]\n3. [Action item]\n\nI'll send a detailed proposal by [date].\n\nBest regards,\n[Name]"
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
    },
    {
      id: 3,
      text: "Which element should come first in a professional email body?",
      options: [
        "Detailed background information",
        "Personal greetings and small talk",
        "The most important information or main purpose",
        "Supporting documentation"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      text: "What is the best practice for handling attachments in emails?",
      options: [
        "Always compress files regardless of size",
        "Never mention attachments in the email body",
        "Clearly reference attachments and use proper naming conventions",
        "Send multiple emails with single attachments"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "Which closing is most appropriate for a formal business email?",
      options: [
        "Cheers!",
        "Best regards,",
        "See ya!",
        "Thanks!"
      ],
      correctAnswer: 1
    }
  ]
};