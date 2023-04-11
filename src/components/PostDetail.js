import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import firebase from 'firebase/compat';
import Radium from 'radium';                       // radium gives facility to take advantage of (::active, :focus,hover, @media() etc)
import { firestore } from '../firebase';




function PostDetail() {
  
  const [post , setPost] = useState({});
  const { postId }= useParams();  // use params basically give object


  useEffect(()=>{
    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot)=>{
      console.log('snapshot', snapshot.data());
      setPost(snapshot.data());
      // console.log(post.createdAt.toDate().toDateString());
    })
  }, []);

  const d= ()=>{
     date: post.createdAt();

  }

  return (
    <div className='post-detail'>
   
    <h1 style={styles.heading}>{post.title}</h1>
    <p style={styles.postDetail}>{post.content} </p>
    
      
    </div>
  )
}
export default Radium(PostDetail);

const styles = {
  postDetail:{
    border: '1px solid #e1e1e1',
    padding:5,
    paddingTop:10,
    borderRadius: 5,

    '@media(max-width: 720px)':{
      color:'pink',
    },
  },
  heading:{
    textAlign: 'center',

    ':hover':{
      margin:0,
      color: 'red',
    }
  }
}
