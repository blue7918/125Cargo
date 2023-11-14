import styled from 'styled-components';

const NoticeCancel = () => {
  return (
    <Wrapper>
      <div className="title-span">알려드립니다!</div>
      <span>
        주문 접수가 되면 바로 배차가 진행되므로 <br />
        취소를 원하실 경우
      </span>
      <span className="bold-span">1533-5824</span>
      <span>로 </span>
      <span className="bold-span">
        <br />
        취소 요청
      </span>
      <span>
        을 주셔야하며, 기사님이 배정된 이후 또는
        <br /> 픽업지로 가셨을 경우에는 취소비가 발생됩니다.
      </span>
      <div className="red-span">
        *오후10시부터 오전7시까지는 예약배차만 가능합니다.
      </div>
    </Wrapper>
  );
};

export default NoticeCancel;

const Wrapper = styled.div`
  margin-top: -14px;
  width: 380px;
  height: 189px;
  border: 1px solid #c4c4c4;
  background: rgba(255, 255, 255, 0.05);
  padding: 25px 0;
  text-align: center;
  & > span {
    line-height: 150%; /* 15px */
    letter-spacing: -0.2px;
    color: #555;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
  }
  & > .title-span {
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & > .red-span {
    color: #bc5353;
    font-size: 13px;
    font-weight: 700;
  }
  & > .bold-span {
    font-size: 14px;
    font-weight: 700;
  }
`;
