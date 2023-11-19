import { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const ConfirmModal = (props) => {
  const {
    setIsOpen,
    clientName,
    clientNumber,
    departAdd,
    departDetailAdd,
    departBrand,
    departNumber,
    departOncharge,
    arriveAdd,
    arriveDetailAdd,
    arriveBrand,
    arriveNumber,
    arriveOncharge,
    shipMemo,
    departTime,
    shipType,
    tabValue,
    selectPayMethod,
  } = props;

  const [allConFirm, setAllConfirm] = useState(false);

  //인증 관련 코드 추가하면 좋을 것 같습니다.
  // if () setAllConfirm(true);

  //참고한 링크: https://velog.io/@ms0kim/React-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0, https://velog.io/@hsschoi/React-Axios-JSON%EC%9C%BC%EB%A1%9C-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EC%84%9C%EB%B2%84%EC%97%90-%EC%A0%84%EC%86%A1%ED%95%98%EA%B8%B0
  const onSubmit = () => {
    const url = 'http://localhost:8000/posts';
    const data = {
      'name': clientName, //의뢰인 이름
      'number': clientNumber, //의뢰인 연락처
      'addr': departAdd, //출발지 주소
      'addr_detail': departDetailAdd, //출발지 상세주소
      'start_brand': departBrand, //출발지 상호명
      'start_number': departNumber, //출발지 연락처
      'start_oncharge': departOncharge, //출발지 담당자명
      'end_addr': arriveAdd, //도착지 주소
      'end_addr_detail': arriveDetailAdd, //도착지 상세주소
      'end_brand': arriveBrand, //도착지 상호명
      'end_number': arriveNumber, //도착지 연락처
      'end_oncharge': arriveOncharge, //도착지 담당자명
      'memo': shipMemo, //배송 메모
      'start_time': departTime, //츌발 시간
      'ship_type': shipType, //배송 타입
      'value': tabValue, //차량 종류
      'pay_method': selectPayMethod, //결제 방식
    };
    const config = { 'Content-Type': 'application/json' };

    axios
      .post(url, data, config)
      .then((res) => {
        // 성공 처리
      })
      .catch((err) => {
        // 에러 처리
        //console.log(err.response.data.message); --> 서버단 에러메세지 출력~
      });
  };

  return (
    <>
      {!allConFirm ? (
        <BasicModal>
          <Text>
            <span>배송품을 하나 이상</span>
            <span>선택하거나 입력해주세요.</span>
          </Text>
          <Line />
          <ConfirmButton
            onClick={() => {
              setIsOpen(0);
              onSubmit();
            }}
          >
            확인
          </ConfirmButton>
        </BasicModal>
      ) : (
        //확인 관련 부분 추가해서 조건 통과 시 통과 관련 alert가 있으면 좋을 것 같다고 생각해 추가해두었습니다.
        <div>확인된 창으로 이동</div>
      )}
    </>
  );
};

export default ConfirmModal;

const BasicModal = styled.div`
  width: 413px;
  height: 230px;
  background: #fff;
  padding: 55px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 36px;
  position: relative;
`;
const Text = styled.div`
  color: #141414;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  width: 198x;
  height: 50px;
  justify-content: space-between;
  margin-top: 25px;
`;
const Line = styled.div`
  width: 341px;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 45px;
`;
const ConfirmButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  color: #326ce7;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  bottom: 0;
`;
