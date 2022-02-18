import React from 'react';
import backgroundvideo from '../../media/background.mp4';

import LogoCriti from '../../media/logo-criti_vientrang.png';
import Vongnguyetque from '../../media/vongnguyetque.png';
import CC3_base from '../../media/CC3_base.jpg';
import image_shop from '../../media/Trau.jpg';
import image_game from '../../media/amx-posed.jpg';
import image_film from '../../media/MDD.png';
import image_technology from '../../media/roger-magrini.jpg';
import image_community from '../../media/getting-started.jpg';

import block_image_2 from '../../media/MDD_e.png';
import block_image_3 from '../../media/roger.jpg';
import block_image_4 from '../../media/MDD_copy.png';
import block_image_6 from '../../media/founder_copy.png';
import block_image_7 from '../../media/ball2.png';

import video_card_1 from '../../media/Game_video.mp4';
import video_card_2 from '../../media/Films_video.mp4';
import video_card_3 from '../../media/Clother_video.mp4';

const Home = () => {

  return (
    <div className="home">
      <video autoplay='true' loop='true' muted id="myVideo" className="home__video">
        <source className="home__video-size" src={backgroundvideo} type="video/mp4"/>
      </video>

      <div className="home__title">
        <h1 className="home__title-header">ĐỂ LÀM MỘT ĐIỀU TUYỆT VỜI</h1>
        <button className="home__title-button">
          <span className="home__title-button-text">HÃY GIA NHẬP CÙNG CRITI STUDIO</span>
        </button>
      </div>

      <div className='home__logo'>
        <img className='home__logo_vongnguyetque' src={Vongnguyetque} />
        <img className='home__logo_criti' src={LogoCriti} />
        {/* <img className='home__logo_vongnguyetque1' src={Vongnguyetque} /> */}
      </div>
      <h1 className="home__title-text">STUDIO MODEL 3D  - PHIM - GAME</h1>
    
    <div className='home__block'>
      <div className='home__block-1'>
        <figure class="snip0016">
        <img src={image_shop} alt="sample41"/>
        <figcaption>
          <h2>Model 3D</h2>
          <p>Tải và sử dụng model3D của Studio miễn phí hoặc trả phí.</p>
          <a href="/shop"></a>
        </figcaption>     
      </figure>
      <figure class="snip0016">
        <img src={image_game} alt="sample42"/>
        <figcaption>
          <h2>Game</h2>
          <p>Các sản phẩm game do Studio sản xuất Mobile, PC </p>
          <a href="#"></a>
        </figcaption>     
      </figure>
      <figure class="snip0016">
        <img src={image_film} alt="sample43"/>
        <figcaption>
          <h2>Films</h2>
          <p>Các dự án phim 3D anime do Studio sản xuất, lịch chiếu, thời gian khởi chiếu</p>
          <a href="#"></a>
        </figcaption>     
      </figure>
      <figure class="snip0016">
        <img src={image_technology} alt="sample43"/>
        <figcaption>
          <h2>Công Nghệ</h2>
          <p>Chia sẻ SourCode AI mà dự án sử dụng, miễn phí hoặc trả phí</p>
          <a href="#"></a>
        </figcaption>     
      </figure>
      <figure class="snip0016">
        <img src={image_community} alt="sample43"/>
        <figcaption>
          <h2>Cộng Đồng</h2>
          <p>Đào tạo các lập trình viên AI, kỹ thuật đồ họa 3D, phim 3D miễn phí</p>
          <a href="#"></a>
        </figcaption>     
      </figure>
      </div>

      <div className='home__block-5'>
        <h1 className='home__block-5-h1'>CÁC HOẠT ĐỘNG CỦA STUDIO</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home__block-5-card card">
              <video autoplay='true' loop='true' muted id="myVideo" className="home__block-5-card-video">
              <source className="home__block-5-card-video-size" src={video_card_1} type="video/mp4"/>
              </video>
              <div class="home__block-5-card-body card-body">
                <h1 class="home__block-5-card-body-title">DỰ ÁN GAME</h1>
                <p class="home__block-5-card-body-text card-text">Thiết kế game 3D, modeling và code. Coming soon....</p>
                <a href="#" class="home__block-5-card-body-btn-disable btn "><span class="home__block-5-card-body-btn-text" >Đi Tới Dự Án</span></a>
              </div>
              </div>
            </div>

            <div class="col">
              <div class="home__block-5-card card">
              <video autoplay='true' loop='true' muted id="myVideo" className="home__block-5-card-video">
              <source className="home__block-5-card-video-size" src={video_card_2} type="video/mp4"/>
              </video>
              <div class="home__block-5-card-body card-body">
                <h1 class="home__block-5-card-body-title">DỰ ÁN PHIM 3D</h1>
                <p class="home__block-5-card-body-text card-text">Khởi động từ tháng 2/2022, dự án làm phim cổ trang lịch sử. Mọi thông tin tiến độ dự án, tài nguyên và tài liệu vui lòng xem đường dẫn</p>
                <a href="#" class="home__block-5-card-body-btn btn btn-primary"><span class="home__block-5-card-body-btn-text" >Đi Tới Dự Án</span></a>
              </div>
              </div>
            </div>

            <div class="col">
              <div class="home__block-5-card card">
              <video autoplay='true' loop='true' muted id="myVideo" className="home__block-5-card-video">
              <source className="home__block-5-card-video-size" src={video_card_3} type="video/mp4"/>
              </video>
              <div class="home__block-5-card-body card-body">
                <h1 class="home__block-5-card-body-title">DỰ ÁN CỔ PHỤC</h1>
                <p class="home__block-5-card-body-text card-text">Khởi động từ 2/2022, dự án làm quần áo xưa phục vụ làm phim và làm game, xem tài liệu và tài nguyên dự án phía dưới</p>
                <a href="#" class="home__block-5-card-body-btn btn btn-primary">
                  <span class="home__block-5-card-body-btn-text" >Đi Tới Dự Án</span></a>
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>


      <div className='home__block-2'>
        <div className='home__block-2-title'>
          <h1 className='home__block-2-title-h1'> DỰ ÁN PHIM 3D CỔ TRANG VIỆT NAM</h1>
          <p className='home__block-2-title-span'>Dự án Criti Studio đang phối hợp cùng các đối tác - chuyên gia sử học tạo dựng phim 3D - mô tả lịch sử 300 năm nội chiến Việt Nam từ thời Mạc (1530) đến đầu thời Nguyễn (1802). Đây là một trong những khoảng thời gian đầy biến động của lịch sử nước ta khi lòng người thay đổi, kẻ mạnh quyền định đoạt số phận, chiến sự xảy ra liên miên, đất nước chia cắt. Cũng là đặt nền móng cho bản đồ hình chữ S của Việt Nam. Thời gian thì đã xóa mờ các cuộc chiến nhưng tên tuổi các vị anh hùng sẽ còn mãi, họ xứng đá để chúng ta mãi mãi khắc ghi. </p>
          <p className='home__block-2-title-span'>Dự Án bắt khởi động từ 14/02/2022, dự kiến tháng 6/2022 sẽ có trailer mới nhất</p>

          <button className='home__block-2-title-button'>
            <a href='/films' className='home__block-2-title-button-text'>Tham Gia Tìm Hiểu & Ủng Hộ Dự Án</a>
            </button>

        </div>
        <img className='home__block-2-img' src={block_image_2} />
      </div>
      <div className='home__block-3'>
      <img className='home__block-2-img' src={image_technology} />
      <div className='home__block-2-title'>
          <h1 className='home__block-2-title-h1'>TEXTURE CHÂN THỰC</h1>
          <p className='home__block-2-title-span'>Texture
Được dịch từ tiếng Anh-Trong nghệ thuật thị giác, kết cấu là chất lượng bề mặt cảm nhận của một tác phẩm nghệ thuật. Nó là một yếu tố của thiết kế hai chiều và ba chiều và được phân biệt bởi các đặc tính hình ảnh và vật lý nhận thức của nó.</p>
<button className='home__block-2-title-button'>
            <a href='/technology' className='home__block-2-title-button-text'>Tìm Hiểu Thêm Thông Tin Về Công nghệ</a>
            </button>
      
      </div>

      
      </div>
      <div className='home__block-4'>
      
        <div className='home__block-2-title'>
          <h1 className='home__block-2-title-h1'>AI - DA TÓC THÔNG MINH</h1>
          <p className='home__block-2-title-span'>Công nghệ AI, giúp render model 3D trực tiếp từ hình ảnh, công việc modeling trở nên dễ dàng hơn. Kết hợp với bộ nhận diện Smarth-Hair da tóc thông minh xây dựng model nhân vật giống thật hơn, thực tế hơn</p>
          <button className='home__block-2-title-button'>
            <a href='/films' className='home__block-2-title-button-text'>Tìm Hiểu & Tham Gia Đào Tạo  AI</a>
            </button>
        
        </div>
        <img className='home__block-2-img' src={block_image_4} />
      </div>


      <div className='home__block-6'>
      <img className='home__block-6-img' src={block_image_6} />
        <div className='home__block-6-title'>
          <h1 className='home__block-6-title-h1'>SƠN NGUYỄN - FOUNDER  CRITI STUDIO</h1>
          <p className='home__block-6-title-span'>Mong rằng các dự án Studio sắp tới sẽ nhận được nhiều dự quan tâm của tất cả các bạn !</p>
        </div>

      </div>

      <div className='home__block-7'>
      <div className='home__block-7-title'>
          <h1 className='home__block-7-title-h1'>HÃY LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <input className='home__block-7-title-h1-input' placeholder='Enter Your Email'>
          </input>
          <button className='home__block-7-title-button'>
            <a href='/films' className='home__block-7-title-button-text'>SUBMIT</a>
            </button>
            <p className='home__block-7-title-span'>Công nghệ AI, giúp render model 3D trực tiếp từ hình ảnh, công việc modeling trở nên dễ dàng hơn. Kết hợp với bộ nhận diện Smarth-Hair da tóc thông minh xây dựng model nhân vật giống thật hơn, thực tế hơn</p>
        
        </div>
        <img className='home__block-2-img' src={block_image_7} />

      </div>

    </div>


    <div className="footer">
      <div className="footer-header">
      <div class="row">
            <div class="col">a
            </div>
            <div class="col">a
            </div>
            <div class="col">a
            </div>
            <div class="col">a
            </div>
        </div>
      </div>
      <div className="footer-footer"></div>

      </div>
    </div>

  )
}

export default Home