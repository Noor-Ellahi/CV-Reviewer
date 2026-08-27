
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-28 text-center sm:pt-20">
        <div className="flex flex-col items-center">

          {/* Label */}
          <span className="mb-5 rounded-full bg-[#EAF3FF] px-4 py-2 text-sm font-medium text-[#2F80ED]">
            AI-powered CV analysis
          </span>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#123B5D] sm:text-5xl md:text-6xl">
            Review your CV against{" "}
            <span className="text-[#2F80ED]">any job.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Upload your CV, add the role you want, and see what stands
            between you and your next interview.{" "}
            <span className="text-gray-500">
              MatchAJob highlights your strongest matches and gives you
              practical ways to improve.
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            {/* Primary */}
            <button
              className="group flex items-center justify-center gap-2 rounded-xl
              bg-[#123B5D] px-7 py-4 text-sm font-semibold text-white
              shadow-lg shadow-[#123B5D]/15
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#0D2E49]
              hover:shadow-xl hover:shadow-[#123B5D]/20"
            >
              Review Your CV
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            {/* Secondary */}
            <button
              className="rounded-xl border border-[#123B5D]/15
              bg-white px-7 py-4 text-sm font-semibold text-[#123B5D]
              transition-all duration-200
              hover:border-[#2F80ED]/30 hover:bg-[#EAF3FF]"
            >
              Start Comparing
            </button>

          </div>

          {/* Supporting text */}
          <p className="mt-6 text-sm text-gray-400">
            Get actionable feedback tailored to the job you're applying for.
          </p>

        </div>
      </div>
    </section>
  );
}