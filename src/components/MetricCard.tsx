export function MetricCard({
  icon,
  label,
  value,
  note,
  progress,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note?: string;
  progress?: number;
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