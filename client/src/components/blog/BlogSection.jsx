import React from "react";

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      image:
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news6-672x448.jpg",
      author: "Sakib",
      category: "AI Technology",
      title: "Effective Hashtag Strategies to Increase Reach",
    },
    {
      id: 2,
      image:
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news5-672x448.jpg",
      author: "Sakib",
      category: "Intelligent",
      title: "Web Development Essentials Every Business",
    },
    {
      id: 3,
      image:
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news3-672x448.jpg",
      author: "Sakib",
      category: "Social Media",
      title: "Web3 and the Future of Digital Experiences",
    },
  ];

  return (
    <section className=" w-full bg-red-50 text-white py-16 px-4 md:px-10">
      <div className=" mb-3 flex items-center gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                <p className="font-medium text-lg text-black">Updates</p>
        </div>
      {/* HEADER TEXT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left heading */}
        <div>

          <h2 className="text-black mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Check out latest news
            <br />
            update <span className="text-amber-600">& articles</span>
          </h2>
        </div>

        {/* Right paragraph */}
        <p className="text-gray-500 max-w-md text-sm md:text-base">
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-amber-600 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="text-xs text-gray-200 flex gap-2 mb-2">
                <span>By {post.author}</span>•<span>{post.category}</span>
              </div>

              <h3 className=" font-semibold text-lg md:text-xl leading-snug mb-4">
                {post.title}
              </h3>

              <button className="text-sm text-white flex items-center gap-1 ">
                Read More <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
