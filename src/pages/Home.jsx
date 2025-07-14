import "./Home.css";
import HomeImg from "../assets/hero-img.png";

function Home() {
  return (
    <div className='home'>
      <div className='homeImg'>
        <img src={HomeImg} alt='' />
      </div>
      <div className='details'>
        <span>-Optometrist and Ophthamologists</span>
        <h1>Take Care Of Your </h1>
        <h1>
          <span>Eye</span> Health Here
        </h1>
        <p>
          The eye is the most used senses among the other five sense. The sense
          is the primary mean of gethering visual information atiund us.
        </p>
        <button>Outpatient </button>
        <button>Sur. registration</button>
      </div>
    </div>
  );
}

export default Home;
