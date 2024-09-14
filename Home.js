import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
// import logo from './logo.svg';
import { React, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import '../Assets/css/style.css';

// import required modules
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../Assets/image/img1.jpg'
import img2 from '../Assets/image/img2.avif'
import img3 from '../Assets/image/img3.jpg'
import img4 from '../Assets/image/img4.jpg'
import img5 from '../Assets/image/img5.jpg'
import img6 from '../Assets/image/img6.jpg'
import img7 from '../Assets/image/img7.jpg'
import img8 from '../Assets/image/product-7-img-1.jpg'
import img9 from '../Assets/image/product-6-img-1.jpg'
import img10 from '../Assets/image/product-4-img-1.jpg'
import img11 from '../Assets/image/product-3-img-1.jpg'
import img12 from '../Assets/image/product-2-img-1.jpg'
import img13 from '../Assets/image/product-1-img-1.jpg'
import img14 from '../Assets/image/product-8-img-1.jpg'
import img15 from '../Assets/image/product-10-img-1-1.jpg'
import img16 from '../Assets/image/img8.jpg'
import img17 from '../Assets/image/img9.jpg'
import img18 from '../Assets/image/img10.jpg';
import img19 from '../Assets/image/img11.jpg';
import img20 from '../Assets/image/img12.png'
import img21 from '../Assets/image/img13.jpg'
import img22 from '../Assets/image/img14.jpg'
import img23 from '../Assets/image/img15.jpg'
import img24 from '../Assets/image/img16.jpg'
import img25 from '../Assets/image/img17.jpg'
import img26 from '../Assets/image/img18.jpg'
import img27 from '../Assets/image/img19.jpg'
import img28 from '../Assets/image/img20.jpg'
import img29 from '../Assets/image/img21.jpg'
import img30 from '../Assets/image/img22.jpg'
import img31 from '../Assets/image/img23.jpg'
import img32 from '../Assets/image/img24.jpg'
import img33 from '../Assets/image/img25.jpg'
import img34 from '../Assets/image/img26.jpg'
import img35 from '../Assets/image/img27.jpg'
import img36 from '../Assets/image/img28.jpg'
import img37 from '../Assets/image/img29.jpg'
import img38 from '../Assets/image/img30.jpg'
import img39 from '../Assets/image/img31.jpg'
import img40 from '../Assets/image/img40.jpg'
import img41 from '../Assets/image/img41.jpg'
import axios from 'axios';
import { useEffect } from 'react';



function Home() {

 const [pdata,setPdata]= useState([]);

 
  useEffect(()=>{

    const baseURL = "http://localhost:3002/get-product";
    axios.get(baseURL).then((response1) => {
        //console.log(response.data.data);
        setPdata(response1.data.data);
        });


  },[]);



  const [sdata,setSdata]= useState([]);

  useEffect(()=>{

    const baseURL = "http://localhost:3002/get-slider";
    axios.get(baseURL).then((response1) => {
        //console.log(response.data.data);
        setSdata(response1.data.data);
        });


  },[]);


  
  return (
    <>
      <Container fluid>
        <Row className='mt-5'>

          <Col sm={4}>
          {sdata.map((simage)=>(
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipername"
      >
        <SwiperSlide>{simage.image_path}</SwiperSlide>
       
        
      </Swiper>
          ))};
          </Col>
          <Col sm={4}>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img4}></img></SwiperSlide>
        <SwiperSlide><img src={img5}></img></SwiperSlide>
        <SwiperSlide><img src={img6}></img></SwiperSlide>
        
      </Swiper>
          </Col>
          <Col sm={4}>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img7}></img></SwiperSlide>
        <SwiperSlide><img src={img40}></img></SwiperSlide>
        <SwiperSlide><img src={img41}></img></SwiperSlide>
        
      </Swiper>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="owl-carousel" style={{ marginTop: 80 }}>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img8} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img9} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img10} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img11} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img12} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img13} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img14} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img15} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img10} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img11} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img12} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img13} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img14} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img15} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img8} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img9} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img10} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img11} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img12} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img13} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img14} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img15} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img10} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img11} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img12} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                {" "}
                <img style={{ height: '350px', width: '100%' }} src={img13} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img14} alt="" />
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
              <div>
                <img style={{ height: '350px', width: '100%' }} src={img15} alt="" />{" "}
                <h6 className='fw-bold text-dark text-center'>Green &Tea
                  <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button></h6>
                <p style={{ marginLeft: '70px', marginTop: '-10px' }}>Body Care</p>
              </div>
            </div>


          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <img src={img16} width={'100%'}></img>
          </Col>
          <Col sm={4}>
            <img src={img17} width={'100%'}></img>
          </Col>
          <Col sm={4}>
            <img src={img18} width={'100%'}></img>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12} className='mt-4'>
            <img src={img19} width={'100%'}></img>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='text-center mt-5'>
          <Col sm={12}>
            <img src={img20} height={'30px'} width={'20%'} style={{ textDecorationStyle: 'unset' }}></img>
            <h1 className='fw-bold text-dark text-center mt-3' style={{ fontFamily: 'sans-serif', color: '#80827e' }}>All for your online store</h1>
            <p className='text-center text-lightblue' style={{ color: '#80827e' }}>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='mt-5'>
        
            {pdata.map((plist)=>(

          <Col sm={3}>
            <img src={img21} width={'100%'}>
            </img>
            <p className='text-center' style={{ marginTop: '-30px' }}><i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i></p>
            <h6 className='fw-bold text-center' style={{  }}>{plist.name}</h6>
            <p className='text-center' style={{marginLeft:'50px' }}>${plist.price}
              <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button>
            </p>
          </Col>
                 ))}

         
        </Row>
      </Container>
      <Container>
        <Row className='mt-3'>
          <Col sm={3}>
            <img src={img25} width={'100%'}>
            </img>
            <p className='text-center' style={{ marginTop: '-30px' }}><i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i></p>
            <h6 className='fw-bold text-center' style={{ }}>Skin Serum</h6>
            <p className='text-center' style={{ marginLeft:'50px' }}>$64.40
              <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button>
            </p>
          </Col>
          <Col sm={3}>
            <img src={img26} width={'100%'}></img>
            <p className='text-center' style={{ marginTop: '-30px' }}><i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i></p>
            <h6 className='fw-bold text-center' style={{  }}>Cleanse</h6>
            <p className='text-center' style={{ marginLeft:'60px' }}>$64.40
              <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button>
            </p>
          </Col>
          <Col sm={3}>
            <img src={img27} width={'100%'}></img>
            <p className='text-center' style={{ marginTop: '-30px' }}><i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i></p>
            <h6 className='fw-bold text-center' style={{  }}>Coco Skies</h6>
            <p className='text-center' style={{ marginLeft:'60px' }}>$64.40
              <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button>
            </p>
          </Col>
          <Col sm={3}>
            <img src={img28} width={'100%'}></img>
            <p className='text-center ' style={{ marginTop: '-30px' }}><i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-heart"></i></p>
            <h6 className='fw-bold text-center' style={{ }}>Coco Kiwi</h6>
            <p className='text-center' style={{ marginLeft:'60px' }}>$64.40
              <Button variant="dark" style={{ fontSize: '10px', marginLeft: '10px' }}>Add To Cart</Button>
            </p>
          </Col>

        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12} className='mt-5'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><p><span className="qodef-m-caption" style={{ color: "#738760" }}>
  Testimonials
