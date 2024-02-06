export function setupDarkMode(element: HTMLButtonElement) {
  const toggle = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }
  element.addEventListener('click', () => toggle())
}
