import { LifeCollage } from "@/components/life-collage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-white px-6 py-8">
      {/* brand mark */}
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

      <div className="mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-3xl flex-col items-center justify-center gap-8">
        <p className="w-full max-w-[340px] text-left text-6xl font-bold text-black md:text-7xl">
          your real life.
        </p>
<div> 

</div>
        <p className="w-full max-w-[340px] text-right text-6xl font-bold text-black md:text-7xl">
          infinitely playable.
        </p>

        <div className="pt-4">
        </div>
        <a href="https://form.typeform.com/to/CV6jquJl" className="rounded-full px-6 py-3 text-3xl text-black font-bold">sign up for beta the waitlist</a>
      </div>
    </main>
  );
}
