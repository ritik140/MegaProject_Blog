import React, { useEffect, useState } from "react";
import appwriteService from "../Appwrite/Config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <div>
        {/* <Container> */}
        <main className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
          {/* Featured Post */}
          <section className="mb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Blog Post
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  This is the latest featured blog post. Explore exciting
                  topics, deep dive into content, and get inspired with our
                  expert articles.
                </p>
                {/* <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </a> */}
              </div>
              <div>
                <img
                  src="image/blog600.jpg"
                  alt="Featured Post"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Individual Blog Post Card */}
              <article className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <img
                  src="image/mixedFruit400.jpg"
                  alt="Blog Post 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  The Art of Culinary Innovation: Exploring Global Food Trends
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  From plant-based diets to fusion cuisines, the world of food
                  is evolving rapidly. Dive into the latest culinary trends that
                  are redefining the way we eat and enjoy our meals.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </article>

              <article className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <img
                  src="image/tech400.jpg"
                  alt="Blog Post 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Robots in Everyday Life: How Automation is Changing Our World
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  From smart homes to automated factories, robots are becoming a
                  part of our daily lives. Explore the fascinating world of
                  robotics and its impact on industries and personal
                  convenience.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </article>

              <article className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <img
                  src="image/spacex400.jpg"
                  alt="Blog Post 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  SpaceX: Pioneering the Future of Space Exploration
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With groundbreaking missions and reusable rockets, SpaceX is
                  transforming space exploration. Discover the latest
                  achievements and future plans that are shaping humanity’s
                  journey beyond Earth.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </article>
            </div>
          </section>
        </main>
        {/* <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div> */}
        {/* </Container> */}

        <div>
          <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Daily Scroll
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with the latest articles, trends, and insights.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
              >
                Start Reading
              </a>
            </div>
          </section>
          {/* Blog Highlights Section */}
          <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Famous Post
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <img
                    src="image/cloud1.jpg"
                    alt="Post image"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    A Beginner’s Guide to Cloud Computing with AWS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cloud computing has revolutionized how we build and scale
                    applications. This beginner's guide will walk you through
                    the essentials of using Amazon Web Services (AWS) to get
                    your project off the ground.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <img
                    src="image/cybersecurity.jpeg"
                    alt="Post image"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Understanding the Basics of Cybersecurity in 2024
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In an increasingly digital world, cybersecurity has become a
                    top priority. Learn the fundamental concepts and best
                    practices to protect yourself and your applications from
                    modern cyber threats.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <img
                    src="image/AI.jpeg"
                    alt="Post image"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Exploring the World of Artificial Intelligence: Key Concepts
                    Explained
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Artificial Intelligence (AI) is transforming industries and
                    shaping the future. In this post, we explore key AI concepts
                    and applications that every tech enthusiast should know.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Author Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Author"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                About the Author
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Hi, I'm Jerry, passionate about sharing insights on new
                technologies.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          </section>
          {/* Newsletter Section */}
          <section className="bg-blue-600 py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-lg text-white mb-8">
                Get the latest updates and articles straight to your inbox.
              </p>
              <form className="max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md mb-4"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 py-3 px-6 rounded-md hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                What Readers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "This blog has changed my perspective on machine Learning. I
                    look forward to every new post!"
                  </p>
                  <p className="text-gray-800 font-semibold">- Mark</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "Excellent content that is both informative and engaging."
                  </p>
                  <p className="text-gray-800 font-semibold">- Simon</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "I always learn something new here. Highly recommend this
                    blog!"
                  </p>
                  <p className="text-gray-800 font-semibold">- Harry</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
