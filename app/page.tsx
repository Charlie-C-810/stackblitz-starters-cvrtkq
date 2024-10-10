import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Time to get stared</h1>
      <p>
        <Link href="/meals">meals</Link>
      </p>
      <p>
        <Link href="/meals/share">meals share</Link>
      </p>
      <p>
        <Link href="/community">community</Link>
      </p>
    </main>
  );
}
