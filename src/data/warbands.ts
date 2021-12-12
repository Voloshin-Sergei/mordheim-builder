const unded_1a = {
  warbandName: 'Unded',
  versionGrade: '1a',
  warbandList: [
    {
      id: 1,
      name: 'Vampire',
      cost: 110,
      unitSizeMin: 1,
      unitSizeMax: 1,
      wargear: true,
    },
    {
      id: 2,
      name: 'Necromancer',
      cost: 35,
      unitSizeMin: 0,
      unitSizeMax: 1,
      wargear: true,
    },
    {
      id: 3,
      name: 'Dregs',
      cost: 20,
      unitSizeMin: 0,
      unitSizeMax: 3,
      wargear: true,
    },
    {
      id: 4,
      name: 'Zombies',
      cost: 15,
      unitSizeMin: 0,
      unitSizeMax: null,
      wargear: false,
    },
    {
      id: 5,
      name: 'Ghouls',
      cost: 40,
      unitSizeMin: 0,
      unitSizeMax: null,
      wargear: false,
    },
    {
      id: 6,
      name: 'Dire Wolves',
      cost: 50,
      unitSizeMin: 0,
      unitSizeMax: 5,
      wargear: false,
    },
  ],
  wargearList: [
    {
      id: 1,
      wargearName: 'Hand to hand',
      equipment: [
        { id: 1, name: 'Dagger', cost: 0 },
        { id: 2, name: 'Dagger', cost: 2 },
        { id: 3, name: 'Mace', cost: 3 },
        { id: 4, name: 'Hammer', cost: 3 },
        { id: 5, name: 'Axe', cost: 5 },
        { id: 6, name: 'Sword', cost: 10 },
        { id: 7, name: 'Double-handed weapon', cost: 15 },
        { id: 8, name: 'Spear', cost: 10 },
        { id: 9, name: 'Halberd', cost: 10 },
      ],
    },
    {
      id: 2,
      wargearName: 'Missile Weapons',
      equipment: [
        { id: 1, name: 'Bow', cost: 10 },
        { id: 2, name: 'Short bow', cost: 5 },
      ],
    },
    {
      id: 3,
      wargearName: 'Armour',
      equipment: [
        { id: 1, name: 'Light armour', cost: 20 },
        { id: 2, name: 'Heavy armour', cost: 50 },
        { id: 3, name: 'Shield', cost: 5 },
        { id: 4, name: 'Helmet', cost: 10 },
      ],
    },
  ],
};

export default unded_1a;
