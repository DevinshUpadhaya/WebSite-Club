// EnquiryForm.js

import React, { useState } from 'react';
import './Enquiry.css';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        skypeId: '',
        location: '',
        companyName: '',
        designation: '',
        message: '',
        resume: null,
        photo: null,
        annualCtcSupport: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send form data to server
        console.log(formData);
    };

    return (
        <div className="enquiry-form-container">
            <h2>APPLY TODAY</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                {/* Add other form fields here */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Enquiry;
