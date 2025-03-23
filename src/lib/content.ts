import { NavGroupItems } from './types';

export const NAV_GROUP_ITEMS: NavGroupItems = [
  {
    title: 'New Home',
    items: [
      {
        type: 'link',
        text: 'Get Pre-Qualified',
        isNew: true,
      },
      {
        type: 'link',
        text: 'Check New Home Rates',
      },
    ],
  },
  {
    title: 'Refinance',
    items: [
      {
        type: 'link',
        text: 'Track Your Savings',
      },
      {
        type: 'link',
        text: 'Check Refinance Rates',
      },
    ],
  },
  {
    title: 'Get Rates',
    items: [
      {
        type: 'link',
        text: 'View Loan Packages',
      },
    ],
  },
  {
    title: 'Calculators',
    items: [
      {
        type: 'link',
        text: 'Affordability',
      },
      {
        type: 'link',
        text: 'Mortgage Repayment',
      },
      {
        type: 'link',
        text: 'Stamp Duty',
      },
      {
        type: 'link',
        text: 'Home Value',
      },
    ],
  },
  {
    title: 'Learn',
    items: [
      {
        type: 'header',
        text: 'Popular Reads',
      },
      {
        type: 'link',
        text: 'What to expect in 2024?',
      },
      {
        type: 'link',
        text: 'SIBOR to SORA transition',
      },
      {
        type: 'link',
        text: 'Refinancing vs. Repricing',
      },
      {
        type: 'divider',
      },
      {
        type: 'link',
        text: 'Read Mortgage Guides',
      },
    ],
  },
  {
    title: 'More',
    items: [
      {
        type: 'link',
        text: 'Go To Home Search',
      },
      {
        type: 'link',
        text: 'Home Services',
      },
      {
        type: 'link',
        text: 'Home Value',
        isNew: true,
      },
    ],
  },
];
