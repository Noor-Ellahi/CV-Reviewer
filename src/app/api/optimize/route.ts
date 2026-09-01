
import { optimizeSchema } from "@/lib/cv-optimize/cv-optimize";
import { GoogleGenAI } from "@google/genai";


const LLM = new GoogleGenAI({
    apiKey: process.env.GOOG_AI_API,
})

export async function POST(request: Request) {

    try {
        const body = await request.json()
        const { resumeText, JDtext, reviewData } = body


        if (!resumeText || !JDtext || !reviewData) {
            return new Response(
                JSON.stringify({
                    error: "Missing required fields"
                }),
                {
                    status: 400
                }
            )
        }


        const prompt = `
You are an expert resume optimizer.

Your task is to optimize the candidate's resume for the provided job description.

IMPORTANT RULES:

1. Never invent information.
2. Never add skills the candidate does not have.
3. Never add technologies the candidate did not use.
4. Never invent achievements or metrics.
5. Never invent companies, job titles, certifications, education, or responsibilities.
6. You may rewrite existing information to make it clearer, stronger, and more relevant.
7. You may emphasize experience that is relevant to the job description.
8. You may improve wording, grammar, structure, and keyword alignment.
9. Only use information that exists in the resume.
10. Return ONLY valid JSON matching the required schema.
11. Do not use information from the job description as evidence of candidate experience.
12. Job description keywords may only be added to the resume when the resume already demonstrates that skill or technology.
13. Preserve factual information from the original resume.

RESUME:

${resumeText}

JOB DESCRIPTION:

${JDtext}

PREVIOUS CV REVIEW:

The following review was generated from the original resume and job description.

Use this review to identify areas that should be improved.

Do NOT blindly add missing keywords. A missing keyword can only be incorporated if the original resume contains evidence that the candidate has that skill.

${JSON.stringify(reviewData)}


Return JSON Only
THE JSON Must these fields:
{
        personalInfo:{
        name :string,
        phone : string,
        gmail : string,
        linkedin : string,
        portfolio : string,
        github : string,
        location : string
        },
        summary : string,
        }

        experience : [
            {
                company : string,
                role : string,
                dates : string,
                bullets : string[]
            }
        ],

        projects : [
            {
                name : string,
                tech : string,
                description : string,
                link : string
            }
        ],

        education : [
            {
                institution : string,
                degree : string,
                dates : string
            }
        ],

        skills : [
            {
                lang : string[],
                frontend : string[],
                backend : string[],
                databases : string[],
                tools : string[]
            }
        ]

}

`;

        const res = await LLM.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt,
        })

        let resText = res.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!resText) {
            throw new Error("No AI response text found");
        }

        resText = resText
            .replace(/^```json\s*/, "")
            .replace(/\s*```$/, "")
            .trim();


        const jsonParsed = JSON.parse(resText);
        const validation = optimizeSchema.parse(jsonParsed);


        return new Response(
            JSON.stringify({
                data: validation,

            })
            ,
            {
                status: 200
            }
        )







    } catch (error) {

        return new Response(
            JSON.stringify({
                error: error
            })
            ,
            {
                status: 500
            }
        )
    }

}