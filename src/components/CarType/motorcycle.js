import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Data from '../../json/motorcycle.json';

const MotorCycleTab = () => {
  const [documentCheck, setDocumentCheck] = useState(false);
  const [itemCheck, setItemCheck] = useState(false);
  const [smallBox, setSmallBox] = useState('0개');
  const [mediumBox, setMediumBox] = useState('0개');
  const [bigBox, setBigBox] = useState('0개');
  const [giantBox, setGiantBox] = useState('0개');
  const [smallBag, setSmallBag] = useState('0개');
  const [bigBag, setBigBag] = useState('0개');
  const [smallSack, setSmallSack] = useState('0개');
  const [bigSack, setBigSack] = useState('0개');
  const [showSmallBox, setShowSmallBox] = useState(false);
  const [showMediumBox, setShowMediumBox] = useState(false);
  const [showBigBox, setShowBigBox] = useState(false);
  const [showGiantBox, setShowGiantBox] = useState(false);
  const [showSmallBag, setShowSmallBag] = useState(false);
  const [showBigBag, setShowBigBag] = useState(false);
  const [showSmallSack, setShowSmallSack] = useState(false);
  const [showBigSack, setShowBigSack] = useState(false);
  const [selectWeight, setSelectWeight] = useState('20~30kg');

  return (
    <Wrapper>
      <UpperWrapper>
        <ColWrapper>
          <div className="car-content-title">서류 및 간단물건</div>
          <InputWrapper>
            <CheckBox
              onClick={() => setDocumentCheck(!documentCheck)}
              check={documentCheck}
            >
              서류봉투
              <div className="checked">
                선택
                <br />
                해제
              </div>
              <div className="unChecked">선택</div>
            </CheckBox>
            <CheckBox
              onClick={() => setItemCheck(!itemCheck)}
              check={itemCheck}
            >
              간단물건
              <div className="checked">
                선택
                <br />
                해제
              </div>
              <div className="unChecked">선택</div>
            </CheckBox>
          </InputWrapper>
        </ColWrapper>
        <ColWrapper>
          <div className="car-content-title">박스 및 상자</div>
          <InputWrapper>
            <SelectBox
              onClick={() => setShowSmallBox((prev) => !prev)}
              check={smallBox}
            >
              <Label>
                소박스
                <br />
                <span>A4박스 크기 이하</span>
              </Label>
              <SelectOptions show={showSmallBox} check={smallBox}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={smallBox}
                    onClick={() =>
                      setSmallBox(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowMediumBox((prev) => !prev)}
              check={mediumBox}
            >
              <Label>
                중박스
                <br />
                <span>라면박스 크기</span>
              </Label>
              <SelectOptions show={showMediumBox} check={mediumBox}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={mediumBox}
                    onClick={() =>
                      setMediumBox(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowBigBox((prev) => !prev)}
              check={bigBox}
            >
              <Label>
                대박스
                <br />
                <span>사과박스 크기</span>
              </Label>
              <SelectOptions show={showBigBox} check={bigBox}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={bigBox}
                    onClick={() =>
                      setBigBox(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowGiantBox((prev) => !prev)}
              check={giantBox}
            >
              <Label>특대박스</Label>
              <SelectOptions show={showGiantBox} check={giantBox}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={giantBox}
                    onClick={() =>
                      setGiantBox(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
          </InputWrapper>
        </ColWrapper>
        <ColWrapper>
          <div className="car-content-title">쇼핑백 및 봉투</div>
          <InputWrapper>
            <SelectBox
              onClick={() => setShowSmallBag((prev) => !prev)}
              check={smallBag}
            >
              <Label>쇼핑백</Label>
              <SelectOptions show={showSmallBag} check={smallBag}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={smallBag}
                    onClick={() =>
                      setSmallBag(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowBigBag((prev) => !prev)}
              check={bigBag}
            >
              <Label>대형쇼핑백</Label>
              <SelectOptions show={showBigBag} check={bigBag}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={bigBag}
                    onClick={() =>
                      setBigBag(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowSmallSack((prev) => !prev)}
              check={smallSack}
            >
              <Label>소봉투</Label>
              <SelectOptions show={showSmallSack} check={smallSack}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={smallSack}
                    onClick={() =>
                      setSmallSack(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
            <SelectBox
              onClick={() => setShowBigSack((prev) => !prev)}
              check={bigSack}
            >
              <Label>대봉투</Label>
              <SelectOptions show={showBigSack} check={bigSack}>
                {Data.NumberData.map((item) => (
                  <Option
                    key={item.id}
                    check={bigSack}
                    onClick={() =>
                      setBigSack(item.id === 0 ? '0개' : item.id + '개')
                    }
                  >
                    {item.content}
                  </Option>
                ))}
              </SelectOptions>
            </SelectBox>
          </InputWrapper>
        </ColWrapper>
      </UpperWrapper>
      <LowerWrapper>
        <LineBox>
          <WeightCheck>
            <label htmlFor="over20">합계무게 20kg 이상</label>
            <input
              type="checkbox"
              id="over20"
              name="over20Check"
              value="합계무게 20kg 이상"
            />
          </WeightCheck>
          <div className="input-row-wrapper">
            {Data.WeightData.map((item) => (
              <WeightButton
                key={item.id}
                onClick={() => setSelectWeight(item.content)}
                check={selectWeight === item.content}
              >
                {item.content}
              </WeightButton>
            ))}
          </div>
        </LineBox>
      </LowerWrapper>
    </Wrapper>
  );
};

export default MotorCycleTab;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;
const UpperWrapper = styled.div`
  display: flex;
  gap: 36px;
`;
const LowerWrapper = styled.div`
  width: 100%;
  padding-left: 11px;
  padding-right: 29px;
  height: 100%;
`;
const LineBox = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1.5px solid #c4c4c4;
  padding-top: 14px;
  padding-left: 4px;
  display: flex;
  gap: 40px;
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CheckBox = styled.div`
  width: 186px;
  height: 51px;
  border: 1px solid ${(props) => (props.check ? '#326CE7' : '#C4C4C4')};
  background: #fff;
  color: ${(props) => (props.check ? '#326CE7' : '#777')};
  font-size: 17px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  & > div {
    width: 53px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 115%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .checked {
    display: ${(props) => (props.check ? 'flex' : 'none')};
    background-color: #326ce7;
  }
  & > .unChecked {
    background: #c4c4c4;
    display: ${(props) => (props.check ? 'none' : 'flex')};
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
  color: ${(props) => (props.check !== '0개' ? '#326ce7' : '#777')};
  font-size: 17px;
  font-weight: 400;
  line-height: 100%; /* 17px */
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    width: 53px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    right: 0px;
    color: #fff;
    background: ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
`;
const Label = styled.label`
  font-size: 17px;
  font-weight: 400;
  padding-top: 2px;
  & > span {
    color: #777;
    font-size: 11px;
    font-weight: 400;
    line-height: 9px;
    letter-spacing: -0.2px;
  }
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 51px;
  left: -1px;
  width: 186px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(props) => (props.show ? '204px' : '0')};
  background-color: #fff;
  border-left: 1px solid
    ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
  border-right: 1px solid
    ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
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
  border-bottom: 1px solid
    ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};
  &:hover {
    background-color: #e7efff;
    color: #326ce7;
  }
`;
const WeightCheck = styled.div`
  display: flex;
  align-items: center;
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
const WeightButton = styled.button`
  background: ${(props) => (props.check ? '#326ce7' : '#DFDFDF')};
  color: ${(props) => (props.check ? '#fff' : '#A1A1A1')};
  width: 130px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: -0.2px;
`;
