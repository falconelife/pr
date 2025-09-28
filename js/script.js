// Theme toggle with localStorage
(function(){
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const stored = localStorage.getItem('theme');
    if(stored) root.setAttribute('data-theme', stored);
    else {
        const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(prefers) root.setAttribute('data-theme','dark');
    }
    function updateIcon(){
        const icon = btn && btn.querySelector('.theme-icon');
        if(!icon) return;
        icon.textContent = (document.documentElement.getAttribute('data-theme') === 'dark') ? '☀️' : '🌙';
    }
    updateIcon();
    btn && btn.addEventListener('click', ()=>{
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon();
    });
})();

// Mobile menu toggle
(function(){
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const header = document.querySelector('.header');
    if(!mobileBtn || !header) return;
    mobileBtn.addEventListener('click', ()=>{
        header.classList.toggle('expanded');
    });
})();

// Simple contact form validation
(function(){
    const form = document.querySelector('form.contact-form');
    if(!form) return;
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const msg = form.querySelector('textarea[name="message"]');
        let ok=true;
        [name,email,msg].forEach(el=>{
            if(!el.value.trim()){
                el.style.outline = '2px solid rgba(220,38,38,0.25)';
                ok=false;
            } else {
                el.style.outline = 'none';
            }
        });
        // simple email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email && !re.test(email.value.trim())){ email.style.outline='2px solid rgba(220,38,38,0.25)'; ok=false;}
        if(!ok){
            alert('Будь ласка, заповніть правильно всі поля форми.');
            return;
        }
        // simulate submit
        alert('Дякую! Повідомлення відправлено (псевдо).');
        form.reset();
    });
})();

// Blog modal (if exists)
function openBlogPost(id){
    const modal = document.getElementById('blogModal');
    if(!modal) return;
    modal.style.display='block';
}
function closeBlogPost(){
    const modal = document.getElementById('blogModal');
    if(!modal) return;
    modal.style.display='none';
}