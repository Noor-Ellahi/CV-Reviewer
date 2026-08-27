"use client";

import {
  ArrowRight,
  Check,
  CircleAlert,
  CircleCheck,
  FileText,
  Gauge,
  Lightbulb,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";

type ReviewData = {
  role: string;
  company?: string;
  fileName: string;
  overallScore: number;
  jobMatch: number;
  atsScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  missingKeywords: string[];
};

const reviewData: ReviewData = {
  role: "Frontend Developer",
  company: "Tech Company",
  fileName: "Noor_Ellahi_CV.pdf",

  overallScore: 84,
  jobMatch: 88,
  atsScore: 91,

  summary:
    "Your CV is a strong match for this role. Your experience with React, Next.js and modern JavaScript aligns well with the position, but a few areas could be strengthened before applying.",

  strengths: [
    "Strong React and Next.js experience",
    "Relevant full-stack project experience",
    "Good alignment with the technical requirements",
  ],

  weaknesses: [
    "Add more measurable results to your experience",
    "Highlight testing experience more clearly",
    "Strengthen your opening professional summary",
  ],

  missingKeywords: [
    "Docker",
    "AWS",
    "CI/CD",
    "Unit Testing",
  ],
};

export default function ReviewResult() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#17324D]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

        {/* HEADER */}
        <section className="mb-8 flex flex-col justify-between gap-6 border-b border-[#D8E1EA] pb-8 md:flex-row md:items-end">

          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              <FileText className="h-4 w-4" />
              CV Review
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {reviewData.role}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {reviewData.company} · {reviewData.fileName}
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

        <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr]">

          <div className="rounded-xl border border-[#D8E1EA] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6">

              <ScoreCircle score={reviewData.overallScore} />

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
            value={`${reviewData.jobMatch}%`}
            note="Strong alignment"
            progress={reviewData.jobMatch}
          />

          <MetricCard
            icon={<ShieldCheck className="h-4 w-4" />}
            label="ATS readability"
            value={`${reviewData.atsScore}%`}
            note="Easy for ATS systems to parse"
            progress={reviewData.atsScore}
          />

        </section>


        {/* SUMMARY + CV */}
        <section className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Summary */}
          <Panel
            icon={<Gauge className="h-4 w-4" />}
            title="Executive summary"
          >
            <p className="text-sm leading-7 text-gray-600">
              {reviewData.summary}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <MiniStat
                label="Job match"
                value={`${reviewData.jobMatch}%`}
              />

              <MiniStat
                label="ATS score"
                value={`${reviewData.atsScore}%`}
              />

              <MiniStat
                label="Keywords"
                value={`${18}/${18 + reviewData.missingKeywords.length}`}
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
                  {reviewData.fileName}
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


        {/* STRENGTHS + WEAKNESSES */}
        <section className="mt-4 grid gap-4 lg:grid-cols-2">

          <InsightPanel
            title="What's working"
            icon={<CircleCheck className="h-4 w-4 text-[#16805B]" />}
            items={reviewData.strengths}
            positive
          />

          <InsightPanel
            title="What to strengthen"
            icon={<CircleAlert className="h-4 w-4 text-[#C47A16]" />}
            items={reviewData.weaknesses}
          />

        </section>


        {/* KEYWORDS */}
        <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

          <PanelHeader
            icon={<ListChecks className="h-4 w-4" />}
            title="Keyword match"
            description="Important terms found in the job description."
          />

          <div className="flex flex-wrap gap-2 px-6 pb-6">

            <Keyword text="React" found />
            <Keyword text="Next.js" found />
            <Keyword text="TypeScript" found />
            <Keyword text="JavaScript" found />

            {reviewData.missingKeywords.map((keyword) => (
              <Keyword
                key={keyword}
                text={keyword}
                found={false}
              />
            ))}

          </div>
        </section>


        {/* REQUIREMENTS */}
        <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

          <PanelHeader
            icon={<Target className="h-4 w-4" />}
            title="Job requirements"
            description="How your CV lines up with the role."
          />

          <div className="grid md:grid-cols-2">

            <Requirement
              title="React / Next.js"
              status="Matched"
              type="match"
              detail="Strong experience shown in your projects."
            />

            <Requirement
              title="TypeScript"
              status="Matched"
              type="match"
              detail="Clearly represented in your technical skills."
            />

            <Requirement
              title="Testing"
              status="Partial"
              type="partial"
              detail="Could be highlighted more clearly."
            />

            <Requirement
              title="AWS / Cloud"
              status="Missing"
              type="gap"
              detail="Not clearly found in your CV."
            />

          </div>
        </section>


        {/* IMPROVEMENTS */}
        <section className="mt-4 rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

          <PanelHeader
            icon={<Lightbulb className="h-4 w-4" />}
            title="Recommended improvements"
            description="The highest-impact changes you can make."
          />

          <div className="grid gap-3 px-6 pb-6 md:grid-cols-3">

            <Improvement
              number="01"
              title="Strengthen your summary"
              description="Make your opening summary directly reflect the role you're applying for."
            />

            <Improvement
              number="02"
              title="Add missing keywords"
              description="Include relevant technologies only where they genuinely reflect your experience."
            />

            <Improvement
              number="03"
              title="Quantify your work"
              description="Add measurable outcomes to your strongest projects and experience."
            />

          </div>
        </section>


        {/* FOOTER CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#BFD7EE] bg-[#EFF6FF] p-6 sm:flex-row">

          <div>
            <p className="font-semibold">
              Ready to improve your CV?
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Make the changes and run the review again.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-lg bg-[#17324D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10283E]">
            Review Again
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

        </div>

      </div>
    </main>
  );
}


/* -------------------------------- */
/* COMPONENTS                       */
/* -------------------------------- */

function ScoreCircle({ score }: { score: number }) {
  return (
    <div
      className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#3B82F6 ${
          score * 3.6
        }deg, #E6EDF3 0deg)`,
      }}
    >
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
        <strong className="text-3xl font-bold">
          {score}
        </strong>

        <span className="text-xs text-gray-400">
          / 100
        </span>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  note,
  progress,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
  progress: number;
}) {
  return (
    <div className="rounded-xl border border-[#D8E1EA] bg-white p-6 shadow-sm">

      <div className="flex items-center gap-2 text-gray-500">
        {icon}

        <span className="text-xs font-bold uppercase tracking-[0.14em]">
          {label}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <strong className="text-3xl font-bold">
          {value}
        </strong>

        <span className="text-xs text-gray-400">
          {note}
        </span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E7EDF2]">
        <div
          className="h-full rounded-full bg-[#3B82F6]"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
}



