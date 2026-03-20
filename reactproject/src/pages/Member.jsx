import '../styles/Member.css'
    
export default function About() {
    return(
         <main className="member">
            <div className="page-main">
                <section className="page-info">
                    <h2 className="info-heading">Bli Medlem</h2>
                    <p className="info-text"> 
                        För att bli medlem så krävs det att personen antingen studerar,
                        studerar på distans, forskar eller är doktorand. 
                    
                        Personen bör även spela något av de instrument som finns i orkestern:
                    </p>
                        <ul id="instruments">
                            <li>Flöjt</li>
                            <li>Klarinett</li>
                            <li>Saxofon</li>
                            <li>Trumpet</li>
                            <li>Trombon</li>
                            <li>Komp - gitarr, bas, trummor eller piano</li>
                            <li>Ben (dansa)</li>
                        </ul>
                    <p className="info-text">
                        I dansgruppen välkomnas alltid nya medlemmar. 
                        I orkestern fattas det alltid något instrument i någon av 
                        orkesterns sektioner. Däremot kan det hända att alla platser 
                        ibland är fyllda. 
                    </p>
                    <p className="info-text">
                        Är du intresserad att spela eller dansa med oss? 
                        Fyll i din intresseanmälan längre ner på sidan! 
                        Orkestern repar varje onsdag på Folkuniversitet, Nygatan 43. 
                        Sparketten över varje söndag på campus. 
                        Lär dig mer om Snösvängets olika sektioner <a href="/about.html">Här!</a>
                    </p>
                    
                </section>
            </div>
            <div id="member-form">
                <iframe id="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfRARhjsmSpbfthp7KQuZQ5v62_sPbuKNHlOqzc0ZSpv593wA/viewform?embedded=true" width="1000" height="1500"></iframe>
            </div>
        </main>
    )
}