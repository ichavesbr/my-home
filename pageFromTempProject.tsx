import { Hero } from "@/component/Hero"
import Image from "next/image"

const page = () => {
  return (
    <div className="flex flex-col gap-8 mx-auto max-w-300">
      <Hero />

      {/* section 2 - 暖かい家族のような関係 */}
      <div className="p-8 flex flex-col items-center gap-4">
        <h3 className="text-4xl">暖かい家族のような関係</h3>
        <p className="max-w-150 block text-center">
          私たちの施設では、ご入居者様がまるで家族の一員であるかのように、温かく見守り寄り添うことを大切にしています。安心できる環境と、心のこもったケア、そして毎日の小さな幸せを大切にしながら、笑顔あふれる暮らしをサポートいたします。ご家族のような絆を感じていただける場所で、穏やかな日々をお過ごしください。
        </p>
        <div>
          <button className="px-6 py-2 bg-cta-button hover:bg-[#e6b36a] rounded transition-colors">
            マイホームについて
          </button>
        </div>
      </div>

      {/* section 3 - サービス内容*/}
      <div className="p-8 flex flex-col justify-center items-center gap-4 mb-8">
        <div className="relative w-full max-w-250 h-96 mx-20">
          <Image alt="1" src="/image.png" fill={true} className="object-cover rounded-4xl" />
        </div>
        <h3 className="text-4xl text-center mt-4">サービス内容</h3>
        <p className="max-w-150 text-center">
          当施設では、介護サービスや医療ケアをはじめ、日常生活のサポートやレクリエーション活動など、ご入居者様が安心して快適に過ごせるよう、幅広いサービスをご提供しています。専門スタッフが一人ひとりのニーズに寄り添い、心を込めてサポートいたします。
        </p>
      </div>

      {/* section 4 */}
      <div className="flex gap-20 justify-center items-center px-4 md:my-8 max-w-9/12 mx-auto">
        <div className="flex flex-1 flex-col items-center gap-4">
          <div>
            <span
              className="font-bold text-xl md:text-2xl max-w-100"
              style={{
                paddingBottom: "4px",
                background: "linear-gradient(transparent 60%, var(--color-detail-2) 60%)",
              }}>
              01 介護サービス
            </span>
            <p className="max-w-100 mt-4">
              日常生活のサポートや身体介助、排泄・入浴・食事の介助など、ご入居者様が安心して快適に過ごせるよう、きめ細やかな介護サービスを提供しています。ご本人の尊厳を大切にしながら、一人ひとりの生活リズムやご希望に寄り添ったケアを心がけています。
            </p>
          </div>
        </div>

        <div className="flex-1 justify-center items-center hidden sm:flex">
          <Image alt="1" src="/image.png" width={400} height={300} className="object-cover rounded-4xl" />
        </div>
      </div>

      {/* section 5 */}
      <div className="flex gap-20 justify-center items-center px-4 md:my-8 max-w-9/12 mx-auto">
        <div className="flex-1 justify-center items-center hidden sm:flex">
          <Image alt="1" src="/image.png" width={400} height={300} className="object-cover rounded-4xl" />
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <div>
            <span
              className="font-bold text-xl md:text-2xl max-w-100"
              style={{
                paddingBottom: "4px",
                background: "linear-gradient(transparent 60%, var(--color-detail-2) 60%)",
              }}>
              02 医療ケア
            </span>
            <p className="max-w-100 mt-4">
              看護師による日々の健康管理や服薬サポート、定期的な健康チェックを行い、体調の変化にも迅速に対応します。医療機関との連携も密に行い、緊急時にも安心していただける体制を整えています。
            </p>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="flex gap-20 justify-center items-center px-4 md:my-8 max-w-9/12 mx-auto">
        <div className="flex flex-1 flex-col items-center gap-4">
          <div>
            <span
              className="font-bold text-xl md:text-2xl max-w-100"
              style={{
                paddingBottom: "4px",
                background: "linear-gradient(transparent 60%, var(--color-detail-2) 60%)",
              }}>
              03 リハビリ
            </span>
            <p className="max-w-100 mt-4">
              専門スタッフによる個別リハビリや機能訓練を通じて、身体機能の維持・向上を目指します。ご入居者様の目標や状態に合わせたプログラムで、自立した生活をサポートし、日々の生活に活力をもたらします。
            </p>
          </div>
        </div>

        <div className="flex-1 justify-center items-center hidden sm:flex">
          <Image alt="1" src="/image.png" width={400} height={300} className="object-cover rounded-4xl" />
        </div>
      </div>

      {/* section 7 */}
      <div className="flex gap-20 justify-center items-center px-4 md:my-8 max-w-9/12 mx-auto">
        <div className="flex-1 justify-center items-center hidden sm:flex">
          <Image alt="1" src="/image.png" width={400} height={300} className="object-cover rounded-4xl" />
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <div>
            <span
              className="font-bold text-xl md:text-2xl max-w-100"
              style={{
                paddingBottom: "4px",
                background: "linear-gradient(transparent 60%, var(--color-detail-2) 60%)",
              }}>
              04 イベント・行事
            </span>
            <p className="max-w-100 mt-4">
              季節ごとのイベントやレクリエーション、地域交流会など、多彩な行事を開催しています。ご入居者様同士やスタッフとのふれあいを大切にし、毎日が楽しく充実したものとなるよう工夫しています。
            </p>
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div className="flex gap-20 justify-center items-center px-4 md:my-8 max-w-9/12 mx-auto">
        <div className="flex flex-1 flex-col items-center gap-4">
          <div>
            <span
              className="font-bold text-xl md:text-2xl max-w-100"
              style={{
                paddingBottom: "4px",
                background: "linear-gradient(transparent 60%, var(--color-detail-2) 60%)",
              }}>
              05 食事・デサート
            </span>
            <p className="max-w-100 mt-4">
              栄養バランスに配慮した美味しい食事を、管理栄養士が献立から調理まで丁寧にご用意しています。季節の食材を使ったメニューや手作りデザートも好評で、食事の時間が毎日の楽しみとなるよう心がけています。
            </p>
          </div>
        </div>
        <div className="flex-1 justify-center items-center hidden sm:flex">
          <Image alt="1" src="/image.png" width={400} height={300} className="object-cover rounded-4xl" />
        </div>
      </div>

      {/* section 9 - 施設内容*/}
      {/* ALGO TA DANDO ERRADO AQUI. ACHO QUE ESTA CONFIG DO TAILWIND ESTA ESTICANDO A TELA E SE RETIRAR AS SECTIONS DE CIMA PERDEM A CONFIGURACAO */}
      <div className="p-8 bg-[#e2d3b8] text-center flex flex-col gap-4">
        <div className="relative h-96 mx-20">
          <Image alt="1" src="/image.png" fill={true} className="object-cover rounded-4xl" />
        </div>
        <h3>IGOR CHAVES DONEGA</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel illum in, exercitationem beatae voluptas
          eligendi? Ipsum deserunt delectus iste perspiciatis quas cum quo, eligendi cupiditate sint doloremque.
          Necessitatibus, corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit ab
          commodi. Repudiandae similique nihil tempore beatae? Alias sunt ad rem. Maiores assumenda rem fuga magnam
          soluta ut eum recusandae.
        </p>
      </div>

      {/* section 10 */}
      <div className="flex flex-col gap-8 justify-center items-center px-4">
        <h4>NOSSA INSTALACOES</h4>
        <div className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore pariatur fugit sapiente ipsum
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum ex aspernatur ad officiis similique
              totam voluptates perspiciatis
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quis ipsa facilis quos dolorem explicabo
              consequuntur natus eos incidunt! Libero culpa numquam, dignissimos illum ullam accusantium odio cupiditate
              suscipit quaerat.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore pariatur fugit sapiente ipsum
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore pariatur fugit sapiente ipsum
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image alt="1" src="/image.png" width={400} height={300} className="object-cover" />
            <p className="max-w-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus natus quam voluptatem debitis,
              cdelectus quo ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
