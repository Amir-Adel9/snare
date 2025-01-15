import {
  Apple,
  Dumbbell,
  HomeIcon,
  LucideProps,
  Notebook,
  Receipt,
} from 'lucide-react-native';

import Notepad from '../app/(tabs)/notepad';
import Expenses from '../app/(tabs)/expenses';
import Home from '../app/(tabs)/index';
import Workouts from '../app/(tabs)/workouts';
import Calories from '../app/(tabs)/calories';

export const APP_MODULES = {
  notepad: {
    index: 0,
    name: 'notepad',
    path: '/notepad',
    title: 'Notepad',
    subtitle: 'Take notes and keep track of your thoughts',
    icon: ({ props = {} }: { props?: LucideProps }) => <Notebook {...props} />,
    color: '#F59E0B',
    component: Notepad,
  },
  expenses: {
    index: 1,
    name: 'expenses',
    path: '/expenses',
    title: 'Expenses',
    subtitle: 'Keep track of your spending',
    icon: ({ props = {} }: { props?: LucideProps }) => <Receipt {...props} />,
    color: '#10B981',
    component: Expenses,
  },
  home: {
    index: 2,
    name: 'index',
    path: '/',
    title: 'Home',
    subtitle: 'Welcome to Snare, your personal assistant',
    icon: ({ props = {} }: { props?: LucideProps }) => <HomeIcon {...props} />,
    color: '#6366f1',
    component: Home,
  },
  workouts: {
    index: 3,
    name: 'workouts',
    path: '/workouts',
    title: 'Workouts',
    subtitle: 'Track your workouts and stay in shape',
    icon: ({ props = {} }: { props?: LucideProps }) => <Dumbbell {...props} />,
    color: '#2563EB',
    component: Workouts,
  },
  calories: {
    index: 4,
    name: 'calories',
    path: '/calories',
    title: 'Calories',
    subtitle: 'Track your calorie intake and stay healthy',
    icon: ({ props = {} }: { props?: LucideProps }) => <Apple {...props} />,
    color: '#EF4444',
    component: Calories,
  },
} as const;

export type AppViews =
  | 'notepad'
  | 'expenses'
  | 'index'
  | 'workouts'
  | 'calories';

export type AppRoutes =
  | '/notepad'
  | '/expenses'
  | '/'
  | '/workouts'
  | '/calories';

interface BaseTheme {
  background: string;
  foreground: string;
  text: string;
  accent: string;
  border: string;
}

interface Theme extends BaseTheme {
  primary: string;
}

const baseLightTheme: BaseTheme = {
  background: '#F5F5F5',
  foreground: '#FFFFFF',
  text: '#333333',
  accent: '#03DAC6',
  border: '#E0E0E0',
};

const baseDarkTheme: BaseTheme = {
  background: '#111111',
  foreground: '#222222',
  text: '#FFFFFF',
  accent: '#03DAC6',
  border: '#333333',
};

const lightThemes: Record<AppViews, Theme> = {
  notepad: {
    ...baseLightTheme,
    primary: APP_MODULES.notepad.color,
  },
  expenses: {
    ...baseLightTheme,
    primary: APP_MODULES.expenses.color,
  },
  index: {
    ...baseLightTheme,
    primary: APP_MODULES.home.color,
  },
  workouts: {
    ...baseLightTheme,
    primary: APP_MODULES.workouts.color,
  },
  calories: {
    ...baseLightTheme,
    primary: APP_MODULES.calories.color,
  },
};

const darkThemes: Record<AppViews, Theme> = {
  notepad: {
    ...baseDarkTheme,
    primary: APP_MODULES.notepad.color,
  },
  expenses: {
    ...baseDarkTheme,
    primary: APP_MODULES.expenses.color,
  },
  index: {
    ...baseDarkTheme,
    primary: APP_MODULES.home.color,
  },
  workouts: {
    ...baseDarkTheme,
    primary: APP_MODULES.workouts.color,
  },
  calories: {
    ...baseDarkTheme,
    primary: APP_MODULES.calories.color,
  },
};

export const getTheme = ({
  screen,
  isDarkMode,
}: {
  screen: AppViews;
  isDarkMode: boolean;
}): Theme => {
  return isDarkMode ? darkThemes[screen] : lightThemes[screen];
};
