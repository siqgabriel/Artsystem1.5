'use client';
import { SectionTitle } from "@/components/SectionTitle";
import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMap } from 'react-icons/fa';

interface Grecaptcha {
    enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
}

declare const grecaptcha: Grecaptcha;

export default function Contato() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Verifica o tamanho da tela na montagem do componente

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            grecaptcha.enterprise.ready(async () => {
                const token = await grecaptcha.enterprise.execute('6LdQt5MqAAAAAMtiC3QM4F-XevMtvrXONHBlGhnR', { action: 'submit' });

                const requestBody = {
                    event: {
                        token: token,
                        expectedAction: 'submit',
                        siteKey: '6LdQt5MqAAAAAMtiC3QM4F-XevMtvrXONHBlGhnR',
                    }
                };

                const apiKey = 'YOUR_API_KEY';
                const response = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/artsystem-443904/assessments?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                const data = await response.json();
                console.log(data);
            });
        }
    };

    return (
        <>
            {typeof window !== 'undefined' && (
                <script async src="https://www.google.com/recaptcha/enterprise.js?render=6LdQt5MqAAAAAMtiC3QM4F-XevMtvrXONHBlGhnR"></script>
            )}
            <div className="w-screen lg:pt-52 lg:px-32 mb-32 bg-cover bg-[url('/img/backgroundLight.png')] dark:bg-[url('/img/backgroundDark.png')]">
                <div className="flex flex-col lg:flex-row lg:grid md:grid-cols-2 items-center justify-center my-20">
                    <div>
                        <SectionTitle 
                            preTitle="Contato" 
                            title="Fale Conosco" 
                            align={isMobile ? undefined : "left"}
                        >
                            Você é sempre bem-vindo para entrar em contato
                            conosco. Nosso atendimento ao cliente está
                            disponível de segunda a sexta, das 9h00 às 20h00.
                            e sábado a domingo, das 10h00 às 18h00. (GMT
                            +3). Estamos ansiosos para ouvir de você!
                        </SectionTitle>
                        <ul className="px-12 lg:px-10 xl:px-0">
                            <li className="flex mb-4">
                                <FaPhone className="text-2xl text-custom1"/>
                                <p className="ml-3 text-xl"><strong>Tel. Atendimento:</strong> (11) 3536-9042</p>
                            </li>
                            <li className="flex mb-4">
                                <FaPhone className="text-2xl text-custom1"/>
                                <p className="ml-3 text-xl"><strong>Tel. Suporte:</strong> (11) 3536-9042</p>
                            </li>
                            <li className="flex mb-4">
                                <FaEnvelope className="text-2xl text-custom1"/>
                                <p className="ml-3 text-xl"><strong>E-mail:</strong> suporte@assoftware.com.br</p>
                            </li>
                            <li className="flex mb-4">
                                <FaMap className="text-2xl text-custom1"/>
                                <p className="ml-3 text-xl">Av. Dr. Getúlio Vargas, 582 – Sala 11 – Vila Guaraní – Mauá – SP</p> 
                            </li>
                        </ul>

                        <form className="mt-8 space-y-6 px-12 lg:px-10 xl:px-0" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"></textarea>
                            </div>
                            {typeof window !== 'undefined' && (
                                <div className="g-recaptcha" data-sitekey="6LdQt5MqAAAAAMtiC3QM4F-XevMtvrXONHBlGhnR"></div>
                            )}
                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom1 hover:bg-custom2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom1">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center w-[70%] md:w-[50%] lg:w-[70%] xl:w-[65%] bg-custom1 rounded-3xl mx-24 mb-12 mt-32 lg:mt-0">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2672851499933!2d-46.45252882385071!3d-23.666397665461076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce695a947ea7bb%3A0x99813c7db90fd720!2sAv.%20Dr.%20Getúlio%20Vargas%2C%20582%20-%20sala%2011%20-%20Vila%20Guarani%2C%20Mau%C3%A1%20-%20SP%2C%2009310-180!5e0!3m2!1spt-BR!2sbr!4v1733456942184!5m2!1spt-BR!2sbr" 
                            width="538" 
                            height="776"  
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-3xl translate-y-[-30px] translate-x-[-15px] px-30 lg:px-0"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}