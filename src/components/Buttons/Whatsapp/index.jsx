import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsAppButton = () => {
  const phoneNumber = '6288707002943';
  const message = 'Halo! Saya tertarik dengan produk Anda.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-button"
      >
        <AiOutlineWhatsApp size={36} color="#ffffff" />
      </a>

      <style>{`
        .whatsapp-floating-button {
          position: fixed;
          bottom: 24px;
          right: 16px;
          background-color: #25D366;
          color: white;
          padding: 12px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 999;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-floating-button:hover {
          background-color: #1ebe5d;
        }

        @media (min-width: 640px) {
          .whatsapp-floating-button {
            bottom: 96px;
            right: 24px;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
