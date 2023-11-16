export const CalAmount = (tabValue) => {
  switch (tabValue){
    case '트럭' :
      return 40000
    case '오토바이' :
      return 12000
      case '다마스' :
      return 25000
      case '라보' :
      return 30000
    default : 
      return 50000
  }
}