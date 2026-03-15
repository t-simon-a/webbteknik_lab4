

export default function Header() {
    return(
        <header id="header">
            <h1 id="site-logo" class="clickable">
                <a id="logo-text" href="index.html">
                    STUDENTORKESTERN SNÖSVÄNGET OCH <br/> BALETTEN SPARKETTEN
                </a>
            </h1>
            <nav id="nav-bar">
                <button id="hamburger" aria-label="Öppna meny">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul id="nav-links">
                    <li className="clickable"><a href="/about.html">OM SNÖSVÄNGET</a></li>
                    <li className="clickable"><a href="/member.html">BLI MEDLEM</a></li>
                    <li className="clickable"><a href="/contact.html">KONTAKT</a></li>
                    <li className="clickable"><a href="/media.html">MEDIA</a></li>
                </ul>
            </nav>
        </header>
    )
}