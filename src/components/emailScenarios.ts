export const scenarios = [
  {
    from: "boss@company.com",
    subject: "Project Deadline Update",
    message: "I need an update on the current project status. When can you deliver the final version?",
    key_points: ["Be specific about timeline", "Show accountability", "Maintain professional tone"],
    reply_options: [
      {
        id: "1",
        label: "Professional and Detailed",
        template: "Dear [Boss],\n\nI am taking full responsibility for the project timeline and can specifically confirm we will deliver the final version by next Friday, March 15th. I am maintaining a professional approach to ensure all deliverables meet our quality standards.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Brief and Direct",
        template: "Dear [Boss],\n\nAs the accountable project lead, I can specifically confirm delivery by next Friday, March 15th. I am maintaining professional oversight to ensure we meet all quality standards within this timeline.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Status Report Style",
        template: "Dear [Boss],\n\nI am personally accountable for the project and can provide a specific timeline: delivery will be completed by Friday, March 15th. I am maintaining professional management of all aspects to ensure quality standards are met.\n\nBest regards,\nEmmanuel"
      }
    ]
  },
  {
    from: "boss@company.com",
    subject: "Meeting Reschedule Request",
    message: "Something urgent came up. Can we move our 2 PM meeting today to another time?",
    key_points: ["Show flexibility", "Provide clear availability", "Acknowledge the request promptly"],
    reply_options: [
      {
        id: "1",
        label: "Flexible and Professional",
        template: "Dear [Boss],\n\nI promptly acknowledge your request to reschedule and am completely flexible to accommodate the change. I have clear availability at the following times:\n- Today: 3:30 PM - 5:30 PM\n- Tomorrow: 10 AM - 3 PM\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Quick Response",
        template: "Dear [Boss],\n\nI promptly acknowledge your request and am flexible with rescheduling. My clear availability is:\n- Today: 3:30 PM - 5:30 PM\n- Tomorrow: Any time between 10 AM - 3 PM\n\nBest regards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Detailed Availability",
        template: "Dear [Boss],\n\nI promptly acknowledge your rescheduling request and am flexible to accommodate. Here is my clear availability:\n- Today: 3:30 PM - 5:30 PM\n- Tomorrow: 10:00 AM - 3:00 PM\n\nBest regards,\nEmmanuel"
      }
    ]
  },
  {
    from: "boss@company.com",
    subject: "Client Complaint Follow-up",
    message: "We received a complaint from client XYZ about service delays. Please investigate and respond to me with your findings.",
    key_points: ["Take responsibility", "Provide solution", "Show urgency"],
    reply_options: [
      {
        id: "1",
        label: "Comprehensive Response",
        template: "Dear [Boss],\n\nI take full responsibility for investigating the service delays. I have urgently implemented these immediate solutions:\n- Rescheduled maintenance to off-peak hours\n- Added additional support staff\n- Created priority routing for XYZ\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Action-Oriented",
        template: "Dear [Boss],\n\nI take full responsibility for this situation and have urgently addressed it with these solutions:\n- Expedited pending requests\n- Assigned dedicated support\n- Implemented prevention measures\n\nBest regards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Solution-Focused",
        template: "Dear [Boss],\n\nI take complete responsibility and have urgently implemented these solutions:\n- Priority status activated\n- Support team reinforced\n- Process optimization initiated\n\nBest regards,\nEmmanuel"
      }
    ]
  }
];