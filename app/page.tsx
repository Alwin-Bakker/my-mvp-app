import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My MVP App</h1>
      <p>This is the homepage of my quick MVP!</p>
      <Link href="/Generator" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to the Generator Page
      </Link>
    </main>
  );
}
