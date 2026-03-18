import './Home.css'

const concerts = [
  { name: 'Uniaden', date: '27-1' },
  { name: 'Shååven', date: '27-3' },
  { name: 'STORK', date: '10-5' },
  { name: 'TT2025', date: '5-6' },
];

export default function Home() {
  return (
    <main className="home">
      <div className="page-main">
        <section className="page-info">
          <h2 className="info-heading">Södra Sveriges snyggaste studentorkester!</h2>
          <p className="info-text">
            Snösvänget och dansgruppen Baletten Sparketten är Umeå Universitets studentorkester.
            Vi är universitetets enda studentorkester, grundad 1990 och vi klär oss i färgerna
            orange och grön. Orkestern spelar allt från storbandsjazz till pop,
            rock och tysk schlager, allt enligt mottot "Fort och starkt".
            <br /><br />
            Är du intresserad av att boka oss? Eller vill du spela eller dansa med oss?
            Tveka inte att höra av dig! Mer info hittar du på sidan bli medlem eller kontakt.
          </p>
          <ul id="nav-info">
            <li className="clickable"><a href="/member.html">BLI MEDLEM</a></li>
            <li className="clickable"><a href="/contact.html">KONTAKT</a></li>
          </ul>
        </section>
        <div id="snowlogo-cont">
          <img id="snowlogo" src="/images/snowpatch.png" alt="Snösvängets logga." />
        </div>
      </div>

      <div id="next-concert">
        <div id="concert-sign">
          <img id="lightning-bolt" src="/images/lightning-bolt.png" alt="Lightning bolt/livsfarlig ledning" />
          <h2 id="concert-text">Kommande konserter</h2>
        </div>
        <div id="signpost-up-1"></div>
        <div id="concert-list">
          <table>
            <tbody>
              {concerts.map((concert) => (
                <tr key={concert.name}>
                  <td>{concert.name}</td>
                  <td>{concert.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="signpost-down-1"></div>
      </div>
    </main>
  );
}