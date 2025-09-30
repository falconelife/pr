
// Темна/світла тема
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    // Завантажуємо збережену тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');

        // Зберігаємо тему
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Змінюємо іконку
        themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
    });
}

// Мобільне меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Плавна прокрутка для посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анімація появи елементів при прокрутці
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Спостерігаємо за елементами з класом animate
document.querySelectorAll('.blog-post, .project-card, .skill-card').forEach(el => {
    observer.observe(el);
});
