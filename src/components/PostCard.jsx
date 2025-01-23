"use client";

import { useRouter } from "next/navigation";

const PostCard = ({ data }) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/details/${data.id}`);
  };
  return (
    <div className="card card-body bg-base-100 shadow-xl flex flex-col justify-between h-full">
      <div className=" flex-grow">
        <h2 className="card-title">Title: {data.title}</h2>
      </div>
      <div className="card-actions justify-center">
        <button className="btn" onClick={handleDetails}>
          Details
        </button>
      </div>
    </div>
  );
};

export default PostCard;
