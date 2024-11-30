import { useEffect, useState } from "react";

interface Email {
  id: number;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  scale: number;
}

export function FallingEmails() {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const createEmail = () => {
      const id = Date.now();
      const x = Math.random() * window.innerWidth;
      const speed = 1 + Math.random() * 2;
      const rotation = Math.random() * 360;
      const scale = 0.8 + Math.random() * 1.2;
      
      return {
        id,
        x,
        y: -50,
        speed,
        rotation,
        scale,
      };
    };

    const animateEmails = () => {
      setEmails(prevEmails => {
        const updatedEmails = prevEmails
          .map(email => ({
            ...email,
            y: email.y + email.speed,
            rotation: email.rotation + 0.5,
          }))
          .filter(email => email.y < window.innerHeight);

        if (Math.random() < 0.05) {
          return [...updatedEmails, createEmail()];
        }

        return updatedEmails;
      });
    };

    const intervalId = setInterval(animateEmails, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emails.map(email => (
        <div
          key={email.id}
          className="absolute text-5xl opacity-10 mix-blend-screen"
          style={{
            left: `${email.x}px`,
            top: `${email.y}px`,
            transform: `rotate(${email.rotation}deg) scale(${email.scale})`,
            transition: 'transform 0.5s ease',
            WebkitTextStroke: '2px #9b87f5',
            color: 'transparent'
          }}
        >
          ✉️
        </div>
      ))}
    </div>
  );
}