"use client";
import { useState } from "react";
import { Markdown } from "./Markdown";

export function Publications({
  groups,
  allLabel,
}: {
  groups: { id: string; title: string; body: string }[];
  allLabel: string;
}) {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? groups : groups.filter((g) => g.id === active);
  const btn = (on: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-medium transition ${
      on ? "bg-yellow-500 text-ink-950" : "border border-ink-700 text-ink-100 hover:border-yellow-500"
    }`;
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="flex flex-wrap justify-center gap-2">
        <button className={btn(active === "all")} onClick={() => setActive("all")}>
          {allLabel}
        </button>
        {groups.map((g) => (
          <button key={g.id} className={btn(active === g.id)} onClick={() => setActive(g.id)}>
            {g.title}
          </button>
        ))}
      </div>
      <div className="mt-10 space-y-14">
        {shown.map((g) => (
          <section key={g.id} id={g.id}>
            <h2 className="mb-4 text-2xl font-bold text-white">{g.title}</h2>
            <Markdown>{g.body}</Markdown>
          </section>
        ))}
      </div>
    </div>
  );
}
