import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.js"
import MessageSender from "./MessageSender.js"
import Post from "./Post.js"
import db from "./firebase"


function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    db.collection("posts").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data}))));
  },[]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post 
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp="08:00"
        username={post.data.username}
        image={post.data.image}
        />
      ))}
      <Post 
        profilePic="https://i.pinimg.com/564x/aa/8a/d2/aa8ad20b8f175d718067c39fdb392ae9.jpg"
        message="Kimino Namaewa"
        timestamp="this time stamp"
        username="udin_selaluSetia"
        image="https://media3.giphy.com/media/3og0IHgGpll0M9wuek/source.gif"
      />
    </div>
  );
}

export default Feed;
