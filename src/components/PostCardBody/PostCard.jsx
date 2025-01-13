import React, { useState } from "react";
import PostHeader from "./PostCardHeader";
import Carousel from "./PostCardCarousel";
import PostFooter from "./PostCardFooter";
import { icons } from '../../assets/icons';

const PostCard = ({ post }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="post-card overflow-hidden">

      {/* PostCard Header */}
      <PostHeader
        profileImg={icons.Oval}
        name={post.name}
        location={post.location}
        verifiedIcon={icons.verify}
        moreIcon={icons.more}
      />

      {/* Carousel Component */}
      <Carousel images={post.images} currentSlide={currentSlide} />

      {/* PostCard Footer */}
      <PostFooter
        likes={post.likes}
        profileIcon={icons.profile}
        description={post.description}
        date={post.date}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide} // Pass setState function
      />
    </div>
  );
};

export default PostCard;
