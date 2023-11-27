export const handleAddPrice = ({ tabValue, truckWeight }) => {
  switch (tabValue) {
    case '트럭':
      switch (truckWeight) {
        case '1':
          return 3;
        case '1.4':
          return 4;
        case '2.5':
          return 5;
        case '3.5':
          return 6;
        case '5':
          return 7;
        case '11':
          return 8;
        case '25':
          return 9;
        default:
          return 3;
      }
    case '오토바이':
      return 0;
    case '다마스':
      return 1;
    case '라보':
      return 2;
    default:
      return 0;
  }
};
