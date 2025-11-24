"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import "./banner.scss"


const AboutBanner = () => {
    return (
        <section className={'about-banner'}>
            <div className={'row h-100'}>
                <div className={'col-12 col-sm-6'}>Hi</div>
                <div className={'col-12 col-sm-6'}>Hellow</div>
            </div>
        </section>
    );
};

export default AboutBanner;