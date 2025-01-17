const Carousel = ({ images, currentSlide }) => {

  const totalSlides = images.length;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="carousel-container flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full relative">
            <img className="w-full" src={(`${image}`)} alt={`carousel ${index}`} />
            {/* Photo Number */}
            <div className="flexCenter absolute top-3 right-3 ss:w-[15px] ss:h-[10px] ss:text-[5px] sm:w-[40px] sm:h-[30px] rounded-full bg-dark-gray sm:text-xs text-white">
              {index + 1}/{totalSlides}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
