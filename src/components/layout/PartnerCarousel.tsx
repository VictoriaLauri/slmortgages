import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface PartnersCarouselProps {
  logos: { src: string; alt: string }[]
}

export default function PartnersCarousel({ logos }: PartnersCarouselProps) {
  return (
    <div className='w-full flex justify-center py-10'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        spaceBetween={28}
        slidesPerView={1.8}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        className='max-w-4xl'
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 border border-gray-200'>
              <img
                src={logo.src}
                alt={logo.alt}
                className='max-h-full max-w-full object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
