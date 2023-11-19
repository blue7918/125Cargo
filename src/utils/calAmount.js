export const CalAmount = ({ tabValue, costWeight }) => {

  switch (tabValue) {
    case '트럭':
      switch (costWeight) {
        case 1:
          return 40000;
        case 1.4:
          return 50000;
        case 2.5:
          return 80000;
        case 3.5:
          return 85000;
        case 5:
          return 100000;
        case 11:
          return 150000;
        case 25:
          return 180000;
        default:
          return 40000;
      }
    case '오토바이':
      return 12000;
    case '다마스':
      return 25000;
    case '라보':
      return 30000;
    default:
      return 50000;
  }
};
