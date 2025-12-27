import React, { useState } from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    message: "",
  });

   const topCenter = () => {
    toast.success('Thank you for connecting!', {
      position: 'top-center',
      theme: 'colored'
    });
  }; 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(import.meta.env.VITE_BACKEND_URL);

    } catch (err) {
      console.error(err);
    }

    topCenter();
  };

  return (
    <section id="contact" className="bg-black text-white flex justify-center items-center py-20 px-4">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-light text-center mb-8">Contact Me</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black border border-gray-800 text-white placeholder-gray-400 font-thin focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black border border-gray-800 text-white placeholder-gray-400 font-thin focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black border border-gray-800 text-white placeholder-gray-400 font-thin focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-light py-3 px-6 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        <ToastContainer autoClose={3000} transition={Slide} pauseOnFocusLoss={false} hideProgressBar={true}/>
    
      </div>
    </section>
  );
}
