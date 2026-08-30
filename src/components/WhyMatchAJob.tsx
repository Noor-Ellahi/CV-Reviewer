export default function WhyMatchAJob() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-30  text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7C8F]">
                Why I built MatchAJob
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F2937] sm:text-4xl">
                Your CV shouldn&apos;t disappear into a black hole.
            </h2>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-[15px] leading-7 text-[#64748B] sm:text-base">
                <p>
                    Applying for jobs can feel like sending your CV into a
                    black hole. You apply, wait, and often have no idea whether
                    your CV actually matches what the company is looking for.
                </p>

                <p>
                    I built{" "}
                    <span className="font-medium text-[#334155]">
                        MatchAJob
                    </span>{" "}
                    to make that process a little more transparent. It
                    analyzes your CV against a specific job description and
                    gives you practical feedback on what matches, what&apos;s
                    missing, and what you can improve before hitting{" "}
                    <span className="font-medium text-[#334155]">
                        Apply
                    </span>
                    .
                </p>
            </div>
        </section>
    );
}