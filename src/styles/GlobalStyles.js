import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#__next{
  height:100%;
}

:root {
  --color-black: #000000;
  --color-dark-gray: #2B2B2B;
  --color-gray: #80899B;
  --color-light-gray: #CBCBCB;
  --color-very-light-gray: #FAFAFA;
  --color-white: #FFFFFF;
  --color-accent-primary: #4FBBEB;
  --color-accent-primary-rgb-60: rgba(28, 207, 201, 0.6);
  --color-accent-secondary: #F0883A;
  --color-accent-tertiary: #0158A4;
  --color-accent-quaternary: #5C2D90;
  --color-accent-quaternary-rgb: rgba(92, 45, 144, 0.9);
  --color-accent-tertiary-rgb-60: rgba(1, 88, 164, 0.6);
  --color-accent-tertiary-rgb: rgba(1, 88, 164, 0.9);
}

html, body {
  height: 100%;
}

.btn{
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 2em;
  border: 1px solid var(--color-accent-primary);
  border-radius: 2em;
  color: var(--color-accent-primary);
  transition: background 300ms;
  font-size: var(--font-base-size);
  &:hover{
      background:var(--color-accent-primary);
      color:var(--color-white);
    }
}

.btn-white{
  color: var(--color-white);
  text-decoration: none;
  border: 1px solid var(--color-white);
  border-radius: 2em;
  transition: background 300ms;
}

.btn-primary{
    border: 1px solid var(--color-accent-primary);
    background: transparent;
    &:hover{
      background:var(--color-accent-primary);
    }
  }

.half{
  grid-column-end: span 6;
}

.content-center{
  display: flex;
  align-items: center;
}

.mt-1{
  margin-top: 1em;
}
.mt-2{
  margin-top: 2em;
}
.mt-3{
  margin-top: 3em;
}
.mt-4{
  margin-top: 4em;
}
.mt-5{
  margin-top: 5em;
}
.mb-1{
  margin-bottom: 1em;
}
.mb-2{
  margin-bottom: 2em;
}
.mb-3{
  margin-bottom: 3em;
}
.mb-4{
  margin-bottom: 4em;
}
.mb-5{
  margin-bottom: 5em;
}

`;

export default GlobalStyles;
