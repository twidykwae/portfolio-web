import React, { useState } from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showSuccess = () => {
    toast.success('Thank you for connecting.', {
      position: 'top-center',
      theme: 'colored',
    });
  };

  const showError = (message) => {
    toast.error(message, {
      position: 'top-center',
      theme: 'colored',
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
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch(`https://portfolio-web-production-421f.up.railway.app/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          showError('Too many attempts. Please wait 15 minutes before trying again.');
        } else if (res.status === 400) {
          showError(data.error || 'Please check your input and try again.');
        } else if (res.status === 500) {
          showError(data.error || 'Something went wrong. Please try again later.');
        } else {
          showError(data.error || 'An error occurred. Please try again.');
        }
        return;
      }

      showSuccess();
      setFormData({ Name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      showError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "p-3 rounded-xl bg-ink border border-divider-soft text-paper placeholder-paper-faint font-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200";

  return (
    <section id="contact" className="bg-ink text-paper flex justify-center items-center py-20 px-4">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-light text-center mb-8 text-paper">Contact</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit} noValidate>
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-paper-faint">Name</span>
            <input
              type="text"
              name="Name"
              autoComplete="name"
              placeholder="Your name"
              required
              value={formData.Name}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-paper-faint">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@domain.com"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-paper-faint">Message</span>
            <textarea
              name="message"
              placeholder="What would you like to say?"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent-deep hover:bg-accent-hover text-paper font-medium py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <ToastContainer autoClose={3000} transition={Slide} pauseOnFocusLoss={false} hideProgressBar={true} />
      </div>
    </section>
  );
}
