import "./services.css";
import designImage from "../assets/circles.png"; // Adjust the path as necessary
import img_1 from "../assets/serviceImages/eye-girl.jpg";

function Services() {
  return (
    <div className='knowyoureye'>
      <div className='design_3'>
        <img src={designImage} alt='' />
      </div>
      <h1>Our Services</h1>
      <hr />
      <div className='tabs'>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Charity-Work.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Computer-Vision-Syndrome.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Eye-Examination.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Retina-Surgery.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Glaucoma-Treatment.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Laser-Cataract-Surgery.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Refractive-Surgery.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img src={img_1} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Services;
