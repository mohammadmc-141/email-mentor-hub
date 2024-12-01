import { Lesson } from "../types";

export const emailEtiquetteLessonData: Lesson = {
  id: 4,
  title: "Email Etiquette & Best Practices",
  description: "Learn essential email etiquette rules and best practices for professional communication",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Basic Principles of Email Etiquette",
      text: "1. Respect Time:\n- Keep emails short and to the point.\n\n2. Stay Professional:\n- Use polite and formal language.\n\n3. Cultural Awareness:\n- Be mindful of different customs, especially with international recipients.\n\n4. Follow Rules:\n- Stick to your company's email guidelines."
    },
    {
      title: "Key Parts of a Good Email",
      text: "1. Greeting and Closing:\n- Start with 'Dear [Name]' or 'Hello [Name]'\n- End with 'Best regards' or 'Sincerely'\n\n2. Professional Tone:\n- Avoid slang\n- Keep your message polite\n\n3. Clear Writing:\n- Be concise\n- Use simple language\n\n4. Neat Formatting:\n- Use short paragraphs\n- Utilize bullet points\n- Avoid cluttered text"
    },
    {
      title: "Common Courtesies in Emails",
      text: "1. Reply Promptly:\n- Acknowledge emails when needed\n- Set expectations for follow-up\n\n2. Out-of-Office Replies:\n- Set up auto-reply when unavailable\n- Include necessary details\n\n3. Follow-Up:\n- Politely follow up if no response received\n- Wait a reasonable time before following up"
    },
    {
      title: "Group Email Tips",
      text: "1. CC and BCC Usage:\n- CC: For people who need to stay informed\n- BCC: For large groups to protect privacy\n\n2. Reply All:\n- Only use when everyone needs to see your response\n\n3. Keep It Relevant:\n- Only include people who need the information"
    },
    {
      title: "Digital Professionalism",
      text: "1. Email Signatures:\n- Include name, job title, and contact info\n- Keep it clean and simple\n- Update when role or details change\n\n2. Attachments:\n- Use common formats (PDF, Word)\n- Keep file sizes manageable\n- Name files clearly (e.g., 'Project_Report_Nov2024.pdf')\n- Mention attachments in email body"
    },
    {
      title: "Example Professional Email",
      text: "Subject: Meeting Recap and Next Steps\n\nDear Team,\n\nThank you for attending today's meeting. Here's a summary of what we discussed and the next steps:\n\nKey Points:\n- Project timeline updates\n- Resource allocation changes\n\nNext Steps:\n- Review the attached document\n- Provide feedback by Friday\n\nPlease let me know if you have any questions.\n\nBest regards,\n[Your Name]\n[Your Position]"
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