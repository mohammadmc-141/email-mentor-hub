import { Lesson } from "../types";

export const emailSecurityLessonData: Lesson = {
  id: 5,
  title: "Email Security & Privacy",
  description: "Master essential email security practices and protect sensitive information",
  progress: 0,
  locked: true,
  content: [
    {
      title: "Email Security Fundamentals",
      text: "Understanding email security basics is crucial:\n\n1. Password Security\n- Strong password creation\n- Regular password updates\n- Two-factor authentication\n- Password manager usage\n\n2. Phishing Awareness\n- Identifying suspicious emails\n- Common phishing tactics\n- Verification procedures\n- Reporting mechanisms"
    },
    {
      title: "Data Protection",
      text: "Protecting sensitive information in emails:\n\n1. Confidential Information\n- Classification of sensitive data\n- Encryption methods\n- Secure file sharing\n- Access control\n\n2. Compliance Requirements\n- Industry regulations\n- Data protection laws\n- Documentation requirements\n- Audit trails"
    },
    {
      title: "Security Best Practices",
      text: "Implementing security measures:\n\n1. Email Access\n- Secure network usage\n- Mobile device security\n- Public Wi-Fi precautions\n- Session management\n\n2. Attachment Security\n- Virus scanning\n- File encryption\n- Secure transfer methods\n- Version control"
    }
  ],
  questions: [
    {
      id: 1,
      text: "What is the best practice for handling sensitive information in emails?",
      options: [
        "Send it in plain text",
        "Use encryption and secure transfer methods",
        "Share it only with trusted colleagues",
        "Save it for in-person discussions"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "How can you identify a potential phishing email?",
      options: [
        "It's from someone you know",
        "It has a professional signature",
        "It creates urgency and asks for sensitive information",
        "It's written in perfect English"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What should you do when accessing emails on public Wi-Fi?",
      options: [
        "Use a VPN connection",
        "Download all attachments immediately",
        "Share your location",
        "Use remember password option"
      ],
      correctAnswer: 0
    }
  ]
};