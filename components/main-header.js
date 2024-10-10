import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header>
        <Link href="/">Nextlevel Food</Link>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
