import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Data from '../../json/motorcycle.json';
import CycleSelectBox from '../../utils/motorcycleSelectBox';

const MotorCycleTab = (props) => {
  const { isMobile } = props;
  const [documentCheck, setDocumentCheck] = useState(false);
  const [itemCheck, setItemCheck] = useState(false);
  const [smallBox, setSmallBox] = useState(0);
  const [mediumBox, setMediumBox] = useState(0);
  const [bigBox, setBigBox] = useState(0);
  const [giantBox, setGiantBox] = useState(0);
  const [smallBag, setSmallBag] = useState(0);
  const [bigBag, setBigBag] = useState(0);
  const [smallSack, setSmallSack] = useState(0);
  const [bigSack, setBigSack] = useState(0);
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
          {isMobile ? (
            <InputRowWrapper>
              <CheckBoxButton
                onClick={() => setDocumentCheck(!documentCheck)}
                check={documentCheck}
              >
                서류봉투
              </CheckBoxButton>
              <CheckBoxButton
                onClick={() => setItemCheck(!itemCheck)}
                check={itemCheck}
              >
                간단물건
              </CheckBoxButton>
            </InputRowWrapper>
          ) : (
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
          )}
        </ColWrapper>
        <ColWrapper>
          <div className="car-content-title">박스 및 상자</div>
          <InputWrapper>
            <CycleSelectBox
              title1="소박스"
              title2="A4박스 크기 이하"
              state={smallBox}
              setState={setSmallBox}
              show={showSmallBox}
              showState={setShowSmallBox}
            />
            <CycleSelectBox
              title1="중박스"
              title2="라면박스 크기"
              state={mediumBox}
              setState={setMediumBox}
              show={showMediumBox}
              showState={setShowMediumBox}
            />
            <CycleSelectBox
              title1="대박스"
              title2="사과박스 크기"
              state={bigBox}
              setState={setBigBox}
              show={showBigBox}
              showState={setShowBigBox}
            />
            <CycleSelectBox
              title1="특대박스"
              title2=""
              state={giantBox}
              setState={setGiantBox}
              show={showGiantBox}
              showState={setShowGiantBox}
            />
          </InputWrapper>
        </ColWrapper>
        <ColWrapper>
          <div className="car-content-title">쇼핑백 및 봉투</div>
          <InputWrapper>
            <CycleSelectBox
              title1="쇼핑백"
              title2=""
              state={smallBag}
              setState={setSmallBag}
              show={showSmallBag}
              showState={setShowSmallBag}
            />
            <CycleSelectBox
              title1="대형쇼핑백"
              title2=""
              state={bigBag}
              setState={setBigBag}
              show={showBigBag}
              showState={setShowBigBag}
            />
            <CycleSelectBox
              title1="소봉투"
              title2=""
              state={smallSack}
              setState={setSmallSack}
              show={showSmallSack}
              showState={setShowSmallSack}
            />
            <CycleSelectBox
              title1="대봉투"
              title2=""
              state={bigSack}
              setState={setBigSack}
              show={showBigSack}
              showState={setShowBigSack}
            />
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
  @media screen and (max-width: 500px) {
    gap: 25px;
    padding-left: 15px;
  }
`;
const UpperWrapper = styled.div`
  display: flex;
  gap: 36px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;
const LowerWrapper = styled.div`
  width: 100%;
  padding-left: 11px;
  padding-right: 29px;
  height: 100%;
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const LineBox = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1.5px solid #c4c4c4;
  padding-top: 14px;
  padding-left: 4px;
  display: flex;
  gap: 40px;
  @media screen and (max-width: 500px) {
    padding-top: 27px;
    padding-left: 15px;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 25px;
    border-bottom: 2px solid #c4c4c4;
    margin-left: -15px;
  }
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const InputRowWrapper = styled.div`
  display: flex;
  gap: 12px;
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
const CheckBoxButton = styled.button`
  background: ${(props) => (props.check ? '#326ce7' : '#fff')};
  color: ${(props) => (props.check ? '#fff' : '#A1A1A1')};
  border: ${(props) => (props.check ? '' : ' 1px solid #C4C4C4')};
  width: 149px;
  height: 49px;
  font-size: 15px;
  font-weight: 400;
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
  @media screen and (max-width: 500px) {
    font-weight: 400;
    width: 100px;
    height: 46px;
  }
`;
