"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { generateInterviewQuestions } from "@/utils/GeminiAiModal";
import { useUser } from "@clerk/nextjs";
import { saveInterviewToDB } from "@/utils/saveInterview";
import { useRouter } from "next/navigation";

function AddNewInterview({ open = false }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await generateInterviewQuestions({
        jobPosition,
        jobDesc,
        jobExperience,
      });

      if (result) {
        const response = await saveInterviewToDB({
          result,
          jobPosition,
          jobDesc,
          jobExperience,
          userEmail: user?.primaryEmailAddress?.emailAddress,
        });

        if (response) {
          setLoading(false);
          router.push("/Dashboard/interview/" + response[0]?.mockId);
        }
      }
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setLoading(false);
      setOpenDialog(false);
    }
  };

  return (
    <div>
      {!open && (
        <div
          className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
          onClick={() => setOpenDialog(true)}
        >
          <h2 className="text-lg text-center">+ Add New</h2>
        </div>
      )}
      {open && (
        <h2
          className="w-full text-purple-600 font-medium"
          onClick={() => setOpenDialog(true)}
        >
        New Interview
        </h2>
      )}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              Add details about your job position/role, job description, and
              years of experience.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={submitForm} className="space-y-4">
            <div>
              <label htmlFor="jobPosition" className="block mb-1 text-sm font-medium">
                Job Position / Role Name
              </label>
              <Input
                id="jobPosition"
                placeholder="Ex: SDE"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="jobDescription" className="block mb-1 text-sm font-medium">
                Job Description / Tech Stack (In Short)
              </label>
              <Textarea
                id="jobDescription"
                placeholder="Ex: React, Node.js, MongoDB..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block mb-1 text-sm font-medium">
                Years of Experience
              </label>
              <Input
                id="experience"
                placeholder="Ex: 5"
                type="number"
                min="0"
                value={jobExperience}
                onChange={(e) => setJobExperience(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-5 justify-end pt-4">
              <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoaderCircle className="animate-spin" />
                    Generating From AI
                  </div>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
