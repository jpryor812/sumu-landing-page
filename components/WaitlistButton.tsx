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
  const [showSuccess, setShowSuccess] = useState(false); 
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
      const response = await fetch('/api/SubmitWaitlist', {
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
        setShowSuccess(true);  
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

  const closeSuccess = () => {  // Add this function
    setShowSuccess(false);
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
            <label className="block mb-1 text-lg lg:text-xl text-white font-semi">Name</label>
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
      {showSuccess && (
        <dialog
          open
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-black p-8 rounded-lg max-w-md mx-auto text-center relative">
            <button 
              onClick={closeSuccess}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">Thanks for signing up!</h2>
            <p className="text-white text-lg">
              We&apos;re so excited you&apos;re joining us. We&apos;ll be in touch with product updates soon!
            </p>
            <button
              onClick={closeSuccess}
              className="mt-6 px-6 py-2 gradient-bg text-black rounded-lg hover:bg-[#3030DD] font-semibold"
            >
              Close
            </button>
          </div>
          <div 
            className="fixed inset-0 bg-black/50 -z-10"
            onClick={closeSuccess}
          />
        </dialog>
      )}
    </>
  );
}