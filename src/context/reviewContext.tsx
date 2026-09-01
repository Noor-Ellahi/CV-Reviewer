"use client"
import { useState, createContext, useContext } from "react";



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


interface ReviewContextType {
    reviewData: ResumeHolder | null;
    setReviewData: React.Dispatch<React.SetStateAction<ResumeHolder | null>>;

    JDText: string;
    setJDText: React.Dispatch<React.SetStateAction<string>>;

    reviewText: string;
    setReviewText: React.Dispatch<React.SetStateAction<string>>;
}

const reviewContext = createContext<ReviewContextType | undefined>(undefined);


export const ReviewProvider = ({ children }: { children: React.ReactNode }) => {

    const [reviewData, setReviewData] = useState<ResumeHolder | null>(null)
    const [JDText, setJDText] = useState('')
    const [reviewText, setReviewText] = useState('')

    return (
        <reviewContext.Provider value={{
            reviewData,
            setReviewData,
            JDText,
            setJDText,
            reviewText,
            setReviewText
        }}>
            {children}

        </reviewContext.Provider>
    )
}



export const useReviewContext = () => {
    const context = useContext(reviewContext)

    if (context === undefined) {
        throw new Error(
            "useReviewContext must be used inside ReviewProvider"
        );
    }

    return context;
}