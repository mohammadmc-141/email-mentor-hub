import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const scenarios = [
  {
    from: "boss@company.com",
    subject: "Project Deadline Update",
    message: "I need an update on the current project status. When can you deliver the final version?",
    key_points: ["Be specific about timeline", "Show accountability", "Maintain professional tone"],
    reply_options: [
      {
        id: "1",
        label: "Professional and Detailed",
        template: "Dear [Boss],\n\nThank you for your inquiry about the project status. We are currently at 80% completion, and I can confirm that we will deliver the final version by [specific date]. Here's a brief breakdown of the remaining tasks:\n\n- Quality assurance testing (2 days)\n- Final revisions (1 day)\n- Documentation completion (1 day)\n\nI am personally overseeing these final stages to ensure we meet our quality standards.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Brief and Direct",
        template: "Hi [Boss],\n\nThe project is on track for delivery next Friday. All major features are complete, and we're in the final testing phase.\n\nLet me know if you need any specific details.\n\nRegards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Status Report Style",
        template: "Hello [Boss],\n\nProject Status Update:\n- Progress: 80% complete\n- Delivery Date: [specific date]\n- Current Phase: Final testing\n- Risks: None identified\n\nI'll send daily updates until delivery.\n\nBest regards,\nEmmanuel"
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
        template: "Dear [Boss],\n\nI understand the need to reschedule our 2 PM meeting. I am available at the following times today:\n\n- 3:30 PM - 4:30 PM\n- 4:45 PM - 5:30 PM\n\nAlternatively, I'm free tomorrow between 10 AM and 3 PM.\n\nPlease let me know which time works best for you.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Quick Response",
        template: "Hi [Boss],\n\nNo problem at all. I'm free later today at 3:30 PM or 4:45 PM. Would either of those times work for you?\n\nBest,\nEmmanuel"
      },
      {
        id: "3",
        label: "Detailed Availability",
        template: "Hello [Boss],\n\nI can certainly accommodate rescheduling today's 2 PM meeting. Here's my availability for the next two days:\n\nToday:\n- 3:30 PM - 5:30 PM\n\nTomorrow:\n- 10:00 AM - 3:00 PM\n\nPlease choose any time that suits your schedule.\n\nBest regards,\nEmmanuel"
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
        template: "Dear [Boss],\n\nI've investigated the service delays reported by client XYZ. The main causes were:\n\n1. System maintenance overlap with client requests\n2. Resource allocation gaps during peak hours\n\nImmediate actions taken:\n- Rescheduled maintenance to off-peak hours\n- Added additional support staff\n- Implemented priority routing for XYZ\n\nI will personally monitor their service levels to prevent future delays.\n\nBest regards,\nEmmanuel"
      },
      {
        id: "2",
        label: "Action-Oriented",
        template: "Hi [Boss],\n\nI've looked into XYZ's complaint. The delay was caused by our scheduled maintenance. I've already:\n\n1. Expedited their pending requests\n2. Assigned a dedicated support contact\n3. Created a prevention plan\n\nWill send a detailed report by EOD.\n\nRegards,\nEmmanuel"
      },
      {
        id: "3",
        label: "Solution-Focused",
        template: "Hello [Boss],\n\nRegarding XYZ's complaint:\n\nRoot cause: Service queue overflow during system maintenance\n\nSolutions implemented:\n- Priority status activated\n- Support team reinforced\n- Process optimization initiated\n\nExpect normal service levels within 24 hours.\n\nBest regards,\nEmmanuel"
      }
    ]
  }
];

export function EmailSimulator() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showBossEmail, setShowBossEmail] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("");

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
    setSelectedTemplate("");
  };

  const handleStartScenario = () => {
    setShowBossEmail(false);
    setTo(scenarios[currentScenario].from);
    setSubject(`Re: ${scenarios[currentScenario].subject}`);
  };

  const handleTemplateSelect = (templateId: string) => {
    const selectedOption = scenarios[currentScenario].reply_options.find(
      option => option.id === templateId
    );
    if (selectedOption) {
      setContent(selectedOption.template);
      setSelectedTemplate(templateId);
    }
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
              <label className="text-sm font-medium">Choose a Response Template:</label>
              <RadioGroup value={selectedTemplate} onValueChange={handleTemplateSelect} className="space-y-2">
                {scenarios[currentScenario].reply_options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={`template-${option.id}`} />
                    <Label htmlFor={`template-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
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