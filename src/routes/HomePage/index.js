import React, { useEffect, useState } from 'react';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://seu-dominio.com/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Posts Recentes</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
