// 'use client'


// import { useRef, useState } from 'react'
// import { ArrowUpRight, BriefcaseBusiness, Check, FileText, Upload, X } from 'lucide-react'

// const navItems = ['Home', 'Upload CV', 'Contacts']

// export function MatchAJobHome() {
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [jobDescription, setJobDescription] = useState('')
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const file = event.target.files?.[0]
//     if (file) {
//       setSelectedFile(file)
//       setIsSubmitted(false)
//     }
//   }

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsSubmitted(true)
//   }

//   return (
//     <main className="min-h-screen overflow-hidden bg-background text-foreground">
//       <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8 lg:px-12">
//         <header className="flex items-center justify-between border-b border-border py-6">
//           <a href="#top" className="flex items-center gap-2.5" aria-label="MatchAJob home">
//             <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//               <BriefcaseBusiness className="size-4" aria-hidden="true" />
//             </span>
//             <span className="font-sans text-lg font-semibold tracking-tight">MatchAJob</span>
//           </a>
//           <nav aria-label="Main navigation">
//             <ul className="flex items-center gap-5 text-sm font-medium text-muted-foreground sm:gap-8">
//               {navItems.map((item) => (
//                 <li key={item}>
//                   <a
//                     href={item === 'Home' ? '#top' : '#reviewer'}
//                     className="transition-colors hover:text-foreground"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </header>

//         <section id="top" className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
//           <div className="max-w-xl">
//             <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
//               <span className="h-px w-8 bg-primary" />
//               Career clarity, simplified
//             </p>
//             <h1 className="max-w-2xl text-balance font-sans text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
//               CV reviewer against a job description.
//             </h1>
//             <p className="mt-7 max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
//               Upload your CV, add the role you want, and see what stands between you and your next interview.
//             </p>
//             <p className="mt-3 max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
//               MatchAJob highlights your strongest matches and gives you practical ways to improve.
//             </p>
//             <a href="#reviewer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
//               Review my CV
//               <ArrowUpRight className="size-4" aria-hidden="true" />
//             </a>
//           </div>

//           <form id="reviewer" onSubmit={handleSubmit} className="relative rounded-[2rem] border border-border bg-card p-4 shadow-[0_24px_70px_-35px_var(--primary)] sm:p-6">
//             <div className="rounded-[1.5rem] bg-secondary/60 p-5 sm:p-7">
//               <div className="mb-6 flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start your review</p>
//                   <h2 className="mt-2 text-2xl font-semibold tracking-tight">Bring your application into focus.</h2>
//                 </div>
//                 <span className="hidden rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground sm:block">2 steps</span>
//               </div>

//               <div className="space-y-5">
//                 <div>
//                   <label htmlFor="cv-upload" className="mb-2 flex items-center justify-between text-sm font-semibold">
//                     <span>Your CV</span>
//                     <span className="font-normal text-muted-foreground">PDF or DOCX</span>
//                   </label>
//                   <input ref={fileInputRef} id="cv-upload" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} className="sr-only" />
//                   {selectedFile ? (
//                     <div className="flex items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-background px-4 py-4">
//                       <div className="flex min-w-0 items-center gap-3">
//                         <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><FileText className="size-5" aria-hidden="true" /></span>
//                         <div className="min-w-0"><p className="truncate text-sm font-semibold">{selectedFile.name}</p><p className="text-xs text-muted-foreground">Ready to review</p></div>
//                       </div>
//                       <button type="button" onClick={() => { setSelectedFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Remove selected CV"><X className="size-4" /></button>
//                     </div>
//                   ) : (
//                     <button type="button" onClick={() => fileInputRef.current?.click()} className="group flex w-full items-center gap-4 rounded-2xl border border-dashed border-input bg-background px-4 py-5 text-left transition-colors hover:border-primary hover:bg-background/80">
//                       <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Upload className="size-5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" /></span>
//                       <span><span className="block text-sm font-semibold">Upload your CV</span><span className="mt-1 block text-xs text-muted-foreground">Drop a file here or browse from your device</span></span>
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="job-description" className="mb-2 block text-sm font-semibold">Job description</label>
//                   <textarea id="job-description" value={jobDescription} onChange={(event) => { setJobDescription(event.target.value); setIsSubmitted(false) }} placeholder="Paste the job description here..." rows={7} className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-4 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20" />
//                 </div>

//                 <button type="submit" disabled={!selectedFile || !jobDescription.trim()} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none">
//                   {isSubmitted ? <><Check className="size-4" aria-hidden="true" /> Ready to review</> : <>Upload & review <ArrowUpRight className="size-4" aria-hidden="true" /></>}
//                 </button>
//                 <p className="text-center text-xs text-muted-foreground">Your documents stay private and are only used for this review.</p>
//               </div>
//             </div>
//           </form>
//         </section>

//         <footer className="flex flex-col gap-2 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
//           <span>Make every application count.</span>
//           <span>MatchAJob / CV intelligence</span>
//         </footer>
//       </div>
//     </main>
//   )
// }




// const Navbar = () => {
//     return (
//         <div className="flex justify-between items-center px-15 py-7 border-b-1 border-[#E5E5E5]">
//             <div className="flex items-center gap-3.5">
//                 <span className="p-3 bg-[#003266] rounded-[16px]"><BriefcaseBusiness className=" text-[#fff]"/></span>
//                 <h1 className="font-sans text-lg font-semibold tracking-tight">MatchAJob</h1>
//             </div>

//             <div>
//                 <ul className="flex font-semibold text-[#46779A] gap-10 text-[15px]">
//                     <li>Home</li>
//                     <li>Upload CV</li>
//                     <li>Contacts</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar



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
                        href="#contact"
                        className="text-sm font-medium text-gray-500 transition hover:text-[#2F80ED]"
                    >
                        Contact
                    </a>

                    {/* CTA */}
                    <a
                        href="#upload"
                        className="group flex items-center gap-2 rounded-lg bg-[#123B5D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0D2E49]"
                    >
                        Review Your CV
                        <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>

            </div>
        </nav>
    );
}