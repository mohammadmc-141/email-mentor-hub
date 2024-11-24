import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { scenarios } from "./emailScenarios";

export function EmailSimulator() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [content, setContent] = useState("");
  const [bossResponse, setBossResponse] = useState("");
  const [showBossResponse, setShowBossResponse] = useState(false);
  const [isGoodResponse, setIsGoodResponse] = useState(false);

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setContent("");
      setBossResponse("");
      setShowBossResponse(false);
      setIsGoodResponse(false);
    } else {
      toast.success("Congratulations! You've completed all scenarios!");
      setCurrentScenario(0);
      setContent("");
      setBossResponse("");
      setShowBossResponse(false);
      setIsGoodResponse(false);
    }
  };

  const handleSubmit = () => {
    const correctTemplate = scenarios[currentScenario].reply_options.find(
      option => option.isCorrect
    )?.template || "";

    // Find the closest matching response template
    const matchingResponse = scenarios[currentScenario].reply_options.reduce<typeof scenarios[0]['reply_options'][0] & { similarity: number }>((closest, option) => {
      const similarity = content.length / option.template.length;
      if (Math.abs(1 - similarity) < Math.abs(1 - (closest?.similarity || 0))) {
        return { ...option, similarity };
      }
      return closest;
    }, { ...scenarios[currentScenario].reply_options[0], similarity: 0 });

    // Show boss response
    setBossResponse(matchingResponse.bossResponse || "Please try again with a more appropriate response.");
    setShowBossResponse(true);

    // Check if response is good enough
    const isCorrect = content.length >= correctTemplate.length * 0.7;

    if (isCorrect) {
      setIsGoodResponse(true);
      toast.success("Great response! Click 'Next Scenario' to continue...");
    } else {
      setIsGoodResponse(false);
      toast.error("Your response needs improvement. Try to be more comprehensive!");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Email Simulator - Scenario {currentScenario + 1}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg space-y-2 border mb-6">
          <div className="font-medium">From: {scenarios[currentScenario].from}</div>
          <div className="font-medium">Subject: {scenarios[currentScenario].subject}</div>
          <div className="mt-4">{scenarios[currentScenario].message}</div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">To:</label>
          <Input 
            value={scenarios[currentScenario].from}
            readOnly
            className="bg-gray-100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject:</label>
          <Input 
            value={`Re: ${scenarios[currentScenario].subject}`}
            readOnly
            className="bg-gray-100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message:</label>
          <Textarea 
            className="min-h-[200px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your response here..."
          />
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={handleSubmit}
            className="flex-1"
          >
            Submit Response
          </Button>
          {isGoodResponse && (
            <Button 
              onClick={handleNextScenario}
              variant="secondary"
              className="flex-1"
            >
              Next Scenario
            </Button>
          )}
        </div>

        {showBossResponse && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h3 className="font-medium mb-2">Boss Response:</h3>
            <p>{bossResponse}</p>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Key Points to Address:</h3>
          <ul className="list-disc list-inside">
            {scenarios[currentScenario].key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Example Response Templates:</h3>
          <div className="space-y-2">
            {scenarios[currentScenario].reply_options.map((option) => (
              <div 
                key={option.id}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => setContent(option.template)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}