import "./knowyoureye.css";
import designImage from "../assets/circles-b.png"; // Adjust the path as necessary

function KnowYourEye() {
  return (
    <div className='knowyoureye'>
      <div className='design_2'>
        <img src={designImage} alt='' />
      </div>
      <h1>Know Your Eye</h1>
      <hr />
      <div className='tabs'>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Cornea-Transplant.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img src='https://bhartieyefoundation.in/img/Eye-Work.webp' alt='' />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/Lasik-Eye-Surgery.webp'
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
            src='https://bhartieyefoundation.in/img/The-Eye-Ball.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img src='https://bhartieyefoundation.in/img/The-Eye.webp' alt='' />
        </div>
        <div className='tab'>
          <img
            src='https://bhartieyefoundation.in/img/The-Vision.webp'
            alt=''
          />
        </div>
        <div className='tab'>
          <img src='https://bhartieyefoundation.in/img/Eye-Care.webp' alt='' />
        </div>
      </div>
    </div>
  );
}

export default KnowYourEye;
