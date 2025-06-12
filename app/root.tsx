import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

const description =
  "M3tering Protocol is the decentralized protocol accelerating solar energy adoption and sustainable development across Africa through innovative solutions.";
const ogImage = "https://m3ter.ing/images/og_image2.png";
const url = "https://m3ter.ing/";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playwrite+HR:wght@100..400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
];

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "M3tering Protocol",
    },
    {
      description,
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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
