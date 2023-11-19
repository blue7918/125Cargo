import TruckTab from '../components/CarType/truck';
import MotorCycleTab from '../components/CarType/motorcycle';
import DamasTab from '../components/CarType/damas';
import truck from '../assets/images/truck_small.png';
import motor from '../assets/images/motorcycle_small.png';
import damas from '../assets/images/damas_small.png';
import rabo from '../assets/images/rabo_small.png';

const accordionItems = [
  {
    header: '트럭',
    imgUrl: truck,
    content: <TruckTab />,
  },
  {
    header: '오토바이',
    imgUrl: motor,
    content: <MotorCycleTab isMobile={true} />,
  },
  {
    header: '다마스',
    imgUrl: damas,
    content: <DamasTab />,
  },
  {
    header: '라보',
    imgUrl: rabo,
    content: <DamasTab />,
  },
];

export { accordionItems };
