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
      text: "What is the most effective strategy for implementing email automation in an enterprise environment?",
      options: [
        "Basic auto-replies",
        "Comprehensive workflow automation with intelligent routing, priority handling, and integration with business processes",
        "Template system only",
        "Manual filtering"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "How should you optimize email workflow automation for complex business processes?",
      options: [
        "Standard filters",
        "AI-powered workflow system with custom rules, integration APIs, and performance analytics",
        "Basic automation",
        "Manual processing"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the most sophisticated approach to managing email communications across multiple business units?",
      options: [
        "Centralized system",
        "Distributed automation framework with unit-specific workflows, cross-functional integration, and unified reporting",
        "Separate systems",
        "Manual coordination"
      ],
      correctAnswer: 1
    }
  ]
};
