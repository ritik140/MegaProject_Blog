import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../Appwrite/Config";

const PostCard = ({ $id, title, featuredImage }) => {
  // $id--> post id
  // featuredImage--> imageId
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Function to fetch the image URL
    const fetchImage = async () => {
      try {
        const urlObject = await appwriteService.getFilePreview(featuredImage);
        setImageSrc(urlObject.href); // Convert URL object to string and set it
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };

    if (featuredImage) {
      fetchImage();
    }
  }, [featuredImage]);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={imageSrc} alt={title} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
