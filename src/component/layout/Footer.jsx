import Image from "next/image";
import React from "react";
import {FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone} from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <div className="grid-overlay"/>
            <div className={'footer-content'}>
                <div className="content container">
                    <div className={'row w-100'}>
                        <div className={'col-12 col-lg-4'}>
                            <Image loading={"eager"} width={300} height={100} src={'/images/RevionTech-Logo.webp'}
                                   alt={'RevionTech Logo'}/>
                            <p className={'text-light px-lg-2'}>RevionTech is a digital solutions agency offering web development, app development,
                                digital marketing, and AI-driven services.</p>
                        </div>
                        <div className={'col-12 col-lg-4'}>
                            <div className={'footer-services'}>
                                <span>Services</span>
                                <ul className={'m-0'}>
                                    <li><Link href={'/services/web-development-services'}>Website Development</Link>
                                    </li>
                                    <li><Link href={'/services/ai-solutions-services'}>Saas & Ai Solutions</Link></li>
                                    <li><Link href={'/services/app-development-services'}>App Development</Link></li>
                                    <li><Link href={'/services/digital-marketing-services'}>Digital Marketing</Link>
                                    </li>
                                    <li><Link href={'/services/graphic-design-services'}>Graphic Design</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={'col-12 col-lg-4'}>
                            <div className={'footer-contact'}>
                                <span>Contact Info</span>
                                <div className={'contact-info'}>
                                    <a href="tel:+923305858969">
                                        <div className={'icon'}><FiPhone/></div>
                                        +92 330
                                        5858969</a>
                                    <a
                                        href="mailto:contact@reviontech.com">
                                        <div className={'icon'}><FiMail/></div>
                                        Contact@Reviontech.com</a>
                                </div>
                                <div className="footer-social-links">
                                    <a target={'_blank'} rel="noopener noreferrer"
                                       href="https://www.facebook.com/reviontech"><FiFacebook/></a>
                                    <a target={'_blank'} rel="noopener noreferrer"
                                       href="https://www.instagram.com/revion_tech"><FiInstagram/></a>
                                    <a target={'_blank'} rel="noopener noreferrer"
                                       href="https://www.linkedin.com/company/reviontech"><FiLinkedin/></a>
                                    <a target={'_blank'} rel="noopener noreferrer"
                                       href="https://wa.me/+923305858969"><FaWhatsapp/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer-bottom'}>
                <p>All rights reserved &copy; {new Date().getFullYear()} <Link href={'/'}> Reviontech</Link></p>
                <ul>
                    <li><Link href={'#'}>Privacy Policy</Link></li>
                    <li><Link href={'#'}>Terms & Conditions</Link></li>
                </ul>
            </div>
        </div>
    );
}

