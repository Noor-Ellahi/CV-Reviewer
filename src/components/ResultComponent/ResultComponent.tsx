import { FileText, RefreshCw, Target, ShieldCheck, Gauge, Check, CircleCheck, CircleAlert, ListChecks, Lightbulb } from "lucide-react"

// Comps
import { ScoreCircle } from "../ScoreCircle"
import { MetricCard } from "../MetricCard"
import { Dispatch, SetStateAction } from "react"
import { ResumeHolder } from "@/app/review/page"
import { Improvement, InsightPanel, Keyword, MiniStat, Panel, PanelHeader, Requirement } from "../Panel"


type States = {
    cvData: ResumeHolder | null
}

export const ResultComponent = (
    { cvData }: States
) => {


    return (
        // <div>
        <main className="min-h-screen bg-[#F8FAFC] text-[#17324D]">
            <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

                <section className="mb-8 pt-10 flex flex-col justify-between gap-6 border-b border-[#D8E1EA] pb-8 md:flex-row md:items-end">

                    <div>
                        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
                            <FileText className="h-4 w-4" />
                            CV Review
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {/* {reviewData.role} */}
                            {/* Full Stack Developer */}
                            {cvData?.impInfo.jobRole}
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            {/* {reviewData.company} · {reviewData.fileName} */}
                            {/* Tech Company: NoorElahi_CV.pdf */}
                            {cvData?.impInfo.companyName + ": " + cvData?.impInfo.pdfName}
                        </p>
                    </div>

                    {/* <button
                        className="inline-flex items-center justify-center gap-2 rounded-lg
            border border-[#C9D5E0] bg-white px-4 py-2.5
            text-sm font-semibold text-[#17324D]
            shadow-sm transition hover:border-[#3B82F6]/40 hover:bg-[#EFF6FF]"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Review Again
                    </button> */}

                </section>

                <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr] ">

                    {/* Overall Score */}
                    <div className="rounded-xl border border-[#D8E1EA] bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-6">

                            {/* <ScoreCircle score={reviewData.overallScore} /> */}
                            <ScoreCircle score={cvData?.overallScore?.score} />


                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                                    Overall score
                                </p>

                                <h2 className="mt-2 text-xl font-bold">
                                    {/* Strong match */}
                                    {cvData?.overallScore.title}
                                </h2>

                                <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                    {/* Your CV is well aligned with this position, with a few
                                areas worth improving. */}
                                    {cvData?.overallScore.point}
                                </p>
                            </div>

                        </div>
                    </div>

                    <MetricCard
                        icon={<Target className="h-4 w-4" />}
                        label="Job match"
                        // value={`${reviewData.jobMatch}%`}
                        value={`${cvData?.jobMatch.score}%`}
                        // note="Strong alignment"
                        note={cvData?.jobMatch.title}
                        // progress={reviewData.jobMatch}
                        progress={cvData?.jobMatch.score}


                    />

                    <MetricCard
                        icon={<ShieldCheck className="h-4 w-4" />}
                        label="ATS readability"
                        // value={`${reviewData.atsScore}%`}
                        value={`${cvData?.atsScore.score}%`}
                        // note="Easy for ATS systems to parse"
                        note={cvData?.atsScore.title}
                        // progress={reviewData.atsScore}
                        progress={cvData?.atsScore.score}

                    />

                </section>


                <section className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* Summary */}
                    <Panel
                        icon={<Gauge className="h-4 w-4" />}
                        title="Executive summary"
                    >
                        <p className="text-sm leading-7 text-gray-600">
                            {/* {reviewData.summary} */}
                            {cvData?.summary}
                        </p>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <MiniStat
                                label="Job match"
                                value={`${cvData?.jobMatch.score}%`}
                            />

                            <MiniStat
                                label="ATS score"
                                value={`${cvData?.atsScore.score}%`}
                            />

                            <MiniStat
                                label="Keywords"
                                // value={`${18}/${18 + reviewData.missingKeywords.length}`}
                                value={`${cvData?.keywords.contains.length}/${(cvData?.keywords?.contains?.length ?? 0) + (cvData?.keywords?.missing?.length ?? 0)}`}

                            />
                        </div>
                    </Panel>


                    {/* CV */}
                    <Panel
                        icon={<FileText className="h-4 w-4" />}
                        title="Reviewed document"
                    >
                        <div className="flex items-center gap-4 rounded-lg border border-[#D8E1EA] bg-[#F8FAFC] p-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                                <FileText className="h-5 w-5 text-[#3B82F6]" />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">
                                    {cvData?.impInfo.pdfName}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Successfully analyzed
                                </p>
                            </div>

                            <Check className="ml-auto h-5 w-5 shrink-0 text-[#16805B]" />

                        </div>

                        <button className="mt-4 text-sm font-semibold text-[#3B82F6] hover:underline">
                            View uploaded CV
                        </button>
                    </Panel>

                </section>


                <section className="mt-4 grid gap-4 lg:grid-cols-2">

                    <InsightPanel
                        title="What's working"
                        icon={<CircleCheck className="h-4 w-4 text-[#16805B]" />}
                        items={cvData?.strengths || []}
                        positive
                    />

                    <InsightPanel
                        title="What to strengthen"
                        icon={<CircleAlert className="h-4 w-4 text-[#C47A16]" />}
                        items={cvData?.weaknesses || []}
                    />

                </section>


                <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

                    <PanelHeader
                        icon={<ListChecks className="h-4 w-4" />}
                        title="Keyword match"
                        description="Important terms found in the job description."
                    />

                    <div className="flex flex-wrap gap-2 px-6 pb-6">

                        {/* <Keyword text="React" found />
                        <Keyword text="Next.js" found />
                        <Keyword text="TypeScript" found />
                        <Keyword text="JavaScript" found />

                        {reviewData.missingKeywords.map((keyword) => (
                            <Keyword
                                key={keyword}
                                text={keyword}
                                found={false}
                            />
                        ))} */}

                        {
                            cvData?.keywords?.contains ? (
                                cvData.keywords.contains.map((it, key) => {
                                    return (
                                        <Keyword text={it} key={key} found />
                                    )
                                })
                            )
                                : (null)
                        }
                        {
                            cvData?.keywords?.missing ? (
                                cvData.keywords.missing.map((it, key) => {
                                    return (
                                        <Keyword text={it} key={key} found={false} />
                                    )
                                })
                            )
                                : (null)
                        }

                    </div>
                </section>


                <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

                    <PanelHeader
                        icon={<Target className="h-4 w-4" />}
                        title="Job requirements"
                        description="How your CV lines up with the role."
                    />

                    <div className="grid md:grid-cols-2">

                        {
                            cvData?.jobRequirements.matched[0] ? (
                                <Requirement
                                    // title="React / Next.js"
                                    title={cvData?.jobRequirements.matched[0].skill}
                                    status="Matched"
                                    type="match"
                                    detail={cvData?.jobRequirements.matched[0].pointAboutSkill}
                                // detail="Strong experience shown in your projects."
                                />
                            ) : (null)
                        }
                        {
                            cvData?.jobRequirements.matched[1] ? (
                                <Requirement
                                    // title="React / Next.js"
                                    title={cvData?.jobRequirements.matched[1].skill}
                                    status="Matched"
                                    type="match"
                                    detail={cvData?.jobRequirements.matched[1].pointAboutSkill}
                                // detail="Strong experience shown in your projects."
                                />
                            ) : (


                                <Requirement
                                    // title="React / Next.js"
                                    title={cvData?.jobRequirements.missing[1].skill}
                                    status="Missing"
                                    type="gap"
                                    detail={cvData?.jobRequirements.missing[1].pointAboutSkill}
                                // detail="Strong experience shown in your projects."
                                />


                            )
                        }

                        {/* <Requirement
                            title="TypeScript"
                            status="Matched"
                            type="match"
                            detail="Clearly represented in your technical skills."
                        /> */}

                        {/* <Requirement
                            title="Testing"
                            status="Partial"
                            type="partial"
                            detail="Could be highlighted more clearly."
                        /> */}

                        {
                            cvData?.jobRequirements.partial[0] ? (
                                <Requirement
                                    // title="React / Next.js"
                                    title={cvData?.jobRequirements.partial[0].skill}
                                    status="Partial"
                                    type="partial"
                                    detail={cvData?.jobRequirements.partial[0].pointAboutSkill}
                                // detail="Strong experience shown in your projects."
                                />
                            ) : (null)
                        }

                        {/* <Requirement
                            title="AWS / Cloud"
                            status="Missing"
                            type="gap"
                            detail="Not clearly found in your CV."
                        /> */}

                        {
                            cvData?.jobRequirements.missing[0] ? (
                                <Requirement
                                    // title="React / Next.js"
                                    title={cvData?.jobRequirements.missing[0].skill}
                                    status="Missing"
                                    type="gap"
                                    detail={cvData?.jobRequirements.missing[0].pointAboutSkill}
                                // detail="Strong experience shown in your projects."
                                />
                            ) : (null)
                        }


                    </div>
                </section>


                <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

                    <PanelHeader
                        icon={<Lightbulb className="h-4 w-4" />}
                        title="Recommended improvements"
                        description="The highest-impact changes you can make."
                    />

                    <div className="grid gap-3 px-6 pb-6 md:grid-cols-3">

                        <Improvement
                            number="01"
                            // title="Strengthen your summary"
                            title={ cvData?.improvements.topics[0].title}
                            // description="Make your opening summary directly reflect the role you're applying for."
                            description={cvData?.improvements.topics[0].points}
                        />

                        <Improvement
                            number="02"
                            title={ cvData?.improvements.topics[1].title}
                            description={cvData?.improvements.topics[1].points}
                        />

                        <Improvement
                            number="03"
                            title={ cvData?.improvements.topics[2].title}
                            description={cvData?.improvements.topics[2].points}
                        />

                    </div>
                </section>

                {/* </div> */}
            </div>
        </main>
    )
}