import DaumPostcode from 'react-daum-postcode';

const PostCode = (props) => {
  const {addressInfo, setAddressInfo, setVisible} =props;
  
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddressInfo({ ...addressInfo, address: fullAddress });
    setVisible(0);
  };

  return (
    <>
      <div className='common-modal-back'>
        <div className='postcode-addressbox'>
          <button className='postcode-close-button' title="닫기" onClick={() => setVisible(false)}>
            닫기
          </button>
          <DaumPostcode onComplete={handleComplete} height={700} />
        </div>
      </div>
    </>
  );
};

export default PostCode;
