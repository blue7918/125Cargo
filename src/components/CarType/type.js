import styled from 'styled-components';
import TypeData from '../../json/type.json';
import TruckTab from './truck';
import MotorCycleTab from './motorcycle';
import DamasTab from './damas';

const CarType = (props) => {
  const { tabValue, setTabValue, truckWeight, setTruckWeight } = props;

  return (
    <TypeBox>
      <CarButtonWrapper>
        {TypeData.CarTypeData.map((item) => (
          <CarButton
            key={item.id}
            onClick={() => setTabValue(item.content)}
            check={tabValue === item.content}
          >
            <img src={item.url} alt="icon"></img>
            {item.content}
          </CarButton>
        ))}
      </CarButtonWrapper>
      <CarContentBox check={tabValue === '트럭'}>
        <TruckTab truckWeight={truckWeight} setTruckWeight={setTruckWeight}/>
      </CarContentBox>
      <CarContentBox check={tabValue === '오토바이'}>
        <MotorCycleTab isMobile={false} />
      </CarContentBox>
      <CarContentBox check={tabValue === '다마스'}>
        <DamasTab />
      </CarContentBox>
      <CarContentBox check={tabValue === '라보'}>
        <DamasTab />
      </CarContentBox>
    </TypeBox>
  );
};

export default CarType;

const TypeBox = styled.div`
  width: 780px;
  height: 492px;
  display: flex;
`;
const CarButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  width: 115px;
  height: 100%;
  border: 1px solid #c4c4c4;
  border-top: none;
`;
const CarButton = styled.button`
  width: 100%;
  flex-grow: 1;
  border-top: 1px solid #c4c4c4;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #141414;
  font-size: 19px;
  font-weight: 700;
  line-height: 100%; /* 19px */
  letter-spacing: -0.2px;
  background: ${(props) => (props.check ? '#f0f5ff' : '#fff')};
`;
const CarContentBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f5ff;
  padding-top: 40px;
  padding-left: 18px;
  flex-direction: column;
  gap: 25px;
  display: ${(props) => (props.check ? 'flex' : 'none')};
`;
