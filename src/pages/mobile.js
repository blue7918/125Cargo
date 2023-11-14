import { useState } from 'react';
import styled from 'styled-components';

const MobilePage = () => {
  const [checkValue, setCheckValue] = useState('');

  const checkOnlyOne = (id) => {
    let checkPick = document.getElementsByName('checkWrap');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    id.target.checked = true;
    setCheckValue(id.target.defaultValue);
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
      </ContentWrapper>
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
