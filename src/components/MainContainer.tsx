import Scene from "./Scene";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <div className="relative h-screen bg-gradient-to-b from-purple-900 via-indigo-800 to-black">
        <Scene/>
      </div>
    </main>
  );
}
