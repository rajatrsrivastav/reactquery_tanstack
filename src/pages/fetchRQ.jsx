import { fetchPosts } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  const getPostData = async () => {
    const res = await fetchPosts();
    return res.status === 200 ? res.data : [];
  };

  const { data = [],isLoading,isError,error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
    staleTime:10000,
    refetchInterval:1000,
    refetchIntervalInBackground:true,
  });

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
              className="bg-slate-800 text-white p-6 rounded-md shadow-md border border-slate-600"
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

export default FetchRQ;
