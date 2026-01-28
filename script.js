// Tiny script: theme toggle + contact form helper
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  // Theme: default dark, allow localStorage override
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  function updateIcon(){
    const isLight = root.classList.contains('light');
    toggle.textContent = isLight ? '☀︎' : '☾';
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateIcon();
  });

  // Static-site message helper (copies to clipboard)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const text =
`Name: ${data.get('name')}
Email: ${data.get('email')}

Message:
${data.get('message')}`.trim();

    try{
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard! Paste it into email/LinkedIn and send.');
      form.reset();
    }catch(err){
      alert('Could not access clipboard. You can manually copy your message from the fields.');
    }
  });
})();