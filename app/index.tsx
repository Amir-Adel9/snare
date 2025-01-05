import { Link } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
} from '~/components/ui/alert-dialog';
import { Button, ButtonText } from '~/components/ui/button';
import { Heading } from '~/components/ui/heading';
import { Text } from '~/components/ui/text';
export default function HomeScreen() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);

  return (
    <View className='bg-black text-white p-5 flex-1 justify-center items-center'>
      <Text className='bg-red-500 text-white p-5'>Homie</Text>
      <Link style={styles.text} href={'/details'}>
        View details
      </Link>
      <Button
        onPress={() => setShowAlertDialog(true)}
        variant='solid'
        className='bg-primary-400 '
      >
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size='md'>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className='text-typography-950 font-semibold' size='md'>
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className='mt-3 mb-4'>
            <Text size='sm'>
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className=''>
            <Button
              variant='outline'
              action='secondary'
              onPress={handleClose}
              size='sm'
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size='sm' onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