</span>
<h2 className="qodef-m-title fw-bold text-dark" style={{fontFamily:'sans-serif'}}>Our happy customers </h2>
<h5 itemProp="description" className="qodef-e-text text-center" style={{fontFamily:'initial',color:'#80827e'}}>
  « Mei an pericula euripidis. phaedrum torquatos nec eu, detr periculis ex,
  nihil expetendis in mei hinc partem ei est. Eos ei nisl graecis, vix aperiri
  lorem ispsum consequat an. Eius lorem tincidunt vix, vel pertinax sensibus,
  error epicurei mea ei. »{" "}
</h5>
<h6 className="qodef-e-author">
  <h6 className="qodef-e-author-name fw-bold" style={{color:'#80827e'}}>Miranda Bloome </h6>
  <h6 className="qodef-e-author-job fw-bold" style={{color:'#80827e'}}>Cosmetics </h6>
</h6>

</p></SwiperSlide>
        <SwiperSlide><p><span className="qodef-m-caption" style={{ color: "#738760" }}>
  Testimonials
</span>
<h2 className="qodef-m-title fw-bold text-dark" style={{fontFamily:'sans-serif'}}>Our happy customers </h2>
<h5 itemProp="description" className="qodef-e-text text-center" style={{fontFamily:'initial',color:'#80827e'}}>
  « Mei an pericula euripidis. phaedrum torquatos nec eu, detr periculis ex,
  nihil expetendis in mei hinc partem ei est. Eos ei nisl graecis, vix aperiri
  lorem ispsum consequat an. Eius lorem tincidunt vix, vel pertinax sensibus,
  error epicurei mea ei. »{" "}
