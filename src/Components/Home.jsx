import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import DragonImg from '../assets/Images/Homeblob.png';
import Logo from '../assets/Images/Logo.png';
import profile from '../assets/Images/person.png';
import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import voiceIcon from '../assets/Images/yourvoice.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

const slides = [
  {
    id: 'safety',
    title: 'Safety',
    text: 'Girls deserve to feel safe at home, school, and in public. Speak up, stand strong, and know that your safety matters.',
    color: '#E6E0EB'
  },
  {
    id: 'education',
    title: 'Education',
    text: 'Every girl has the right to quality education. Learn, grow, and reach for your dreams through knowledge.',
    color: '#D4AFB4'
  },
  {
    id: 'freedom',
    title: 'Freedom',
    text: 'Your voice matters. Express yourself freely and make choices that shape your future.',
    color: '#967AA1'
  },
  {
    id: 'expression',
    title: 'Expression',
    text: 'Be bold, be creative, be you. Your thoughts and feelings deserve to be heard.',
    color: '#9B6B9E'
  },
  {
    id: 'equality',
    title: 'Equality',
    text: 'Stand tall for equal rights and opportunities. Your potential knows no gender bounds.',
    color: '#5B2C6F'
  },
  {
    id: 'health',
    title: 'Health',
    text: 'Your well-being matters. Take care of your physical and mental health.',
    color: '#36074A'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const MenuItem = ({ icon, text, path }) => (
  <li style={{ marginBottom: '15px' }}>
    <Link to={path} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#36074A',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease'
    }}>
      <img src={icon} alt={text} style={{ width: '24px', height: '24px' }} />
      {text}
    </Link>
  </li>
);

  return (
    <div className="home-container" style={{
      minHeight: '100vh',
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      <header className="header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#fff',
      }}>
        <img src={Logo} alt="Qaleesi Logo" className="logo" />
        <img src={profile} alt="Profile" className='profile-image' />
      </header>

      <main style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          {/* Left Menu */}
          <nav style={{
            width: '250px',
            backgroundColor: '#E6E0EB',
            padding: '20px',
            borderRadius: '10px',
            height: '400px'
          }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <MenuItem icon={homeIcon} text="Home" path="/" />
            <MenuItem icon={aboutIcon} text="About us" path="/about" />
            <MenuItem icon={articlesIcon} text="Articles" path="/articles" />
            <MenuItem icon={creativeIcon} text="Creative space" path="/creative" />
            <MenuItem icon={voiceIcon} text="Your voice" path="/voice" />
            <MenuItem icon={joinIcon} text="Join us" path="/join" />
            <MenuItem icon={contactIcon} text="Contact us" path="/contact" />
          </ul>
          </nav>

          {/* Right Content */}
          <div style={{ flex: 1 }}>
            <section className="hero-section" style={{
              display: 'flex',
              backgroundColor: '#36074A',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
              height: '400px',
              alignItems: 'center'
            }}>
              <img 
                src={DragonImg} 
                alt="Dragon Mascot" 
                style={{
                  width: '300px',
                  height: 'auto',
                  marginRight: '40px'
                }}
              />
              <div className="hero-text">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                  My Space<br />My Voice
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Qaleesi: Your personalized space to learn, express, and grow. 
                  Customize it your way, because your voice matters.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Key Pillars Section - Full Width and Centered */}
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 0'
        }}>
          <section className="key-pillars">
            <h2 style={{ 
              textAlign: 'center', 
              color: '#36074A', 
              marginBottom: '30px',
              fontSize: '2rem'
            }}>
              Key pillars
            </h2>
            <div className="pillar-icons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`pillar-icon ${currentSlide === index ? 'active' : ''}`}
                  style={{ 
                    backgroundColor: currentSlide === index ? slide.color : '#E6E0EB',
                    padding: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    minWidth: '150px',
                    textAlign: 'center'
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  {slide.title}
                </div>
              ))}
            </div>

            <div className="content-box" style={{
              backgroundColor: slides[currentSlide].color,
              padding: '40px',
              borderRadius: '20px',
              position: 'relative',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <button className="arrow left" onClick={prevSlide}>&larr;</button>
              <p className="content-text" style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: '0 auto',
                maxWidth: '800px'
              }}>
                {slides[currentSlide].text}
              </p>
              <button className="arrow right" onClick={nextSlide}>&rarr;</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// MenuItem component
const MenuItem = ({ icon, text, path }) => (
  <li style={{ marginBottom: '15px' }}>
    <Link to={path} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#36074A',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease'
    }}>
      {icon}
      {text}
    </Link>
  </li>
);
