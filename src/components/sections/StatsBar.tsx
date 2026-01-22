import { Sparkles } from "lucide-react";

const stats = [
  { value: "4.9/5", label: "Ocena klientów" },
  { value: "20+ Lat", label: "Tradycji rzemieślniczej" },
];

export function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-midnight-dark relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 text-center px-4"
            >
              <span className="text-4xl font-serif text-primary">{stat.value}</span>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-2 text-center px-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xl font-medium text-white">99% Bezpyłowo</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Technologia Bona Deep Clean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
