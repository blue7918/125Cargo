import styled from 'styled-components';
import HomePage from './home';
import MobilePage from './mobile';

const SortPage = () => {
  return (
    <>
      <WebSize>
        <HomePage />
      </WebSize>
      <MobileSize>
        <MobilePage />
      </MobileSize>
    </>
  );
};

export default SortPage;

const WebSize = styled.div`
  display: none;
  @media screen and (min-width: 500px) {
    display: block;
  }
`;
const MobileSize = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;
