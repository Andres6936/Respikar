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
import React, {useLayoutEffect, useState} from "react";
import type {User} from "~/types/User";
import {MasterCSS} from "@master/css";
import config from '../master.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// Suppress useLayoutEffect warnings when running outside a browser
if (typeof window === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useLayoutEffect(() => {
    new MasterCSS(config)
  })

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
      <body className={"flex flex:col min-h:100vh min-w:100vh"}>
        <Outlet context={{user, setUser}} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="/js/Chart.bundle.js"></script>
      </body>
    </html>
  );
}
