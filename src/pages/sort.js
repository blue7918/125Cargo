import { useState } from 'react';
import styled from 'styled-components';
import HomePage from './home';
import MobilePage from './mobile';

const SortPage = () => {
  const [tabValue, setTabValue] = useState('트럭');

  return (
    <>
      <WebSize>
        <HomePage tabValue={tabValue} setTabValue={setTabValue}/>
      </WebSize>
      <MobileSize>
        <MobilePage tabValue={tabValue} setTabValue={setTabValue}/>
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
