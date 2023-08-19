// import React from 'react';
// import { MotiView } from '@motify/components';

// import { View, StyleSheet } from 'react-native';

// const LoadingIndicator = ({ size }: { size: number }) => {
//   return (
//     <MotiView
//       style={{
//         width: size,
//         height: size,
//         borderRadius: size / 2,
//         borderWidth: size / 10,
//         borderColor: '#fff',
//       }}
//     />
//   );
// };

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <LoadingIndicator size={100} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
// });

// export default App;
//..........................................................................................................................


// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';

// const SIZE = 100.0;

// const App = () => {
//   const progress = useSharedValue(0);

//   const reanimatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: progress.value,
//     };
//   });

//   useEffect(() => {
//     progress.value = withTiming(1, { duration: 5000 }); // Set duration for the animation
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           { height: SIZE, width: SIZE, backgroundColor: 'blue' },
//           reanimatedStyle,
//         ]}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
