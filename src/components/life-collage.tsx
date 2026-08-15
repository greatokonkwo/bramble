import Image from "next/image"

// A dense grid of everyday-life snapshots packed into a soft square,
// echoing a phone camera roll spilled onto the page.
const tiles = [
  "/collage/01.png",
  "/collage/06.png",
  "/collage/03.png",
  "/collage/08.png",
  "/collage/11.png",
  "/collage/05.png",
  "/collage/04.png",
  "/collage/09.png",
  "/collage/02.png",
  "/collage/07.png",
  "/collage/10.png",
  "/collage/12.png",
  "/collage/05.png",
  "/collage/01.png",
  "/collage/03.png",
  "/collage/11.png",
  "/collage/09.png",
  "/collage/02.png",
  "/collage/08.png",
  "/collage/06.png",
  "/collage/12.png",
  "/collage/04.png",
  "/collage/10.png",
  "/collage/07.png",
  "/collage/05.png",
]

export function LifeCollage() {
  return (
    <div className="relative w-full max-w-[320px]">
      {/* the loop / play ring, overlapping the top edge */}
      <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-border">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-background">
            <Image
              src="/collage/08.png"
              alt="A moment from someone's real life"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {tiles.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-[9px] shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
          >
            <Image src={src || "/placeholder.svg"} alt="" fill sizes="64px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
