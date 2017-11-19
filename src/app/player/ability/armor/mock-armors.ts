import { Armor } from './armor.model';

export const ARMORS: Armor[] = [
  {
    name: 'Unarmored',
    baseAC: 10,
    hasDisadvantage: false,
    type: 'unarmored',
  },
  {
    name: 'Mage',
    baseAC: 13,
    hasDisadvantage: false,
    type: 'unarmored',
  },
  {
    name: 'Padded',
    baseAC: 11,
    hasDisadvantage: true,
    type: 'light',
  },
  {
    name: 'Leather',
    baseAC: 11,
    hasDisadvantage: false,
    type: 'light',
  },
  {
    name: 'Studded Leather',
    baseAC: 12,
    hasDisadvantage: false,
    type: 'light',
  },
  {
    name: 'Hide',
    baseAC: 12,
    hasDisadvantage: false,
    type: 'medium',
  },
  {
    name: 'Chain Shirt',
    baseAC: 13,
    hasDisadvantage: false,
    type: 'medium',
  },
  {
    name: 'Scale Mail',
    baseAC: 14,
    hasDisadvantage: true,
    type: 'medium',
  },
  {
    name: 'Breastplate',
    baseAC: 14,
    hasDisadvantage: false,
    type: 'medium',
  },
  {
    name: 'Half Plate',
    baseAC: 15,
    hasDisadvantage: true,
    type: 'medium',
  },
  {
    name: 'Ring Mail',
    baseAC: 14,
    hasDisadvantage: true,
    type: 'heavy',
  },
  {
    name: 'Chain Mail',
    baseAC: 16,
    hasDisadvantage: true,
    type: 'heavy',
  },
  {
    name: 'Splint',
    baseAC: 17,
    hasDisadvantage: true,
    type: 'heavy',
  },{
    name: 'Plate',
    baseAC: 18,
    hasDisadvantage: true,
    type: 'heavy',
  },
];
