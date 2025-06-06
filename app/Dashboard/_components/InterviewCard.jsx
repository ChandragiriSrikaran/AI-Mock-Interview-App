import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function InterviewCard({ interview }) {
  console.log("card triggered");
  const router = useRouter();

  const onStart = () => {
    router.push("/Dashboard/interview/" + interview?.mockId);
  };

  const onFeedback = () => {
    router.push("/Dashboard/interview/" + interview?.mockId + "/feedback");
  };

  // Format date nicely
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group relative w-full max-w-[600px] bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between">


      {/* Content Section */}
      <div className="space-y-2">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
            {interview?.jobPosition || "Position Not Specified"}
          </h3>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 font-medium">
                {interview?.jobExperience || 0} Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Created {formatDate(interview?.createdAt)}</span>
          </div>

          {/* Status indicator */}
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Ready</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 h-9 text-sm font-medium border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            onClick={onFeedback}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            View Feedback
          </Button>

          <Button
            size="sm"
            className="flex-1 h-9 text-sm font-medium bg-primary text-white shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-none"
            onClick={onStart}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H9m0-5.5v5.5m0-5.5H7.5m1.5 0h3M9 10v1.5m4.5-1.5h3m0 0h1.5m-1.5 0v1.5m0-1.5v5.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Start
          </Button>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default InterviewCard;
