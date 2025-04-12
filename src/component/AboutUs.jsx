import React, { useState } from 'react';

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
    <div style={styles.container}>
      <style>{cssStyles}</style>

      {/* HEADER theo thiết kế mới */}
      <nav className="main-nav">
        <div className="logo">
          <div className="circle-logo">A</div>
          <span className="brand-name">ANT CENTER</span>
        </div>
        <ul className="menu">
          <li>Dịch vụ</li>
          <li>Sản phẩm</li>
          <li className="active">Bài viết</li>
          <li>Training</li>
          <li>Tuyển dụng</li>
        </ul>
        <button className="book-button">Đặt lịch ngay</button>
      </nav>

      {/* HEADER PAGE */}
      <header className="about-header">
        <h1>Về Chúng Tôi</h1>
      </header>

      {/* GIỚI THIỆU */}
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

      {/* HÌNH ẢNH + VIDEO */}
      <section className="about-section card">
        <h2>Hình Ảnh & Video Giới Thiệu</h2>

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

        <div className="video-container">
          <video controls>
            <source src="gioithieu.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#2d2f36',
    color: '#f1f1f1',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    minHeight: '100vh',
    paddingBottom: '40px',
  },
};

const cssStyles = `
  /* HEADER chính */
  .main-nav {
    background-color: #151820;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .circle-logo {
    width: 40px;
    height: 40px;
    background-color: white;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;
  }

  .brand-name {
    color: #00e0ff;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
  }

  .menu li {
    color: white;
    cursor: pointer;
    transition: color 0.2s;
  }

  .menu li:hover, .menu .active {
    color: #00e0ff;
  }

  .book-button {
    background-color: #a855f7;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  .book-button:hover {
    background-color: #9333ea;
  }

  .about-header {
    text-align: center;
    padding: 30px 20px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .about-header h1 {
    font-size: 2.8rem;
    color: #00c4cc;
    margin: 0;
  }

  .about-section {
    max-width: 1200px;
    margin: 40px auto;
    padding: 30px;
    background-color: #1e1f24;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  }

  .about-section h2 {
    color: #00c4cc;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  .about-section p {
    line-height: 1.8;
    margin-bottom: 15px;
  }

  .carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    margin-top: 20px;
  }

  .slides {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .slides img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
    transition: background 0.3s ease;
  }

  .nav-arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .prev {
    left: 15px;
  }

  .next {
    right: 15px;
  }

  .video-container {
    margin-top: 30px;
  }

  .video-container video {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }
`;

export default AboutUs;
