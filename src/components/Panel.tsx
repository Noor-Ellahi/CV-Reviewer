import { Check, X } from "lucide-react";

export function Panel({
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


export function PanelHeader({
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


export function MiniStat({
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



export function InsightPanel({
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



export function Keyword({
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


export function Requirement({
  title,
  status,
  detail,
  type,
}: {
  title: string | any;
  status: string;
  detail: string | undefined;
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


export function Improvement({
  number,
  title,
  description,
}: {
  number: string;
  title: string | undefined; 
  description: string[] | undefined;
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