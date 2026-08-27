"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
    ArrowRight,
    FileText,
    Upload,
    X,
    Check,
} from "lucide-react";
import axios from "axios";
import { ResumeHolder } from "@/app/review/page";

type States = {
    component: Dispatch<SetStateAction<string>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>

    setCvData : Dispatch<SetStateAction<ResumeHolder |null>>
}

const UploadComp = (

    { component, count, setCount , setCvData }: States
) => {

    // const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (file) {
            setSelectedFile(file);
            // setIsSubmitted(false);
        }
    }

    function removeFile() {
        setSelectedFile(null);

        if (fileRef.current) {
            fileRef.current.value = "";
        }
    }

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();

    //     if (!selectedFile || !jobDescription.trim()) return;

    //     setIsSubmitted(true);
    // }



    const fileRef = useRef<HTMLInputElement>(null)
    // const textRef = useRef<HTMLTextAreaElement | null>(null)

    const review = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        
        component('Loading')


        const file = fileRef.current?.files?.[0];
        const text = jobDescription;

        console.log("File:", file);
        console.log("Text:", text);

        const formData = new FormData();
        if (file) formData.append("file", file);
        if (text) formData.append("jobDescription", text);


        console.log(formData)
        try {
            await new Promise(resolve => setTimeout(resolve,500))
            setCount(1)

            await new Promise(resolve => setTimeout(resolve,500))
            setCount(2)


            const res = await axios.post("/api/review", formData);
            console.log("Response:", res.data);
            setCvData(res.data.data)
            if (fileRef.current) {
                fileRef.current.value = "";
            }
            setJobDescription('')

            await new Promise(resolve => setTimeout(resolve,700))
            setCount(3)

            await new Promise(resolve => setTimeout(resolve,1000))
            component('result')
        }
        catch (err: any) {
            console.error("Error:", err);
        }
        

    }



    return (
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24">

            {/* Header */}
            <div className="mb-10 text-center">
                <span className="inline-flex rounded-full border border-[#BFD7EE] bg-[#EAF3FF] px-4 py-2 text-sm font-semibold text-[#2F80ED]">
                    CV Review
                </span>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#123B5D] sm:text-5xl">
                    Compare your CV with a job.
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                    Upload your CV and paste the job description to see how well
                    they match and where you can improve.
                </p>
            </div>

            {/* Form */}
            <form
                // onSubmit={handleSubmit}
                onSubmit={review}
                className="rounded-2xl border-2 border-[#D3DEE8] bg-[#F8FAFC] p-6 shadow-[0_15px_45px_rgba(18,59,93,0.10)] sm:p-8"
            >
                {/* Two columns */}
                <div className="grid gap-6 lg:grid-cols-2">

                    {/* CV Upload */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <label
                                // onClick={counting}
                                htmlFor="cv-upload"
                                className="text-sm font-bold text-[#123B5D]"
                            >
                                Your CV
                            </label>

                            <span className="text-xs font-medium text-gray-500">
                                PDF or DOCX
                            </span>
                        </div>

                        <input
                            ref={fileRef}
                            id="cv-upload"
                            type="file"
                            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            className="sr-only"
                        />

                        {selectedFile ? (
                            <div className="flex min-h-[250px] items-center justify-center rounded-xl border-2 border-[#BFD7EE] bg-white p-6">
                                <div className="flex w-full items-center justify-between gap-4">
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF]">
                                            <FileText className="h-5 w-5 text-[#2F80ED]" />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-[#123B5D]">
                                                {selectedFile.name}
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                Ready to review
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="rounded-lg border border-gray-200 p-2 text-gray-400 transition hover:bg-gray-50 hover:text-[#123B5D]"
                                        aria-label="Remove CV"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => fileRef.current?.click()}
                                className="group flex min-h-[250px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#B8C9D8] bg-white px-6 text-center transition-all duration-200 hover:border-[#2F80ED] hover:bg-[#F8FBFF] hover:shadow-sm"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9DDED] bg-[#EAF3FF]">
                                    <Upload className="h-5 w-5 text-[#2F80ED] transition-transform duration-200 group-hover:-translate-y-1" />
                                </div>

                                <p className="mt-4 text-sm font-bold text-[#123B5D]">
                                    Upload your CV
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Click to browse your files
                                </p>
                            </button>
                        )}
                    </div>

                    {/* Job Description */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <label
                                htmlFor="job-description"
                                className="text-sm font-bold text-[#123B5D]"
                            >
                                Job description
                            </label>

                            <span className="text-xs font-medium text-gray-500">
                                Required
                            </span>
                        </div>

                        <textarea
                            id="job-description"
                            value={jobDescription}
                            onChange={(event) => {
                                setJobDescription(event.target.value);
                                // setIsSubmitted(false);
                            }}
                            placeholder="Paste the job description here..."
                            className="min-h-[250px] w-full resize-none rounded-xl border-2 border-[#D3DEE8] bg-white px-4 py-4 text-sm leading-6 text-[#123B5D] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#2F80ED] focus:ring-4 focus:ring-[#2F80ED]/10"
                        />
                    </div>

                </div>

                {/* Submit */}
                <div className="mt-6 border-t border-[#D3DEE8] pt-6">
                    <button
                        // onClick={review}
                        type="submit"
                        disabled={!selectedFile || !jobDescription.trim()}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#123B5D] px-6 py-4 text-sm font-bold text-white shadow-md shadow-[#123B5D]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0D2E49] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                    >
                        {selectedFile || jobDescription.trim() ? (
                            <>
                                <Check className="h-4 w-4" />
                                Ready to Review
                            </>
                        ) : (
                            <>
                                Review My CV
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </button>

                    <p className="mt-3 text-center text-xs text-gray-500">
                        Upload your CV and add a job description to continue.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default UploadComp