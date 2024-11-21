import { Lesson } from "../types";

export const emailAutomationLessonData: Lesson = {
  id: 6,
  title: "Email Automation & Efficiency",
  description: "Learn to use email automation tools and improve productivity",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Email Automation Basics",
      text: "Understanding email automation fundamentals:\n\n1. Email Filters\n- Creating effective filters\n- Organizing incoming mail\n- Priority management\n- Folder structure\n\n2. Template Usage\n- Creating templates\n- Customization options\n- Appropriate scenarios\n- Maintenance and updates"
    },
    {
      title: "Productivity Tools",
      text: "Leveraging email productivity tools:\n\n1. Email Client Features\n- Calendar integration\n- Task management\n- Contact organization\n- Follow-up reminders\n\n2. Third-party Tools\n- Email scheduling\n- Mass email management\n- Analytics and tracking\n- Integration capabilities"
    },
    {
      title: "Workflow Optimization",
      text: "Optimizing email workflows:\n\n1. Time Management\n- Email scheduling\n- Batch processing\n- Response automation\n- Priority handling\n\n2. Organization Systems\n- Inbox zero methodology\n- Filing systems\n- Archive strategies\n- Search optimization"
    }
  ],
  questions: [
    {
      id: 1,
      text: "What is the primary benefit of email templates?",
      options: [
        "They make emails longer",
        "They save time and ensure consistency",
        "They impress recipients",
        "They increase email volume"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which email organization system is most effective?",
      options: [
        "Keeping all emails in the inbox",
        "Creating a logical folder structure and using filters",
        "Deleting all emails immediately",
        "Printing important emails"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the best practice for email batch processing?",
      options: [
        "Checking emails constantly throughout the day",
        "Setting specific times for email processing",
        "Responding to emails as they arrive",
        "Delegating all email responses"
      ],
      correctAnswer: 1
    }
  ]
};