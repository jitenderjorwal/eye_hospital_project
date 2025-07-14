import "./header.css";

function Header() {
  return (
    <div className='header'>
      <div className='infoBtn'>
        <button>Appointment</button>

        <button>
          <a href='#'>
            <img
              src='https://img.icons8.com/?size=50&id=9730&format=png'
              alt='tel_icon'
            />
            9XXXXXXXX8
          </a>
        </button>
      </div>

      <div className='infoMrqquee'>
        <marquee behavior='scroll' direction='left' scrollamount='10'>
          <span className='marqueeText'>
            Welcome to our website! We are here to assist you with all your
            needs.
          </span>
        </marquee>
      </div>
      <div className='infoTime'>
        <a href='#'>Mon - Sat 9am - 6pm | Sunday 9am - 1pm </a>
        <a className='map' href='#'>
          Map
        </a>
      </div>
    </div>
  );
}

export default Header;
