//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getRandomNumber = (min = 1, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
};

const rollDice = () => {
return getRandomNumber(1,6);
};

export const abilityModifier = (abilityScore) => {
  if(abilityScore >= 18) {
    throw new Error('Ability scores can be at most 18');
  }
  
  return Math.floor((abilityScore - 10)/2);
};

export class Character {
  static rollAbility() {
    return '';
  }

  get strength() {
    throw new Error("Remove this statement and implement this function");
  }

  get dexterity() {
    throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
