"use client";

import Image from "next/image";
import AnimatedItem from "../wrappers/AnimatedItem";

export default function TechnologiesSlider() {
    const logos = [
        // 👉 Design & Development
        "/images/technologies/Figma.webp",
        "/images/technologies/Adobe-XD.webp",
        "/images/technologies/HTML5.webp",
        "/images/technologies/Css3.webp",
        "/images/technologies/JavaScript.webp",
        "/images/technologies/React.js.webp",
        "/images/technologies/Tailwind-css.webp",
        "/images/technologies/Elementor.webp",
        "/images/technologies/Wordpress.webp",
        "/images/technologies/Woo-Commerce.webp",
        "/images/technologies/Php-Laravel.webp",
        "/images/technologies/PHP-logo.webp",
        "/images/technologies/node.js.webp",
        "/images/technologies/Express.js.webp",

        // 👉 Database & Infrastructure
        "/images/technologies/My-SQL.webp",
        "/images/technologies/postgresql.webp",
        "/images/technologies/Firebase.webp",
        "/images/technologies/Nginix.webp",
        "/images/technologies/Linux.webp",
        "/images/technologies/GitHub.webp",

        // 👉 Marketing Platforms
        "/images/technologies/Google-AdWords.webp",
        "/images/technologies/Meta.webp",
    ];

    return (
        <div className="slider-container" style={{background: "#fff", height: "20vh"}}>
            <div className={'slider'}>
                <div className={'slideTrack'}>
                    {logos.concat(logos).map((logo, index) => (
                        <div className={'slide'} key={index}>
                            <AnimatedItem type="scaleUp" delay={index * 0.1}>
                                <Image
                                    src={logo}
                                    alt="Tech Logo"
                                    width={150}
                                    height={60}
                                    className={'logoImage'}
                                />
                            </AnimatedItem>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
