import { Hero } from "@/component/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-5xl p-8">
        <section className="flex flex-col gap-4 max-w-3xl mx-auto justify-center items-stretch">
          <h1 className="text-3xl font-extrabold text-brown-900 text-left mb-0 inline">マイホームへようこそ</h1>
          <div className="text-left leading-relaxed mt-0 inline">
            <p>「my home」は、ご高齢者が安心して過ごせる家庭的な老人ホームです。</p>
            <p>専門スタッフが心を込めてケアし、毎日を快適にサポートします。</p>
            <p>見学やご相談はお気軽にどうぞ。</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-cta-button hover:bg-[#e6b36a] transition-colors duration-200 px-10 py-4 rounded-full">
              my homeについて
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
