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
      text: "When composing a complex project proposal email, which structural approach maximizes effectiveness?",
      options: [
        "Single paragraph with all information",
        "Hierarchical structure with executive summary, detailed sections, and clear action items",
        "Multiple short emails for different aspects",
        "Bullet points only"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "In a multinational business context, what is the most effective subject line structure?",
      options: [
        "Brief and general",
        "Project code - Action Required - Deadline - Key Topic [Classification]",
        "Detailed description of content",
        "Priority level indicator only"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "How should you structure an email addressing multiple complex issues with various stakeholders?",
      options: [
        "Separate emails for each issue",
        "One comprehensive email with clear section breaks, stakeholder-specific action items, and a summary matrix",
        "Brief overview with attachments",
        "Multiple CCs with specific instructions"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "What is the most effective way to structure negative feedback in a professional email?",
      options: [
        "Direct criticism with examples",
        "Sandwich method with specific improvements",
        "Structured analysis with context, impact assessment, specific examples, and constructive improvement plan",
        "Brief overview of issues"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "When implementing an email template system, which approach is most effective for maintaining consistency while allowing flexibility?",
      options: [
        "Rigid templates for all communications",
        "Modular template system with customizable components based on communication type and audience",
        "Basic guidelines only",
        "Separate templates for each department"
      ],
      correctAnswer: 1
    }
  ]
};
