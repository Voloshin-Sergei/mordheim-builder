import WargearList from './WargearList';

export interface UnitProps {
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
  id: number;
  removeUniteModel: (num: number) => void;
}

export const Unit: React.FC<UnitProps> = (props) => {
  // console.log(props.unit);
  const { unit, wargearList, id, removeUniteModel } = props;
  const { name, cost, wargear, unitSizeMin, unitSizeMax } = unit;

  const handleRemove = () => {
    removeUniteModel(id);
  };

  return (
    <>
      <div
        className="row blue-grey lighten-1 valign-wrapper"
        style={{ padding: '10px 20px', marginBottom: '0', fontSize: '1.2rem' }}>
        <span className="col s10">{name}</span>
        <span className="col s2 right-align">{cost} gold</span>
        <div className="col s1 right-align">
          <button
            onClick={handleRemove}
            className="btn-floating btn-small"
            disabled={unitSizeMin === unitSizeMax}>
            <i className="material-icons red-text">clear</i>
          </button>
        </div>
      </div>
      {wargear && <WargearList wargearList={wargearList} />}
    </>
  );
};

// TODO carry out styles to App css
