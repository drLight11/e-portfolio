import { documents } from '../data/documents';

const Curriculum = () => (
  <section>
    <div className="container-sm">
      <div className="fade-in center">
        <h1 className="title" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
          Curriculum
        </h1>
        <p className="subtitle">
          Un percorso professionale costruito con dedizione, cura dei dettagli e spirito di adattamento.
        </p>
      </div>

      <div className="fade-in" style={{ marginTop: '64px' }}>
        <div className="section-title">
          <span style={{ fontSize: '24px' }}>💼</span>
          <h2 style={{ margin: 0 }}>Esperienze professionali</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <p className="timeline-period">2020 — Oggi</p>
            <h3>Problem Solver / Team Leader</h3>
            <p className="company">Fiege Logistic</p>
            <p>
              Picking, imballaggio e etichettatura. Controllo qualità e gestione resi. Riordino corsie e
              movimentazione. Registrazione articoli a sistema. Supporto ai processi logistici intern.
            </p>
          </div>
          <div className="timeline-item">
            <p className="timeline-period">2013 — 2018</p>
            <h3>Responsabile Sala</h3>
            <p className="company">Chick&apos;n Rock</p>
            <p>Cameriera e responsabile di sala.</p>
          </div>
        </div>
      </div>

      <div className="fade-in" style={{ marginTop: '64px' }}>
        <div className="section-title">
          <span style={{ fontSize: '24px' }}>🎓</span>
          <h2 style={{ margin: 0 }}>Formazione</h2>
        </div>
        <div className="grid grid-3" style={{ marginTop: '24px' }}>
          {["L'arte di comunicare con la voce", 'Leadership', 'E-mail — Regole e netiquette', 'Etica'].map(
            (title) => (
              <div className="card" key={title}>
                <div className="icon">🏆</div>
                <h3>{title}</h3>
                <p>Corso di formazione</p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="fade-in" style={{ marginTop: '64px' }}>
        <h2>Competenze tecniche</h2>
        <div className="tags">
          {[
            'Gestione magazzino e inventario',
            'Controllo qualità e conformità',
            'Gestione ordini',
            'Utilizzo palmari, barcodes e WMS',
            'Problem solving e team working',
            'Organizzazione e pianificazione',
            'Servizio clienti e ristorazione',
            'Formazione e supervisione staff',
          ].map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="fade-in" style={{ marginTop: '64px' }}>
        <div className="section-title">
          <span style={{ fontSize: '24px' }}>📄</span>
          <h2 style={{ margin: 0 }}>Documenti e attestati</h2>
        </div>
        <p className="subtitle" style={{ textAlign: 'left', marginTop: '8px' }}>
          Scarica il curriculum completo e consulta gli attestati di formazione.
        </p>
        <div className="grid grid-2" style={{ marginTop: '24px' }}>
          {documents.map(({ title, description, file }) => (
            <div className="card doc-card" key={file}>
              <div className="doc-head">
                <div className="doc-icon">📄</div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>PDF</span>
                </div>
              </div>
              <div className="doc-actions">
                <a className="btn btn-outline" href={file} target="_blank" rel="noreferrer">
                  👁 Anteprima
                </a>
                <a className="btn btn-primary" href={file} download>
                  ⬇ Scarica
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Curriculum;
