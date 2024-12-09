'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import { Container } from "@/components/Container";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import bannerLight1 from "@/img/bannerLight1.png";
import bannerLight2 from "@/img/bannerLight2.png";
import bannerLight3 from "@/img/bannerLight3.png";
import bannerLight4 from "@/img/bannerLight4.png";
import bannerDark1 from "@/img/bannerDark1.png";
import bannerDark2 from "@/img/bannerDark2.png";
import bannerDark3 from "@/img/bannerDark3.png";
import bannerDark4 from "@/img/bannerDark4.png";
import bgMobileLight from "@/img/bgMobileLight.png";
import bgMobileDark from "@/img/bgMobileDark.png";
import CarolinaLogo from "@/img/brands/carolina.svg";
import ImpactoLogo from "@/img/brands/impacto.svg";
import LitoralLogo from "@/img/brands/litoral.svg";
import LourencioLogo from "@/img/brands/lourencio.svg";
import NelsinhoLogo from "@/img/brands/nelsinho.svg";
import NutricarnesLogo from "@/img/brands/nutricarnes.svg";

const backgroundsLight = [bannerLight1, bannerLight2, bannerLight3, bannerLight4];
const backgroundsDark = [bannerDark1, bannerDark2, bannerDark3, bannerDark4];

const content = [
  { title: "Soluções para empresas em crescimento", text: "Nosso objetivo é participar do sucesso de sua empresa resolvendo questões administrativas e operacionais de maneira rápida, moderna e inteligente. Conte sempre com a ArtSystem!" },
  { title: "Transforme ideias em inovação com ArtSystem", text: "Descubra soluções criativas e tecnológicas para elevar seus projetos ao próximo nível. Na ArtSystem, trazemos expertise em desenvolvimento e design para transformar seus objetivos em resultados reais." },
  { title: "Conecte seu negócio ao futuro com ArtSystem", text: "A ArtSystem é a parceira ideal para empresas que buscam inovação e eficiência. Nossos serviços de desenvolvimento e design digital vão além das expectativas, oferecendo soluções personalizadas para cada necessidade." },
  { title: "Impulsione seu potencial digital com a ArtSystem", text: "Combinamos tecnologia de ponta e design estratégico para criar soluções digitais que impulsionam o crescimento do seu negócio. A ArtSystem é o parceiro certo para quem busca performance e inovação no ambiente digital." },
];

export const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgroundsLight.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const lightBackground = isMobile ? bgMobileLight.src : backgroundsLight[currentBg].src;
  const darkBackground = isMobile ? bgMobileDark.src : backgroundsDark[currentBg].src;

  return (
    <>
      <section
        className="w-full py-20 md:pr-40 lg:pr-72 lg:py-40 xl:p-52 md:bg-cover md:bg-left bg-top dark:hidden transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${lightBackground})` }}
      >
        <Container className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-full">
            <div className="xl:max-w-3xl mb-8">
              <h1 className="text-2xl text-center md:text-left font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                {content[currentBg].title}
              </h1>
              <p className="py-5 md:pr-12 text-md text-center md:text-left leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                {content[currentBg].text}
              </p>

              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
                <a
                  href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-2 md:px-8 md:py-4 text-lg font-medium text-center text-white bg-custom1 rounded-md flex items-center justify-center hover:bg-slate-500"
                >
                  Entre em contato
                  <FaWhatsapp className="ml-2" />
                </a>
                <a
                  href="https://github.com/web3templates/nextly-template/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-custom1"
                >
                  <FaInstagram />
                  <span> Siga-nos nas redes sociais</span>
                </a>
              </div>

              <div className="flex space-x-2 mt-10 justify-center md:justify-start">
                {backgroundsLight.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full ${currentBg === index ? "bg-custom1" : "bg-gray-300"}`}
                    onClick={() => setCurrentBg(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="w-full py-20 md:pr-40 lg:pr-72 lg:py-40 xl:p-52 md:bg-cover md:bg-left bg-top transition-all duration-500 ease-in-out dark:block hidden"
        style={{ backgroundImage: `url(${darkBackground})` }}
      >
        <Container className="flex flex-wrap ">
          <div className="flex items-center w-full">
            <div className="xl:max-w-3xl mb-8">
              <h1 className="text-2xl text-center md:text-left font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                {content[currentBg].title}
              </h1>
              <p className="py-5 md:pr-12 text-md text-center md:text-left leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                {content[currentBg].text}
              </p>

              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
                <a
                  href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-2 md:px-8 md:py-4 text-lg font-medium text-center text-white bg-custom1 rounded-md flex items-center justify-center hover:bg-slate-500"
                >
                  Entre em contato
                  <FaWhatsapp className="ml-2" />
                </a>
                <a
                  href="https://github.com/web3templates/nextly-template/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 dark:hover:text-custom1"
                >
                  <FaInstagram />
                  <span> Siga-nos nas redes sociais</span>
                </a>
              </div>

              <div className="flex space-x-2 mt-10 justify-center md:justify-start">
                {backgroundsDark.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full ${currentBg === index ? "bg-custom1" : "bg-gray-300"}`}
                    onClick={() => setCurrentBg(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-12 triangle-transition">
        <Container>
          <div className="flex flex-col justify-center">
            <div className="text-xl text-center text-gray-700 dark:text-white">
              Mais de <span className="text-custom1">500+</span>{" "}
              empresas impactadas
            </div>

            <div className="mt-10">
              <Swiper
                spaceBetween={50}
                slidesPerView={5}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                  1024: {
                    slidesPerView: 5,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                }}
                className="flex justify-center items-center"
              >
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={CarolinaLogo} alt="Carolina Logo" className="w-32" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={LitoralLogo} alt="Litoral Logo" className="w-32" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={LourencioLogo} alt="Lourencio Logo" className="w-32" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={NelsinhoLogo} alt="Nelsinho Logo" className="w-32" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={NutricarnesLogo} alt="Nutricarnes Logo" className="w-32" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={ImpactoLogo} alt="Impacto Logo" className="w-32" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};