import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const scenarios = [
  {
    from: "boss@company.com",
    subject: "Project Deadline Update",
    message: "I need an update on the current project status. When can you deliver the final version?",
    key_points: ["Be specific about timeline", "Show accountability", "Maintain professional tone"]
  },
  {
    from: "boss@company.com",
    subject: "Meeting Reschedule Request",
    message: "Something urgent came up. Can we move our 2 PM meeting today to another time?",
    key_points: ["Show flexibility", "Provide clear availability", "Acknowledge the request promptly"]
  },
  {
    from: "boss@company.com",
    subject: "Client Complaint Follow-up",
    message: "We received a complaint from client XYZ about service delays. Please investigate and respond to me with your findings.",
    key_points: ["Take responsibility", "Provide solution", "Show urgency"]
  }
];

export function EmailSimulator() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showBossEmail, setShowBossEmail] = useState(true);

  const handleSend = () => {
    if (!to || !subject || !content) {
      toast.error("Please fill in all fields");
      return;
    }

    const scenario = scenarios[currentScenario];
    const hasAllKeyPoints = scenario.key_points.every(point => 
      content.toLowerCase().includes(point.toLowerCase())
    );

    if (hasAllKeyPoints) {
      toast.success("Great response! You've addressed all key points professionally.");
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(prev => prev + 1);
        setShowBossEmail(true);
      } else {
        toast.success("Congratulations! You've completed all scenarios!");
        setCurrentScenario(0);
      }
    } else {
      toast.error("Try to address all key points in your response");
    }

    setTo("");
    setSubject("");
    setContent("");
  };

  const handleStartScenario = () => {
    setShowBossEmail(false);
    setTo(scenarios[currentScenario].from);
    setSubject(`Re: ${scenarios[currentScenario].subject}`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Email Simulator - Scenario {currentScenario + 1}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showBossEmail ? (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2 border">
            <div className="font-medium">From: {scenarios[currentScenario].from}</div>
            <div className="font-medium">Subject: {scenarios[currentScenario].subject}</div>
            <div className="mt-4">{scenarios[currentScenario].message}</div>
            <Button className="mt-4" onClick={handleStartScenario}>
              Compose Response
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">To:</label>
              <Input 
                placeholder="recipient@example.com"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject:</label>
              <Input 
                placeholder="Enter a clear, concise subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message:</label>
              <Textarea 
                placeholder="Write your professional email here..."
                className="min-h-[200px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key Points to Address:</h3>
              <ul className="list-disc list-inside">
                {scenarios[currentScenario].key_points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <Button className="w-full" onClick={handleSend}>
              Send Email
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}