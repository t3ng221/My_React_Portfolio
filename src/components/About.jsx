import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config/variable";
import Loader from "./loader";

const About = () => {
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${api}/getAboutInfo/5ae8c037-74dc-496a-bb48-db9ecd7e84c3`
      );
      setAbout(res.data.data.about);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">{loading ? <Loader /> : about}</p>
        <br />
      </div>
    </div>
  );
};

export default About;
