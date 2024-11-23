import { Lesson } from "../types";

export const emailSecurityLessonData: Lesson = {
  id: 5,
  title: "Email Security & Privacy",
  description: "Master essential email security practices and protect sensitive information",
  progress: 0,
  locked: false,
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
      text: "What is the most comprehensive approach to handling confidential information in enterprise email systems?",
      options: [
        "Password protection only",
        "Multi-layered security protocol including encryption, access controls, audit trails, and data classification",
        "Restricted distribution lists",
        "Verbal communication only"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "How should you manage email security in a BYOD (Bring Your Own Device) environment?",
      options: [
        "Standard security protocols",
        "Comprehensive mobile device management with containerization, conditional access, and security policies",
        "Email access restrictions",
        "Company devices only"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the most effective approach to preventing social engineering attacks through email?",
      options: [
        "Spam filters only",
        "Integrated security approach with AI-powered threat detection, user training, and incident response protocols",
        "Email restrictions",
        "Manual screening"
      ],
      correctAnswer: 1
    }
  ]
};
