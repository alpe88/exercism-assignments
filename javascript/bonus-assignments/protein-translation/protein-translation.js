//
// This module is meant to return an array of proteins given a string of RNA codons. as a solution to a bonus excercise.
//

const InvalidCodonError = 'Invalid codon';

const codons = {
  AUG:'AUG',
  UUU:'UUU',
  UUC:'UUC',
  UUA:'UUA', UUG:'UUG',
  UCU:'UCU', UCC:'UCC', UCA:'UCA', UCG:'UCG',
  UAU:'UAU', UAC:'UAC',
  UGU:'UGU', UGC:'UGC',
  UGG:'UGG',
  UAA:'UAA', UAG:'UAG', UGA:'UGA'
};

const proteins = {
  Methionine:'Methionine',
  Phenylalanine:'Phenylalanine',
  Leucine:'Leucine',
  Serine:'Serine',
  Tyrosine:'Tyrosine',
  Cysteine:'Cysteine',
  Tryptophan:'Tryptophan',
  STOP:'STOP'
};

const rnaProteinMap = {
  [codons.AUG]: proteins.Methionine,
  [codons.UUU]: proteins.Phenylalanine,
  [codons.UUC]: proteins.Phenylalanine,
  [codons.UUA]: proteins.Leucine,
  [codons.UUG]: proteins.Leucine,
  [codons.UCU]: proteins.Serine,
  [codons.UCC]: proteins.Serine,
  [codons.UCA]: proteins.Serine,
  [codons.UCG]: proteins.Serine,
  [codons.UAU]: proteins.Tyrosine,
  [codons.UAC]: proteins.Tyrosine,
  [codons.UGU]: proteins.Cysteine,
  [codons.UGC]: proteins.Cysteine,
  [codons.UGG]: proteins.Tryptophan,
  [codons.UAA]: proteins.STOP,
  [codons.UAG]: proteins.STOP,
  [codons.UGA]: proteins.STOP
};

const isInvalidCodon = (codon) => {
  return !Reflect.has(rnaProteinMap, codon);
};

const isStopCodon = (codon) => {
  return rnaProteinMap[codon] === proteins.STOP;
};

const readCodonSequence = (codonSequence) => {
  const codons = codonSequence.match(/.{1,3}/g);
  if(codons === null || codons === undefined) {
    return [];
  }

  let proteins = [];
  for(const codon of codons) {
    if(isStopCodon(codon)) {
      break;
    }

    if(isInvalidCodon(codon)) {
      throw new Error(InvalidCodonError);
    }

    const protein = rnaProteinMap[codon];
    proteins.push(protein);
  }

  return proteins;
};

export const translate = (codonSequence = "") => {
  return readCodonSequence(codonSequence);
};
