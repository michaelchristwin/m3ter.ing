import { useRef } from "react";
import type { Route } from "./+types/home";
import Hero from "~/components/sections/Hero";
import Section2 from "~/components/sections/Section2";
import MetricsSection from "~/components/sections/MetricsSection";
import CompaniesSection from "~/components/sections/CompaniesSection";
import M3teringApplications from "~/components/sections/M3teringApplications";
import Footer from "~/components/Footer";

const sections = [
  Hero,
  Section2,
  MetricsSection,
  CompaniesSection,
  M3teringApplications,
  Footer,
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "M3tering Protocol" },
    {
      name: "description",
      content:
        "The decentralized protocol that's driving solar energy adoption in Africa.",
    },
  ];
}

export default function Home() {
  const container = useRef<HTMLElement>(null);

  return (
    <main className="home" ref={container}>
      {sections.map((Component, i) => (
        <Component key={i} />
      ))}
    </main>
  );
}
