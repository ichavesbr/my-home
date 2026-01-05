import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex justify-between gap-12 mx-auto max-w-7xl pl-8 ">
      <div className="flex flex-row gap-4 ml-4 sm:ml-8 lg:ml-20 mt-8 transition-all items-start">
        {/* Remove left border on large screens */}
        <span className="text-4xl font-medium tracking-widest h-80 [writing-mode:vertical-rl] [text-orientation:upright] self-start">
          大切なご家族を
        </span>
        <span className="text-4xl font-medium tracking-widest h-80 [writing-mode:vertical-rl] [text-orientation:upright] self-start">
          和やかな温もりと
        </span>
        <span className="text-4xl font-medium tracking-widest h-80 [writing-mode:vertical-rl] [text-orientation:upright] self-start">
          ケアで支えます。
        </span>
      </div>
      <div className="flex-1 max-w-2xl flex flex-col items-center justify-end">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          width={900}
          height={500}
          className="w-full max-h-105 object-cover rounded-tl-full rounded-tr-4xl"
          sizes="100vw"
          priority
        />
        <div className="flex justify-between p-4 bg-white shadow-lg w-[calc(100%+2rem)] -ml-8">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-amber-400"></span>
            <span>お知らせ</span>
          </div>
          <div>2026.10.20 ご家族見学受付中。お気軽にお問い合わせ・ご予約ください。</div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#f59e42"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
