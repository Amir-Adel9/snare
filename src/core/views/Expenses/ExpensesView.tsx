import { View, Text } from 'react-native';

export default function ExpensesView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}
    >
      <Text className='bg-indigo-500 p-2 rounded'>Expenses View</Text>
    </View>
  );
}
