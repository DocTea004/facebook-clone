import React,{useState, useEffect} from 'react';
import Post from '../../Components/Post/Post';
import StoryReel from '../../Components/StoryReel/StoryReel';
import db from '../../firebase';
import MessageSender from '../MessageSender/MessageSender';
import "./Feed.css";

function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=> ({id:doc.id, data:doc.data()})))
        ));
    },[])

    console.log(posts)

    return (
        <div className="feed">
            <StoryReel  />
            <MessageSender  />

            {
                posts.map(post=>(
                    <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                    />
                ))
            }

           {/*
            <Post   
            profilePic="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/122849942_388782072528756_7145083163512656692_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEkW1LkZ9ltDt0v6YbmQCE76uX0mJKzMN_q5fSYkrMw37AzsSvDonbJACJTGqRjzAqAKJSPk32w4g8rTAFovlhm&_nc_ohc=nCkGCl3DCvUAX_eDEn6&_nc_ht=scontent.facc1-1.fna&oh=a586a413bef6972b75139ee1cc3a783b&oe=5FC151BB"
            message="Dex World..the best technology world"
            timestamp="Its time"
            username="Nana__Kyei"
            image="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/123136907_388781979195432_3473274811555864651_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEVLu7oraAwP_CebCSqjxeV7CbAiVlWrvnsJsCJWVau-aMYH6DLwxqcRr7MonrqWjZwte5ghcDnm6wS7RH2Qd2m&_nc_ohc=tIMNyhM_6hMAX9PPrPg&_nc_ht=scontent.facc1-1.fna&oh=c29a392864369bd4873305c5242e4885&oe=5FC0CEEE"
            />

            <Post   
            profilePic="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/122849942_388782072528756_7145083163512656692_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEkW1LkZ9ltDt0v6YbmQCE76uX0mJKzMN_q5fSYkrMw37AzsSvDonbJACJTGqRjzAqAKJSPk32w4g8rTAFovlhm&_nc_ohc=nCkGCl3DCvUAX_eDEn6&_nc_ht=scontent.facc1-1.fna&oh=a586a413bef6972b75139ee1cc3a783b&oe=5FC151BB"
            message="Dex World..the best technology world"
            timestamp="Its time"
            username="Nana__Kyei"
            image="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/123136907_388781979195432_3473274811555864651_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEVLu7oraAwP_CebCSqjxeV7CbAiVlWrvnsJsCJWVau-aMYH6DLwxqcRr7MonrqWjZwte5ghcDnm6wS7RH2Qd2m&_nc_ohc=tIMNyhM_6hMAX9PPrPg&_nc_ht=scontent.facc1-1.fna&oh=c29a392864369bd4873305c5242e4885&oe=5FC0CEEE"
            />
           
           <Post   
            profilePic="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/122849942_388782072528756_7145083163512656692_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEkW1LkZ9ltDt0v6YbmQCE76uX0mJKzMN_q5fSYkrMw37AzsSvDonbJACJTGqRjzAqAKJSPk32w4g8rTAFovlhm&_nc_ohc=nCkGCl3DCvUAX_eDEn6&_nc_ht=scontent.facc1-1.fna&oh=a586a413bef6972b75139ee1cc3a783b&oe=5FC151BB"
            message="Dex World..the best technology world"
            timestamp="Its time"
            username="Nana__Kyei"
            image="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/123136907_388781979195432_3473274811555864651_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEVLu7oraAwP_CebCSqjxeV7CbAiVlWrvnsJsCJWVau-aMYH6DLwxqcRr7MonrqWjZwte5ghcDnm6wS7RH2Qd2m&_nc_ohc=tIMNyhM_6hMAX9PPrPg&_nc_ht=scontent.facc1-1.fna&oh=c29a392864369bd4873305c5242e4885&oe=5FC0CEEE"
            />

            <Post   
            profilePic="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/122849942_388782072528756_7145083163512656692_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEkW1LkZ9ltDt0v6YbmQCE76uX0mJKzMN_q5fSYkrMw37AzsSvDonbJACJTGqRjzAqAKJSPk32w4g8rTAFovlhm&_nc_ohc=nCkGCl3DCvUAX_eDEn6&_nc_ht=scontent.facc1-1.fna&oh=a586a413bef6972b75139ee1cc3a783b&oe=5FC151BB"
            message="Dex World..the best technology world"
            timestamp="Its time"
            username="Nana__Kyei"
            image="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/123136907_388781979195432_3473274811555864651_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEVLu7oraAwP_CebCSqjxeV7CbAiVlWrvnsJsCJWVau-aMYH6DLwxqcRr7MonrqWjZwte5ghcDnm6wS7RH2Qd2m&_nc_ohc=tIMNyhM_6hMAX9PPrPg&_nc_ht=scontent.facc1-1.fna&oh=c29a392864369bd4873305c5242e4885&oe=5FC0CEEE"
            /> 
           */}
            
        </div>
    )
}

export default Feed
