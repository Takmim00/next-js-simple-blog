"use client";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const posts = await res.json();
        setData(posts);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-11/12 mx-auto my-6">
      <h1 className="text-2xl font-bold text-center">All Blog Post</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data.map((data) => (
          <PostCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
