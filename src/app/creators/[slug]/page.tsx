import Image from "next/image";

export default function CreatorProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] text-white">

      {/* HERO */}
      <section className="relative">

        {/* Cover */}
        <div className="h-[340px] w-full bg-gradient-to-r from-indigo-600/40 to-purple-600/40" />

        {/* Profile Block */}
        <div className="max-w-6xl mx-auto px-6">

          <div className="-mt-24 flex flex-col md:flex-row items-start md:items-end gap-6">

            {/* Avatar */}
            <Image
              src="/images/creator.jpg"
              alt="creator"
              width={180}
              height={180}
              className="rounded-3xl border border-white/10 shadow-2xl"
            />

            {/* Identity */}
            <div className="flex-1 pb-4">

              <h1 className="text-4xl font-semibold">
                Alex Morgan
              </h1>

              <p className="text-gray-400 mt-1">
                Startup Advisor • Ex-Stripe • Angel Investor
              </p>

              <p className="text-sm text-gray-500 mt-2">
                ⭐ 4.9 · 312 reviews
              </p>
            </div>

            {/* CTA */}
            <button className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-indigo-500
              hover:scale-105
              transition
              shadow-xl
            ">
              Book now
            </button>

          </div>
        </div>
      </section>


      {/* OFFERS */}
      <section className="max-w-6xl mx-auto px-6 mt-20">

        <h2 className="text-2xl font-semibold mb-8">
          Book Alex
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {title:"Personalized Video",price:"$120"},
            {title:"1:1 Call (15 min)",price:"$250"},
            {title:"Startup Mentorship",price:"$900"},
          ].map((offer)=>(
            <div
              key={offer.title}
              className="
                p-6
                rounded-3xl
                bg-white/5
                border border-white/10
                hover:border-white/20
                hover:bg-white/[0.07]
                transition
              "
            >
              <h3 className="text-lg font-medium">
                {offer.title}
              </h3>

              <p className="text-3xl mt-4 font-semibold">
                {offer.price}
              </p>

              <button className="
                mt-6
                w-full
                py-3
                rounded-xl
                bg-white
                text-black
                font-medium
                hover:scale-[1.02]
                transition
              ">
                Continue
              </button>
            </div>
          ))}

        </div>
      </section>


      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Ex-Stripe operator who helped launch products used by millions.
          Now advising early-stage founders on product, growth,
          and fundraising strategy.
        </p>

      </section>


      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-6 mt-24 pb-32">

        <h2 className="text-2xl font-semibold mb-8">
          What fans say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {["Best advice I've ever paid for.",
            "Worth every dollar.",
            "Incredible clarity in just 15 minutes."
          ].map((review,i)=>(
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              ⭐⭐⭐⭐⭐
              <p className="text-gray-300 mt-3">
                {review}
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
