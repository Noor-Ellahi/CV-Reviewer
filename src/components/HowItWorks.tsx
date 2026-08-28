function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload your CV",
      description:
        "Upload your CV in PDF format and let MatchAJob extract the important information from your document.",
    },
    {
      number: "02",
      title: "Add a job description",
      description:
        "Paste the job description for the role you're applying to so we know exactly what your CV needs to match.",
    },
    {
      number: "03",
      title: "AI reviews your CV",
      description:
        "Our AI analyzes your CV against the job description, looking at skills, experience, keywords, and overall relevance.",
    },
    {
      number: "04",
      title: "Get your results",
      description:
        "See your job match and ATS scores, strengths, weaknesses, missing keywords, and practical suggestions to improve your CV.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold text-[#3B82F6]">
          HOW IT WORKS
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Get your CV ready for the job
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
          MatchAJob compares your CV with the job you're applying for.
          It identifies what works, what is missing, and what you can
          improve before sending your application.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-[#D8E1EA] bg-white p-5 shadow-sm"
          >
            <span className="text-sm font-bold text-[#3B82F6]">
              {step.number}
            </span>

            <h3 className="mt-4 text-sm font-bold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks