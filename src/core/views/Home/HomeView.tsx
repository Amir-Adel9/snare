import { View, Text, ScrollView } from 'react-native';
import { APP_MODULES } from '../../app-modules';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';

export default function HomeView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#111111',
        gap: 170,
      }}
    >
      <View className='w-full bg-indigo-500 flex gap-2 relative '>
        <Svg
          viewBox='0 0 406 90.222'
          width='406'
          height='90.222'
          className=' '
          style={{ position: 'absolute', top: '100%', left: 0, right: 0 }}
        >
          <Path
            fill='#6366f1'
            fill-opacity='1'
            d='m0 63.156 11.278 4.511c11.278 4.511 33.833 13.533 56.389 15.028 22.556 1.607 45.111 -4.596 67.667 -9.022 22.556 -4.596 45.111 -7.415 67.667 -16.522C225.556 48.212 248.111 32.987 270.667 24.05c22.556 -9.107 45.111 -11.926 67.667 -2.989 22.556 9.107 45.111 29.971 56.389 40.6l11.278 10.517V0H0Z'
          ></Path>
        </Svg>
        <Text
          style={{
            fontFamily: 'Inter_900Black',
            fontWeight: 'bold',
            fontSize: 32,
          }}
          className=' text-gray-100 px-4 mt-4'
        >
          Snare
        </Text>
        <Text
          style={{
            fontFamily: 'Inter_900Black',
            fontWeight: 'bold',
            fontSize: 18,
          }}
          className=' text-gray-100 px-4'
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
            <Link key={module.name} href={module.path} className='mb-5'>
              <View className='border border-[#e5e5e5] bg-[#222222] rounded-xl p-3 gap-1 flex flex-row items-center justify-between shadow-sm'>
                <View className='w-10 h-10 rounded-full items-center justify-center'>
                  {module.icon({ props: { size: 20, color: module.color } })}
                </View>
                <View className='flex-grow '>
                  <Text className='text-lg font-semibold text-white'>
                    {module.title}
                  </Text>
                  <Text className='text-sm text-gray-400'>
                    {module.subtitle}
                  </Text>
                </View>
                <ChevronRight size={20} color='#d1d5db' />
              </View>
            </Link>
          ))}
      </ScrollView>
    </View>
  );
}
