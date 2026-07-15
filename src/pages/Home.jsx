import { Link } from 'react-router-dom';

const mainPhoto = '/images/mainphoto.jpeg';

const Home = () => (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-in">
              <p className="eyebrow">Portfolio Professionale</p>
              <h1 className="title">
                Gestione Operativa, <span className="accent">Logistica</span> &amp; Qualità
              </h1>
              <p className="lead">
                Una figura versatile e determinata, con solida esperienza, nel controllo qualità e nella
                conduzione operativa di attività di ristorazione.
              </p>
              <div className="btn-row">
                <Link to="/curriculum" className="btn btn-primary">
                  Scopri il curriculum →
                </Link>
                <Link to="/contatti" className="btn btn-outline">
                  Contattami
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="hero-image">
                <img
                  src={mainPhoto}
                  alt="Foto professionale"
                  width={1049}
                  height={1600}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted">
        <div className="container-sm center">
          <div className="fade-in">
            <h2>Chi sono</h2>
            <p className="subtitle" style={{ fontSize: '18px', marginTop: '16px' }}>
              Con anni di esperienza nel settore operativo, ho maturato competenze trasversali che spaziano dalla
              gestione logistica al controllo qualità, dalla supervisione dei flussi d&apos;ordine alla gestione
              diretta di attività di ristorazione e bar. Sono una persona organizzata, con grande attenzione ai
              dettagli e una naturale propensione al problem solving.
            </p>
            <p className="subtitle" style={{ fontSize: '18px', marginTop: '16px' }}>
              Il mio obiettivo è garantire efficienza, precisione e qualità in ogni processo, contribuendo
              attivamente al successo dell&apos;azienda per cui lavoro.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="fade-in center">
            <h2>Competenze chiave</h2>
            <p className="subtitle">Un mix di competenze tecniche e trasversali maturate sul campo.</p>
          </div>
          <div className="grid grid-4" style={{ marginTop: '48px' }}>
            {[
              ['📦', 'Logistica & Magazzino', 'Gestione ottimizzata dei flussi di merce, stoccaggio e organizzazione del magazzino per garantire efficienza operativa.'],
              ['🛡️', 'Controllo Qualità', 'Monitoraggio e verifica degli standard qualitativi, gestione delle non conformità e implementazione di procedure migliorative.'],
              ['📋', 'Gestione Ordini', 'Coordinamento completo del ciclo degli ordini: ricezione, elaborazione, evasione e tracciabilità fino alla consegna.'],
              ['☕', 'Ristorazione & Bar', 'Esperienza diretta nella gestione operativa di bar e servizi di ristorazione, con focus su servizio clienti e organizzazione.'],
            ].map(([icon, title, text]) => (
              <div className="card fade-in" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container-sm center fade-in">
          <h2>Vuoi saperne di più?</h2>
          <p style={{ fontSize: '18px', marginTop: '12px', opacity: '.9' }}>
            Esplora il mio percorso professionale o scrivimi per una collaborazione.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/curriculum" className="btn btn-primary">
              Vai al curriculum →
            </Link>
            <Link to="/contatti" className="btn btn-outline">
              Contattami
            </Link>
          </div>
        </div>
      </section>
    </>
);

export default Home;
