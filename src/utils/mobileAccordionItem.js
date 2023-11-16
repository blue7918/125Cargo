import TruckTab from '../components/CarType/truck';
import MotorCycleTab from '../components/CarType/motorcycle';
import DamasTab from '../components/CarType/damas';
import truck from '../assets/images/truck_small.png';
import motor from '../assets/images/motorcycle_small.png';
import damas from '../assets/images/damas_small.png';
import rabo from '../assets/images/rabo_small.png';

const accordionItems = [
  {
    header: (
      <div className="header-inner">
        <img src={truck} alt="icon" />
        <span>트럭</span>
      </div>
    ),
    content: <TruckTab />,
  },
  {
    header: (
      <div className="header-inner">
        <img src={motor} alt="icon" />
        <span>오토바이</span>
      </div>
    ),
    content: <MotorCycleTab isMobile={true} />,
  },
  {
    header: (
      <div className="header-inner">
        <img src={damas} alt="icon" />
        <span>다마스</span>
      </div>
    ),
    content: <DamasTab />,
  },
  {
    header: (
      <div className="header-inner">
        <img src={rabo} alt="icon" />
        <span>라보</span>
      </div>
    ),
    content: <DamasTab />,
  },
];

export { accordionItems };
