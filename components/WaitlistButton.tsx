'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  creatorType: string;
  socialHandle: string;
}

export function WaitlistButton({ className = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    creatorType: '',
    socialHandle: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for joining the waitlist!');
        const modal = document.getElementById('waitlist-modal') as HTMLDialogElement;
        modal?.close();
        setFormData({ name: '', email: '', creatorType: '', socialHandle: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    const modal = document.getElementById('waitlist-modal') as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('waitlist-modal') as HTMLDialogElement;
    modal?.close();
  };

  return (
    <>
      <button 
        onClick={openModal}
        className={`inline-block w-full px-4 py-2 ${className}`}
      >
        Join The Waitlist
      </button>

      <dialog 
        id="waitlist-modal" 
        className="py-6 px-12 bg-green-900 rounded-lg max-w-lg md:w-3/4 lg:w-1/2 xl:1/3 backdrop:bg-black/50"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-white font-bold">Join the Waitlist</h2>
            <button 
              type="button"
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div>
            <label className="block mb-1 text-lg lg:text-xl text-white font-semi">Name (Optional)</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full text-lg lg:text-xl p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-lg lg:text-xl text-white font-semi">Email</label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border text-lg lg:text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-lg lg:text-xl text-white font-semi">Most Active Platform</label>
            <input 
              type="text" 
              required 
              value={formData.creatorType}
              onChange={(e) => setFormData({ ...formData, creatorType: e.target.value })}
              className="w-full text-lg lg:text-xl p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Instagram, X, YouTube"
            />
          </div>

          <div>
            <label className="block mb-1 text-lg lg:text-xl text-white font-semi">Social Media Handle</label>
            <input 
              type="text" 
              value={formData.socialHandle}
              onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
              className="w-full p-2 border text-lg lg:text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="@yourusername"
            />
          </div>

          <button 
            type="submit"
            className="w-full text-2xl gradient-bg text-black p-2 rounded-lg hover:bg-[#3030DD] transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </dialog>
    </>
  );
}