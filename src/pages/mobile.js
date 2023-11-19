import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { handleIndexData, handleTabValue } from '../utils/mobileHook';
import TruckTab from '../components/CarType/truck';
import { accordionItems } from '../utils/mobileAccordionItem';
import arrow from '../assets/images/arrow.png';
import prevArrow from '../assets/images/prevArrow.png';
import nextArrow from '../assets/images/nextArrow.png';

const MobilePage = (props) => {
  const { tabValue, setTabValue, truckWeight, setTruckWeight } = props;
  const [checkValue, setCheckValue] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setOpenIndex(handleIndexData(tabValue));
  }, [tabValue]);

  const checkOnlyOne = (id) => {
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    id.target.checked = true;
    setCheckValue(id.target.defaultValue);
  };

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    handleTabValue(index, setTabValue);
  };

  return (
    <Wrapper>
      <NavWrapper>
        <div>1단계</div>
        <div className="color">2단계</div>
        <div>3단계</div>
      </NavWrapper>
      <ContentWrapper>
        <div>
          <div className="title-text">배송타입</div>
          <OrderTypeWrapper>
            <div className="type-button-wrapper">
              <input
                type="checkbox"
                id="oneWay2"
                name="checkWrap"
                value="편도"
                onChange={(e) => checkOnlyOne(e)}
                defaultChecked="true"
              />
              <label htmlFor="oneWay2">편도</label>
              <input
                type="checkbox"
                id="round2"
                name="checkWrap"
                value="왕복"
                onChange={(e) => checkOnlyOne(e)}
              />
              <label htmlFor="round2">왕복</label>
              <input
                type="checkbox"
                id="linked2"
                name="checkWrap"
                value="연계배송"
                onChange={(e) => checkOnlyOne(e)}
                disabled={true}
              />
              <label htmlFor="linked2">연계배송</label>
            </div>
          </OrderTypeWrapper>
        </div>
        <div className="title-text">차량종류 및 배송품</div>
        <AccordionWrapper>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                check={openIndex === index}
              >
                <div className="header-inner">
                  <img src={item.imgUrl} alt="icon" />
                  <span>{item.header}</span>
                </div>
                <ArrowIcon
                  check={openIndex === index}
                  style={{
                    transform:
                      openIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                  }}
                >
                  <img src={arrow} alt="icon"></img>
                </ArrowIcon>
              </AccordionHeader>
              <AccordionContent check={openIndex === index}>
                {item.header === '트럭' ? (
                  <TruckTab
                    truckWeight={truckWeight}
                    setTruckWeight={setTruckWeight}
                  />
                ) : (
                  item.content
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionWrapper>
        <div className="title-text">배송메모</div>
        <textarea className="location-memo"></textarea>
      </ContentWrapper>
      <BottomButton>
        <div>
          <img src={prevArrow} alt="icon" />
          <span>이전</span>
        </div>
        <div className="line" />
        <div className="next">
          <span>다음</span>
          <img src={nextArrow} alt="icon" />
        </div>
      </BottomButton>
    </Wrapper>
  );
};

export default MobilePage;

const Wrapper = styled.div`
  min-width: 360px;
  width: 100%;
`;
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  margin-bottom: 30px;
  & > div {
    flex-grow: 1;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .color {
    background: #4565a8;
  }
`;
const ContentWrapper = styled.div`
  width: 360px;
  margin: 0 auto;
`;
const OrderTypeWrapper = styled.div`
  margin-bottom: 25px;
`;
const BottomButton = styled.div`
  width: 100%;
  height: 67px;
  margin-top: 10px;
  background: #326ce7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  & > div {
    display: flex;
    gap: 8px;
  }
  & > .prev {
  }
  & > .next {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 400;
  }
  & > .line {
    width: 1.5px;
    height: 20.5px;
    background-color: #fff;
    margin: 0 13px;
  }
`;
// 아코디언
const AccordionWrapper = styled.div`
  border-top: 1px solid #c4c4c4;
  width: fit-content;
  margin-bottom: 25px;
`;

const AccordionItem = styled.div`
  margin-bottom: 5px;
`;

const AccordionHeader = styled.div`
  width: 340px;
  height: 55px;
  border-bottom: 1px solid #c4c4c4;
  background: ${(props) => (props.check ? '#326ce7' : '#fff')};
  margin-bottom: 5px;
  padding: 11px 0;
  padding-right: 24px;
  padding-left: 4.5px;
  cursor: pointer;
  color: ${(props) => (props.check ? '#fff' : '#141414')};
  font-size: 17px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s ease;

  &:hover {
    background-color: #326ce7;
  }
`;
const HeaderInner = styled.div`
  display: flex;
  gap: 18.42px;
  align-items: center;
`;

const ArrowIcon = styled.div`
  transition: transform 0.5s ease;
  filter: ${(props) =>
    props.check ? '' : 'opacity(0.5) drop-shadow(0 0 0 #141414)'};
`;

const AccordionContent = styled.div`
  width: 340px;
  max-height: ${(props) => (props.check ? 'fit-content' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
