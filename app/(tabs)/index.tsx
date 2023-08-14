import { Image, StyleSheet, Text, SafeAreaView, FlatList, Pressable } from 'react-native';

import { Link, Stack} from 'expo-router';
import Animated from 'react-native-reanimated';
import portraits from '../data/portraits';




export default function TabOneScreen() {
  <Stack.Screen name='index' options={{headerShown: false, animation: 'slide_from_bottom'}}/>
  const renderItem = ({item}) => {
    return (
      <Link href={`/(tabs)/${item.id}`} asChild>
        <Pressable style={styles.item}>
          <Animated.Image sharedTransitionTag={`image-${item.id}`} style={styles.image} source={item.image}/>
          <Animated.Text sharedTransitionTag={`title-${item.id}`} style={styles.title}>{item.name}</Animated.Text>
        </Pressable>
      </Link>
    )
  }
  return (
    <SafeAreaView>
      <FlatList
      data={portraits}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
   
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 16,
   backgroundColor: '#171717'
  },
  item: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    elevation: 4,
    overflow: 'hidden',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    //textAlign: 'center',
   marginVertical: 8,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    objectFit: 'fill',
    borderRadius: 16,
  }
});


