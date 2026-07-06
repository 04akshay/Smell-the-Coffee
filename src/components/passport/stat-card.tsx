export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="ambient-shadow rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6">
      <div className="mb-1 font-label-md text-label-md text-on-surface-variant">{label}</div>
      <div className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
        {value}
      </div>
    </div>
  );
}
