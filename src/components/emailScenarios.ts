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
        template: "Dear [Boss],\n\nThank you for your inquiry about the project status. I am personally overseeing the project and can confirm we will deliver the final version by next Friday, March 15th. Here's a brief breakdown of our timeline:\n\n- Quality assurance testing (2 days)\n- Final revisions (1 day)\n- Documentation completion (1 day)\n\nI am taking full responsibility for ensuring we meet these deadlines and maintain our quality standards.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Brief and Direct",
        template: "Hi [Boss],\n\nI am personally managing the project and can confirm delivery by next Friday, March 15th. All major features are complete, and we're in the final testing phase. I will ensure everything meets our quality standards within this timeline.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Status Report Style",
        template: "Hello [Boss],\n\nAs the project lead, I can provide the following status update:\n\n- Progress: 80% complete\n- Delivery Date: Friday, March 15th\n- Current Phase: Final testing\n- Quality Assurance: Personally overseeing\n\nI take full responsibility for meeting this timeline and maintaining our professional standards.\n\nBest regards,\nEmmanuel"
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
        template: "Dear [Boss],\n\nI understand the need to reschedule our 2 PM meeting and am happy to accommodate the change. I am flexible and available at the following times:\n\n- Today: 3:30 PM - 4:30 PM\n- Today: 4:45 PM - 5:30 PM\n- Tomorrow: 10 AM - 3 PM\n\nPlease let me know which time works best for you, and I'll promptly adjust my schedule accordingly.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Quick Response",
        template: "Hi [Boss],\n\nI completely understand and am flexible with rescheduling the 2 PM meeting. I'm available later today at 3:30 PM or 4:45 PM, and can promptly confirm any time that works better for you.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Detailed Availability",
        template: "Hello [Boss],\n\nI acknowledge your request to reschedule the 2 PM meeting and am flexible to accommodate. Here's my clear availability for the next two days:\n\nToday:\n- 3:30 PM - 5:30 PM\n\nTomorrow:\n- 10:00 AM - 3:00 PM\n\nPlease choose any time that suits your schedule, and I'll promptly confirm.\n\nBest regards,\nEmmanuel"
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
        template: "Dear [Boss],\n\nI take full responsibility for investigating the service delays reported by client XYZ. I have urgently looked into the matter and found these issues:\n\n1. System maintenance overlap with client requests\n2. Resource allocation gaps during peak hours\n\nI have already implemented these immediate solutions:\n- Rescheduled maintenance to off-peak hours\n- Added additional support staff\n- Implemented priority routing for XYZ\n\nI will personally monitor their service levels to prevent future delays.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Action-Oriented",
        template: "Hi [Boss],\n\nI take ownership of this situation and have urgently investigated XYZ's complaint. The delay was caused by our scheduled maintenance, and I've already implemented these solutions:\n\n1. Expedited their pending requests\n2. Assigned a dedicated support contact\n3. Created a prevention plan\n\nI will send a detailed report by EOD.\n\nRegards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Solution-Focused",
        template: "Hello [Boss],\n\nI've urgently investigated XYZ's complaint and take full responsibility for resolving this issue.\n\nRoot cause: Service queue overflow during system maintenance\n\nImmediate solutions implemented:\n- Priority status activated\n- Support team reinforced\n- Process optimization initiated\n\nExpect normal service levels within 24 hours.\n\nBest regards,\nEmmanuel"
      }
    ]
  }
];