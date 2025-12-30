'use client';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';
import './not-found.scss';

export default function NotFound() {
    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="error-content">
                    {/* 404 Animation */}
                    <div className="error-number">
                        <span className="four">4</span>
                        <span className="zero">0</span>
                        <span className="four">4</span>
                    </div>

                    {/* Error Message */}
                    <h1 className="error-title">Page Not Found</h1>
                    <p className="error-message">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>

                    {/* Action Buttons */}
                    <div className="error-actions">
                        <Link href="/" className="btn-primary">
                            <HiHome className="btn-icon" />
                            <span>Go to Homepage</span>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="quick-links">
                        <p>You might be looking for:</p>
                        <div className="links-grid">
                            <Link href="/services/web-development-services">Website Development</Link>
                            <Link href="/services/app-development-services">App Development</Link>
                            <Link href="/services/ai-solutions-services">AI Solutions</Link>
                            <Link href="/services/digital-marketing-services">Digital Marketing</Link>
                            <Link href="/services/graphic-design-services">Graphic Design</Link>
                            <Link href="/contact-us">Contact Us</Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Background */}
                <div className="background-decoration">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                </div>
            </div>
        </div>
    );
}
