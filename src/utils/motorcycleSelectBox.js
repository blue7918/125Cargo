import styled from 'styled-components';
import Data from '../json/motorcycle.json';

const CycleSelectBox = (props) => {
  const { title1, title2, state, setState, show, showState } = props;
  return (
    <SelectBox
      onClick={() => showState((prev) => !prev)}
      check={state}
      className="common-select-box"
    >
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
            onClick={() => setState(item.content === 0 ? 0 : item.content)}
          >
            {item.content !== 0 ? item.content + '개' : '선택해제'}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CycleSelectBox;

const SelectBox = styled.div`
  color: ${(props) => (props.check !== 0 ? '#326ce7' : '#777')};
  border: 1px solid ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
  cursor: pointer;
  &::before {
    content: '⌵';
    background: ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
  }
  @media screen and (max-width: 500px) {
    &::before {
      color: ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
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
    ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
  border-right: 1px solid
    ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
  z-index: 2;
  @media screen and (max-width: 500px) {
    top: 48px;
    width: 149px;
  }
`;
const Option = styled.li`
  transition: background-color 0.2s ease-in;
  border-bottom: 1px solid
    ${(props) => (props.check !== 0 ? '#326ce7' : '#C4C4C4')};
  @media screen and (max-width: 500px) {
    width: 149px;
  }
`;
