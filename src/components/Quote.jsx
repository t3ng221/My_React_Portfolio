import { useState, useEffect } from "react";
import useFetch from "../hooks/customHook";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=life`,
        {
          headers: {
            "X-Api-Key": "LMIJhZ15L7hB3lXRecLrUQ==y4U8dcEyt3PGG8xX",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data && data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


//custom hook function
  const { data } = useFetch(
    "https://api.api-ninjas.com/v1/quotes?category=life",
    {
      headers: {
        "X-Api-Key": "LMIJhZ15L7hB3lXRecLrUQ==y4U8dcEyt3PGG8xX",
      },
    }
  );
  useEffect(() => {
    if (data && data.length > 0) {
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    }
  }, [data]);

  const handleButtonClick = () => {
    fetchData();
  };


  return (
    <div
      name="quotes"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Quotes of: {author}
          </p>
        </div>
        <p className="text-xl mt-10">{quote}</p>
        <br />
        <br />

        <div>
          <button
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-50"
            onClick={handleButtonClick}
          >
            Generate New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
