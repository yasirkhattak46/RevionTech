"use client";

import React, {useState} from 'react';
import {SendHorizontal, CheckCircle, XCircle, Loader2} from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        // Clear errors when user starts typing
        if (status.error) {
            setStatus({ loading: false, success: false, error: false, message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: data.message || 'Message sent successfully! Check your email for confirmation.'
                });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });

                // Clear success message after 8 seconds
                setTimeout(() => {
                    setStatus({ loading: false, success: false, error: false, message: '' });
                }, 8000);
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: error.message || 'Something went wrong. Please try again.'
            });

            // Clear error message after 6 seconds
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false, message: '' });
            }, 6000);
        }
    };

    return (
        <div className="form-box">
            <h3>Send us a Message</h3>
            
            {/* Success Message */}
            {status.success && (
                <div style={{
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    <CheckCircle size={24} />
                    <span>{status.message}</span>
                </div>
            )}

            {/* Error Message */}
            {status.error && (
                <div style={{
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    color: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    <XCircle size={24} />
                    <span>{status.message}</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="5"
                                placeholder="Tell us about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-12">
                        <button 
                            type="submit" 
                            className="transparent-btn"
                            disabled={status.loading}
                            style={{
                                opacity: status.loading ? 0.7 : 1,
                                cursor: status.loading ? 'not-allowed' : 'pointer'
                            }}
                        >
                            <span className="btn-text">
                                <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                            </span>
                            <span className="btn-icon">
                                {status.loading ? <Loader2 className="spin" size={20} /> : <SendHorizontal size={20} />}
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
