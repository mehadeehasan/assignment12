const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">We&apos;d love to hear from you! Share your thoughts or questions below.</p>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input type="text" name="name" required className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input type="email" name="email" required className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Website</label>
              <input type="text" name="website" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea name="message" required className="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
