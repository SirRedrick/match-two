import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5px;

  width: 95vw;
  height: 95vw;

  @media (min-width: 480px) {
    gap: 10px;
  }

  @media (min-width: 620px) and (orientation: landscape) {
    max-width: 80vh;
    max-height: 80vh;
  }

  @media (min-width: 768px) {
    gap: 15px;

    max-width: 80vh;
    max-height: 80vh;
  }

  @media (min-width: 768px) and (orientation: landscape) {
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 20px;
  }
`;

// margin: 40px auto 0 auto;
