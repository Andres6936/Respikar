import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Respikar</title>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <Meta />
        <Links />
      </head>
      <body className={"d-flex flex-column h-100 mx-lg-auto"}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="/js/Chart.bundle.js"></script>
      </body>
    </html>
  );
}
