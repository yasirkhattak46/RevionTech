"use client";

import Image from "next/image";
import AnimatedItem from "../wrappers/AnimatedItem";

export default function BrandSlider() {
    const logos = [
        "/images/partners/Addapad.webp",
        "/images/partners/Bitloc.webp",
        "/images/partners/CableInternetUsa.webp",
        "/images/partners/DDPool.webp",
        "/images/partners/Farabius.webp",
        "/images/partners/The-AAT.webp",
        "/images/partners/thek-addy.webp",
        "/images/partners/Linus-International.webp",
        "/images/partners/M&sLab.webp",
        "/images/partners/Osprey-shipping.webp",
        "/images/partners/Remehealth.webp",
        "/images/partners/TeleDoctor.webp",
    ];

    return (
        <div className={'partners'}>
            <AnimatedItem type="scaleUp" delay={0.1}>
                <h2>Proudly Partner With <br/>
                    <span>Reviontech</span></h2>
            </AnimatedItem>
            <div className="slider-container">
                <div className={'slider'}>
                    <div className={'slideTrack'}>
                        {logos.concat(logos).map((logo, index) => (
                            <div className={'slide'} key={index}>
                                <AnimatedItem type="scaleUp" delay={index * 0.1}>
                                    <Image
                                        src={logo}
                                        alt="Tech Logo"
                                        width={250}
                                        height={100}
                                        className={'logoImage partners'}
                                    />
                                </AnimatedItem>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}
