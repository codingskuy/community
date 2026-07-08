export function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
      <Icon className="w-3.5 h-3.5 text-orange-400" />
      <span className="text-xs font-medium tracking-widest uppercase text-orange-400 shrink-0">{label}</span>
    </div>
  );
}