function Panel({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl  border border-[#D8E1EA] bg-white  shadow-sm">

      <PanelHeader icon={icon} title={title} />

      <div className="px-6 pb-6">
        {children}
      </div>

    </section>
  );
}


function PanelHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-[#E4EAF0] px-6 py-5">

      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#3B82F6]">
        {icon}
      </div>

      <div>
        <h2 className="text-sm font-bold">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>
        )}
      </div>

    </div>
  );
}


function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[#D8E1EA] bg-[#F8FAFC] p-3">
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold">
        {value}
      </p>
    </div>
  );
}


function InsightPanel({
  title,
  icon,
  items,
  positive = false,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  positive?: boolean;
}) {
  return (
    <section className="rounded-xl border border-[#D8E1EA] bg-white shadow-sm">

      <div className="flex items-center gap-2 border-b border-[#E4EAF0] px-6 py-5">
        {icon}

        <h2 className="text-sm font-bold">
          {title}
        </h2>
      </div>

      <div className="space-y-1 p-3">

        {items.map((item) => (
          <div
            key={item}
            className={`flex gap-3 rounded-lg px-3 py-3 ${
              positive
                ? "hover:bg-[#F0FAF6]"
                : "hover:bg-[#FFF9EF]"
            }`}
          >
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                positive ? "bg-[#16805B]" : "bg-[#C47A16]"
              }`}
            />

            <p className="text-sm leading-6 text-gray-600">
              {item}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}


function Keyword({
  text,
  found,
}: {
  text: string;
  found: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
        found
          ? "border-[#BCE0D1] bg-[#F0FAF6] text-[#16805B]"
          : "border-[#F0D8B0] bg-[#FFF9EF] text-[#A96812]"
      }`}
    >
      {found ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <X className="h-3.5 w-3.5" />
      )}

      {text}
    </span>
  );
}


function Requirement({
  title,
  status,
  detail,
  type,
}: {
  title: string;
  status: string;
  detail: string;
  type: "match" | "partial" | "gap";
}) {
  const styles = {
    match: "text-[#16805B] bg-[#F0FAF6]",
    partial: "text-[#A96812] bg-[#FFF9EF]",
    gap: "text-[#B45309] bg-[#FFF9EF]",
  };

  return (
    <div className="border-b border-[#E4EAF0] p-5 last:border-b-0 md:nth-[odd]:border-r">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-sm font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            {detail}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[type]}`}
        >
          {status}
        </span>

      </div>

    </div>
  );
}


function Improvement({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#D8E1EA] bg-[#F8FAFC] p-5">

      <span className="font-mono text-xs font-bold text-[#3B82F6]">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-bold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {description}
      </p>

    </div>
  );
}   