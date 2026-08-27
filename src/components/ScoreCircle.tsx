
export function ScoreCircle({ score }: { score: number }) {
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