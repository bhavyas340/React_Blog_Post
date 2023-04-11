import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`                  {/* we use css like that in javaScript styled components*/}
  text-align: center;
  color: #6fcc35;
  margin-bottom: 2px; 

`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    firestore
    .collection('posts')
    .get()
    .then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data()
        };
      });
      console.log('Posts',posts);
      setPosts(posts);
    });
  }, []);  //to call only once we have to give Empty Array.

  return (
    <div className='home'>
      <BlogHeading>Tech Blog</BlogHeading>
      <div id="blog-by">Bhavya's</div>
      {posts.map((post, index)=>(
        <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
            <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  )
}
