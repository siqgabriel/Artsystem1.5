'use client';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import SeloOpenret from '@/img/openret.png'

const PopupWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex-col'>
      <a
        href="https://wa.me/SEUNUMERODEWHATSAPP"
        className={`fixed bottom-5 right-5 bg-green-500 rounded-full w-16 h-16 mb-20 flex items-center justify-center transition-opacity duration-500 ease-in-out transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} hover:scale-90`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-12 h-12 text-white" />
      </a>
      <a
        href="https://wa.me/SEUNUMERODEWHATSAPP"
        className={`fixed bottom-5 right-5 bg-trueGray-50 dark:bg-trueGray-800 rounded-full w-16 h-16 flex items-center justify-center transition-opacity duration-500 ease-in-out transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} hover:scale-90`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={SeloOpenret} alt="Selo Openret" className="w-16 h-16" />
      </a>
    </div>
  );
};

export default PopupWidget;