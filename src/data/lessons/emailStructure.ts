import { Lesson } from "../types";

export const emailStructureLessonData: Lesson = {
  id: 2,
  title: "Email Structure & Formatting",
  description: "Master the art of structuring clear, readable emails",
  progress: 0,
  locked: true,
  content: [
    {
      title: "1. Subject Line",
      text: "The subject line tells the reader what your email is about before they even open it.\n\nTips:\n- Be short but specific (5-7 words).\n- Use action words if needed (e.g., \"Action Required: Submit Report\").\n- Include keywords to make it easy to find later.\n\nExample:\n\"Meeting Follow-Up: Key Notes and Next Steps\""
    },
    {
      title: "2. Greeting",
      text: "How you address the person sets the tone for the email.\n\nFormal: Use for teachers, bosses, or clients.\nExample: \"Dear Ms. Jones,\"\n\nSemi-formal: Use for colleagues or people you know a bit.\nExample: \"Hello Alex,\"\n\nGroups:\nExample: \"Dear Team,\" or \"Dear Colleagues,\""
    },
    {
      title: "3. Opening Paragraph",
      text: "Start by saying why you're writing. Give context if needed and acknowledge previous conversations if relevant.\n\nTip: Be polite and get to the point.\n\nExample:\n\"I hope this email finds you well. I'm writing to follow up on our meeting regarding the new project timeline.\""
    },
    {
      title: "4. Email Body (Main Content)",
      text: "Organize your message into sections and keep paragraphs short (3-4 lines).\n\nStructure:\n- Start with the most important information.\n- Use bullet points for lists to keep it readable.\n- Clearly highlight action items (what needs to be done).\n\nExample:\nCurrent Status:\n- The report draft is complete.\n- The design team is finalizing the visuals.\n\nNext Steps:\n- Review the attached draft by Friday.\n- Provide feedback through email.\n- Schedule a follow-up meeting next Monday."
    },
    {
      title: "5. Closing Paragraph",
      text: "End the email with next steps, a thank you, or an offer to help.\n\nTip: Mention deadlines and offer assistance if appropriate.\n\nExample:\n\"Thank you for your attention to this. Please feel free to reach out if you have any questions. I look forward to your feedback by Friday.\""
    },
    {
      title: "6. Closing and Signature",
      text: "Use a polite closing line, followed by your name and contact info if needed.\n\nFormal Closings:\n- \"Sincerely,\"\n- \"Best regards,\"\n\nSemi-formal Closings:\n- \"Best,\"\n- \"Kind regards,\"\n\nExample:\nBest regards,\n[Your Name]\n[Your Position]\n[Your Contact Info]"
    },
    {
      title: "Extra Tips for a Great Email",
      text: "Formatting:\n- Use bold text for important points.\n- Keep fonts and spacing consistent.\n- Avoid fancy or hard-to-read fonts.\n\nAttachments:\n- Mention the attachment in your email.\n- Name your file something clear, like \"Project_Plan_November2024.pdf.\"\n\nMobile-Friendly:\n- Keep paragraphs short so they're easy to read on a phone."
    },
    {
      title: "Example Email Templates",
      text: "Project Update Email\nSubject: Project Status Update – Action Required by Dec 10\n\nDear Team,\n\nI wanted to provide a quick update on the project and outline next steps.\n\nCurrent Progress:\n- Research phase: Complete.\n- Design phase: 75% done.\n- Testing: Scheduled for next week.\n\nNext Steps:\n- Review the attached design mockups.\n- Share feedback by Dec 10.\n- Join the team meeting on Dec 12 to finalize plans.\n\nThank you for your efforts so far. Let me know if you have any questions.\n\nBest regards,\n[Your Name]\n\n---\n\nClient Follow-Up Email\nSubject: Thank You for Meeting – Next Steps\n\nDear [Client Name],\n\nThank you for meeting with us yesterday. Below is a summary of our discussion and the next steps.\n\nKey Points:\n- Budget review.\n- Timeline adjustments.\n- Resource allocation.\n\nNext Steps:\n- Finalize the timeline by next week.\n- Review the attached proposal.\n- Schedule a follow-up call by Dec 15.\n\nPlease let me know if you need any additional information.\n\nKind regards,\n[Your Name]"
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