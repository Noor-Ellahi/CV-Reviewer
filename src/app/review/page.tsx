"use client";


import ReviewResult from "@/components/ActReview/ActReview";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import Navbar from "@/components/Navbar/Navbar";
import { ResultComponent } from "@/components/ResultComponent/ResultComponent";
import UploadComp from "@/components/UploadComp/UploadComp";
import { useState } from "react";

interface MatchDetails {
  required: string[],
  missing: string[],
}
interface ProSectiom {
  summary: boolean,
  experience: boolean,
  education: boolean,
  skills: boolean,
  projects: boolean,
}
interface Keyword {
  contains: string[],
  missing: string[]
}
interface Gram {
  errors: string[],
  suggestions: string[]
}

interface Points {
  score: number,
  title: string,
  point: string
}

interface ImpInfo {
  jobRole: string,
  companyName: string,
  pdfName: string
}

interface Improve {
  topics:
  {
    title: string,
    points: string
  }[]
}

interface Requirements {
  matched: {
    skill: string,
    pointAboutSkill: string
  }[],
  partial: {
    skill: string,
    pointAboutSkill: string
  }[],
  missing: {
    skill: string,
    pointAboutSkill: string
  }[],

}


export interface ResumeHolder {
  // overallScore: number,
  // atsScore: number,
  // jobMatch: number,

  overallScore: Points,
  atsScore: Points,
  jobMatch: Points


  strengths: string[],
  weaknesses: string[],
  // missingKeywords: z.array(z.string()),
  suggestions: string[],

  summary: string,
  harshTone: string,

  keywords: Keyword,
  professionalSectionWise: ProSectiom,
  experience: MatchDetails,
  grammar: Gram,

  improvements: Improve,


  impInfo: ImpInfo,

  jobRequirements: Requirements


  roastHimBadly: string

}

export default function UploadPage() {
  const [loading, setLoading] = useState(null)

  const [cvData, setCvData] = useState<ResumeHolder | null>(null)
  const [loadCounter, setLoadCounter] = useState<number>(0)
  const [currentComponent, setCurrentComponent] = useState('')







  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      {/* <Navbar /> */}

      {
        currentComponent === "" ?
          (
            <>
              <Navbar />
              <UploadComp setCvData={setCvData} component={setCurrentComponent} count={loadCounter} setCount={setLoadCounter} />
              <HowItWorks/>
              <Footer />
            </>
          )
          : null
      }

      {/* <ResultComponent/> */}

      {/* <ReviewResult /> */}


      {/*  onSkip={()=>console.log('1')} */}
      {
        currentComponent === "Loading" ?
          (
            <LoadingScreen activeStep={loadCounter} />
          ) : null
      }

      {
        currentComponent === "result" ?
          (
            <>
              <Navbar />
              <ResultComponent cvData={cvData} />
              <Footer />
            </>
          ) : null
      }

      <button onClick={() => console.log(cvData)}>CLICK ME</button>
    </main>
  );
}