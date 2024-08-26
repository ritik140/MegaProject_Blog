import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../Appwrite/Config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch posts
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts([]);
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    // Call the async function
    fetchPosts();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
