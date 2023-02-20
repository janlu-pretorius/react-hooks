import React, { useDeferredValue, useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export const UseDeferredValue = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    setTimeout(() => {
      async function searchPosts() {
        const data = await fetchPosts();
        const filteredPosts = data.filter((post) =>
          post.title.includes(deferredQuery)
        );
        setPosts(filteredPosts);
      }
      searchPosts();
    }, 2000);
  }, [deferredQuery]);

  return (
    <div>
      <h1>useDeferredValue</h1>
      <hr />
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
