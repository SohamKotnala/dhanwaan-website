// app/components/StatCard.tsx
export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/5 px-8 py-6 text-center text-white shadow-[0_6px_30px_-10px_rgba(0,0,0,.5)] backdrop-blur">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-white/75 mt-1 text-sm">{title}</div>
    </div>
  );
}
