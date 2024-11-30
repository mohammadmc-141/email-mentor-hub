import { Lesson } from "../types";

export const professionalToneLessonData: Lesson = {
  id: 1,
  title: "Professional Tone & Language",
  description: "Learn how to write emails that strike the perfect professional tone",
  progress: 0,
  locked: false,
  content: [
    {
      title: "Be Formal, but Not Too Stiff",
      text: "Think of a balance between talking to a teacher and talking to a friend. You need to sound respectful but also approachable.\n\nTip: Use words like \"Dear\" and \"Best regards\" instead of \"Hey\" or \"See ya!\"\nExample: \"Dear Mr. Smith\" sounds more professional than \"Yo, Mr. Smith.\""
    },
    {
      title: "Keep It Simple and Clear",
      text: "Say exactly what you mean without extra fluff. Imagine you're giving directions: short and sweet.\n\nTip: Focus on one main idea per paragraph.\nExample: Instead of saying, \"Hey, so about that project, I was thinking if you could maybe help, that'd be great,\" say, \"Could you help with the project? I need advice on [specific part].\""
    },
    {
      title: "Be Respectful",
      text: "Always use polite language, even if you're frustrated. Think of it as keeping cool in a tricky situation.\n\nTip: Avoid blaming or using words that sound angry.\nExample: Instead of \"You messed this up!\" say, \"I noticed an issue with the order. Can we fix it?\""
    },
    {
      title: "Think About the Other Person",
      text: "Try to understand what the other person might feel or need. This is called empathy. It helps you come across as thoughtful.\n\nTip: If someone might be having a tough day, you can add a kind note like, \"I hope you're doing well.\""
    },
    {
      title: "Mistakes to Avoid",
      text: "Here are some things that can make your email look unprofessional:\n\n- Using all caps (IT LOOKS LIKE SHOUTING).\n- Adding too many exclamation points (!!!).\n- Forgetting a subject line (the title of your email).\n- Writing long paragraphs that feel like a wall of text."
    },
    {
      title: "How to Build Good Relationships Over Email",
      text: "Emails aren't just for getting things done—they can help you build connections too!\n\n- Be reliable: If you say you'll do something, follow through.\n- Be thoughtful: Remember things about the other person, like past conversations or achievements.\n- Check in: Send a quick message now and then, just to say hello or share updates."
    },
    {
      title: "Example Scenarios",
      text: "Following up on something:\nUnprofessional: \"Hey, what's up with that thing we talked about?\"\nProfessional: \"Dear [Name], I'm following up on our meeting about [topic]. Could you please send the files by [date]?\"\n\nFixing a problem:\nUnprofessional: \"You guys messed up again!\"\nProfessional: \"Dear [Name], I noticed an issue with order #12345. Could you help me resolve it? Thanks for your assistance.\""
    }
  ],
  questions: [
    {
      id: 1,
      text: "In a multinational corporate environment, which approach best demonstrates cultural awareness in professional tone?",
      options: [
        "Using American English idioms to establish rapport",
        "Maintaining neutral, culturally-inclusive language while adapting formality based on regional norms",
        "Always using the most formal language possible",
        "Addressing everyone by their first name to show friendliness"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "When addressing a sensitive situation involving multiple stakeholders, what is the most effective communication strategy?",
      options: [
        "Using emotional language to show empathy",
        "Copying all relevant parties to ensure transparency",
        "Crafting a measured response that acknowledges the issue while maintaining professionalism and proposing concrete solutions",
        "Responding quickly to show urgency"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "In the context of crisis communication, which approach best maintains professional relationships?",
      options: [
        "Immediate detailed response to all concerns",
        "Strategic communication with clear acknowledgment, impact assessment, and action plan, while maintaining composure",
        "Delegating responses to appropriate team members",
        "Brief acknowledgments to show quick response time"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: "When negotiating project deadlines via email, which approach is most effective?",
      options: [
        "Direct demands with firm deadlines",
        "Vague timeframes to maintain flexibility",
        "Detailed analysis of constraints and possibilities with proposed solutions and alternatives",
        "Short responses to maintain efficiency"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "How should you handle confidential information in professional email chains?",
      options: [
        "Mark all emails as confidential",
        "Implement a comprehensive information classification system with appropriate handling protocols for each level",
        "Only share on need-to-know basis",
        "Use encrypted attachments"
      ],
      correctAnswer: 1
    }
  ]
};