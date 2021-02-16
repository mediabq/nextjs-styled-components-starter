import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 5.2rem)) 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  //grid-auto-rows: min-content;
  /* grid-template-rows: 14vh 86vh auto; */
  gap: ${(props) => (props.gapDefault ? props.gapDefault : '0 2rem')};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.m} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gapMedium ? props.gapMedium : '0 1rem')};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.small : '0 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default Grid;
