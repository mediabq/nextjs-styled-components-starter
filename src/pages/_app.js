import { ThemeProvider } from 'styled-components';
import Theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import TypographyStyles from '../styles/TypographyStyles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <TypographyStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
