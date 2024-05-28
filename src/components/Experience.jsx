import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../config/variable";
import Loader from "./loader";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/experience`);
        setExperiences(res.data.data.experiences);
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-600 mt-12 mb-8 pb-2">
          Experience
        </h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-lg">{error}</p>
        ) : experiences.length > 0 ? (
          experiences.map((experience) => (
            <div
              key={experience.id}
              className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-3xl font-semibold mb-2">
                {experience.position} at{" "}
                <span className="text-blue-400">{experience.name}</span>
              </h3>
              <p className="text-lg font-medium text-gray-400 mb-4">
                {experience.duration}
              </p>
              <p className="text-lg">{experience.description}</p>
            </div>
          ))
        ) : (
          <p className="text-lg">No experience available.</p>
        )}
      </div>
    </div>
  );
};

export default Experience;
