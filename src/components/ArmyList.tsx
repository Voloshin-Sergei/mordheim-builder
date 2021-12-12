import { useState } from 'react';
import { ArmyItem } from './ArmyItem';

export interface ArmyListProps {
  warband: {
    warbandName: string;
    versionGrade: string;
    warbandList: {
      id: number;
      name: string;
      cost: number;
      unitSizeMin: number;
      unitSizeMax: number | null;
      wargear: boolean;
    }[];
    wargearList: {
      id: number;
      wargearName: string;
      equipment: { id: number; name: string; cost: number }[];
    }[];
  };
}

const maxTotalCost = 500;

export const ArmyList: React.FC<ArmyListProps> = ({ warband }) => {
  const { warbandName, versionGrade, warbandList, wargearList } = warband;
  const [warbandTotalCost, setWarbandTotalCost] = useState(0);

  const getWarbandTotalCost = (num: number): void => {
    // console.log(num);
    setWarbandTotalCost(warbandTotalCost + num);
  };

  return (
    <div>
      <div className="row blue-grey darken-2" style={{ padding: '20px' }}>
        <span className="flow-text col s8">Warband list: {warbandName}</span>
        <div className="flow-text col s4 right-align">
          <span className="darken-4 ">Total cost: </span>
          <span>{warbandTotalCost} gold</span>
        </div>
        <span className="flow-text col s12">Grade: {versionGrade}</span>
      </div>
      {warbandList.map((unit) => {
        return (
          <ArmyItem
            key={unit.id}
            unit={unit}
            wargearList={wargearList}
            getWarbandTotalCost={getWarbandTotalCost}
          />
        );
      })}
    </div>
  );
};
