import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { scenarios } from "./emailScenarios";

export function EmailSimulator() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showBossEmail, setShowBossEmail] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handleTemplateSelect = (templateId: string) => {
    const selectedOption = scenarios[currentScenario].reply_options.find(
      option => option.id === templateId
    );
    if (selectedOption) {
      setContent(selectedOption.template);
      setSelectedTemplate(templateId);

      // Check if the template contains all key points
      const hasAllKeyPoints = scenarios[currentScenario].key_points.every(point => 
        selectedOption.template.toLowerCase().includes(point.toLowerCase())
      );

      if (hasAllKeyPoints) {
        toast.success("Great response! Moving to next scenario...");
        setTimeout(() => {
          if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(prev => prev + 1);
            setShowBossEmail(true);
          } else {
            toast.success("Congratulations! You've completed all scenarios!");
            setCurrentScenario(0);
          }
          setTo("");
          setSubject("");
          setContent("");
          setSelectedTemplate("");
        }, 1500);
      }
    }
  };

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
                readOnly
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject:</label>
              <Input 
                placeholder="Enter a clear, concise subject"
                value={subject}
                readOnly
                className="bg-gray-100"
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
                placeholder="Select a template to see the message"
                className="min-h-[200px] bg-gray-100"
                value={content}
                readOnly
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