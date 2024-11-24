export const scenarios = [
  {
    from: "boss@company.com",
    subject: "Urgent Project Update Required",
    message: "I need an immediate status update on the client project. We have a board meeting tomorrow morning and I need to present our progress. Please provide key milestones achieved and any potential roadblocks.",
    key_points: [
      "Address urgency",
      "Provide clear project status",
      "Highlight achievements",
      "Mention any challenges"
    ],
    reply_options: [
      {
        id: "1",
        label: "Detailed and Professional",
        template: "Dear [Boss],\n\nThank you for your request. Here's our current project status:\n\nKey Achievements:\n- Frontend development: 90% complete\n- Database integration: 100% complete\n- User testing: 75% complete\n\nPotential Challenges:\n- Minor delay in UI refinements due to client feedback\n- Expected resolution: End of this week\n\nWe remain on track for the final delivery date.\n\nBest regards,\n[Your name]",
        isCorrect: true,
        bossResponse: "Excellent update! This is exactly what I needed for the board meeting. Keep up the great work and please keep me posted on the UI refinements."
      },
      {
        id: "2",
        label: "Brief and Casual",
        template: "Hi boss,\n\nProject's going well! We've done most of the work and should finish soon. There are some small issues but nothing major.\n\nThanks,\n[Your name]",
        isCorrect: false,
        bossResponse: "This response is too vague. I need specific details for the board meeting. Please provide a more comprehensive update."
      },
      {
        id: "3",
        label: "Overly Technical",
        template: "Dear [Boss],\n\nRe: Project Status\n\nWe've completed 87.5% of all technical requirements including API endpoint integration, database normalization, and frontend component optimization. Current velocity metrics indicate...\n\nRegards,\n[Your name]",
        isCorrect: false,
        bossResponse: "While I appreciate the technical details, this is too complex for the board meeting. Please provide a more balanced update that everyone can understand."
      }
    ]
  },
  {
    from: "boss@company.com",
    subject: "Budget Overrun Explanation Needed",
    message: "I've noticed that we're 15% over budget on the marketing campaign. I need an explanation for this overrun and your plan to address it immediately.",
    key_points: [
      "Take responsibility",
      "Explain the situation clearly",
      "Provide solution",
      "Show cost control measures"
    ],
    reply_options: [
      {
        id: "1",
        label: "Defensive Response",
        template: "Dear [Boss],\n\nThe budget overrun wasn't our fault. The client kept changing requirements, and market prices increased unexpectedly.\n\nRegards,\n[Your name]",
        isCorrect: false,
        bossResponse: "I need to see accountability here. We must deal with this budget issue proactively."
      },
      {
        id: "2",
        label: "Professional and Solution-Oriented",
        template: "Dear [Boss],\n\nI acknowledge the budget overrun and take full responsibility. The additional costs were due to:\n1. Unexpected increase in digital ad rates (7%)\n2. Additional creative assets requested (8%)\n\nProposed solutions:\n- Reallocating resources from Q4 budget\n- Negotiating bulk rates with vendors\n- Implementing stricter approval process\n\nI will provide daily updates on our cost-saving measures.\n\nBest regards,\n[Your name]",
        isCorrect: true,
        bossResponse: "Thank you for taking responsibility. I appreciate your proposed solutions. Let's ensure we stay within budget moving forward."
      },
      {
        id: "3",
        label: "Vague Response",
        template: "Dear [Boss],\n\nYes, I noticed the budget issue. We'll try to spend less going forward and make sure it doesn't happen again.\n\nThanks,\n[Your name]",
        isCorrect: false,
        bossResponse: "This doesn't address the issue adequately. I need a detailed explanation and a plan to rectify the situation."
      }
    ]
  },
  {
    from: "boss@company.com",
    subject: "Team Conflict Resolution Required",
    message: "I've received complaints about tensions between the design and development teams. This is affecting our productivity. Please address this situation and report back with your action plan.",
    key_points: [
      "Show leadership",
      "Propose concrete solutions",
      "Maintain professional tone",
      "Demonstrate understanding"
    ],
    reply_options: [
      {
        id: "1",
        label: "Diplomatic and Structured",
        template: "Dear [Boss],\n\nI understand the severity of the situation and have developed the following action plan:\n\n1. Immediate Actions:\n- Scheduled joint team meeting for tomorrow\n- Created new collaboration guidelines\n\n2. Long-term Solutions:\n- Weekly sync meetings between teams\n- Cross-team training sessions\n- Clear communication channels\n\nI will personally oversee these changes and provide weekly progress reports.\n\nBest regards,\n[Your name]",
        isCorrect: true,
        bossResponse: "This is a solid plan. I’m pleased to see proactive leadership on this issue. Please keep me updated on the progress."
      },
      {
        id: "2",
        label: "Dismissive Approach",
        template: "Dear [Boss],\n\nI think the teams are just having a small disagreement. These things happen, and they'll probably work it out themselves.\n\nRegards,\n[Your name]",
        isCorrect: false,
        bossResponse: "This is not a trivial matter. We need to take team conflicts seriously and address them promptly."
      },
      {
        id: "3",
        label: "Taking Sides",
        template: "Dear [Boss],\n\nI've looked into it and the design team is being unreasonable with their demands. I suggest we tell them to be more flexible.\n\nBest regards,\n[Your name]",
        isCorrect: false,
        bossResponse: "This response is biased. We must understand all perspectives and work towards a resolution collectively."
      }
    ]
  }
];
