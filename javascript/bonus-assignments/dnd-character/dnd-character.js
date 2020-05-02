//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DICE = 4;
const DICE_SIDES = [1, 6];
const LOWEST_ABILITY_MODIFIER = 3;
const HIGHEST_ABILITY_MODIFIER = 18;

const removeLowest = (array) => {
  let lowestRoll = Math.min(...array);
  return array.filter(element => element != lowestRoll);
};

const addRolls = (array) => {
  return array.reduce((acc, roll) => acc + roll);
};

const getRandomNumber = (min = 1, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
};

const rollDice = (times) => {
  const diceRollResult = [...Array(times)].map((_, i) => getRandomNumber(DICE_SIDES[0], DICE_SIDES[6]));
  return diceRollResult;
};

const calculateAbilityScore = (abilityScore) => {
  return (abilityScore - 10)/2;
};

export const abilityModifier = (abilityScore) => {
  if(abilityScore < LOWEST_ABILITY_MODIFIER) {
    throw new Error(`Ability scores must be at least ${LOWEST_ABILITY_MODIFIER}`);
  }

  if(abilityScore > HIGHEST_ABILITY_MODIFIER) {
    throw new Error(`Ability scores can be at most ${HIGHEST_ABILITY_MODIFIER}`);
  }
  
  return Math.floor(calculateAbilityScore(abilityScore));
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    let diceRolls = rollDice(DICE);
    const goodRolls = removeLowest(diceRolls);
    const abilityTotal = addRolls(goodRolls);
    return abilityTotal;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
