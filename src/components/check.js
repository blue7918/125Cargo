import styled from 'styled-components';
import { useState } from 'react';
import { CalAmount } from '../utils/calAmount';
import { AddComma } from '../utils/addComma';

const CheckModal = (props) => {
  const { selectPayMethod, setIsOpen, tabValue, costWeight } = props;
  const [tempCost, setTempCost] = useState(20000);
  let basicCost = CalAmount({tabValue, costWeight});
  return (
    <BasicModal>
      <Title>요금확인 및 주문접수</Title>
      <PayMethod>
        결제방식 <span>{selectPayMethod}</span>
      </PayMethod>
      <CostBox>
        <CostInnerBox>
          <div>기본요금</div>
          {/* 금액 부분 api 연동 작업 필요 */}
          <div className="costBold">{AddComma(basicCost)}</div>
        </CostInnerBox>
        <CostInnerBox>
          <div>추가요금</div>
          {/* 금액 부분 api 연동 작업 필요 */}
          <div className="costBold">{AddComma(tempCost)}</div>
        </CostInnerBox>
        <Line />
        <CostInnerBox>
          <div className="bold">최종요금</div>
          <div className="totalCost">{basicCost + tempCost}</div>
        </CostInnerBox>
      </CostBox>
      <TextBox>
        기상상황,차량수급에 따라 요금변동이 있을 수 있습니다.
        <span>주문을 접수하시겠습니까?</span>
      </TextBox>
      <ButtonWrapper>
        <button className="cancel" onClick={() => setIsOpen(0)}>
          취소
        </button>
        <button
          className="confirm"
          onClick={() => {
            setIsOpen(2);
          }}
        >
          확인
        </button>
      </ButtonWrapper>
    </BasicModal>
  );
};

export default CheckModal;

const BasicModal = styled.div`
  width: 413px;
  height: 516px;
  background: #fff;
  padding: 55px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const Title = styled.div`
  color: #141414;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.2px;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const PayMethod = styled.div`
  color: #434343;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  & > span {
    font-weight: 700;
  }
`;
const CostBox = styled.div`
  margin-top: 45px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const CostInnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    color: #555;
    font-size: 17px;
    font-weight: 500;
  }
  & .costBold {
    font-size: 17px;
    font-weight: 500;
  }
  & > .bold {
    font-size: 17px;
    font-weight: 700;
  }
  & > .totalCost {
    color: #326ce7;
    font-size: 19px;
    font-weight: 700;
  }
`;
const Line = styled.div`
  width: 341px;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 6px;
  margin-bottom: 6px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  color: #434343;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  & > span {
    font-size: 20px;
    font-weight: 700;
    line-height: 165%;
    letter-spacing: -0.2px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 40px;
  & > button {
    width: 168px;
    height: 48px;
    color: #c4c4c4;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  & > .cancel {
    border: 1px solid #c4c4c4;
    color: #c4c4c4;
  }
  & > .confirm {
    background: #326ce7;
    color: #fff;
  }
`;
