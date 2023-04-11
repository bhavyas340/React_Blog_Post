import React, { useState } from 'react';
import {firestore} from '../firebase';
import {useFormInput} from "../hooks";


export default function CreatePost() {
                                      
    const title = useFormInput('');        //this is how we can use custom hooks which is in the ../hooks file
    const subTitle = useFormInput('');
    const content = useFormInput('');
    // const [date, setDate] = useState(new Date());

    function handleSubmit (e){
        e.preventDefault();  //by using this page is does not get reloded

        console.log("title",title);
        console.log("subTitle",subTitle);
        console.log("content",content);
        

        firestore.collection('posts').add({
            title: title.value,
            content: content.value,
            subTitle: subTitle.value,
            createdAt: new Date(),
        })
       window.alert("You can see your post on Home Page!!");
       window.location.href= "/";
    }
    // function handleResult(){
    //     firebase
    //     .firestore()
    //     .collection('posts')
    //     .get()
    //     .then((snapshot) =>{

    //     })
    // }
    
  return (
    <div className='create-post'>
    <h1>Create post  </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
            <label>Title</label>
            <input {...title}/>      {/* this is exactly like =>   value={content} onChange={(e)=>{setContent(e.target.value)}} */}
        </div>
        <div className='form-field'>
            <label>Sub Title</label>
            <input {...subTitle}/>
        </div>
        <div className='form-field'>
            <label>Content</label>
            <textarea {...content}></textarea>  
       
        </div>
        <button className='create-post-btn'>Create Post</button>
      </form>
      {/* <div>{firestore().collection('posts').get()}</div> */}
    </div>
  )
}
