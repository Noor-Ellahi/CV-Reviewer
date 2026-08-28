import { boolean, z } from "zod";

export const reviewSchema = z.object({
    // overallScore: z.number().min(0).max(100),
    // atsScore: z.number().min(0).max(100),
    // jobMatch: z.number().min(0).max(100),


    overallScore: z.object({
        score: z.number(),
        title: z.string(),
        point: z.string()
    }),

    atsScore: z.object({
        score: z.number(),
        title: z.string(),
        point: z.string()
    }),
    jobMatch: z.object({
        score: z.number(),
        title: z.string(),
        point: z.string()
    }),

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
        summary: z.boolean(),
        experience: z.boolean(),
        education: z.boolean(),
        skills: z.boolean(),
        projects: z.boolean(),
    }),

    experience: z.object({
        required: z.array(z.string()),
        missing: z.array(z.string())
    }),

    grammar: z.object({
        errors: z.array(z.string()),
        suggestions: z.array(z.string())
    }),

    // improvements: z.array(z.string())
    improvements: z.object({
        topics: z.array(
            z.object({
                title: z.string(),
                // points: z.array(z.string())
                points : z.string()
            })
        )
    }),

    impInfo : z.object({
        jobRole : z.string(),
        companyName : z.string(),
        pdfName : z.string()
    }),


    jobRequirements : z.object({
        matched : z.array(
        z.object({
            skill : z.string(),
            pointAboutSkill : z.string()
        })
        ),
        partial : z.array(
        z.object({
            skill : z.string(),
            pointAboutSkill : z.string()
        })
        ),
        missing : z.array(
        z.object({
            skill : z.string(),
            pointAboutSkill : z.string()
        })
        )
    }),

    roastHimBadly : z.string()
})