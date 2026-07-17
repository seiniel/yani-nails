// 1. Efecto de scroll en la barra de navegación
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                    } else {
                            nav.classList.remove('scrolled');
                                }
                                });

                                // 2. Hamburguesa y menú móvil
                                const hamburger = document.querySelector('.hamburger');
                                const mobileNav = document.querySelector('.mobile-nav');
                                const closeBtn = document.querySelector('.mobile-nav-close');

                                if (hamburger) {
                                    hamburger.addEventListener('click', () => {
                                            hamburger.classList.toggle('open');
                                                    mobileNav.classList.toggle('open');
                                                        });
                                                        }

                                                        if (closeBtn) {
                                                            closeBtn.addEventListener('click', () => {
                                                                    mobileNav.classList.remove('open');
                                                                            hamburger.classList.remove('open');
                                                                                });
                                                                                }

                                                                                // 3. Acordeón de preguntas frecuentes (FAQ)
                                                                                document.querySelectorAll('.faq-item').forEach(item => {
                                                                                    item.addEventListener('click', () => {
                                                                                            item.classList.toggle('open');
                                                                                                });
                                                                                                });

                                                                                                // 4. Animaciones de revelación al hacer scroll
                                                                                                const observer = new IntersectionObserver((entries) => {
                                                                                                    entries.forEach(entry => {
                                                                                                            if (entry.isIntersecting) {
                                                                                                                        entry.target.classList.add('in');
                                                                                                                                }
                                                                                                                                    });
                                                                                                                                    }, { threshold: 0.1 });

                                                                                                                                    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

                                                                                                                                    // 5. Manejo del formulario de contacto → WhatsApp
                                                                                                                                    const contactForm = document.querySelector('.contact-form');
                                                                                                                                    const successMsg = document.querySelector('.form-success');

                                                                                                                                    if (contactForm) {
                                                                                                                                        contactForm.addEventListener('submit', (e) => {
                                                                                                                                                e.preventDefault();

                                                                                                                                                        const nombre = document.getElementById('f-name').value.trim();
                                                                                                                                                                const telefono = document.getElementById('f-phone').value.trim();
                                                                                                                                                                        const mensaje = document.getElementById('f-msg').value.trim();

                                                                                                                                                                                const numeroWhatsApp = '18137048287';

                                                                                                                                                                                        let texto = `Hola, mi nombre es ${nombre}.`;
                                                                                                                                                                                                texto += ` Mi teléfono es ${telefono}.`;
                                                                                                                                                                                                        texto += mensaje ? ` ${mensaje}` : ` Quiero reservar una cita.`;

                                                                                                                                                                                                                const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

                                                                                                                                                                                                                        contactForm.style.display = 'none';
                                                                                                                                                                                                                                if (successMsg) successMsg.classList.add('show');

                                                                                                                                                                                                                                        window.open(url, '_blank');
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                            }