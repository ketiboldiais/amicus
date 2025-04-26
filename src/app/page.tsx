import Link from "next/link";
import { links } from "./links";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Oldi&apos;s Outlines</h1>
        <article className="article-main">
          <p>This is a collection of my law school notes and outlines.</p>
          <ol>
            {links.map((entry) => (
              <li key={entry.url}>
                <Link href={entry.url}>{entry.title}</Link>
              </li>
            ))}
          </ol>
        </article>
      </main>
      <footer>Ketib Oldiais © 2024</footer>
    </div>
  );
}
