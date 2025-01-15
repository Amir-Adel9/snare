import { create } from 'zustand';
import { AppViews, getTheme } from '../app-modules';

type ThemeState = {
  currentTheme: ReturnType<typeof getTheme>;
  currentScreen: AppViews;
  isDarkMode: boolean;
  setScreen: (screen: AppViews) => void;
  toggleDarkMode: () => void;
};

if (!getTheme) {
  throw new Error('getTheme is not defined');
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentScreen: 'index',
  isDarkMode: false,
  currentTheme: getTheme({ screen: 'index', isDarkMode: false }),

  setScreen: (screen) => {
    set((state) => ({
      currentScreen: screen,
      currentTheme: getTheme({ screen, isDarkMode: state.isDarkMode }),
    }));
  },

  toggleDarkMode: () => {
    set((state) => ({
      isDarkMode: !state.isDarkMode,
      currentTheme: getTheme({
        screen: state.currentScreen,
        isDarkMode: !state.isDarkMode,
      }),
    }));
  },
}));
