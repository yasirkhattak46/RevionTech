import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const {name, email, subject, message} = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {error: 'Missing required fields'},
                {status: 400}
            );
        }

        // Create transporter for Hostinger SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_USER, // contact@reviontech.com
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Company email HTML
        const companyEmailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { 
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                        background: #f4f5f7;
                    }
                    .container { 
                        max-width: 600px;
                        margin: 0 auto;
                        background: #ffffff;
                        border: 1px solid #e1e4e8;
                        border-radius: 6px;
                        overflow: hidden;
                    }
                    .header { 
                        background: linear-gradient(135deg, #14b8a6, #0891b2);
                        color: white;
                        padding: 25px 30px;
                        text-align: center;
                    }
                    .header h2 { 
                        margin: 0;
                        font-size: 20px;
                        font-weight: 600;
                    }
                    .content { 
                        padding: 30px;
                    }
                    .field {
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #e5e7eb;
                    }
                    .field:last-child {
                        border-bottom: none;
                    }
                    .label {
                        font-size: 12px;
                        font-weight: 600;
                        color: #6b7280;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        margin-bottom: 8px;
                    }
                    .value {
                        font-size: 15px;
                        color: #1f2937;
                        line-height: 1.6;
                    }
                    .value a {
                        color: #0891b2;
                        text-decoration: none;
                        font-weight: 500;
                    }
                    .message-content {
                        background: #f9fafb;
                        padding: 20px;
                        border-radius: 6px;
                        border-left: 4px solid #14b8a6;
                    }
                    .footer { 
                        background: #f9fafb;
                        padding: 20px 30px;
                        text-align: center;
                        font-size: 13px;
                        color: #6b7280;
                        border-top: 1px solid #e5e7eb;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>📬 New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Name</div>
                            <div class="value"><strong>${name}</strong></div>
                        </div>
                        <div class="field">
                            <div class="label">Email Address</div>
                            <div class="value"><a href="mailto:${email}">${email}</a></div>
                        </div>
                        <div class="field">
                            <div class="label">Subject</div>
                            <div class="value">${subject || 'No Subject Provided'}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message</div>
                            <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Received on ${new Date().toLocaleString('en-US', {timeZone: 'Asia/Karachi'})}
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email to company
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: 'contact@reviontech.com',
            subject: `New Contact Form: ${subject || 'No Subject'}`,
            html: companyEmailHtml,
        });

        // User thank you email HTML
        const userEmailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { 
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        line-height: 1.7; 
                        color: #1f2937; 
                        background: #f9fafb;
                        padding: 40px 20px;
                    }
                    .email-wrapper { 
                        max-width: 600px; 
                        margin: 0 auto; 
                        background: #ffffff;
                        border: 1px solid #e5e7eb;
                        overflow: hidden;
                    }
                    .header { 
                        background: #ffffff;
                        border-bottom: 3px solid #14b8a6;
                        padding: 40px 40px 30px 40px;
                        text-align: left;
                    }
                    .logo { 
                        font-size: 28px; 
                        font-weight: 700; 
                        color: #0891b2;
                        margin-bottom: 5px;
                        letter-spacing: -0.5px;
                    }
                    .tagline { 
                        font-size: 13px; 
                        color: #6b7280;
                        font-weight: 400;
                    }
                    .content { 
                        padding: 40px;
                        background: #ffffff;
                    }
                    .greeting { 
                        font-size: 20px; 
                        color: #111827; 
                        margin-bottom: 20px;
                        font-weight: 600;
                    }
                    .message { 
                        font-size: 15px; 
                        line-height: 1.7; 
                        margin-bottom: 20px;
                        color: #374151;
                    }
                    .highlight-box { 
                        background: #f0fdfa;
                        border: 1px solid #99f6e4;
                        border-left: 4px solid #14b8a6; 
                        padding: 20px;
                        margin: 25px 0;
                    }
                    .highlight-box strong {
                        color: #0891b2;
                        font-size: 15px;
                        font-weight: 600;
                    }
                    .cta-container { 
                        text-align: center;
                        margin: 35px 0 30px 0;
                    }
                    .cta-button { 
                        display: inline-block;
                        background: #14b8a6;
                        color: #ffffff !important;
                        padding: 14px 32px;
                        text-decoration: none;
                        border-radius: 6px;
                        font-weight: 600;
                        font-size: 15px;
                        letter-spacing: 0.3px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                        transition: background 0.3s ease;
                    }
                    .divider {
                        height: 1px;
                        background: #e5e7eb;
                        margin: 30px 0;
                    }
                    .footer { 
                        background: #f9fafb;
                        border-top: 1px solid #e5e7eb;
                        color: #6b7280; 
                        padding: 30px 40px;
                        font-size: 13px;
                    }
                    .footer-title {
                        color: #374151;
                        font-weight: 600;
                        margin-bottom: 15px;
                        font-size: 14px;
                    }
                    .contact-info { 
                        margin: 15px 0;
                        line-height: 1.8;
                    }
                    .contact-item { 
                        margin: 8px 0;
                        color: #4b5563;
                        font-size: 13px;
                    }
                    .contact-item strong {
                        color: #1f2937;
                        font-weight: 600;
                        min-width: 70px;
                        display: inline-block;
                    }
                    .social-section {
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 1px solid #e5e7eb;
                    }
                    .social-title {
                        color: #374151;
                        font-weight: 600;
                        margin-bottom: 10px;
                        font-size: 13px;
                    }
                    .social-links a { 
                        color: #0891b2;
                        text-decoration: none;
                        margin-right: 15px;
                        font-weight: 500;
                        font-size: 13px;
                    }
                    .social-links a:hover {
                        text-decoration: underline;
                    }
                    .copyright {
                        margin-top: 20px;
                        padding-top: 15px;
                        border-top: 1px solid #e5e7eb;
                        color: #9ca3af;
                        font-size: 12px;
                    }
                </style>
            </head>
            <body>
                <div class="email-wrapper">
                    <div class="header">
                        <div class="logo">RevionTech</div>
                        <div class="tagline">Your Digital Success Partner</div>
                    </div>
                    
                    <div class="content">
                        <div class="greeting">Dear ${name},</div>
                        
                        <div class="message">
                            Thank you for contacting <strong>RevionTech</strong>. We have received your inquiry and appreciate you taking the time to reach out to us.
                        </div>
                        
                        <div class="highlight-box">
                            <strong>Message Received Successfully</strong><br>
                            <span style="color: #6b7280; font-size: 14px;">
                                Our team will review your request and respond within 24 business hours.
                            </span>
                        </div>
                        
                        <div class="message">
                            We are committed to providing innovative digital solutions tailored to your business needs.
                        </div>

                        <div class="divider"></div>
                        
                        <div class="cta-container">
                            <a href="https://reviontech.com" class="cta-button">
                                View Our Services
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <div class="footer-title">Contact Information</div>
                        
                        <div class="contact-info">
                            <div class="contact-item"><strong>Phone:</strong> +92 330 5858969</div>
                            <div class="contact-item"><strong>Email:</strong> contact@reviontech.com</div>
                            <div class="contact-item"><strong>Address:</strong> 54th Street "I" Block F, Islamabad, Pakistan</div>
                        </div>
                        
                        <div class="social-section">
                            <div class="social-title">Connect With Us</div>
                            <div class="social-links">
                                <a target={'_blank'} rel="noopener noreferrer" href="https://www.facebook.com/reviontech">Facebook</a>
                                <a target={'_blank'} rel="noopener noreferrer" href="https://www.linkedin.com/company/reviontech">LinkedIn</a>
                                <a target={'_blank'} rel="noopener noreferrer" href="https://www.instagram.com/revion_tech">Instagram</a>
                                <a href="https://wa.me/923305858969">WhatsApp</a>
                            </div>
                        </div>
                        
                        <div class="copyright">
                            © ${new Date().getFullYear()} RevionTech. All rights reserved.
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send thank you email
        await transporter.sendMail({
            from: `"RevionTech" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank You for Contacting RevionTech!',
            html: userEmailHtml,
        });

        // Optional: Google Sheets integration (non-blocking)
        if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
            fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    email,
                    subject: subject || 'No Subject',
                    message,
                    timestamp: new Date().toISOString(),
                    date: new Date().toLocaleDateString('en-US'),
                    time: new Date().toLocaleTimeString('en-US')
                }),
                signal: AbortSignal.timeout(5000) // 5 second timeout
            }).catch(err => console.log('Google Sheets error (ignored):', err.message));
        }
        
        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            {error: 'Failed to send message. Please try again.'},
            {status: 500}
        );
    }
}
