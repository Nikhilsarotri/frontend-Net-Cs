import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
    <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
      <div
        className="hidden md:block lg:w-1/2 bg-cover bg-gray-300"
        style={{
          backgroundImage: `url(https://th.bing.com/th/id/OIP.A1iOPDDIdy-XyDRj75WkVQHaEo?rs=1&pid=ImgDetMain)`,
        }}
      ></div>
    
        <form className='ml-5 w-96'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"></textarea>
          </div>
          <button type="submit" className="bg-green-700 w-96 mb-4 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
