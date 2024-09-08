import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-[52rem] max-w-6xl mx-auto p-4">
      <h1 className="text-center text-32xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: "algeria" }}>
  <span className="text-color">Gallery</span>
</h1>

      <div className="shadow-2xl shadow-gray-400 transform hover:scale-105 transition duration-300 ease-in-out rounded-lg overflow-hidden">
        <Slider className="p-2 bg-black" {...settings}>
          <div>
            <img
              src="/gallery/img1.jpg"
              alt="Slide 1"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img2.jpg"
              alt="Slide 2"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img3.jpg"
              alt="Slide 3"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img4.jpg"
              alt="Slide 4"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img5.jpg"
              alt="Slide 5"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img6.jpg"
              alt="Slide 6"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img7.jpg"
              alt="Slide 7"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img8.jpg"
              alt="Slide 8"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img9.jpg"
              alt="Slide 9"
              className="w-full object-cover aspect-video"
            />
          </div>
          <div>
            <img
              src="/gallery/img10.jpg"
              alt="Slide 10"
              className="w-full object-cover aspect-video"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
