"use client";

import {
  Check,
  Circle,
  FileText,
  LoaderCircle,
} from "lucide-react";

const loadingSteps = [
  "Reading your CV",
  "Analyzing the job description",
  "Comparing your experience",
  "Preparing your results",
];

import test from "../../../public/test.png"

interface LoadingScreenProps {
  activeStep: number;
}

export default function LoadingScreen({
  activeStep,
}: LoadingScreenProps) {
  const progress = Math.round(
    ((activeStep + 1) / loadingSteps.length) * 100
  );

  return (
    <main className="grid min-h-screen grid-cols-1 bg-white lg:grid-cols-[7fr_3fr]">

      {/* LEFT — 70% */}
      <section className="flex min-h-screen items-center justify-center px-8 py-16 sm:px-12 lg:px-20">

        <div className="w-full max-w-xl">

          {/* Small label */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">
            <FileText className="h-4 w-4" />
            MatchAJob / CV Review
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#17324D] sm:text-5xl">
            We're reviewing
            <br />
            your application.
          </h1>

          {/* Two-line paragraph */}
          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
            We're comparing your experience with the job description
            to find your strongest matches and areas worth improving.
          </p>

          <div className="mt-12">

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#17324D]">
                {loadingSteps[activeStep]}
              </span>

              <span className="text-sm font-semibold text-[#3B82F6]">
                {progress}%
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#E6EDF3]">
              <div
                className="h-full rounded-full bg-[#3B82F6] transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="mt-8 space-y-5">

              {loadingSteps.map((step, index) => {
                const completed = index < activeStep;
                const active = index === activeStep;

                return (
                  <div
                    key={step}
                    className={`flex items-center gap-3 text-sm ${
                      completed || active
                        ? "text-[#17324D]"
                        : "text-gray-300"
                    }`}
                  >

                    {completed ? (
                      <Check className="h-4 w-4 text-[#16805B]" />
                    ) : active ? (
                      <LoaderCircle className="h-4 w-4 animate-spin text-[#3B82F6]" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}

                    <span
                      className={
                        active
                          ? "font-semibold"
                          : completed
                            ? "font-medium"
                            : ""
                      }
                    >
                      {step}
                    </span>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>


      {/* RIGHT — 30% */}
      <aside   className={`hidden  bg-[#0666B3]  lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:p-12`}>

        <div>
          {/* <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">
            MatchAJob
          </p> */}

          <div className="mt-10 h-px w-10 bg-[#BFD7EE]" />

          <p className="mt-6 text-sm leading-7 text-[#fff]">
            Your CV is being compared against the requirements of
            the role you want.
          </p>
        </div>


        {/* Bottom message */}
        {/* <div>
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#3B82F6] shadow-sm">
            <FileText className="h-5 w-5" />
          </div>

          <p className="text-sm font-semibold text-[#17324D]">
            Almost there.
          </p>

          <p className="mt-2 text-xs leading-5 text-[#6B8295]">
            We'll turn the analysis into clear, practical feedback
            you can actually use.
          </p>
        </div> */}

      </aside>

    </main>
  );
}