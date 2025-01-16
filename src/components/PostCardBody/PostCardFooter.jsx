import { icons } from '../../assets/icons'

const PostFooter = ({ likes, profileIcon, description, date, currentSlide, setCurrentSlide }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#FFFFFF] sm:p-3 ss:p-1">

      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-4 ss:gap-2">
          <img className='ss:w-[12px] ss:h-[12px] sm:w-[28px] sm:h-[28px]' src={icons.heart} alt="heart" width="28" height="28" />
          <img className='ss:w-[12px] ss:h-[12px] sm:w-[28px] sm:h-[28px]' src={icons.comment} alt="comment" width="24" height="24" />
          <img className='ss:w-[12px] ss:h-[12px] sm:w-[28px] sm:h-[28px]' src={icons.messenger} alt="messenger" width="24" height="24" />
        </div>

        {/* Dots Container */}
        <div className="dots-container flex justify-center ss:-ml-[10px] sm:-ml-10 sm:gap-2 ss:gap-1">
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)} // Set the slide index when a dot is clicked
              className={`ss:w-[3px] ss:h-[3px] dot sm:w-2 sm:h-2 rounded-full ${currentSlide === i ? "bg-[#3897F0]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        <img className='ss:w-[12px] ss:h-[12px] sm:w-[28px] sm:h-[28px]' src={icons.save} alt="save" width="24" height="24" />
      </div>

      <div className="flex items-center sm:gap-2 ss:gap-1">
        <img className='ss:w-[15px] ss:h-[15px] sm:w-[24px] sm:h-[24px]' src={profileIcon} alt="profile" width="24" height="24" />
        <p className="ss:text-[5px] sm:text-[14px] font-extralight">
          Liked by <span className="font-medium">craig_love</span> and{" "}
          <span className="font-medium">{likes}</span>
        </p>
      </div>
      <p className="ss:text-[5px] ss:leading-[8px] sm:text-xs font-light">
        <span className="font-medium">Foodieland.</span> {description}
      </p>
      <p className="ss:text-[3px] text-gray-500 sm:text-[11px]">{date}</p>
    </div>
  );
};

export default PostFooter;
