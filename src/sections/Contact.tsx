'use client';
import { useState } from 'react';
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import GrainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className="container">
        <div className='overflow-hidden relative z-10 bg-gradient-to-r from-emerald-300 to-sky-400 
        text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left'>

          {/* Background Grain Image */}
          <div className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }} />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-medium'>Let's create something amazing together</h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button 
                onClick={() => setShowForm(true)}
                className='inline-flex text-white bg-gray-900 gap-2 items-center 
                px-6 h-12 rounded-xl w-max border border-gray-900'
              >
                <span className='font-semibold'>Contact Me</span>
                <ArrowRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
            <button 
              onClick={() => setShowForm(false)} 
              className="absolute top-3 right-4 text-gray-500 text-lg"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>

            {/* ✅ Formspree-powered form */}
            <form
              action="https://formspree.io/f/mqapooer"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="border p-2 rounded-md text-gray-900" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="border p-2 rounded-md text-gray-900" 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="border p-2 rounded-md text-gray-900" 
                rows={4} 
                required 
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
