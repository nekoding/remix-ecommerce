import {
  Links,
  LiveReload,
  Meta,
  Scripts,
} from "remix";

export function meta() {
  return { title: "New Remix App" };
}

// setup style css
import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <p className="font-sans font-bold text-blue-600">Hello world</p>
        </div>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
