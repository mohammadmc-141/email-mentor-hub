import { Lesson } from "../types";

export const responseTimingLessonData: Lesson = {
  id: 3,
  title: "Response Timing & Urgency",
  description: "Understand when and how quickly to respond to different types of emails",
  progress: 0,
  locked: true,
  content: [
    {
      title: "1. How Quickly Should You Respond?",
      text: "Urgent Matters: Within 2-4 hours.\nStandard Requests: Within 24 hours.\nNon-Urgent Matters: Within 48 hours.\nFYI (For Your Information): Within 72 hours, or no reply needed unless asked."
    },
    {
      title: "2. How to Decide If an Email Is Urgent",
      text: "Look for clues in the email to decide if you need to act fast:\n\nSubject Line: Words like Urgent, ASAP, or Action Required mean quick attention is needed.\nSender: If it's your boss or a client, prioritize it.\nDeadlines: Emails mentioning deadlines are more urgent.\nImpact: If the email affects a project or business operations, it's important."
    },
    {
      title: "3. Urgency vs. Importance",
      text: "Not all urgent emails are important. Use this matrix to decide:\n\nUrgent\tNot Urgent\nImportant\tAct immediately.\nNot Important\tDelegate to someone else."
    },
    {
      title: "4. Managing Expectations",
      text: "It's okay if you can't reply right away, but keep people informed:\n\nAcknowledgment Emails: Send a quick note like, \"Got it! I'll get back to you by [date/time].\"\nProgress Updates: If something takes longer, update the sender.\nDelays: Let people know if there's a delay and why."
    },
    {
      title: "5. Out-of-Office Replies",
      text: "If you're away, set an auto-reply to let people know:\n\nWhat to Include:\nHow long you'll be gone.\nWhen you'll be back.\nWho to contact in your absence.\n\nExample:\n\"Thank you for your email. I am out of the office from [date] to [date] and will respond as soon as possible after my return. For urgent matters, please contact [Name] at [email/phone].\""
    },
    {
      title: "6. Examples of Handling Different Emails",
      text: "Urgent Client Request\nReceived: 10:00 AM\nSubject: URGENT: System Downtime Issue\n\nWhat to Do:\nAcknowledge within 15 minutes.\nAssess the problem within 1 hour.\nProvide an update within 2 hours.\nResolve or escalate within 4 hours.\n\nStandard Project Update\nReceived: Monday, 3:00 PM\nSubject: Weekly Project Status Update\n\nWhat to Do:\nReview the email within 24 hours.\nGather any necessary info.\nRespond with an update.\nSchedule follow-ups if needed.\n\nNon-Urgent Information Request\nReceived: Friday, 4:00 PM\nSubject: Information for Next Month's Planning\n\nWhat to Do:\nAcknowledge receipt if you won't respond until after the weekend.\nProcess it during the next business day.\nRespond within 48 hours with the needed information."
    }
  ],
  questions: [
    {
      id: 1,
      text: "In a global enterprise environment with multiple time zones, what is the most effective strategy for managing urgent communications?",
      options: [
        "Respond immediately regardless of time",
        "Implement a comprehensive follow-the-sun protocol with escalation procedures and clear handoff processes",
        "Delegate to local teams",
        "Set standard response times"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "How should you handle competing priorities when managing responses to multiple high-stakes stakeholders?",
      options: [
        "First-come, first-served basis",
        "Implement a strategic response matrix considering business impact, urgency, and relationship value",
        "Delegate to team members",
        "Quick responses to all"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the most effective approach for managing email communication during critical project phases?",
      options: [
        "Constant availability",
        "Structured communication protocol with designated response windows, escalation paths, and backup systems",
        "Automated responses",
        "Delegation to project team"
      ],
      correctAnswer: 1
    }
  ]
};