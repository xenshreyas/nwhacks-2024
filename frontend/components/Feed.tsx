"use client"

import React, { useEffect, useState } from "react";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMorePosts = async () => {
    setLoading(true);

    // Adjust the fetch URL accordingly
    const response = await fetch("your-api-endpoint");
    const newPosts = await response.json();

    setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  const handleScroll = () => {
    const feedContainer = document.getElementById("feedContainer");
    if (feedContainer) {
      if (
        feedContainer.scrollTop + feedContainer.clientHeight >=
          feedContainer.scrollHeight - 20 &&
        !loading
      ) {
        fetchMorePosts();
      }
    }
  };

  useEffect(() => {
    const feedContainer = document.getElementById("feedContainer");
    feedContainer.addEventListener("scroll", handleScroll);

    return () => {
      feedContainer.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    fetchMorePosts();
  }, []);

  return (
    <div id="feedContainer" style={{ overflowY: "auto", height: "300px" }}>
      {/* Render your posts here using the 'allPosts' state */}
      {allPosts.map((post) => (
        <div key={post.id}>{/* Render post content */}</div>
      ))}
    </div>
  );
};

export default Feed;
