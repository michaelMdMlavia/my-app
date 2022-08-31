
import { useState } from 'react';
import './App.css';
import Post from './Posts';

function App() {
  const [posts,setPost] = useState([
    {
    username : "Michael",
     caption : "Welcome guys",
     imgUrl : "https://i  .ytimg.com/vi/zeO1yrVeC0U/maxresdefault.jpg "

    },
    {
      username:"BMW Motors",
       caption:" The New BMW M3",
      imgUrl:"https://i.pinimg.com/originals/f3/e9/f3/f3e9f334e21c0d96e5849bde5f9e5fb7.jpg"
    },
    {
      username:"Boera",
       caption:"Heyyyy", 
       imgUrl:"https://goodnewsdaily.co.za/good-news/2019/10/Busby.jpg"
    }
  ]);

  return (
    <div className="app">
      <div className= "app_header">
      {/* adding an  image on top left */}
      <img
        className= "app_headerImage"
          src=" https://www.wits.ac.za/media/wits-university-style-assets/images/Wits_Centenary_Logo_Large.svg"
          alt=""
        />
      </div>
      {
         posts.map(post=>(
          <Post username={post.username} 
          caption= {post.caption}
            imgUrl = {post.imgUrl}
          />
        ))
       }
      
      {/* Posts */}
      {/* <Post/>
      <Post/>
      <Post/> */}
      {/* Posts */}
    </div>
  );
}

export default App;
