import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/api";

const FetchOld = () => {
  const [data, setData] = useState([]);
  const [isLoading,SetIsLoading]=useState(true)
  const [isError,SetISError]=useState(false)

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      if (res.status===200){
      setData(res.data);
      SetIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      SetISError(true)
      SetIsLoading(false)
    }
  };

  useEffect(() => {
    getPostData();
  }, []);
  if (isLoading) return <p>loading.......</p>
  if (isError) return <p>Something Went Wrong!</p>
  return (
    <div className="min-h-screen bg-[#0f172a] p-4">
      <ul className="space-y-6">
        {data.map((currElem) => {
          const { id, title, body } = currElem;
          return (
            <li
              key={id}
              className="bg-slate-800 text-white p-6 rounded-md shadow-md border border-slate-600 list-none"
            >
              <p className="font-semibold mb-2">{title}</p>
              <p className="text-slate-300">{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchOld;
