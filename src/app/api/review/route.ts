// import "server-only"

// Text extraction libraries
import { pdfToText } from "pdf-ts"
import officeParser from "officeparser";


// llm imports
import { GoogleGenAI } from "@google/genai";
import { reviewSchema } from "@/lib/cv-review/cv-review";

// Review Schema


// Initialize the GoogleGenAI client
const LLM = new GoogleGenAI({
    apiKey: process.env.GOOG_AI_API,
})



// async function validation(jD: string, cV: string) {


//     const prompt = `
// You are an input validator for an AI CV reviewer.

// Determine whether each input is valid.

// CV:
// ${cV}

// Job Description:
// ${jD}

// Return ONLY JSON:

// {
//   "isValidCV": boolean,
//   "cvReason": string,
//   "isValidJobDescription": boolean,
//   "jobDescriptionReason": string
// }
// `;


//     const res = await LLM.models.generateContent({
//         model: "gemini-3.1-flash-lite",
//         contents: prompt,
//     })

//     let text = res.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!text) {
//         throw new Error("No validation response from AI");
//     }

//     text = text
//         .replace(/^```json\s*/, "")
//         .replace(/\s*```$/, "")
//         .trim();

//     return JSON.parse(text);

// }


export async function POST(req: Request) {
    try {
        // const body = await req.json();
        // const {file, text} = body;

        const formData = await req.formData();
        const file = formData.get("file");
        const jobDescription = formData.get("jobDescription");
        let extractedText = "";

        if (!(file instanceof File)) {
            return new Response("Invalid file", { status: 400 });
        }
        // console.log("File:", file);
        // console.log("Job Description:", jobDescription);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        if (file.name.endsWith(".pdf")) {
            extractedText = await pdfToText(buffer);
        }
        else if (file.name.endsWith(".docx")) {
            const ast = await officeParser.parseOffice(buffer);
            const { value } = await ast.to('text');
            extractedText = value;
        }
        else {
            return new Response("Unsupported file type", { status: 400 });
        }


        if (typeof jobDescription !== "string" || jobDescription.trim().length < 50) {
            return new Response(
                JSON.stringify({
                    error: "Please enter a valid job description."
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }


            );
        }


        const resumeText = extractedText;


        if (!resumeText || resumeText.trim().length < 300) {
            return new Response(
                JSON.stringify({
                    error: "The uploaded files doesnot contain a CV with enough words. Lol"
                }),
                {
                    status: 400,
                }
            )
        }

        const prompt = `
        You are an expert technical recruiter.
        Analyze this CV against the following job description.
        
        CV: ${resumeText}

        Job Description: ${jobDescription}

        Return your response as JSON.

The JSON must have exactly these fields:

{
//   "overallScore": number,
//   "atsScore": number,
//   "jobMatch": number,

        "overallScore" : {
        score : number,
        title : string,
        point : string
        }
          "atsScore" : {
        score : number,
        title : string,
        point : string
        }
          "jobMatch" : {
        score : number,
        title : string,
        point : string
        }


  "strengths": string[],
  "weaknesses": string[],
//   "missingKeywords": string[],
  "suggestions": string[],
    "summary": string,
    "harshTone": string,

    "keywords" :{
        contains : string[],
        missing : string[]
    },
    "professionalSectionWise" : {
    summary :boolean,    
    experience : boolean,
        education : boolean, 
        skills : boolean,
        projects : boolean


    },  

    "experience" : {
        required : string[],
        missing : string[]
    },
    "grammar" : {
    errors : string[],
    suggestions : string[]
    },

    
    // "improvements" : string[]

    "improvements" : {
        topics : [
        {
            title : string,
            points : string
        }
    ]
    },

    impInfo : {
        jobRole : string,
        companyName : string,
        pdfName : string,
    }
    
    jobRequirements : {
        matched : [
        {
            skill : string
            pointAboutSkill : string
        }
        ],
         partial : [
        {
             skill : string
            pointAboutSkill : string
        }
        ],
        missing : [
        {
             skill : string
            pointAboutSkill : string
        }
        ],
    },

    "roastHimBadly" : string
  }

Scores must be numbers from 0 to 100.
Do not include any additional fields.
In improvements always try to give 3 topics with 1 title and 1 point.
And for jobRequirements try to give skill as in React, Next etc and for point give a point about the skill related to CV




        `

        // Resume review prompt
        const response = await LLM.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt,
        })


        console.log("========== AI RESPONSE ==========");
        console.dir(response, { depth: null });
        console.log("=================================");



        let resText = response.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!resText) {
            throw new Error("No AI response text found");
        }


        resText = resText
            .replace(/^```json\s*/, "")
            .replace(/\s*```$/, "")
            .trim();

        const jonText = JSON.parse(resText);




        const validate = reviewSchema.parse(jonText);




        return new Response(
            JSON.stringify({ data: validate, resumeText : resumeText }),
            { status: 200 }
        )
    }
    catch (err) {

        console.error("Error:", err);
        return new Response(JSON.stringify({ error: err }), { status: 500 })

    }
}