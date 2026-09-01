import { z } from "zod";


export const optimizeSchema = z.object({
    personalInfo : z.object({
        name : z.string().min(1, "Name is required"),
        phone : z.string().min(1, "Phone is required"),
        gmail : z.email("Invalid email address"),
        linkedin : z.url("Invalid LinkedIn URL"),
        portfolio : z.url("Invalid Portfolio URL").optional(),
        github : z.url("Invalid GitHub URL").optional(),
        location : z.string().optional(),
    }),
    summary : z.string().min(1, "Summary is required"),

    experience : z.array(z.object({
        company : z.string().min(1, "Company is required"),
        role : z.string().min(1 , "Role is required"),
        dates : z.string().min(1, "Dates are required"),
        bullets : z.array(z.string().min(1, "Bullet point is required")).min(1, "At least one bullet point is required"),
    })),

    projects : z.array(z.object({
        name : z.string().min(1 , "Name is Required"),
        tech : z.string().min(1, "Tech is required"),
        description : z.string().min(1 , "Description is required"),
        link : z.url("Invalid Project URL").optional(),
    })),

    education : z.array(z.object({
        institution : z.string().min(1 , "Institution is required"),
        degree : z.string().min(1 , "Degree is Required"),
        dates : z.string().min(1 , "Dates are required"),

    })),

    skills : z.array(z.object({
        lang : z.array(z.string().min(1, "Language is required")).min(1, "At least one language is required"),
        frontend : z.array(z.string().min(1 , "Frontend skill is required")).min(1 , "Atleast 1 skill is required"),
        backend : z.array(z.string().min(1 , "Backend skill is required")).min(1 , "Atleast 1 skill is required"),
        databases : z.array(z.string().min(1 , "Database is required")).min(1 , "Atleast 1 database is required"),
        tools : z.array(z.string().min(1 , "Tool is required")).min(1 , "Atleast 1 tool is required"),
    
    }))





})