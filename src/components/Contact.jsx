import { useState } from "react";
import axios from "axios";
import { api } from "../config/variable"; // Update this import with your API config

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await axios.post(`${api}/contact`, formData);
      console.log(res);
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b pt-40 from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Contact
          </p>
          <p className="py-6">Contact me by submitting your message</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
