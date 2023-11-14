import styled from 'styled-components';

const Location = (props) => {
  return (
    <Wrapper>
      <div className="title-text">{props.title}</div>
      <div className="input-col-wrapper">
        <div className="input-row-wrapper">
          <input  placeholder="주소검색*" className="long-input"></input>
        </div>
        <div className="input-row-wrapper">
          <input placeholder="상세주소입력" className="short-input"></input>
          <input placeholder="상호명" className="short-input"></input>
        </div>
        <div className="input-row-wrapper">
          <input placeholder="연락처*" className="short-input"></input>
          <input placeholder="담당자명" className="short-input"></input>
        </div>
      </div>
    </Wrapper>
  );
};

export default Location;

const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
`
