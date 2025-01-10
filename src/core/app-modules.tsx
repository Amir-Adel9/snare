import {
  Apple,
  Dumbbell,
  Home,
  LucideProps,
  Notebook,
  Receipt,
} from 'lucide-react-native';

export const APP_MODULES = {
  notepad: {
    name: 'notepad',
    icon: ({ props }: { props: LucideProps }) => <Notebook {...props} />,
    color: '#F59E0B',
  },
  expenses: {
    name: 'expenses',
    icon: ({ props }: { props: LucideProps }) => <Receipt {...props} />,
    color: '#10B981',
  },
  home: {
    name: 'index',
    icon: ({ props }: { props: LucideProps }) => <Home {...props} />,
    color: '#2563EB',
  },
  workouts: {
    name: 'workouts',
    icon: ({ props }: { props: LucideProps }) => <Dumbbell {...props} />,
    color: '#4F46E5',
  },
  calories: {
    name: 'calories',
    icon: ({ props }: { props: LucideProps }) => <Apple {...props} />,
    color: '#EF4444',
  },
} as const;
