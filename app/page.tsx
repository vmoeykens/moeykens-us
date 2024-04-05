import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/logo.svg"
          alt="moeykens"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-2xl ...">moeykens.us</p>
      </div>
    </main>
  );
}
