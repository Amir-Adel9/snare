import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cards from '~/components/core/Cards';

export default function HomeScreen() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);

  return (
    <View className='bg-black text-white  flex-1 justify-center items-start '>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
  },
});
