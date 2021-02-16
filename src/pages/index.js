import styled from 'styled-components';
import Layout from './components/Layout';

const HomePageStyles = styled.div`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 5.2rem)) 1fr;
  gap: 0 2rem;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: 0 1rem;
  }

  .container {
    grid-column: 2 / span 12;
  }
`;

export default function HomePage() {
  return (
    <Layout>
      <HomePageStyles>
        <div className='container'>
          <h1>Index Page</h1>
        </div>
      </HomePageStyles>
    </Layout>
  );
}
