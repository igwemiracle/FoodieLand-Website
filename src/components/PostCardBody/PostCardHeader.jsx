const PostHeader = ({ profileImg, name, location, verifiedIcon, moreIcon }) => (
  <div className="flex justify-between items-center  ss:p-1 sm:p-3">
    <div className="flex items-start ">

      <div className="flex gap-1">
        <div>
          <img className="ss:w-[30px] ss:h-[30px] sm:w-[45px] sm:h-[45px]" src={profileImg} width="40" height="40" alt="profile" />
        </div>
        <div className="flex flex-col ss:mt-1 ss:ml-0 sm:ml-2 sm:mt-1">
          <p className="ss:text-[7px] font-semibold sm:text-sm">{name}</p>
          <p className="ss:text-[6px] sm:text-xs ss:mt-1 sm:mt-1">{location}</p>
        </div>
      </div>

      <img className="ss:mt-1 ss:w-[10px] ss:h-[10px] sm:w-[15px] sm:h-[15px] sm:mt-[5px] ml-1" src={verifiedIcon} width="18" height="18" alt="verify" />
    </div>


    <img className="ss:w-[10px] ss:h-[10px] sm:w-[20px] sm:h-[20px]" src={moreIcon} width="18" height="18" alt="more" />
  </div>
);

export default PostHeader;
