import { boolean, z } from "zod";

export const reviewSchema = z.object({
    overallScore: z.number().min(0).max(100),
    atsScore: z.number().min(0).max(100),
    jobMatch: z.number().min(0).max(100),

    strengths: z.array(z.string()),
    weaknesses: z.array(z.string()),
    // missingKeywords: z.array(z.string()),
    suggestions: z.array(z.string()),

    summary: z.string(),
    harshTone: z.string(),



    keywords: z.object({
        contains: z.array(z.string()),
        missing: z.array(z.string())
    }),
    professionalSectionWise: z.object({
        summary : z.boolean(),
        experience : z.boolean(),
        education : z.boolean(),
        skills : z.boolean(),
        projects : z.boolean(),
    }),

    experience: z.object({
        required: z.array(z.string()),
        missing: z.array(z.string())
    }),

    grammar: z.object({
        errors: z.array(z.string()),
        suggestions: z.array(z.string())
    }),

    improvements: z.array(z.string())

})