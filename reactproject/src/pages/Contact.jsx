import ('./Contact.css')

export default function Contact() {
    return(
        <main className="contact">
            <div className="page-main">
                <section className="page-info">
                    <h2 className="info-heading">Kontakt och bokning</h2>
                    <p id="snowed-in"> Är festen insnöad -Ring så röjer vi</p>
                    <p className="info-text"> 
                        Snösvänget och Sparketten brukar flera gånger under året spela på evenemang, 
                        ceremonier, middagssittningar, festivaler och andra festliga tidpunkter. 
                        Vi brukar till exempel spela på Umeå Universitets Välkomstmässa som är en 
                        gång per termin, valborg på campus och studentorkesterfestivalen i 
                        Linköping/Uppsala, SOF/STORK. 
                        <br/>
                        <br/>
                        Snösvänget står för underhållning i form 
                        av musik och dans. Vi brukar vara cirka 30 stycken, exklusive dansgruppen. 
                        Vi brukar antingen spela roddad spelning eller en jamspelning, som är mer 
                        av en akustisk spelning. För bokning eller andra frågor kontakta oss 
                        via mail (snosvanget@gmail.com) eller formuläret nedan:
                        <br/>
                        <br/>
                        <br/>
                        Betalning/Payment Methods:
                        <br/>
                        <br/>
                        Bankgiro 317-7680 
                        <br/>
                        Swish 123-215 82 02
                    </p>
                </section>
            </div>
            <div id="contact-form">
                <form id="mail-form" method="GET" action="mailto:timsimonalvar@gmail.com" encType="text/plain">
                    <h2 id="form-heading">Kontakta oss</h2>
                    <label htmlFor="name">Namn</label>
                    <input id="name" name="Name" type="text" placeholder="Ditt namn"/>
                    <label htmlFor="email">Mail</label>
                    <input id="email" name="E-Mail Address" type="email" placeholder="din@mail.se"/>
                    <label htmlFor="subject">Ämne</label>
                    <input id="subject" name="subject" type="text" placeholder="Ämne"/>
                    <label htmlFor="message">Meddelende</label>
                    <textarea id="message" name="body" placeholder="Skriv ditt meddelande här..."></textarea>
                    <input id="send-mail" type="submit" value="SKICKA"/>
                </form>
            </div>
        </main>
    )
}