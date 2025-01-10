import { View, Text, ScrollView } from 'react-native';
import { APP_MODULES } from '../../app-modules';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

export default function HomeView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
      }}
    >
      <ScrollView
        className='flex px-2 pt-4 sm:w-3/4'
        showsVerticalScrollIndicator={true}
      >
        {Object.values(APP_MODULES)
          .filter((module) => module.name !== 'index')
          .map((module) => (
            <Link key={module.name} href={module.path} className='mb-4'>
              <View className='bg-white rounded-2xl p-2 gap-1 flex flex-row items-center justify-between shadow-sm'>
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
                <ChevronRight size={20} color='#9CA3AF' />
              </View>
            </Link>
          ))}
      </ScrollView>
    </View>
  );
}
