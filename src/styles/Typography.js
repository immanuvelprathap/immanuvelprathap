import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html {
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
  }

  * {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--text-primary);
  }

  code, pre, .mono, .hero__social__indicator p, .hero__scrollDown p, .navItems a {
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
  }
`;

export default Typography;
