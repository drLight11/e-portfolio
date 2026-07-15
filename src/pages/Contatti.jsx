import { Link } from 'react-router-dom';

const Contatti = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nome = form.nome.value;
    const email = form.email.value;
    const messaggio = form.messaggio.value;
    const subject = `Messaggio da ${nome} — Portfolio`;
    const body = `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`;
    window.location.href = `mailto:nunziap1975@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">Portfolio</Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/curriculum">Curriculum</Link>
            <Link to="/contatti" className="active">Contatti</Link>
          </nav>
        </div>
      </header>

      <section>
        <div className="container-sm">
          <div className="fade-in center">
            <h1 className="title" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Contatti</h1>
            <p className="subtitle">Sono disponibile per nuove opportunità, collaborazioni e progetti. Scrivimi!</p>
          </div>

          <div className="contact-grid" style={{ marginTop: '64px' }}>
            <div className="fade-in">
              <h2 style={{ fontSize: '22px' }}>Informazioni di contatto</h2>
              <p style={{ color: 'var(--text-muted)' }}>Preferisco essere contattata via email, ma sono disponibile anche al telefono durante gli orari lavorativi.</p>
              <div style={{ marginTop: '24px' }}>
                <div className="info-item">
                  <div className="icon">✉️</div>
                  <div>
                    <div className="label">Email</div>
                    <div className="value">nunziap1975@gmail.com</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon">📞</div>
                  <div>
                    <div className="label">Telefono</div>
                    <div className="value">+39 349 117 2475</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon">📍</div>
                  <div>
                    <div className="label">Località</div>
                    <div className="value">Via Largo Ostiano, 152 Persico Dosimo (CR)</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginTop: '24px', background: 'var(--bg-muted)' }}>
                <h3>Scarica il CV</h3>
                <p>Vuoi una copia del mio curriculum in formato PDF?</p>
                <Link to="/curriculum" className="btn btn-outline" style={{ marginTop: '12px' }}>Vai alla pagina Curriculum →</Link>
              </div>
            </div>

            <div className="fade-in">
              <div className="form-card">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" name="nome" type="text" required placeholder="Il tuo nome" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="la.tua@email.it" />
                  </div>
                  <div className="field">
                    <label htmlFor="messaggio">Messaggio</label>
                    <textarea id="messaggio" name="messaggio" required rows="5" placeholder="Scrivi il tuo messaggio..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>✉ Invia messaggio</button>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>Il messaggio verrà aperto nel tuo client di posta predefinito.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; <span>{new Date().getFullYear()}</span> — Tutti i diritti riservati.</p>
          <p>Logistica, Controllo Qualità &amp; Gestione Operativa</p>
        </div>
      </footer>
    </>
  );
};

export default Contatti;
