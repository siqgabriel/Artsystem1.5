import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";


import { benefitOne, benefitTwo } from "@/components/data";
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
          <SectionTitle
            preTitle="Sobre Artsystem"
            title="A solução ideal para o seu negócio"
          >
            Mais que um simples programa de gestão, o ArtSystem-ERP é uma ferramenta que ajuda a criar uma cultura de resultados positivos nas empresas. Completo, o ArtSystem-ERP é o que há de mais moderno em softwares para gestão de varejos e atacados.
          </SectionTitle>

          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
      </Container>


        <section className="bg-[#F1F1F1] dark:bg-[#3D3D3D] w-full flex-col justify-center items-center">
          <SectionTitle
            preTitle="Canal ArtSystem no YouTube"
            title="Aprenda com nossos vídeos de treinamento"
          >
            Nossos clientes têm acesso a uma verdadeira universidade de conhecimento, com vídeos de treinamento e manuais online dos produtos ArtSystem. Explore nosso canal para obter orientações detalhadas sobre o uso das nossas soluções e maximize o potencial de sua empresa.
          </SectionTitle>

          <Video videoId="fZ0D0cnR88E" />
        </section>

        <Container>

          <SectionTitle
            preTitle="Feedbacks"
            title="O Que Nossos Clientes Dizem"
          >
            Confira alguns depoimentos de clientes satisfeitos que confiam nas soluções ArtSystem para potencializar seus negócios. Suas experiências refletem a qualidade e a eficiência de nossos produtos e serviços.
          </SectionTitle>

          <Testimonials />

          <SectionTitle preTitle="FAQ" title="Perguntas Frequentes">
            Entenda como os nossos sistemas de controle de vendas podem ajudar a otimizar a gestão do seu comércio. Aqui, você encontra respostas para as perguntas mais comuns sobre nossos produtos e serviços. Se precisar de mais ajuda, entre em contato conosco.
          </SectionTitle>

          <Faq />
          <Cta />
      </Container>
    </>
  );
}
