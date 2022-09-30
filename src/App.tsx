import React from 'react';
import Card from '@components/Card';
import GlobalStyle from '@styles/globalStyle';
import { DIRECTION_TYPE, RATINGS } from '@type/index';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledSection>
        <StyledVerticalCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          direction={DIRECTION_TYPE.VERTICAL}
          highlightedKeyword={'Highlight'}
          image={'https://image.idus.com/image/files/924e5a3a51c24494a514b45a5bec61f4_512.jpg'}
          label={'Card Label'}
          omittedKeyword={'Cross out'}
          rating={RATINGS.THREE}
          title={'Title'}
        />

        <StyledHorizontalCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          direction={DIRECTION_TYPE.HORIZONTAL}
          image={'https://image.idus.com/image/files/924e5a3a51c24494a514b45a5bec61f4_512.jpg'}
          rating={RATINGS.FIVE}
          reviewer={'John Doe'}
          title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 2rem;
`;

const StyledVerticalCard = styled(Card)`
  width: 20%;
  margin-bottom: 2rem;
`;

const StyledHorizontalCard = styled(Card)`
  width: 50%;
`;

export default App;