</h5>
<h6 className="qodef-e-author">
  <h6 className="qodef-e-author-name fw-bold" style={{color:'#80827e'}}>John Baldesari </h6>
  <h6 className="qodef-e-author-job fw-bold" style={{color:'#80827e'}}>Cosmetics </h6>
</h6>

</p></SwiperSlide>
        <SwiperSlide><p><span className="qodef-m-caption" style={{ color: "#738760" }}>
  Testimonials
</span>
<h2 className="qodef-m-title fw-bold text-dark" style={{fontFamily:'sans-serif'}}>Our happy customers </h2>
<h5 itemProp="description" className="qodef-e-text text-center" style={{fontFamily:'initial',color:'#80827e'}}>
  « Mei an pericula euripidis. phaedrum torquatos nec eu, detr periculis ex,
  nihil expetendis in mei hinc partem ei est. Eos ei nisl graecis, vix aperiri
  lorem ispsum consequat an. Eius lorem tincidunt vix, vel pertinax sensibus,
  error epicurei mea ei. »{" "}
</h5>
<h6 className="qodef-e-author">
  <h6 className="qodef-e-author-name fw-bold" style={{color:'#80827e'}}>Elsa schmidt </h6>
  <h6 className="qodef-e-author-job fw-bold" style={{color:'#80827e'}}>Cosmetics </h6>
</h6>

