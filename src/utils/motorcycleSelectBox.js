import styled from 'styled-components';
import Data from '../json/motorcycle.json'

const CycleSelectBox = (props) => {
  const { title1, title2, state, setState, show, showState } = props;
  return (
    <SelectBox onClick={() => showState((prev) => !prev)} check={state}>
      <Label>
        {title1}
        <br />
        <span>{title2}</span>
      </Label>
      <SelectOptions
        className="common-select-options"
        show={show}
        check={state}
      >
        {Data.NumberData.map((item) => (
          <Option
            className="common-select-option"
            key={item.id}
            check={state}
            onClick={() => setState(item.id === 0 ? '0개' : item.id + '개')}
          >
            {item.content}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CycleSelectBox;

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
  @media screen and (max-width: 500px) {
    top: 48px;
    width: 149px;
  }
`;
const Option = styled.li`
  transition: background-color 0.2s ease-in;
  border-bottom: 1px solid
    ${(props) => (props.check !== '0개' ? '#326ce7' : '#C4C4C4')};

  @media screen and (max-width: 500px) {
    width: 149px;
  }
`;
