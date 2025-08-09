import { useState } from "react";
import axios from "axios";

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            if (res.data.success) {
                setStatus("Message sent!");
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (err) {
            console.error(err);
            setStatus("Error sending message.");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required />
                <button type="submit">Send</button>
            </form>
            <p>{status}</p>
        </div>
    );
}

export default ContactForm;