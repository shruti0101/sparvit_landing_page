import Image from "next/image"

const Hero = () => {
  return (
    <div>
        <section className="relative w-full h-[85vh]  overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-banner.webp"
          alt="Bathroom Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      <div className="absolute inset-0 bg-black/10"></div>
        {/* Yellow Title */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-yellow-400 font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
            Sanitary Ware Manufacturer in India
          </h1>
        </div>
      </section>

      <section>
        <h2>Sanitary Ware Manufacturer & Supplier in Delhi, India</h2>
        <p>We are a trusted sanitary ware manufacturer and supplier in Delhi, delivering high-quality ceramic bathroom solutions across residential, commercial, and institutional projects. From modern basins and water closets to urinals and complete bathroom suites, Sparvit Sanitaryware offers a wide range of durable, designer-friendly, and cost-effective products tailored for Delhi NCR.</p>
      </section>
    </div>
  )
}

export default Hero