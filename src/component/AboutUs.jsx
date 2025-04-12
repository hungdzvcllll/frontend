import React, { useRef, useEffect, useState } from 'react';
import '../css/AboutUs.css';
const AboutUs = () => {
  const images = [
    'https://source.unsplash.com/800x400/?garage',
    'https://source.unsplash.com/800x400/?mechanic',
    'https://source.unsplash.com/800x400/?car,repair',
  ];

  const [index, setIndex] = useState(0);

  const showSlide = (i) => {
    const total = images.length;
    if (i >= total) setIndex(0);
    else if (i < 0) setIndex(total - 1);
    else setIndex(i);
  };

  const nextSlide = () => showSlide(index + 1);
  const prevSlide = () => showSlide(index - 1);

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Về Chúng Tôi</h1>
      </header>

      {/* Phần Giới thiệu */}
      <section className="about-section card">
        <h2>Giới Thiệu</h2>
        <p>
          Xưởng sửa chữa của chúng tôi được thành lập vào năm 2010 với sứ mệnh cung cấp dịch vụ sửa chữa 
          chất lượng cao và đáng tin cậy. Trong hơn một thập kỷ, chúng tôi đã phục vụ hàng ngàn khách hàng 
          và không ngừng đổi mới để nâng cao chất lượng dịch vụ.
        </p>
        <p>
          Tầm nhìn của chúng tôi là trở thành xưởng sửa chữa hàng đầu tại khu vực, nơi khách hàng luôn 
          tin tưởng và hài lòng với dịch vụ mà chúng tôi mang lại.
        </p>
      </section>

      {/* Phần Hình ảnh & Video Giới thiệu */}
      <section className="about-section card">
        <h2>Hình Ảnh & Video Giới Thiệu</h2>

        {/* Carousel ảnh */}
        <div className="carousel">
          <div
            className="slides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Slide ${i + 1}`} />
            ))}
          </div>
          <div className="nav-arrow prev" onClick={prevSlide}>
            &#10094;
          </div>
          <div className="nav-arrow next" onClick={nextSlide}>
            &#10095;
          </div>
        </div>

        {/* Video giới thiệu */}
        <div className="video-container">
          <video controls width="100%" style={{ borderRadius: '10px' }}>
            <source src="gioithieu.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;