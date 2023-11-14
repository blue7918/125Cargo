import { useState } from 'react';
import styled from 'styled-components';
import CheckModal from '../components/check';
import ConfirmModal from '../components/confirm';
import Location from '../components/location';
import NoticeCancel from '../components/notice';
import CarType from '../components/CarType/type';
import TypeData from '../json/type.json';
import exchange from '../assets/images/exchange.png';

const HomePage = () => {
  const [checkValue, setCheckValue] = useState('');
  const [selectPayMethod, setSelectPayMethod] = useState('현금선불');
  const [isOpen, setIsOpen] = useState(0);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const checkOnlyOne = (id) => {
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    id.target.checked = true;
    setCheckValue(id.target.defaultValue);
  };

  return (
    <Wrapper>
      <div className="basic-wrapper">
        <div className="upper-wrapper">
          <div>
            <div className="title-text">의뢰인</div>
            <div className="input-row-wrapper">
              <input placeholder="이름" className="short-input"></input>
              <input placeholder="연락처*" className="short-input"></input>
            </div>
          </div>
          <div className="location-box">
            <Location title="출발지" />
            <img src={exchange} alt="icon" className="exchange-icon"></img>
            <Location title="목적지" />
            <div>
              <div className="title-text">배송메모</div>
              <textarea className="location-memo"></textarea>
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
            <CarType />
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
              <div className="title-text">츌발시간 지정</div>
              <ArriveTime placeholder="ex. 2023/01/01"></ArriveTime>
            </div>
            <div>
              <div className="title-text">요금확인</div>
              <CostCheck onClick={() => setIsOpen(1)}>요금 확인하기</CostCheck>
            </div>
            <NoticeCancel />
          </LowerColWrapper>
        </LowerWrapper>
      </div>
      {isOpen === 1 ? (
        <ModalBackdrop>
          <CheckModal
            selectPayMethod={selectPayMethod}
            setIsOpen={setIsOpen}
            setConfirmOrder={setConfirmOrder}
          />
        </ModalBackdrop>
      ) : null}
      {isOpen === 2 ? (
        <ModalBackdrop>
          <ConfirmModal setIsOpen={setIsOpen}/>
        </ModalBackdrop>
      ) : null}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 1440px;
  height: fit-content;
  margin: 0 auto;
`
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
