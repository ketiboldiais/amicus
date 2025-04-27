import Link from "next/link";
import { law_links, math_links } from "./links";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Amicus</h1>
        <article className="article-main">
          <p>
            This is a collection of my notes and outlines from undergrad and law
            school. I was a math/philosophy major as an undergrad before pursuing my JD—I hope anyone else following this path finds these resources helpful! 
          </p>
          <h2>Math/Philosophy Notes</h2>
          <p>These are notes from my undergrad math and philosophy courses.</p>
          <ol>
            {math_links.map((entry) => (
              <li key={entry.url}>
                <Link href={entry.url}>{entry.title}</Link>
              </li>
            ))}
          </ol>
          <h2>Law School Outlines</h2>
          <p>These are the outlines I made during law school.</p>
          <ol>
            {law_links.map((entry) => (
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
