import { useState } from 'react';
import styled from 'styled-components';
import TypeData from '../../json/type.json';

const TruckTab = () => {
  const [truckWeight, setTruckWeight] = useState('트럭톤수');
  const [truckType, setTruckType] = useState('트럭종류');
  const [showWeightOptions, setShowWeightOptions] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [selectAccMenu, setSelectAccMenu] = useState('없음'); //명세서 출력하듯이 문자로 출력해줘야한다고 생각해서 string으로 구성해두었는데 백으로 연동작업 필요하신거면 0,1,2로 바꾸면 될 것 같습니다!
  const [loadType, setLoadType] = useState('고객님이 직접 상차'); //필수선택이라 생각해 default 값을 다음과 같이 설정해두었습니다.
  const [unLoadType, setUnLoadType] = useState('고객님이 직접 하차');

  const handleTruckWeight = (e) => {
    const { innerText } = e.target;
    setTruckWeight(innerText);
  };
  const handleTruckType = (e) => {
    const { innerText } = e.target;
    setTruckType(innerText);
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
      <LowerBox>
        <div>
          <div className="car-content-title">트럭톤수 및 종류</div>
          <div className="input-col-wrapper">
            <SelectBox
              className="common-select-box"
              onClick={() => setShowWeightOptions((prev) => !prev)}
              check={truckWeight !== '트럭톤수'}
            >
              <Label>{truckWeight}</Label>
              <SelectOptions
                className="common-select-options"
                show={showWeightOptions}
                check={truckWeight !== '트럭톤수'}
              >
                {TypeData.TruckWeightData.map((item) => (
                  <Option
                    className="common-select-option"
                    key={item.id}
                    onClick={handleTruckWeight}
                    check={truckWeight !== '트럭톤수'}
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              className="common-select-box"
              onClick={() => setShowTypeOptions((prev) => !prev)}
              check={truckType !== '트럭종류'}
            >
              <Label>{truckType}</Label>
              <SelectOptions
                className="common-select-options"
                show={showTypeOptions}
                check={truckType !== '트럭종류'}
              >
                {TypeData.TruckTypeData.map((item) => (
                  <Option
                    className="common-select-option"
                    key={item.id}
                    onClick={handleTruckType}
                    check={truckType !== '트럭종류'}
                  >
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
      <MobileAccompanyCheck>
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
      </MobileAccompanyCheck>
    </Wrapper>
  );
};

export default TruckTab;

const Wrapper = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 15px;
    margin-top: 30px;
  }
`;
const SelectBox = styled.div`
  color: ${(props) => (props.check ? '#326ce7' : '#777')};
  border: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  &::before {
    background: ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  }
  @media screen and (max-width: 500px) {
    &::before {
      color: ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
    }
  }
`;
const Label = styled.label`
  font-size: 17px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  max-height: ${(props) => (props.show ? '204px' : '0')};
  border-left: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  border-right: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
`;
const Option = styled.li`
  transition: background-color 0.2s ease-in;
  border-bottom: 1px solid ${(props) => (props.check ? '#326ce7' : '#C4C4C4')};
  @media screen and (max-width: 500px) {
    top: 48px;
    width: 149px;
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
  @media screen and (max-width: 500px) {
    width: 149px;
    height: 49px;
    font-size: 14px;
  }
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
  margin-right: 17px;
  & > input {
    width: 17px;
    height: 17px;
    border: 1px solid #c4c4c4;
    margin-left: 6px;
  }
  @media screen and (max-width: 500px) {
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 26px;
  }
`;
const AccompanyCheck = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 24px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MobileAccompanyCheck = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 99px;
    display: flex;
    align-items: center;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    margin-left: -15px;
    padding-left: 15px;
    gap: 12px;
  }
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
  @media screen and (max-width: 500px) {
    width: 149px;
    height: 49px;
    font-size: 14px;
    margin-top: 0px;
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
    margin-bottom: 0px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
const LowerBox = styled.div`
  display: flex;
  gap: 36px;
  @media screen and (max-width: 500px) {
    height: fit-content;
    flex-direction: column;
  }
`;
const InputRowWrapper = styled.div`
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
    display: flex;
    flex-wrap: wrap;
  }
`;
const ContentLine = styled.div`
  width: 1.5px;
  height: 272px;
  background-color: #c4c4c4;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
