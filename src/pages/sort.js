import { useState } from 'react';
import styled from 'styled-components';
import HomePage from './home';
import MobilePage from './mobile';

const SortPage = () => {
  const [tabValue, setTabValue] = useState('트럭');
  const [truckWeight, setTruckWeight] = useState('트럭톤수'); 

  return (
    <>
      <WebSize>
        <HomePage tabValue={tabValue} setTabValue={setTabValue} truckWeight={truckWeight} setTruckWeight={setTruckWeight}/>
      </WebSize>
      <MobileSize>
        <MobilePage tabValue={tabValue} setTabValue={setTabValue} truckWeight={truckWeight} setTruckWeight={setTruckWeight}/>
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
