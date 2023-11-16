export const handleIndexData = (tabValue) => {
  if (tabValue === '트럭') return 0;
  else if (tabValue === '오토바이') return 1;
  else if (tabValue === '다마스') return 2;
  else if (tabValue === '라보') return 3;
};

export const handleTabValue = (openIndex, setTabValue) => {
  if (openIndex === 0) return setTabValue('트럭');
  else if (openIndex === 1) return setTabValue('오토바이');
  else if (openIndex === 2) return setTabValue('다마스');
  else if (openIndex === 3) return setTabValue('라보');
};