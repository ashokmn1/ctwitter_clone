import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Comment = () => {
  const [image, setImage] = useState('')
  const [getComments, setGetComments] = useState([])
  const [comment,setComment] = useState('')
  const commentsToStore = []

  const handleAddComment = () => {
    postComment()
  }

  const params = useParams()
  const selectedPost = async () => {
    const response = await axios.get(`https://node-api-twitter.herokuapp.com/user/tweet/${params.id}`)
      .catch((err) => {
        console.log("error", err);
      });
    setImage(response.data[0].content);
    // console.log(response.data[0].content);
    selectedPostComments();
  };

  const selectedPostComments = async () => {
    const response = await axios.get(`https://node-api-twitter.herokuapp.com/tweet/${params.id}/comment`)
      .catch((err) => {
        console.log("error", err);
      });
    response.data.map((each) => {
      commentsToStore.push(each.text);
      // console.log(each.text)
      setGetComments(commentsToStore);
    });
    // console.log(response.data)
  };

  selectedPost()

  const comments = getComments.map((each) => {
    return (
      <div className="comment">
        <p>
          {each}
        </p>
  
      </div>
    );
  });

  const postComment = async () => {
    const response = await axios.post(`https://node-api-twitter.herokuapp.com/tweet/${params.id}/comment`,
        {
          text: `${comment}`,
        }
      )
      .catch((err) => {
        console.log("error", err);
      });
    console.log(response);
  };

  return (
    <div>
      <div className='ch'>
        <img src={image} alt="tweets" />
        <div className='ci'>
          <textarea cols='25' rows='5' placeholder="your comments" onChange={(e)=>setComment(e.target.value)} />
          <i
          onClick={handleAddComment}
           className="fas fa-plus"></i>
        </div>
        <div className='cm'>
          {comments}
        </div>


      </div>

    </div>
  )
}

export default Comment
