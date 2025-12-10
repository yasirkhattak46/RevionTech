"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsappFloat.scss';

export default function WhatsAppFloat() {
    const phoneNumber = '+923305858969'; // Your WhatsApp number with country code
    const message = 'Hello RevionTech! I would like to discuss a project.'; // Default message
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
}
