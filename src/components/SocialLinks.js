import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaTelegram, FaCommentDots } from 'react-icons/fa';
import '../styles/SocialLinks.css'; // You can use CSS for additional styling if needed.

const SocialLinks = () => {
    return (
        <div className="social-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto', padding: '20px 0' }}>
            <p style={{ color: '#49a5de', fontWeight: 'bold' }}>CONNECT WITH CLICKDEALER</p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <FaInstagram color="#e1306c" size={25} />
                <FaFacebook color="#3b5998" size={25} />
                <FaTwitter color="#00acee" size={25} />
                <FaLinkedin color="#0077b5" size={25} />
                <FaYoutube color="#ff0000" size={25} />
                <FaTelegram color="#0088cc" size={25} />
                <FaCommentDots color="#ff9900" size={25} />
            </div>
        </div>
    );
};

export default SocialLinks;
