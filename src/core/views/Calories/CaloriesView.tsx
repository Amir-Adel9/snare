import { View, Text } from 'react-native';

export default function CaloriesView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='bg-indigo-500 p-2 rounded'>Calories View</Text>
    </View>
  );
}
