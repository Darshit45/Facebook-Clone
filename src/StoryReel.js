import React from "react";
import Story from "./Story.js"
import "./Story.css";
import "./StoryReel.css"
import db from './firebase.js'


function StoryReel()
{




    return (
        <div className = "storyReel">
        <Story
        image = "https://i.pinimg.com/originals/c6/26/a2/c626a24887b9aa0794bc647465996016.jpg"
        profileSrc = "https://i.pinimg.com/originals/c6/26/a2/c626a24887b9aa0794bc647465996016.jpg"
        title = "jonny depp"
        />

        <Story
        image = "http://www.pngall.com/wp-content/uploads/2017/05/Chris-Evans-PNG-Image.png"
        profileSrc = "http://www.pngall.com/wp-content/uploads/2017/05/Chris-Evans-PNG-Image.png"
        title = "Chris Evans"
        />

        <Story
        image = "https://freepngimg.com/download/temp/23250-2-scarlett-johansson.jpeg"
        profileSrc = "https://freepngimg.com/download/temp/23250-2-scarlett-johansson.jpeg"
        title = "scarlett johansson"
        />

        <Story
        image = "https://freepngimg.com/thumb/selena_gomez/7-2-selena-gomez-pretty-png.png"
        profileSrc = "https://freepngimg.com/thumb/selena_gomez/7-2-selena-gomez-pretty-png.png"
        title = "selena gomez"
        />
        </div>
    );
}

export default StoryReel;
