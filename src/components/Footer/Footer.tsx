import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-[#D8E1EA] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-[#003266]">
            MatchAJob
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Make your CV match the job.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a
            href="#target-section"
            className="transition hover:text-[#003266]"
          >
            How it works
          </a>

          <Link
            href="/review"
            className="transition hover:text-[#003266]"
          >
            Review CV
          </Link>

          <a
            href="#"
            className="transition hover:text-[#003266]"
          >
            Privacy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} MatchAJob
        </p>
      </div>
    </footer>
  );
}

export default Footer