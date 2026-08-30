



import { BriefcaseBusiness, ArrowRight, } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B5D]">
                        <BriefcaseBusiness className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-lg font-bold tracking-tight text-[#123B5D]">
                        Match<span className="text-[#2F80ED]">A</span>Job
                    </span>
                </div>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href={'/'}>
                        <h2
                            className="text-sm font-medium text-[#123B5D] transition hover:text-[#2F80ED]"
                        >
                            Home
                        </h2>
                    </Link>

                    <Link href={'/review'}>
                        <h2
                            className="text-sm font-medium text-gray-500 transition hover:text-[#2F80ED]"
                        >
                            Upload CV
                        </h2>
                    </Link>



                    <a
                        href="#target-section"
                        className="text-sm font-medium text-gray-500 transition hover:text-[#2F80ED]"
                    >
                        How it Works
                    </a>

                    {/* CTA */}
                    {/* <a
                        href="#upload"
                        className="group flex items-center gap-2 rounded-lg bg-[#123B5D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0D2E49]"
                    >
                        Review Your CV
                        <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a> */}
                </div>

            </div>
        </nav>
    );
}