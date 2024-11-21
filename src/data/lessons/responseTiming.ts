import { Lesson } from "../types";

export const responseTimingLessonData: Lesson = {
  id: 3,
  title: "Response Timing & Urgency",
  description: "Understand when and how quickly to respond to different types of emails",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Understanding Email Response Timing",
      text: "Proper email response timing is crucial for professional communication:\n\n1. Standard Response Times\n- Urgent matters: Within 2-4 hours\n- Standard business requests: Within 24 hours\n- Non-urgent matters: Within 48 hours\n- FYI emails: Within 72 hours or no response needed\n\n2. Factors Affecting Response Time\n- Sender's position and relationship\n- Time zones and working hours\n- Email complexity and requirements\n- Current workload and priorities\n- Organization's communication policies"
    },
    {
      title: "Assessing Email Urgency",
      text: "Learn to evaluate email urgency effectively:\n\n1. Urgency Indicators\n- Subject line markers (Urgent, ASAP, Action Required)\n- Sender's position and authority\n- Deadline mentions\n- Project impact\n- Business criticality\n\n2. Priority Assessment Criteria\n- Impact on business operations\n- Financial implications\n- Client/stakeholder relationships\n- Legal or compliance requirements\n- Team dependencies\n\n3. Urgency vs. Importance Matrix\n- Urgent and Important: Immediate action\n- Important but Not Urgent: Scheduled action\n- Urgent but Not Important: Delegation\n- Neither Urgent nor Important: Later review"
    },
    {
      title: "Managing Response Expectations",
      text: "Set and manage email response expectations professionally:\n\n1. Communication Policies\n- Clear response time guidelines\n- Out-of-office procedures\n- Emergency contact protocols\n- Delegation processes\n\n2. Expectation Management Techniques\n- Acknowledgment emails\n- Progress updates\n- Delay notifications\n- Alternative contact methods\n\n3. Workload Management\n- Email scheduling\n- Priority queuing\n- Task delegation\n- Time blocking\n\n4. Professional Boundaries\n- Working hours respect\n- Weekend communication policies\n- Vacation response protocols\n- Emergency procedures"
    },
    {
      title: "Out-of-Office Management",
      text: "Effective out-of-office communication:\n\n1. Auto-Reply Content\n- Absence duration\n- Return date\n- Alternative contacts\n- Emergency procedures\n\n2. Preparation Steps\n- Team notification\n- Task delegation\n- Calendar updates\n- Contact information\n\n3. Return Protocol\n- Email categorization\n- Priority response order\n- Follow-up system\n- Team updates\n\n4. Emergency Handling\n- Designated contacts\n- Escalation procedures\n- Critical issue protocol\n- Communication channels"
    },
    {
      title: "Response Timing Examples",
      text: "Example 1: Urgent Client Request\n\nReceived: 10:00 AM\nSubject: URGENT: System Downtime Issue\n\nImmediate Actions:\n1. Send acknowledgment within 15 minutes\n2. Assess situation within 1 hour\n3. Provide status update within 2 hours\n4. Resolution or escalation within 4 hours\n\nExample 2: Standard Project Update\n\nReceived: Monday 3:00 PM\nSubject: Weekly Project Status Update\n\nResponse Timeline:\n1. Review within 24 hours\n2. Gather necessary information\n3. Respond with complete update\n4. Schedule follow-up if needed\n\nExample 3: Non-Urgent Information Request\n\nReceived: Friday 4:00 PM\nSubject: Information for Next Month's Planning\n\nHandling Approach:\n1. Acknowledge receipt if weekend delay\n2. Process during next business day\n3. Respond within 48 hours\n4. Include comprehensive information"
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
    },
    {
      id: 3,
      text: "Which factor is most important when assessing email urgency?",
      options: [
        "Length of the email",
        "Time of day received",
        "Impact on business operations",
        "Number of recipients"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      text: "What should be included in an out-of-office auto-reply?",
      options: [
        "Personal contact information",
        "Detailed reason for absence",
        "Return date and alternative contacts",
        "Social media handles"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "How should you handle non-urgent emails received on Friday afternoon?",
      options: [
        "Respond immediately regardless of importance",
        "Ignore until Monday morning",
        "Acknowledge receipt if weekend delay expected",
        "Forward to colleagues"
      ],
      correctAnswer: 2
    }
  ]
};