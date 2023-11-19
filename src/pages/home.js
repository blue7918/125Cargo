import { useState } from 'react';
import styled from 'styled-components';
import CheckModal from '../components/check';
import ConfirmModal from '../components/confirm';
import Location from '../components/location';
import NoticeCancel from '../components/notice';
import CarType from '../components/CarType/type';
import TypeData from '../json/type.json';
import exchange from '../assets/images/exchange.png';

const HomePage = (props) => {
  const [clientName, setClientName] = useState('');
  const [clientNumber, setClientNumber] = useState(''); //필수
  const [departAdd, setDepartAdd] = useState(''); //필수
  const [departDetailAdd, setDepartDetailAdd] = useState('');
  const [departBrand, setDepartBrand] = useState('');
  const [departNumber, setDepartNumber] = useState(''); //필수
  const [departOncharge, setDepartOncharge] = useState('');
  const [arriveAdd, setArriveAdd] = useState(''); //필수
  const [arriveDetailAdd, setArriveDetailAdd] = useState('');
  const [arriveBrand, setArriveBrand] = useState('');
  const [arriveNumber, setArriveNumber] = useState(''); //필수
  const [arriveOncharge, setArriveOncharge] = useState('');
  const [shipMemo, setShipMemo] = useState('');
  const [departTime, setDepartTime] = useState('');

  const { tabValue, setTabValue } = props; //차량종류
  const [shipType, setShipType] = useState(''); //배송타입
  const [selectPayMethod, setSelectPayMethod] = useState('현금선불'); //결제방식
  const [isOpen, setIsOpen] = useState(0);

  const [costWeight, setCostWeight] = useState(0); //추가금을 결정하는 무게

  const checkOnlyOne = (id) => {
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    id.target.checked = true;
    setShipType(id.target.defaultValue);
  };

  return (
    <>
      <Wrapper>
        <div className="basic-wrapper">
          <div className="upper-wrapper">
            <div>
              <div className="title-text">의뢰인</div>
              <div className="input-row-wrapper">
                <input
                  placeholder="이름"
                  className="short-input"
                  onChange={(e) => {
                    setClientName(e.target.value);
                  }}
                ></input>
                <input
                  placeholder="연락처*"
                  className="short-input"
                  onChange={(e) => {
                    setClientNumber(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="location-box">
              <Location
                title="출발지"
                setAdd={setDepartAdd}
                setDetailAdd={setDepartDetailAdd}
                setBrand={setDepartBrand}
                setNumber={setDepartNumber}
                setOncharge={setDepartOncharge}
              />
              <img src={exchange} alt="icon" className="exchange-icon"></img>
              <Location
                title="목적지"
                setAdd={setArriveAdd}
                setDetailAdd={setArriveDetailAdd}
                setBrand={setArriveBrand}
                setNumber={setArriveNumber}
                setOncharge={setArriveOncharge}
              />
              <div>
                <div className="title-text">배송메모</div>
                <textarea
                  className="location-memo"
                  onChange={(e) => {
                    setShipMemo(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div>
              <div className="title-text">배송타입</div>
              <div className="type-button-wrapper">
                <input
                  type="checkbox"
                  id="oneWay"
                  name="checkWrap"
                  value="편도"
                  onChange={(e) => checkOnlyOne(e)}
                  defaultChecked="true"
                />
                <label htmlFor="oneWay">편도</label>
                <input
                  type="checkbox"
                  id="round"
                  name="checkWrap"
                  value="왕복"
                  onChange={(e) => checkOnlyOne(e)}
                />
                <label htmlFor="round">왕복</label>
                <input
                  type="checkbox"
                  id="linked"
                  name="checkWrap"
                  value="연계배송"
                  onChange={(e) => checkOnlyOne(e)}
                  disabled={true}
                />
                <label htmlFor="linked">연계배송</label>
              </div>
            </div>
          </div>
          <LowerWrapper>
            <div>
              <div className="title-text">차량종류 및 배송품</div>
              <CarType tabValue={tabValue} setTabValue={setTabValue} setCostWeight={setCostWeight}/>
            </div>
            <LowerColWrapper>
              <div>
                <div className="title-text">결제방식</div>
                <PayButtonWrapper>
                  {TypeData.PayMethod.map((item) => (
                    <PayButton
                      key={item.id}
                      onClick={() => setSelectPayMethod(item.content)}
                      check={selectPayMethod === item.content}
                    >
                      {item.content}
                    </PayButton>
                  ))}
                </PayButtonWrapper>
              </div>
              <div>
                <div className="title-text">출발시간 지정</div>
                <ArriveTime
                  placeholder="ex. 2023/01/01"
                  onChange={(e) => {
                    setDepartTime(e.target.value);
                  }}
                ></ArriveTime>
              </div>
              <div>
                <div className="title-text">요금확인</div>
                <CostCheck onClick={() => setIsOpen(1)}>
                  요금 확인하기
                </CostCheck>
              </div>
              <NoticeCancel />
            </LowerColWrapper>
          </LowerWrapper>
        </div>
      </Wrapper>
      {isOpen === 1 ? (
        <ModalBackdrop>
          <CheckModal selectPayMethod={selectPayMethod} setIsOpen={setIsOpen} tabValue={tabValue} costWeight={costWeight}/>
        </ModalBackdrop>
      ) : null}
      {isOpen === 2 ? (
        <ModalBackdrop>
          <ConfirmModal
            setIsOpen={setIsOpen}
            clientName={clientName}
            clientNumber={clientNumber}
            departAdd={departAdd}
            departDetailAdd={departDetailAdd}
            departBrand={departBrand}
            departNumber={departNumber}
            departOncharge={departOncharge}
            arriveAdd={arriveAdd}
            arriveDetailAdd={arriveDetailAdd}
            arriveBrand={arriveBrand}
            arriveNumber={arriveNumber}
            arriveOncharge={arriveOncharge}
            shipMemo={shipMemo}
            departTime={departTime}
            shipType={shipType}
            tabValue={tabValue}
            selectPayMethod={selectPayMethod}
          />
        </ModalBackdrop>
      ) : null}
    </>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 1440px;
  height: fit-content;
  margin: 0 auto;
`;
const LowerWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const LowerColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ArriveTime = styled.input`
  width: 378px;
  height: 46px;
  border: 1px solid #c4c4c4;
  background: #fff;
  padding: 15px;
  outline: none;
`;
const PayButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;
const PayButton = styled.button`
  background: ${(props) => (props.check ? '#326ce7' : '#C4C4C4;')};
  color: #fff;
  width: 90px;
  height: 46px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: -0.2px;
`;
const CostCheck = styled.button`
  width: 380px;
  height: 59px;
  background: #326ce7;
  color: #fff;
  font-size: 23px;
  font-weight: 700;
  line-height: 100%; /* 23px */
  letter-spacing: -0.2px;
`;

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
