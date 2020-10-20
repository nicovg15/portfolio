import React from 'react'
import '../css/Footer.css'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
    return (
        <div className="footer">
            <div>
                <span><PhoneIcon /> +972587790866</span>
                <span><WhatsAppIcon /> +5491130552352</span>
                <span><EmailIcon /> nicovidelag.95@gmail.com</span>
            </div>
        </div>
    )
}

export default Footer
