import { useQuery } from "@apollo/client";
import { query } from "../lib/queries";

export default function App() {
  
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.blogsConnection.edges);

  return <h1 className="text-3xl font-bold underline">
    Hello world!
    </h1>;
}
