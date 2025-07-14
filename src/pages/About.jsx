import "./About.css";
import designImage from "../assets/circles.png"; // Adjust the path as necessary

function About() {
  return (
    <div className='about'>
      <div className='design'>
        <img src={designImage} alt='' />
      </div>
      <h1>About Us - Bharti Eye Foundation</h1>
      <hr />
      <h1>ONE OF INDIA'S LEADING OPHTHALMOLOGISTS.</h1>
      <div className='details'>
        <div className='aboutImage'>
          <img
            src='https://bhartieyefoundation.in/img/Director-of-Bharti-Eye-Foundation-Dr.S.Bharti.webp'
            alt='About Us'
          />
          <h3>Dr. S. Bharti</h3>
          <span>
            Founder & Chairman Bharti Eye Foundation & Bharti Group of Eye
            Hospitals
          </span>
        </div>
        <div className='p_tag'>
          <p>
            Bharti Group of Eye Hospitals, a brainchild of Dr. Sudhank Bharti,
            started its journey way back in 1985.
          </p>
          <p>
            Dr. Bharti practised his specialization in Cornea, Cataract &
            Refractive Surgery in England with Dr. J. J. Kanski & R. Hitchings.
            On his return to India he founded Bharti Eye Foundation in 1985. An
            outstanding name in Ophthalmology across the country & abroad, Dr.
            Bharti had the privilege of starting for the first time in Delhi &
            NCR a number of high-tech centres in ophthalmic examination and
            surgeries which have been providing clinical services with state of
            the art technology, adopted worldwide. He had been an international
            investigator for NIDEK JAPAN. He has also presented over 50 original
            papers in various professional forums including AIOS, ASCRS, ESCRS,
            AAO, APAO, Korean SCRS & DOS. For his outstanding contribution to
            the field of Ophthalmology, Dr. Bharti has been felicitated a number
            of times in India and abroad. Dr. Bharti has contributed 5 chapters
            in Ophthalmic textbooks and has been conducting instruction courses
            in ASCRS, ESCRS & AIOS for the past 15 years.
          </p>
        </div>
      </div>

      <p>
        <h2>Best Eye Hospital in Delhi –</h2>
        Bharti Eye Foundation is one of the best eye hospital in Delhi, India.
        It is a NABH accredited hospital known for its state-of-the-art
        facilities, experienced doctors, and eye care services. The eye
        foundation offers a wide range of eye treatments, including cataract
        surgery, LASIK surgery, glaucoma treatment, retina surgery, and many
        other eye services.
      </p>
    </div>
  );
}

export default About;
