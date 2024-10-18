import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../Appwrite/Config";

const PostCard = ({ $id, title, featuredImage }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const urlObject = await appwriteService.getFilePreview(featuredImage);
        setImageSrc(urlObject.href);
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };

    if (featuredImage) {
      fetchImage();
    }
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white shadow-lg rounded-2xl p-4 transition-transform transform group-hover:scale-105 hover:shadow-2xl">
        <div className="w-full justify-center mb-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover rounded-2xl"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default PostCard;
