// ================= Fade-in on scroll =================
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".fade-in").forEach((el) => io.observe(el));

// ================= Mark active nav link =================
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === path || (path === "" && href === "index.html")) {
    a.classList.add("active");
  }
});

// ================= PDF Preview Modal =================
const modal = document.getElementById("modal");
if (modal) {
  const iframe = document.getElementById("modal-iframe");
  const title = document.getElementById("modal-title");
  const downloadBtn = document.getElementById("modal-download");

  document.querySelectorAll("[data-preview]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const file = btn.getAttribute("data-preview");
      const name = btn.getAttribute("data-title") || "Documento";
      iframe.src = file;
      title.textContent = name;
      downloadBtn.href = file;
      modal.classList.add("open");
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    iframe.src = "";
  };
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.getElementById("modal-close")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// ================= Contact form -> mailto =================
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value;
    const email = form.email.value;
    const messaggio = form.messaggio.value;
    const subject = `Messaggio da ${nome} — Portfolio`;
    const body = `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`;
    window.location.href =
      `mailto:nunziap1975@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
