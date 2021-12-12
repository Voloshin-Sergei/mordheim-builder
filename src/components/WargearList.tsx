import { useState } from 'react';

import WargearItem from './WargearItem';

export interface WargearListProps {
  wargearList: {
    id: number;
    wargearName: string;
    equipment: { id: number; name: string; cost: number }[];
  }[];
}

export const WargearList: React.FC<WargearListProps> = (props) => {
  const { wargearList } = props;

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div
      className="row blue-grey lighten-3"
      style={{ padding: '10px 20px', marginBottom: '0', fontSize: '1.2rem' }}>
      {' '}
      // TODO carry out styles to App css
      <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={toggleClass}>
        Choes quipment:
      </div>
      {wargearList.map((wargearItem) => {
        return <WargearItem wargearItem={wargearItem} key={wargearItem.id} isActive={isActive} />;
      })}
    </div>
  );
};
