import { useMemo, useState } from "react";

const profiles = [
  {
    name: "Landing page rescue",
    metric: "LCP",
    before: 4.8,
    after: 2.1,
    impact:
      "Faster first impressions, better conversion odds, less paid traffic waste.",
  },
  {
    name: "CMS-heavy marketing site",
    metric: "CLS",
    before: 0.31,
    after: 0.04,
    impact:
      "More stable layout, stronger trust signal, fewer rage clicks during navigation.",
  },
  {
    name: "Content hub refactor",
    metric: "JS payload",
    before: 312,
    after: 118,
    impact:
      "Leaner hydration, better mid-tier mobile performance, easier long-term maintenance.",
  },
];

export default function PerformanceDial() {
  const [selected, setSelected] = useState(0);
  const profile = profiles[selected];
  const delta = useMemo(() => {
    const drop = ((profile.before - profile.after) / profile.before) * 100;
    return Math.round(drop);
  }, [profile]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mint)]">
            Interactive island
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Performance storytelling that a client can understand
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
            Client demonstration: This small React island turns raw metrics into
            client-friendly narrative. It demonstrates Astro islands, restrained
            interactivity, and the ability to translate technical work into
            business outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {profiles.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelected(index)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selected === index
                    ? "border-[var(--color-mint)] bg-[var(--color-mint)]/12 text-white"
                    : "border-white/10 bg-white/4 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-white/60">Focus metric</p>
              <h4 className="text-2xl font-semibold text-white">
                {profile.metric}
              </h4>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/60">Improvement</p>
              <p className="text-3xl font-semibold text-[var(--color-mint)]">
                {delta}%
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,120,82,0.08)] p-4">
              <p className="text-sm text-white/60">Before</p>
              <p className="mt-2 text-4xl font-semibold text-white">
                {profile.before}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(105,255,226,0.08)] p-4">
              <p className="text-sm text-white/60">After</p>
              <p className="mt-2 text-4xl font-semibold text-white">
                {profile.after}
              </p>
            </div>
          </div>

          <p className="rounded-[1.5rem] border border-white/10 bg-white/3 p-4 text-sm leading-7 text-white/78">
            {profile.impact}
          </p>
        </div>
      </div>
    </section>
  );
}
