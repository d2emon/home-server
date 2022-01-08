interface Feat {
  name: string;
  description: string;
}

export interface Monster {
  name: string;
  favourite: boolean;

  cr: string;
  monsterType: string;
  alignment: string;

  armorClass: string;
  hitPoints: string;
  speed: string;

  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

  savingThrows?: string;
  damageImmunities?: string;
  skills: string;
  senses: string;
  languages: string;
  challenge: string;

  feats: Feat[];

  actions: Feat[];

  legendaryActions?: Feat[];

  lore?: string;
}

const monsters: Monster[] = [
  {
    name: 'Aboleth',
    favourite: false,

    cr: '10',
    monsterType: 'Large abberation',
    alignment: 'lawful evil',

    armorClass: '17 (natural armor)',
    hitPoints: '135 (18d10 + 36)',
    speed: '10ft., swim 40ft.',

    str: 21,
    dex: 9,
    con: 15,
    int: 18,
    wis: 15,
    cha: 18,

    savingThrows: 'Con +6 Int +8 Wis +6',
    skills: 'History +12, Perception +10',
    senses: 'darkvision 120ft., passive Perception 20',
    languages: 'Deep Speech, telepathy 120ft.',
    challenge: '10 (5 900 XP)',

    feats: [
      {
        name: 'Amphibious',
        description: 'Lorem ipsum',
      },
      {
        name: 'Mucous Cloud',
        description: 'Lorem ipsum',
      },
      {
        name: 'Probing Telepathy',
        description: 'Lorem ipsum',
      },
    ],

    actions: [
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Tentacle',
        description: 'Lorem ipsum',
      },
      {
        name: 'Tail',
        description: 'Lorem ipsum',
      },
      {
        name: 'Enslave (3/Day)',
        description: 'Lorem ipsum',
      },
    ],

    legendaryActions: [
      {
        name: 'Detect',
        description: 'Lorem ipsum',
      },
      {
        name: 'Tail Swipe',
        description: 'Lorem ipsum',
      },
      {
        name: 'Psychic Drain (Costs 2 actions)',
        description: 'Lorem ipsum',
      },
    ],
  },

  {
    name: 'Acolythe',
    favourite: false,

    cr: '10',
    monsterType: 'Medium humanoid (any race)',
    alignment: 'any alignment',

    armorClass: '10',
    hitPoints: '9 (2d8)',
    speed: '30ft.',

    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 14,
    cha: 11,

    skills: 'Medicine +4, Religion +2',
    senses: 'passive Perception 12',
    languages: 'any one language (usually Common)',
    challenge: '1/4 (50 XP)',

    feats: [
      {
        name: 'Spellcasting',
        description: 'Lorem ipsum',
      },
    ],

    actions: [
      {
        name: 'Club',
        description: 'Lorem ipsum',
      },
    ],
  },

  {
    name: 'Adult Black Dragon',
    favourite: false,

    cr: '14',
    monsterType: 'Huge dragon',
    alignment: 'chaotic evil',

    armorClass: '19 (natural armor)',
    hitPoints: '195 (17d12 + 85)',
    speed: '40ft., fly 80ft., swim 40ft.',

    str: 23,
    dex: 14,
    con: 21,
    int: 14,
    wis: 13,
    cha: 17,

    savingThrows: 'Dex +7 Con +10 Wis +6 Cha +8',
    skills: 'Perception +11, Stealth +7',
    damageImmunities: 'acid',
    senses: 'blindsight 60ft., darkvision 120ft., passive Perception 21',
    languages: 'Common, Draconic',
    challenge: '14 (11 500 XP)',

    feats: [
      {
        name: 'Amphibious',
        description: 'Lorem ipsum',
      },
      {
        name: 'Legendary Resistance (3/Day)',
        description: 'Lorem ipsum',
      },
    ],

    actions: [
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
      {
        name: 'Multiattack',
        description: 'Lorem ipsum',
      },
    ],

    legendaryActions: [
      {
        name: 'Detect',
        description: 'Lorem ipsum',
      },
      {
        name: 'Tail Swipe',
        description: 'Lorem ipsum',
      },
      {
        name: 'Psychic Drain (Costs 2 actions)',
        description: 'Lorem ipsum',
      },
    ],
  },
];

export default monsters;
