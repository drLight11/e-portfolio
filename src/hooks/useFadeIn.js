import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFadeIn = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
};

export default useFadeIn;
