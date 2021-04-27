import styled from 'styled-components';

export default styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;
