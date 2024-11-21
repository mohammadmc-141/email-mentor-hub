import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function EmailSimulator() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSend = () => {
    if (!to || !subject || !content) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Email sent! Great job following the etiquette guidelines.");
    setTo("");
    setSubject("");
    setContent("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Email Simulator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
        <Button className="w-full" onClick={handleSend}>
          Send Email
        </Button>
      </CardContent>
    </Card>
  );
}