import { useState } from 'react';
import styled from 'styled-components';

const ConfirmModal = (props) => {
  const { setIsOpen } = props;
  const [allConFirm, setAllConfirm] = useState(false);
  // if () setAllConfirm(true);
  return (
    <>
      {!allConFirm ? (
        <BasicModal>
          <Text>
            <span>배송품을 하나 이상</span>
            <span>선택하거나 입력해주세요.</span>
          </Text>
          <Line />
          <ConfirmButton onClick={() => setIsOpen(0)}>확인</ConfirmButton>
        </BasicModal>
      ) : (
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
