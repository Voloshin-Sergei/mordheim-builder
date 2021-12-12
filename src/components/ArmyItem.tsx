import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import { Unit } from './Unit';

export interface ArmyItemProps {
  unit: {
    id: number;
    name: string;
    cost: number;
    unitSizeMin: number;
    unitSizeMax: number | null;
    wargear: boolean;
  };
  wargearList: {
    id: number;
    wargearName: string;
    equipment: { id: number; name: string; cost: number }[];
  }[];
  getWarbandTotalCost: (num: number) => void;
}

interface Unit {
  detach: string;
  id: number;
}

export const ArmyItem: React.FC<ArmyItemProps> = (props) => {
  const { unit, wargearList, getWarbandTotalCost } = props;
  const { unitSizeMax, unitSizeMin, name, cost } = unit;

  const [detach, setDetach] = useState<Unit | any>([]); // TODO change this types!
  const [totalCost, setTotalCost] = useState(cost);

  useEffect(() => {
    if (unitSizeMax === unitSizeMin) {
      setDetach([...detach, uniqid()]);
      getWarbandTotalCost(cost);
    }
  }, [cost]);

  const totalCostUnit = (num: number): number | void => {
    if (num === 0) {
      setTotalCost(cost);

      return;
    }
    setTotalCost(num * cost);
  };

  const addUnitModel = () => {
    setDetach([...detach, uniqid()]);
    totalCostUnit(detach.length + 1);
    getWarbandTotalCost(cost);
  };

  const removeUniteModel = (currentId: number) => {
    let currentDetach = detach.filter((id: number) => id !== currentId);
    setDetach(currentDetach);
    totalCostUnit(currentDetach.length);
    getWarbandTotalCost(-cost);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      {' '}
      // TODO carry out styles to App css
      <div
        className="row blue-grey valign-wrapper"
        style={{ padding: '20px', marginBottom: '0', fontSize: '1.5rem' }}>
        <span className="col s9">{name}</span>
        <span className="col s2 right-align">{totalCost} gold</span>
        <div className="col s1 right-align">
          <button
            className="btn-floating btn-small"
            disabled={detach.length === unitSizeMax}
            onClick={addUnitModel}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
      {detach.map((id: number) => (
        <Unit
          key={id}
          wargearList={wargearList}
          unit={unit}
          id={id}
          removeUniteModel={removeUniteModel}
        />
      ))}
    </div>
  );
};
