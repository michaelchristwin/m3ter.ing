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

const description =
  "M3tering Protocol is the decentralized protocol accelerating solar energy adoption and sustainable development across Africa through innovative solutions.";
const ogImage = "https://m3ter.ing/images/og_image2.png";
const url = "https://m3ter.ing/";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "M3tering Protocol",
    },
    {
      description: description,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    { property: "og:site_name", content: "M3tering Protocol" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "M3tering Protocol",
    },
    {
      property: "og:description",
      content:
        "The decentralized protocol that's driving solar energy adoption in Africa.",
    },
    {
      property: "og:image",
      content: ogImage,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:domain",
      content: "m3ter.ing",
    },
    { property: "twitter:url", content: url },
    { name: "twitter:title", content: "M3tering Protocol" },

    {
      name: "twitter:description",
      content:
        "The decentralized protocol that's driving solar energy adoption in Africa.",
    },
    { name: "twitter:image", content: ogImage },
  ];
};

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
