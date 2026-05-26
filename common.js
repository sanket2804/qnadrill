(function () {
  const page = window.QNADRILL_PAGE || '';

  const style = document.createElement('style');
  style.textContent = `
    .global-nav {
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      padding: 0 24px;
      display: flex;
      gap: 8px;
      overflow-x: auto;
    }

    .global-nav .nav-link {
      display: inline-flex;
      align-items: center;
      padding: 14px 16px;
      font-size: 13px;
      font-weight: 600;
      color: #666;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      text-decoration: none;
    }

    .global-nav .nav-link:hover {
      color: #333;
    }

    .global-nav .nav-link.active {
      color: var(--nav-accent, #4f5b93);
      border-bottom-color: var(--nav-accent, #4f5b93);
    }

    @media (max-width: 640px) {
      .global-nav {
        padding: 0 16px;
      }
    }
  `;
  document.head.appendChild(style);

  const accentMap = {
    home: '#4f5b93',
    php: '#4f5b93',
    react: '#61dafb',
    node: '#4f46e5',
    javascript: '#f7df1e'
  };

  document.documentElement.style.setProperty('--nav-accent', accentMap[page] || '#4f5b93');

  const header = document.querySelector('header');
  if (!header) return;

  const nav = document.createElement('nav');
  nav.className = 'global-nav';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = `
    <a class="nav-link${page === 'home' ? ' active' : ''}" href="index.html">Home</a>
    <a class="nav-link${page === 'php' ? ' active' : ''}" href="php.html">PHP</a>
    <a class="nav-link${page === 'javascript' ? ' active' : ''}" href="javascript.html">JavaScript</a>
    <a class="nav-link${page === 'react' ? ' active' : ''}" href="reactjs.html">React JS</a>
    <a class="nav-link${page === 'node' ? ' active' : ''}" href="nodejs.html">Node JS</a>
  `;

  header.insertAdjacentElement('afterend', nav);
})();
