import {
  CalculatorIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { NavGroupItems } from './types';

export const NAV_GROUP_ITEMS: NavGroupItems = [
  {
    title: 'New Home',
    items: [
      {
        type: 'link',
        icon: CheckCircleIcon,
        text: 'Get Pre-Qualified',
        isNew: true,
      },
      {
        type: 'link',
        icon: HomeIcon,
        text: 'Check New Home Rates',
      },
    ],
  },
  {
    title: 'Refinance',
    items: [
      {
        type: 'link',
        icon: SparklesIcon,
        text: 'Track Your Savings',
      },
      {
        type: 'link',
        icon: CurrencyDollarIcon,
        text: 'Check Refinance Rates',
      },
    ],
  },
  {
    title: 'Get Rates',
    items: [
      {
        type: 'link',
        icon: MagnifyingGlassCircleIcon,
        text: 'View Loan Packages',
      },
    ],
  },
  {
    title: 'Calculators',
    items: [
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Affordability',
      },
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Mortgage Repayment',
      },
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Stamp Duty',
      },
    ],
  },
  {
    title: 'Learn',
    items: [
      {
        type: 'header',
        icon: LightBulbIcon,
        text: 'Popular Reads',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'What to expect in 2024?',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'SIBOR to SORA transition',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'Refinancing vs. Repricing',
      },
      {
        type: 'divider',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'Read Mortgage Guides',
      },
    ],
  },
  {
    title: 'More',
    items: [
      {
        type: 'link',
        icon: HomeIcon,
        text: 'Go To Home Search',
      },
      {
        type: 'link',
        icon: UserGroupIcon,
        text: 'Home Services',
        isNew: true,
      },
    ],
  },
];
export const NAV_GROUP_ITEMS_LENGTH = NAV_GROUP_ITEMS.length;
