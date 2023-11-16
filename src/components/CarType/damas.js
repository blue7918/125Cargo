import { useState } from 'react';
import styled from 'styled-components';
import Data from '../../json/damas.json';

const DamasTab = () => {
  const [loadType, setLoadType] = useState('고객님 직접');
  const [unLoadType, setUnLoadType] = useState('고객님 직접');
  const [damasOptions, setDamasOptions] = useState('손수레 회전수');
  const [showDamasOptions, setShowDamasOptions] = useState(false);
  const [damasLocation, setDamasLocation] = useState('문 앞');
  const [selectAccMenu, setSelectAccMenu] = useState('없음');

  const handleDamasOption = (e) => {
    const { innerText } = e.target;
    setDamasOptions(innerText);
  };
  const handleAccompany = (e) => {
    if (e !== selectAccMenu) setSelectAccMenu(e);
    else if (e === selectAccMenu) setSelectAccMenu('없음');
  };
  return (
    <Wrapper>
      <div>
        <div className="car-content-title">배송품 종류 및 수량</div>
        <ContentInput
          placeholder="배송품 규격 및 수량 등을 가급적 정확히 입력해주시기 바랍니다.&#13;&#10;ex) 신발박스 10개, 30x50x50cm 박스 3개"
        ></ContentInput>
      </div>
      <RowWrapper>
        <div>
          <div className="car-content-title">전달위치</div>
          <InputColWrapper>
            {Data.locationData.map((item) => (
              <MethodButton
                key={item.id}
                onClick={() => setDamasLocation(item.content)}
                check={damasLocation === item.content}
              >
                {item.content}
              </MethodButton>
            ))}
          </InputColWrapper>
        </div>
        <Line />
        <div>
          <div className="car-content-title">운반수준</div>
          <SelectBox
            onClick={() => setShowDamasOptions((prev) => !prev)}
            check={damasOptions !== '손수레 회전수'}
          >
            <Label>{damasOptions}</Label>
            <SelectOptions
              show={showDamasOptions}
              check={damasOptions !== '손수레 회전수'}
            >
              {Data.handCart.map((item) => (
                <Option
                  key={item.id}
                  onClick={handleDamasOption}
                  check={damasOptions !== '손수레 회전수'}
                >
                  {item.content}
                </Option>
              ))}
            </SelectOptions>
          </SelectBox>
        </div>
        <Line />
        <InnerRowWrapper>
          <div>
            <div className="car-content-title">상차 방법</div>
            <InputColWrapper>
              {Data.LoadData.map((item) => (
                <MethodButton
                  key={item.id}
                  onClick={() => setLoadType(item.content)}
                  check={loadType === item.content}
                >
                  {item.content}
                </MethodButton>
              ))}
            </InputColWrapper>
          </div>
          <div>
            <div className="car-content-title">하차 방법</div>
            <InputColWrapper>
              {Data.LoadData.map((item) => (
                <MethodButton
                  key={item.id}
                  onClick={() => setUnLoadType(item.content)}
                  check={unLoadType === item.content}
                >
                  {item.content}
                </MethodButton>
              ))}
            </InputColWrapper>
          </div>
        </InnerRowWrapper>
      </RowWrapper>
      <AccompanyMenuWrapper>
        <AccompanyMenu
          onClick={() => handleAccompany('동승 1인')}
          selected={selectAccMenu === '동승 1인'}
        >
          동승 1인
        </AccompanyMenu>
      </AccompanyMenuWrapper>
    </Wrapper>
  );
};

export default DamasTab;

const Wrapper = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 15px;
    margin-top: 30px;
  }
`;
const ContentInput = styled.textarea`
  width: 617px;
  height: 96px;
  border: 1px solid #c4c4c4;
  background: #fff;
  resize: none;
  padding: 15px;
  outline: none;
  margin-bottom: 25px;
  &::placeholder {
    color: #848484;
  }
  @media screen and (max-width: 500px) {
    width: 310px;
    height: 81px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
const RowWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const InnerRowWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const InputColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

const SelectBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 186px;
  height: 51px;
  padding-left: 15px;
  background-color: #fff;
  align-self: center;
  color: ${(props) => (props.check ? '#326ce7' : '#777')};
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    width: 53px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    right: 0px;
    color: #fff;
    background: ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    width: 149px;
    height: 49px;
    &::before {
      width: 33px;
      height: 46px;
      background: #fff;
      color: ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
    }
  }
`;
const Label = styled.label`
  font-size: 17px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 51px;
  left: -1px;
  width: 186px;
  overflow: hidden;
  height: fit-content;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  background-color: #fff;
  border-left: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  border-right: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  z-index: 2;
  @media screen and (max-width: 500px) {
    top: 48px;
    width: 149px;
  }
`;
const Option = styled.li`
  color: #777;
  width: 186px;
  height: 51px;
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  padding-left: 13px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in;
  border-bottom: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  &:hover {
    background-color: #e7efff;
    color: #326ce7;
  }
  @media screen and (max-width: 500px) {
    width: 149px;
  }
`;

const MethodButton = styled.button`
  background: ${(props) => (props.check ? '#326ce7' : '#fff')};
  width: 115px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #c4c4c4;
  color: ${(props) => (props.check ? '#fff' : '#777')};
  font-size: 15px;
  font-weight: 400;
  line-height: 100%; /* 15px */
  letter-spacing: -0.2px;
  white-space: pre-wrap;
`;
const Line = styled.div`
  width: 1px;
  height: 202px;
  background-color: #c4c4c4;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const AccompanyMenuWrapper = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 99px;
    display: flex;
    align-items: center;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    margin-left: -15px;
  }
`;
const AccompanyMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 50px;
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.selected ? '#326ce7' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#777')};
  font-size: 17px;
  font-weight: 400;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    width: 149px;
    height: 49px;
    font-size: 14px;
    margin-top: 0px;
  }
`;
