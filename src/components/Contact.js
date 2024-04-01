import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100   min-h-screen : flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? Our customer support team is here to help.
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> support@swiggy.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +1 800-123-4567
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Corporate Office</h2>
            <p className="text-gray-700 mb-4">
              Visit our corporate office if you have business inquiries or partnership proposals.
            </p>
            <p className="text-gray-700">
              123 Swiggy Street, Delhi, India
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Drop Us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
