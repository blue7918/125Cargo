import { useState } from 'react';
import styled from 'styled-components';
import TypeData from '../../json/type.json';

const TruckTab = () => {
  const [truckWeight, setTruckWeight] = useState('트럭톤수');
  const [truckType, setTruckType] = useState('트럭종류');
  const [showWeightOptions, setShowWeightOptions] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [selectAccMenu, setSelectAccMenu] = useState('없음');
  const [loadType, setLoadType] = useState('고객님이 직접 상차'); //필수선택이라 생각해 default 값을 다음과 같이 설정해두었습니다.
  const [unLoadType, setUnLoadType] = useState('고객님이 직접 하차');

  const handleTruckWeight = (e) => {
    const { innerText } = e.target;
    setTruckWeight(innerText);
  };
  const handleTruckType = (e) => {
    const { innerText2 } = e.target;
    setTruckType(innerText2);
  };
  const handleAccompany = (e) => {
    if (e !== selectAccMenu) setSelectAccMenu(e);
    else if (e === selectAccMenu) setSelectAccMenu('없음');
  };
  return (
    <>
      <div>
        <div className="car-content-title">배송품 종류 및 수량</div>
        <ContentInput
          placeholder="배송품 규격 및 수량 등을 가급적 정확히 입력해주시기 바랍니다.&#13;&#10;ex) 신발박스 10개, 30x50x50cm 박스 3개"
        ></ContentInput>
      </div>
      <LowerBox>
        <div>
          <div className="car-content-title">트럭톤수 및 종류</div>
          <div className="input-col-wrapper">
            <SelectBox onClick={() => setShowWeightOptions((prev) => !prev)}>
              <Label>{truckWeight}</Label>
              <SelectOptions show={showWeightOptions}>
                {TypeData.TruckWeightData.map((item) => (
                  <Option key={item.id} onClick={handleTruckWeight}>
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>

            <SelectBox onClick={() => setShowTypeOptions((prev) => !prev)}>
              <Label>{truckType}</Label>
              <SelectOptions show={showTypeOptions}>
                {TypeData.TruckTypeData.map((item) => (
                  <Option key={item.id} onClick={handleTruckType}>
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <LiftCheck>
              <label htmlFor="need-lift">리프트</label>
              <input
                type="checkbox"
                id="need-lift"
                name="needLift"
                value="오토바이"
              />
            </LiftCheck>
            <AccompanyCheck>
              {/* 필수선택이 아닌 것 같아 아래와 같이 구현하였습니다. */}
              <AccompanyMenu
                onClick={() => handleAccompany('동승 1인')}
                selected={selectAccMenu === '동승 1인'}
              >
                동승 1인
              </AccompanyMenu>
              <AccompanyMenu
                onClick={() => handleAccompany('동승 2인')}
                selected={selectAccMenu === '동승 2인'}
              >
                동승 2인
              </AccompanyMenu>
            </AccompanyCheck>
          </div>
        </div>
        <ContentLine />
        <InputRowWrapper>
          <div>
            {/* 필수선택이라 생각해서 아래와 같이 구현했습니다. */}
            <div className="car-content-title">상차 방법</div>
            <InputColWrapper>
              {TypeData.LoadTypeData.map((item) => (
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
              {TypeData.UnLoadTypeData.map((item) => (
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
        </InputRowWrapper>
      </LowerBox>
    </>
  );
};

export default TruckTab;

const SelectBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 186px;
  height: 51px;
  padding-left: 15px;
  background-color: #fff;
  align-self: center;
  color: #326ce7;
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  border: 1px solid #326ce7;
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
    background: #326ce7;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    padding-bottom: 10px;
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
  border-left: 1px solid #326ce7;
  border-right: 1px solid #326ce7;
  z-index: 2;
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
  border-bottom: 1px solid #326ce7;
  &:hover {
    background-color: #e7efff;
    color: #326ce7;
  }
`;
const MethodButton = styled.button`
  background: ${(props) => (props.check ? '#326ce7' : '#fff')};
  width: 172px;
  height: 53px;
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

const LiftCheck = styled.div`
  width: 100%;
  text-align: right;
  color: #777;
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  margin-top: 5px;
  & > input {
    width: 17px;
    height: 17px;
    border: 1px solid #c4c4c4;
    margin-left: 6px;
  }
`;
const AccompanyCheck = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 24px;
`;
const AccompanyMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 50px;
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.selected ? '#326ce7' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#777')};
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
`;

const ContentInput = styled.textarea`
  width: 617px;
  height: 96px;
  border: 1px solid #c4c4c4;
  background: #fff;
  resize: none;
  padding: 15px;
  outline: none;
  &::placeholder {
    color: #848484;
  }
`;
const LowerBox = styled.div`
  display: flex;
  gap: 36px;
`;
const InputRowWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const InputColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ContentLine = styled.div`
  width: 1.5px;
  height: 272px;
  background-color: #c4c4c4;
`;
