import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
      <div className="bg-red-500 p-4">
        <h1 className="text-white">Tailwind CSS is Working!</h1>
      </div>

        <h1>Welcome to My MVP App</h1>
        <p>This is the homepage of my quick MVP!</p>

        <Link href="/Generator">
          <span className="block text-xl bg-parchment hover:bg-mysticBrown hover:text-white transition-colors duration-300 border-2 border-mysticBrown rounded-lg px-4 py-2">
            Go to the NPC Generator Page
          </span>
        </Link>

        <Link href="/Generator">
          <span className="block text-xl bg-parchment hover:bg-mysticBrown hover:text-white transition-colors duration-300 border-2 border-mysticBrown rounded-lg px-4 py-2">
            Go to the Dungeon Generator Page
          </span>
        </Link>

        <Link href="/Generator">
          <span className="block text-xl bg-parchment hover:bg-mysticBrown hover:text-white transition-colors duration-300 border-2 border-mysticBrown rounded-lg px-4 py-2">
            Go to the Encounter Generator Page
          </span>
        </Link>
      </div>
    </main>
  );
}
