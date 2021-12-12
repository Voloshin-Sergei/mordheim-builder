export interface WargearItemProps {
  isActive: boolean;
  wargearItem: {
    id: number;
    wargearName: string;
    equipment: { id: number; name: string; cost: number }[];
  };
}

export const WargearItem: React.FC<WargearItemProps> = (props) => {
  const { isActive, wargearItem } = props;
  const { wargearName, equipment } = wargearItem;
  return (
    <div className={isActive ? 'hide' : ''}>
      <div style={{ marginBottom: '10px' }}>{wargearName}</div>
      <form action="#" style={{ marginBottom: '10px' }}>
        {equipment.map((equipment) => {
          return (
            <p style={{ margin: '0', fontSize: '1.2rem' }} key={equipment.id}>
              <label>
                <input type="checkbox" className="filled-in" />
                <span className="white-text" style={{ marginRight: '10px', fontSize: '1.2rem' }}>
                  {equipment.name}
                </span>
                <span className="white-text">{equipment.cost} gold</span>
              </label>
            </p>
          );
        })}
      </form>
    </div>
  );
};
