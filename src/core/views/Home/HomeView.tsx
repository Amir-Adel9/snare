import { View, Text, ScrollView } from 'react-native';
import { APP_MODULES } from '../../app-modules';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

export default function HomeView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000000',
        gap: 50,
      }}
    >
      <View className='mt-10 p-6 w-full flex gap-2 '>
        <Text
          style={{
            fontFamily: 'Inter_900Black',
            fontWeight: 'condensed',
            fontSize: 32,
          }}
          className=' text-indigo-500'
        >
          Welcome to{' '}
          <Text
            style={{
              fontFamily: 'SpaceMono-Regular',
              fontWeight: 'bold',
              fontSize: 40,
            }}
            className=' text-indigo-500'
          >
            Snare
          </Text>{' '}
          👋
        </Text>
        <Text
          style={{
            fontFamily: 'Inter_900Black',
            fontWeight: '400',
            fontSize: 18,
          }}
          className=' text-gray-100'
        >
          A companion you can rely on
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          maxHeight: '60%',
        }}
        className='flex px-6 pt-4 sm:w-3/4 '
      >
        {Object.values(APP_MODULES)
          .filter((module) => module.name !== 'index')
          .map((module) => (
            <Link key={module.name} href={module.path} className='mb-4'>
              <View className='bg-white rounded-2xl p-3 gap-1 flex flex-row items-center justify-between shadow-sm'>
                <View className='w-10 h-10 bg-gray-50 rounded-full items-center justify-center'>
                  {module.icon({ props: { size: 20, color: module.color } })}
                </View>
                <View className='flex-grow '>
                  <Text className='text-lg font-semibold text-gray-800'>
                    {module.title}
                  </Text>
                  <Text className='text-sm text-gray-500'>
                    {module.subtitle}
                  </Text>
                </View>
                <ChevronRight size={20} color='#6366f1' />
              </View>
            </Link>
          ))}
      </ScrollView>
    </View>
  );
}
