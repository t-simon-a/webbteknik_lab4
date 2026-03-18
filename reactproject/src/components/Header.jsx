export default function Header() {
    return(
        <header id="header">
            <h1 id="site-logo" className="clickable">
                <a id="logo-text" href="/">
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
                    <li className="clickable"><a href="/about">OM SNÖSVÄNGET</a></li>
                    <li className="clickable"><a href="/member">BLI MEDLEM</a></li>
                    <li className="clickable"><a href="/contact">KONTAKT</a></li>
                    <li className="clickable"><a href="/media">MEDIA</a></li>
                </ul>
            </nav>
        </header>
    )
}