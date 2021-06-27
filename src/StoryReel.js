import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image = "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc= "https://64.media.tumblr.com/6a47a99f67ef78d6ebb59437b23e059a/a5d48f74f592d288-98/s250x400/43fdb8812a51749e2b853fedd1df17e44e12b280.png"
        title = "Robin"
      />
      <Story 
        image = "https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg"
        profileSrc= "https://64.media.tumblr.com/1898bd6943c5c231839890db4d6886ad/78535b89985f3f1d-8c/s500x750/22c381c45487450ee895eec4ace65457a89cd36f.png"
        title = "Nami"
      /><Story 
        image = "https://c4.wallpaperflare.com/wallpaper/403/274/452/women-model-brunette-long-hair-wallpaper-preview.jpg"
        profileSrc= "https://cdn.costumewall.com/wp-content/uploads/2019/08/luffy.jpg"
        title = "Luffy"
      /><Story 
        image = "https://i.pinimg.com/736x/09/29/b4/0929b436bbc8e4006c356c761d78ad23.jpg"
        profileSrc= "https://64.media.tumblr.com/0ebd9d306b212e7fe202fc150211c268/9ddee3b5d0fd062a-3b/s540x810/fd039b55b8cb1892ff3519fc8ed1e5d46b5670f3.png"
        title = "Zoro"
      /><Story 
        image = "https://i.pinimg.com/736x/d3/ae/1a/d3ae1a9d80e22d79bbcd2fb6ef7b405b.jpg"
        profileSrc= "https://vignette.wikia.nocookie.net/onepiece-fairytail/images/5/55/Brook.png/revision/latest/scale-to-width-down/340?cb=20200404131618"
        title = "Brook"
      />
    </div>
  )
}

export default StoryReel
