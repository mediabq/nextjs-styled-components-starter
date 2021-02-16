import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`


* {
  font-family:'Inter',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  text-rendering: optimizeSpeed;
}

:root {
    /* Typography */
    --unit: 16;
    --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
    --font-micro-line-height: calc(14 / 10); /* 12px */
    --font-small-size: calc(13 / var(--unit) * 1rem); /* 14px */
    --font-small-line-height: calc(26 / 14); /* 21px */
    --font-base-size: 1em; /* 16px */
    --font-base-line-height: calc(24 / var(--unit)); /* 24px */
    --font-large-size: calc(20 / var(--unit) * 1rem); /* 20px */
    --font-large-line-height: calc(27 / 18); /* 27px */

    --font-title4-size: calc(21 / var(--unit) * 1rem); /* 21px */
    --font-title4-line-height: calc(30 / 21); /* 30px */
    --font-title3-size: calc(24 / var(--unit) * 1rem); /* 24px */
    --font-title3-line-height: calc(33 / 24); /* 33px */
    --font-title2-size: calc(40 / var(--unit) * 1rem); /* 49px */
    --font-title2-line-height: calc(57 / 49); /* 57px */
    --font-title1-size: calc(45 / var(--unit) * 1rem); /* 49px */
    --font-title1-line-height: calc(64 / 49); /* 66px */

    --font-hero-size: calc(55 / var(--unit) * 1rem);
    --font-hero-line-height: calc(64 / 49);
    --font-herotablet-size: calc(45 / var(--unit) * 1rem);
    --font-herotablet-line-height: calc(54 / 49);
    --font-herophone-size: calc(30 / var(--unit) * 1rem);
    --font-herophone-line-height: calc(44 / 49);
  }

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: var(--color-dark-gray);
  margin-bottom: 0.5em;
}

p {
  font-weight: 400;
  color: var(--color-dark-gray);
  margin-bottom: 2em;
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
}

a {
  color: var(--color-dark-gray);
  text-decoration: none;
  &:visited {
    color: var(--color-dark-gray);
  }
}

pre{
  margin-bottom: 2em;
}

h1{
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
}
h2{
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
}
h3{
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
}
h4{
  font-size: var(--font-title4-size);
  line-height: var(--font-title4-line-height);
}

::-moz-selection { /* Code for Firefox */
  background: var(--color-accent-primary);
  color: var(--color-white)
}

::selection {
  background: var(--color-accent-primary);
  color: var(--color-white)
}

`;

export default TypographyStyles;
