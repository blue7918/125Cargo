import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import CheckModal from '../components/check';
import ConfirmModal from '../components/confirm';
import Location from '../components/location';
import NoticeCancel from '../components/notice';
import PostCode from '../components/postcode';
import CarType from '../components/CarType/type';
import { handleAddPrice } from '../utils/handleAddPrice';
import { CalAmount } from '../utils/calAmount';
import TypeData from '../json/type.json';
import exchange from '../assets/images/exchange.png';

const HomePage = (props) => {
  const { tabValue, setTabValue, truckWeight, setTruckWeight } = props; //차량종류

  const [clientName, setClientName] = useState(''); //필수
  const [clientNumber, setClientNumber] = useState(''); //필수
  const [departDetailAdd, setDepartDetailAdd] = useState('');
  const [departBrand, setDepartBrand] = useState('');
  const [departNumber, setDepartNumber] = useState(''); //필수
  const [departOncharge, setDepartOncharge] = useState('');
  const [arriveDetailAdd, setArriveDetailAdd] = useState('');
  const [arriveBrand, setArriveBrand] = useState('');
  const [arriveNumber, setArriveNumber] = useState(''); //필수
  const [arriveOncharge, setArriveOncharge] = useState('');
  const [shipMemo, setShipMemo] = useState('');
  const [departTime, setDepartTime] = useState(''); //필수
  const [shipType, setShipType] = useState(''); //배송타입
  const [selectPayMethod, setSelectPayMethod] = useState('현금선불'); //결제방식
  const [isOpen, setIsOpen] = useState(0);
  const [visible, setVisible] = useState(0); // 주소검색창 노출여부
  const [addressInfo, setAddressInfo] = useState(''); //출발지 주소정보 //필수
  const [addressInfo2, setAddressInfo2] = useState(''); //도착지 주소정보
  const [basicPrice, setBasicPrice] = useState(0); //기본금액
  const [additionPrice, setAddictionPrice] = useState(0); //추가금액
  const [totalBill, setTotalBill] = useState(0); //최종금액
  const [errorCheck, setErrorCheck] = useState(false);
  const [addPriceStatus, setAddPriceStatus] = useState(
    handleAddPrice({ tabValue, truckWeight })
  ); //거리 추가금 계산을 위해 차종을 정수로 나타내주는 변수

  const checkOnlyOne = (id) => {
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    id.target.checked = true;
    setShipType(id.target.defaultValue);
  };

  //필수조건 항목 체크
  const checkRequired = () => {
    if (
      clientName &&
      clientNumber &&
      addressInfo &&
      addressInfo2 &&
      departNumber &&
      arriveNumber &&
      departTime
    ) {
      handleSubmit();
    } else setIsOpen(2);
  };

  const URL = 'http://15.164.164.189:8888/items';
  const KmURL = 'http://15.164.164.189:8888/km_map';
  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

  const data = {
    name: clientName,
    number: clientNumber,
    addr: addressInfo.address,
    addr_detail: departDetailAdd,
    start_brand: departBrand,
    start_number: departNumber,
    start_oncharge: departOncharge,
    end_addr: addressInfo2.address,
    end_addr_detail: arriveDetailAdd,
    end_brand: arriveBrand,
    end_number: arriveNumber,
    end_oncharge: arriveOncharge,
    memo: shipMemo,
    start_time: departTime,
    ship_type: shipType,
    value: tabValue,
    pay_method: selectPayMethod,
    bill: totalBill,
  };

  const kmData = {
    start_addr: addressInfo.address,
    end_addr: addressInfo2.address,
    data: addPriceStatus,
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(URL, data);
    },
    onSuccess: () => {
      setErrorCheck(true);
      console.log('items 데이터 추가가 성공적으로 이루어졌습니다.');
    },
    onError: (err) => {
      setIsOpen(0);
      console.log('items 에러발생: ');
      console.log(err);
    },
  });

  const mutation_km = useMutation({
    mutationFn: () => {
      return axios.post(KmURL, kmData);
    },
    onSuccess: (data) => {
      const temp = data;
      setAddictionPrice(temp.data);
      setTotalBill(basicPrice + temp.data);
      if (errorCheck) setIsOpen(1);
      console.log('km 데이터 추가가 성공적으로 이루어졌습니다.');
    },
    onError: (err) => {
      setIsOpen(0);
      console.log('km 에러발생: ');
      console.log(err);
    },
  });

  const handleSubmit = () => {
    setIsOpen(0);
    setBasicPrice(CalAmount({ tabValue, truckWeight }));
    mutation.mutate(data);
    mutation_km.mutate();
  };
  useEffect(() => {
    setAddPriceStatus(handleAddPrice({ tabValue, truckWeight }));
  }, [tabValue, truckWeight]);
  return (
    <>
      {visible === 1 && (
        <PostCode
          addressInfo={addressInfo}
          setAddressInfo={setAddressInfo}
          setVisible={setVisible}
        />
      )}
      {visible === 2 && (
        <PostCode
          addressInfo={addressInfo2}
          setAddressInfo={setAddressInfo2}
          setVisible={setVisible}
        />
      )}
      <Wrapper>
        <div className="basic-wrapper">
          <div className="upper-wrapper">
            <div>
              <div className="title-text">의뢰인</div>
              <div className="input-row-wrapper">
                <input
                  placeholder="이름*"
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
                setAdd={setAddressInfo}
                setDetailAdd={setDepartDetailAdd}
                setBrand={setDepartBrand}
                setNumber={setDepartNumber}
                setOncharge={setDepartOncharge}
                setVisible={setVisible}
                addressInfo={addressInfo}
                postCodeNum={1}
              />
              <img src={exchange} alt="icon" className="exchange-icon"></img>
              <Location
                title="목적지"
                setAdd={setAddressInfo2}
                setDetailAdd={setArriveDetailAdd}
                setBrand={setArriveBrand}
                setNumber={setArriveNumber}
                setOncharge={setArriveOncharge}
                setVisible={setVisible}
                addressInfo={addressInfo2}
                postCodeNum={2}
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
              <CarType
                tabValue={tabValue}
                setTabValue={setTabValue}
                truckWeight={truckWeight}
                setTruckWeight={setTruckWeight}
              />
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
                <CostCheck
                  onClick={() => {
                    checkRequired();
                  }}
                >
                  요금 확인하기
                </CostCheck>
              </div>
              <NoticeCancel />
            </LowerColWrapper>
          </LowerWrapper>
        </div>
      </Wrapper>
      {isOpen === 1 ? (
        <div className="common-modal-back">
          <CheckModal
            setIsOpen={setIsOpen}
            selectPayMethod={selectPayMethod}
            basicPrice={basicPrice}
            additionPrice={additionPrice}
            totalBill={totalBill}
          />
        </div>
      ) : null}
      {isOpen === 2 ? (
        <div className="common-modal-back">
          <ConfirmModal setIsOpen={setIsOpen} />
        </div>
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
