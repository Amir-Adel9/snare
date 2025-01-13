import {
  Apple,
  Component,
  Dumbbell,
  HomeIcon,
  LucideProps,
  Notebook,
  Receipt,
} from 'lucide-react-native';
import Notepad from '../app/(tabs)/notepad';
import Expenses from '../app/(tabs)/expenses';
import Home from '@/src/app/(tabs)';
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
    color: '#2563EB',
    component: Home,
  },
  workouts: {
    index: 3,
    name: 'workouts',
    path: '/workouts',
    title: 'Workouts',
    subtitle: 'Track your workouts and stay in shape',
    icon: ({ props = {} }: { props?: LucideProps }) => <Dumbbell {...props} />,
    color: '#6366f1',
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
