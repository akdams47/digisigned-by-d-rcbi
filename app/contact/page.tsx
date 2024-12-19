'use client';

import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        {isLoading ? (
          // Modern Spinner
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-700 mb-6">
              Please fill out the form below to get in touch with us. We will respond to your message as soon as possible.
            </p>

            {/* Google Form embedded */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeneCbaZ1nFj_qJDXVopdU-K53gOcYFFU0CdPKl134QbtmfvA/viewform?usp=dialog"
              width="100%"
              height="auto"
              frameBorder="0"
              title="Contact Form"
              style={{ minHeight: '1800px' }} // Set a minimum height
            >
              Loading…
            </iframe>
          </>
        )}
      </div>
    </div>
  );
}
