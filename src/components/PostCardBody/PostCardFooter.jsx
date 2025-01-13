import { icons } from '../../assets/icons'

const PostFooter = ({ likes, profileIcon, description, date, currentSlide, setCurrentSlide }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#FFFFFF] p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-4">
          <img src={icons.heart} alt="heart" width="28" height="28" />
          <img src={icons.comment} alt="comment" width="24" height="24" />
          <img src={icons.messenger} alt="messenger" width="24" height="24" />
        </div>

        {/* Dots Container */}
        <div className="dots-container flex justify-center -ml-12 gap-2">
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)} // Set the slide index when a dot is clicked
              className={`dot w-2 h-2 rounded-full ${currentSlide === i ? "bg-[#3897F0]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        <img src={icons.save} alt="save" width="24" height="24" />
      </div>

      <div className="flex items-center gap-2">
        <img src={profileIcon} alt="profile" width="24" height="24" />
        <p className="text-[14px] font-extralight">
          Liked by <span className="font-medium">craig_love</span> and{" "}
          <span className="font-medium">{likes}</span>
        </p>
      </div>
      <p className="text-xs font-light">
        <span className="font-medium">Foodieland.</span> {description}
      </p>
      <p className="text-gray-500 text-[11px]">{date}</p>
    </div>
  );
};

export default PostFooter;
