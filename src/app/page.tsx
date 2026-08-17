import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-white px-6 py-8">
      <header>
        <Image
          src="/bramble-logo.png"
          alt="bramble"
          width={72}
          height={72}
          priority
          className="h-14 w-14 md:h-16 md:w-16"
        />
      </header>

      <div className="flex min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-center gap-6 md:gap-8">
        <p className="w-full text-left text-4xl font-bold text-black sm:text-5xl md:w-3/4 md:text-6xl leading-none">
          your real life.
        </p>
        <p className="w-full text-right text-4xl font-bold text-black sm:text-5xl md:w-3/4 md:text-6xl leading-none">
          infinitely playable.
        </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwy-kbQPan1No85Ae3P4rOAW_zMApnvmyvnMVG2KsPeP-nrg/viewform?usp=header" className="mt-4 self-center rounded-full px-6 py-3 text-center text-xl font-bold text-black sm:text-2xl md:text-3xl">sign up for beta the waitlist</a>
      </div>
    </main>
  );
}
