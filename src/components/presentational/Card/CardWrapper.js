import styled from 'styled-components';

export default styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 600px;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 768px) and (orientation: landscape) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 6.5rem;
  }
`;
