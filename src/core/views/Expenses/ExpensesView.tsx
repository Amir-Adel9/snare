import { View, Text } from 'react-native';
import { useThemeStore } from '../../theme/theme.store';

export default function ExpensesView() {
  const { currentTheme } = useThemeStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: currentTheme.background,
      }}
    >
      <Text
        className='p-2 rounded'
        style={{
          backgroundColor: currentTheme.primary,
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Expenses View
      </Text>
    </View>
  );
}