</p></SwiperSlide>
      </Swiper>

                 </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <img src={img31} width={'100%'}></img>
            <div
              className="elementor-element elementor-element-1f401ec elementor-widget__width-auto elementor-widget elementor-widget-sante_core_custom_font"
              data-id="1f401ec"
              data-element_type="widget"
              data-widget_type="sante_core_custom_font.default"
            >
              <div className="elementor-widget-container" style={{ color: "#FFFFFF", fontFamily: "Quentin", fontSize: 158, marginTop: '-350px',position:'relative' }}>
                <p
                  className="qodef-shortcode qodef-m  qodef-custom-font qodef-custom-font-177 qodef-layout--simple text-center"
                  
                >
                  Gift bags &amp; Sets
                </p>{" "}
              </div>
            </div>
            <h4 className='' style={{ color: "#ffffff",marginTop:'70px', marginLeft:'500px' }}>
              <span>Gifts &amp; sets for your loved ones</span>
            </h4>
            <div
              className="elementor-element elementor-element-abeb1dc elementor-widget__width-auto elementor-widget elementor-widget-sante_core_button text-center"
              data-id="abeb1dc"
              data-element_type="widget"
              data-widget_type="sante_core_button.default"
            >
              <div className="elementor-widget-container">
                <a
                  className="qodef-shortcode qodef-m  qodef-button qodef-layout--outlined  qodef-html--link"
                  href="https://sante.qodeinteractive.com/shop/left-sidebar/"
                  target="_self"
                  style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                >
                  <div
                    className=""
                    style={{ borderColor: "#FFFFFF" , marginTop:'30px'}}
                  >
                    <span className="qodef-m-text">Read More</span>
                  </div>
                  <span
                    className="qodef-outlined-button-background"
                    style={{ backgroundColor: "#FFFFFF40" }}
                  />
                </a>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-436e3ab elementor-widget elementor-widget-spacer"
              data-id="436e3ab"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div className="elemefyntor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner" />
                </div>
              </div>
            </div>
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop:'200px' }}>
          <Col sm={4}>
            <article className="qodef-e qodef-blog-item qodef-grid-item qodef-item--full post-1714 post type-post status-publish format-standard has-post-thumbnail hentry category-cosmetics tag-beauty tag-handmade">
              <div className="qodef-e-inner">
                <div className="qodef-e-media">
                  <div className="qodef-e-media-image" >
                    <a
                      itemProp="url"
                      href="https://sante.qodeinteractive.com/cleansing-scrub/"
                    >
                      <img
                        width={'100%'}
                        height={'300px'}
                        src={img32}
                        className="attachment-full size-full"
                        alt="d"
                        decoding="async"
                        srcSet="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1.jpg 800w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1-300x265.jpg 300w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1-768x679.jpg 768w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1-600x530.jpg 600w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />{" "}
                    </a>
                  </div>

                </div>{" "}
                <div className="qodef-e-content">
                  <div className="qodef-e-info qodef-info--top">
                    <div className="qodef-e-info-item qodef-e-info-category">
                      <a
                        href="https://sante.qodeinteractive.com/category/cosmetics/"
                        rel="category tag" className='text-dark' style={{ textDecorationLine: 'none', color: '#80827e' }}
                      >
                        Cosmetics
                      </a>
                    </div>{" "}
                    <div className="qodef-e-info-item qodef-e-info-tags">
                      <a href="https://sante.qodeinteractive.com/tag/beauty/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        beauty
                      </a>
                      <a href="https://sante.qodeinteractive.com/tag/handmade/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        handmade
                      </a>{" "}
                    </div>
                  </div>
                  <div className="qodef-e-text">
                    <h4 itemProp="name" className="qodef-e-title entry-title">
                      <a
                        itemProp="url"
                        className="qodef-e-title-link text-dark fw-bold" style={{ textDecorationLine: 'none', fontFamily: 'inherit', color: '#80827e' }}
                        href="https://sante.qodeinteractive.com/cleansing-scrub/"
                      >
                        Cleansing scrub{" "}
                      </a>
                    </h4>
                    <p itemProp="description" className="qodef-e-excerpt" style={{ fontFamily: 'sans-serif', color: '#80827e' }}>
                      Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis
                      in mei. Mei an pericula euripidis. hinc partem ei estos ei{" "}
                    </p>
                  </div>
                  <div className="qodef-e-info qodef-info--bottom">
                    <div className="qodef-e-info-left">
                      <div className="qodef-e-read-more">
                        <a
                          className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link"
                          href="https://sante.qodeinteractive.com/cleansing-scrub/"
                          target="_self"
                        >
                          {" "}
                          <Button variant="outline-secondary" className='fw-bold' style={{ fontSize: '13px', color: '#80827e' }}>Read More</Button>{' '}
                        </a>{" "}
                      </div>
                    </div>
                    <div className="qodef-e-info-right"></div>
                  </div>
                </div>
              </div>
            </article>



          </Col>
          <Col sm={4}>
            <article className="qodef-e qodef-blog-item qodef-grid-item qodef-item--full post-1714 post type-post status-publish format-standard has-post-thumbnail hentry category-cosmetics tag-beauty tag-handmade">
              <div className="qodef-e-inner">
                <div className="qodef-e-media">
                  <div className="qodef-e-media-image">
                    <a
                      itemProp="url"
                      href="https://sante.qodeinteractive.com/nourish-organic/"
                    >
                      <img
                        width={'100%'}
                        height={'300px'}
                        src={img33}
                        className="attachment-full size-full" 
                        alt="d"
                        decoding="async"
                        srcset="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2.jpg 800w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2-300x265.jpg 300w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2-768x679.jpg 768w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2-600x530.jpg 600w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />{" "}
                    </a>
                  </div>

                </div>{" "}
                <div className="qodef-e-content">
                  <div className="qodef-e-info qodef-info--top">
                    <div className="qodef-e-info-item qodef-e-info-category">
                      <a
                        href="https://sante.qodeinteractive.com/category/cosmetics/"
                        rel="category tag" className='text-dark' style={{ textDecorationLine: 'none', color: '#80827e' }}
                      >
                        Cosmetics
                      </a>
                    </div>{" "}
                    <div className="qodef-e-info-item qodef-e-info-tags">
                      <a href="https://sante.qodeinteractive.com/tag/beauty/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        beauty
                      </a>
                      <a href="https://sante.qodeinteractive.com/tag/handmade/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        handmade
                      </a>{" "}
                    </div>
                  </div>
                  <div className="qodef-e-text">
                    <h4 itemProp="name" className="qodef-e-title entry-title">
                      <a
                        itemProp="url"
                        className="qodef-e-title-link text-dark fw-bold" style={{ textDecorationLine: 'none', fontFamily: 'inherit', color: '#80827e' }}
                        href="https://sante.qodeinteractive.com/cleansing-scrub/"
                      >
                        Nourish organic{" "}
                      </a>
                    </h4>
                    <p itemProp="description" className="qodef-e-excerpt" style={{ fontFamily: 'sans-serif', color: '#80827e' }}>
                      Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis
                      in mei. Mei an pericula euripidis. hinc partem ei estos ei{" "}
                    </p>
                  </div>
                  <div className="qodef-e-info qodef-info--bottom">
                    <div className="qodef-e-info-left">
                      <div className="qodef-e-read-more">
                        <a
                          className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link"
                          href="https://sante.qodeinteractive.com/cleansing-scrub/"
                          target="_self"
                        >
                          {" "}
                          <Button variant="outline-secondary" className='fw-bold' style={{ fontSize: '13px', color: '#80827e' }}>Read More</Button>{' '}
                        </a>{" "}
                      </div>
                    </div>
                    <div className="qodef-e-info-right"></div>
                  </div>
                </div>
              </div>
            </article>



          </Col>
          <Col sm={4}>
            <article className="qodef-e qodef-blog-item qodef-grid-item qodef-item--full post-1714 post type-post status-publish format-standard has-post-thumbnail hentry category-cosmetics tag-beauty tag-handmade">
              <div className="qodef-e-inner">
                <div className="qodef-e-media">
                  <div className="qodef-e-media-image">
                    <a
                      itemProp="url"
                      href="https://sante.qodeinteractive.com/true-botanicals/"
                    >
                      <img
                        width={'100%'}
                        height={'300px'}
                        src={img34}
                        className="attachment-full size-full"
                        alt="d"
                        decoding="async"
                        srcSet="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3.jpg 800w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3-300x265.jpg 300w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3-768x679.jpg 768w, https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3-600x530.jpg 600w" sizes="(max-width: 800px) 100vw, 800px"
                      />{" "}
                    </a>
                  </div>

                </div>{" "}
                <div className="qodef-e-content">
                  <div className="qodef-e-info qodef-info--top">
                    <div className="qodef-e-info-item qodef-e-info-category">
                      <a
                        href="https://sante.qodeinteractive.com/category/cosmetics/"
                        rel="category tag" className='text-dark' style={{ textDecorationLine: 'none', color: '#80827e' }}
                      >
                        Cosmetics
                      </a>
                    </div>{" "}
                    <div className="qodef-e-info-item qodef-e-info-tags">
                      <a href="https://sante.qodeinteractive.com/tag/beauty/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        beauty
                      </a>
                      <a href="https://sante.qodeinteractive.com/tag/handmade/" className='text-dark' rel="tag" style={{ textDecorationLine: 'none', color: '#80827e' }}>
                        handmade
                      </a>{" "}
                    </div>
                  </div>
                  <div className="qodef-e-text">
                    <h4 itemProp="name" className="qodef-e-title entry-title">
                      <a
                        itemProp="url"
                        className="qodef-e-title-link text-dark fw-bold" style={{ textDecorationLine: 'none', fontFamily: 'inherit', color: '#80827e' }}
                        href="https://sante.qodeinteractive.com/cleansing-scrub/"
                      >
                        True botanicals{" "}
                      </a>
                    </h4>
                    <p itemProp="description" className="qodef-e-excerpt" style={{ fontFamily: 'sans-serif', color: '#80827e' }}>
                      Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis
                      in mei. Mei an pericula euripidis. hinc partem ei estos ei{" "}
                    </p>
                  </div>
                  <div className="qodef-e-info qodef-info--bottom">
                    <div className="qodef-e-info-left">
                      <div className="qodef-e-read-more">
                        <a
                          className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link"
                          href="https://sante.qodeinteractive.com/cleansing-scrub/"
                          target="_self"
                        >
                          {" "}
                          <Button variant="outline-secondary" className='fw-bold' style={{ fontSize: '13px', color: '#80827e' }}>Read More</Button>{' '}
                        </a>{" "}
                      </div>
                    </div>
                    <div className="qodef-e-info-right"></div>
                  </div>
                </div>
              </div>
            </article>



          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='text-center mt-5'
          style={{ backgroundColor: '' }}>
          <Col sm={12}>
            <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--center   qodef-st--caption">
              <span className="qodef-m-caption">Newsletter</span>
              <h4 className="qodef-m-title" style={{ color: '#80827e' }}>Sign Up For News </h4>
            </div>
            <div className="qodef-newsletter-form qodef-form">
              <div className="qodef-newsletter-form-input">
                <span className="wpcf7-form-control-wrap" data-name="your-email">
                  <input
                    size={40}
                    className=" mt-5 wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Your e-mail..."
                    defaultValue=""
                    type="email"
                    name="your-email"
                  />
                </span>
              </div>
              <div className="qodef-newsletter-form-submit">
                <button
                  className="wpcf7-form-control wpcf7-submit qodef-button qodef-size--normal qodef-layout--outlined qodef-html--link qodef-m"
                  type="submit"
                >
                  <span className="qodef-button-outlined-wrapper">
                    <span className="qodef-m-text">Subscribe</span>
                  </span>
                  <span className="qodef-outlined-button-background" />
                </button>
              </div>
            </div>


          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12}>

            <div className="owl-carousel" style={{ marginTop: 80 }}>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img35} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />{" "}
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img35} alt="" />{" "}
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />{" "}
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img35} alt="" />

              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img35} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />{" "}
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />{" "}
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img36} alt="" />
              </div>
              <div>
                {" "}
                <img style={{ height: '300px', width: '100%' }} src={img37} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img38} alt="" />
              </div>
              <div>
                <img style={{ height: '300px', width: '100%' }} src={img39} alt="" />{" "}
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </>


  );
};
export default Home;