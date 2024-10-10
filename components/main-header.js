import Link from "next/link";
import logo from "@/assets/logo.png"

export default function MainHeader() {
  return (
    <>
      <header>
        <Link href="/">
          <img src={logo.src}></img>
          Nextlevel Food</Link>
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
