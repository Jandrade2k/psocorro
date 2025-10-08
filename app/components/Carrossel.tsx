import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import Slide from "~/components/Slide"
import { Autoplay } from "swiper/modules"

const Carrossel: React.FC = () => {
    return (
        <Swiper
        spaceBetween={20} 
        slidesPerView={1} 
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}>
      <SwiperSlide >
        <Slide 
        imgSrc="app/assets/sld_1.jpg"
        title="Relogios de Ponto"
        description="Conheça nossa linha completa de relógios de ponto, ideais para empresas de todos os tamanhos."
        buttonText="Saiba mais"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide 
        imgSrc="app/assets/sld_2.jpg"
        title="Controles de Acesso"
        description="Soluções avançadas para controle de acesso, garantindo segurança e eficiência para sua empresa."
        buttonText="Saiba mais"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide 
        imgSrc="app/assets/sld_3.jpg"
        title="Soluções em Ponto"
        description="Descubra nossas soluções em ponto, projetadas para otimizar a gestão de sua empresa."
        buttonText="Saiba mais"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide 
        imgSrc="app/assets/sld_4.jpg"
        title="Sistemas de Ponto"
        description="Soluções completas para gestão de ponto, adaptáveis a qualquer tipo de empresa."
        buttonText="Saiba mais"
        />
      </SwiperSlide>
    </Swiper>
    )
}

export default Carrossel