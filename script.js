const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeIcon = themeToggle.querySelector('.theme-icon');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeIcon.textContent = isDark ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]').content =
    isDark ? '#111a17' : '#f5f7f4';
}

const savedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : preferredTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
