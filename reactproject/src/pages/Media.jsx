import './Media.css'

export default function Media() {
    return (
        <main className="media">
            <div id="video-slide">
                <video className="snow-video" width="1000" controls>
                    <source src="video/vivalavida1.mp4" type="video/mp4"/> 
                </video>
            </div>
            <div className="slideshow-container">
                <div className="slides fade">
                    <div className="numbertext">1 / 3</div>
                        <img src="images/medlemsbild.jpg" alt="Bild på medlemmar i Snösvänget." style={{ width: "100%" }}/>
                    <div className="text">Medlemmar i Snösvänget.</div>
                </div>
                <div className="slides fade">
                    <div className="numbertext">2 / 3</div>
                        <img src="images/spelning.jpg" alt="Konsert med Snösvänget i lärarhuset." style={{ width: "100%" }}/>
                    <div className="text">Bild från Shååven i lärarhuset.</div>
                </div>
                <div className="slides fade">
                    <div className="numbertext">3 / 3</div>
                        <img src="images/start_bg.png" alt="Snösvänget spelar musik på ett torg." style={{ width: "100%" }}/>
                    <div className="text">Snösvänget spelar musik på ett torg under en festival.</div>
                </div>
                <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                <a className="next" onClick="plusSlides(1)">&#10095;</a>
            </div>
            <br/>
            <div id="dots">
                <span className="dot" onClick="currentSlide(1)"></span>
                <span className="dot" onClick="currentSlide(2)"></span>
                <span className="dot" onClick="currentSlide(3)"></span>
            </div>
        </main>
    )
}