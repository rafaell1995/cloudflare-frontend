import React, { useEffect, useState } from 'react';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts`)
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Posts Recentes</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={post.link} target="_blank" rel="noreferrer">{post.title.rendered}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
