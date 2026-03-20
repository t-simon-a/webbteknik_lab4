import { useState } from 'react';
import '../styles/Media.css';

export default function Media() {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        { src: "images/medlemsbild.jpg",  alt: "Bild på medlemmar i Snösvänget.",     text: "Medlemmar i Snösvänget." },
        { src: "images/spelning.jpg",     alt: "Konsert med Snösvänget i lärarhuset.", text: "Bild från Shååven i lärarhuset." },
        { src: "images/start_bg.png",     alt: "Snösvänget spelar musik på ett torg.", text: "Snösvänget spelar musik på ett torg under en festival." },
    ];

    const plusSlides = (n) => {
        setSlideIndex(prev => (prev + n + slides.length) % slides.length);
    };
    
    return (
        <main className="media">
            <div id="video-slide">
                <video className="snow-video" width="1000" controls>
                <source src="video/vivalavida1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="slideshow-container">
                {slides.map((slide, i) => (
                <div
                    key={i}
                    className="slides fade"
                    style={{ display: i === slideIndex ? 'block' : 'none' }}
                >
                    <div className="numbertext">{i + 1} / {slides.length}</div>
                    <img src={slide.src} alt={slide.alt} style={{ width: "100%" }} />
                    <div className="text">{slide.text}</div>
                </div>
                ))}
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br />
            <div id="dots">
                {slides.map((_, i) => (
                <span
                    key={i}
                    className={`dot${i === slideIndex ? ' active' : ''}`}
                    onClick={() => setSlideIndex(i)}
                />
                ))}
            </div>
        </main>
    );
}