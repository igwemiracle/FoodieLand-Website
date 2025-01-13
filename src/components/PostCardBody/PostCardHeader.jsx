const PostHeader = ({ profileImg, name, location, verifiedIcon, moreIcon }) => (
  <div className="flex justify-between items-center bg-[#FFFFFF] p-3">
    <div className="flex items-start">
      <img src={profileImg} width="40" height="40" alt="profile" />
      <div className="ml-3">
        <h1 className="font-semibold text-sm">{name}</h1>
        <p className="text-xs">{location}</p>
      </div>
      <img className="mt-[2px] ml-1" src={verifiedIcon} width="18" height="18" alt="verify" />
    </div>
    <img src={moreIcon} width="18" height="18" alt="more" />
  </div>
);

export default PostHeader;
