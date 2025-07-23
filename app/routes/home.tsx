import { lazy, useRef } from "react";
import type { Route } from "./+types/home";
const Hero = lazy(() => import("~/components/sections/Hero"));
const Section2 = lazy(() => import("~/components/sections/Section2"));
const MetricsSection = lazy(
  () => import("~/components/sections/MetricsSection")
);
const CompaniesSection = lazy(
  () => import("~/components/sections/CompaniesSection")
);
const M3teringApplications = lazy(
  () => import("~/components/sections/M3teringApplications")
);
const Footer = lazy(() => import("~/components/Footer"));

const sections = [
  Hero,
  Section2,
  MetricsSection,
  CompaniesSection,
  M3teringApplications,
  Footer,
];

const ogImage = "https://m3ter.ing/images/og_image2.png";
const url = "https://m3ter.ing/";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "M3tering Protocol",
    },
    {
      name:"description",
        content:"M3tering Protocol is the decentralized protocol accelerating solar energy adoption and sustainable development across Africa through innovative solutions.",
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
    {
      name: "google-site-verification",
      content: "KdoyUSdDkzaeKXZMy3Ir0aRWGHj_L5RY2-MO88PnyFY",
    },
  ];
};

export default function Home() {
  const container = useRef<HTMLElement>(null);

  return (
    <main className="home" ref={container}>
      {sections.map((Component, i) => (
        <Component key={i.toString()} />
      ))}
    </main>
  );
}
