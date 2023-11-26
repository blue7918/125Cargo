import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

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
    addressInfo,
    addressInfo2
  } = props;

  const URL = '8888/items';
  const kmUrl = '8888/km_map';

  const [allConFirm, setAllConfirm] = useState(false);
  //인증 관련 코드 추가
  // if () setAllConfirm(true);

  const data = {
    name: clientName,
    number: clientNumber,
    addr: addressInfo?addressInfo:departAdd,
    addr_detail: departDetailAdd,
    start_brand: departBrand,
    start_number: departNumber,
    start_oncharge: departOncharge,
    end_addr: addressInfo2?addressInfo2:arriveAdd,
    end_addr_detail: arriveDetailAdd,
    end_brand: arriveBrand,
    end_number: arriveNumber,
    end_oncharge: arriveOncharge,
    memo: shipMemo,
    start_time: departTime,
    ship_type: shipType,
    value: tabValue,
    pay_method: selectPayMethod,
  };

  const kmData = {
    start_addr: addressInfo?addressInfo:departAdd,
    end_addr: addressInfo2?addressInfo2:arriveAdd,
  };

  const handleItems = (data) => {
    return axios.post(URL, data);
  }
  const handleKm = (kmData) => {
    return axios.post(kmUrl, kmData);
  }
  
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.all([handleItems(data), handleKm(kmData)])
    },
    onSuccess: () => {
      console.log('데이터 추가가 성공적으로 이루어졌습니다.');
    },
    onError: (err) => {
      console.log('에러발생: ');
      console.log(err);
    },
  });


  const handleSubmit = () => {
    setIsOpen(0);
    mutation.mutate(data, kmData);
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
              handleSubmit();
              setIsOpen(0);
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
