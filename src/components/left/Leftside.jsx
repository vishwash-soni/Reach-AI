import React from "react";
import Left from "./Left";
import resume_des from "../../assets/res-des.svg";
import job_des from "../../assets/job-des.svg";

function Leftside({ setResumeData, setJobDescription, resumeData, jobDescription, generateEmail }) {

  // button handle

  const handleGenerateEmail = (e) => {
    e.preventDefault();
    generateEmail(); // Call the function to generate the email here
    // Call the function to generate the email here
  }

  return (
    <div className="h-full">
      <form className="h-full flex flex-col gap-4">
        {/* Resume */}
        <div className="flex-1 min-h-0">
          <Left
            heading="1. Resume Content"
            icon={resume_des}
            setData={setResumeData}
          />
        </div>

        {/* Job Description */}
        <div className="flex-1 min-h-0">
          <Left
            heading="2. Job Description"
            icon={job_des}
            setData={setJobDescription}
          />
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            handleGenerateEmail(e);
              // Call the function to generate the email here
          }}
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500
                     text-white font-semibold text-lg shadow-lg shadow-blue-500/20
                     hover:from-blue-500 hover:to-cyan-400
                     hover:shadow-blue-500/40 hover:scale-[1.02]
                     active:scale-95 transition-all duration-300 cursor-pointer"
        >
          ✨ Generate Email
        </button>
      </form>
    </div>
  );
}

export default Leftside;