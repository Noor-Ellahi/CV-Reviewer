import { FileText, RefreshCw, Target, ShieldCheck } from "lucide-react"

// Comps
import { ScoreCircle } from "../ScoreCircle"
import { MetricCard } from "../MetricCard"
import { Dispatch, SetStateAction } from "react"
import { ResumeHolder } from "@/app/review/page"


type States = {
    cvData : ResumeHolder | null
}

export const ResultComponent = (
    {cvData} : States
) => {


    return (
        <div>

            <section onClick={() => console.log(cvData)} className="mb-8 px-30 pt-10 flex flex-col justify-between gap-6 border-b border-[#D8E1EA] pb-8 md:flex-row md:items-end">

                <div>
                    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
                        <FileText className="h-4 w-4" />
                        CV Review
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {/* {reviewData.role} */}
                        Full Stack Developer
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        {/* {reviewData.company} · {reviewData.fileName} */}
                        Tech Company: NoorElahi_CV.pdf
                    </p>
                </div>

                <button
                    className="inline-flex items-center justify-center gap-2 rounded-lg
            border border-[#C9D5E0] bg-white px-4 py-2.5
            text-sm font-semibold text-[#17324D]
            shadow-sm transition hover:border-[#3B82F6]/40 hover:bg-[#EFF6FF]"
                >
                    <RefreshCw className="h-4 w-4" />
                    Review Again
                </button>

            </section>

            <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr] px-30 ">

                {/* Overall Score */}
                <div className="rounded-xl border border-[#D8E1EA] bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-6">

                        {/* <ScoreCircle score={reviewData.overallScore} /> */}
                        <ScoreCircle score={56} />


                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                                Overall score
                            </p>

                            <h2 className="mt-2 text-xl font-bold">
                                Strong match
                            </h2>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                Your CV is well aligned with this position, with a few
                                areas worth improving.
                            </p>
                        </div>

                    </div>
                </div>

                <MetricCard
                    icon={<Target className="h-4 w-4" />}
                    label="Job match"
                    // value={`${reviewData.jobMatch}%`}
                    value={`${66}%`}
                    note="Strong alignment"
                    // progress={reviewData.jobMatch}
                    progress={66}


                />

                <MetricCard
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="ATS readability"
                    // value={`${reviewData.atsScore}%`}
                    value={`${77}%`}
                    note="Easy for ATS systems to parse"
                    // progress={reviewData.atsScore}
                    progress={77}

                />

            </section>


        </div>
    )
}