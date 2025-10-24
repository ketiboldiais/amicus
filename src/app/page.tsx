import Link from "next/link";
import { law_links, math_links, cs_links } from "./links";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Amicus</h1>
        <article className="article-main">
          <p>
            This is a collection of my notes and outlines from undergrad and law
            school. I studied math and philosophy as an undergrad at the <Link target="rel" href="https://en.wikipedia.org/wiki/University_of_Illinois_Urbana-Champaign">University of Illinois</Link> before pursuing my JD at <Link target="rel" href="https://en.wikipedia.org/wiki/University_of_Wisconsin_Law_School">UW Madison</Link>—I hope anyone else following this path finds these resources helpful! 
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
          <h2>CS Notes</h2>
          <p>Most of my undergrad work focused on logic and mathematics—I spent a lot of time with computers. Below are some computer science (CS) related notes accumulated over the years.</p>
          <ol>
            {cs_links.map((entry) => (
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
      <footer>Ketib Oldiais © 2025</footer>
    </div>
  );
}
