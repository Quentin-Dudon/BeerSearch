// const MaPileDecrans = createStackNavigator({
//   EcranA: {
//       screen: EcranAScreen
//   },
//   EcranB: {
//       screen: EcranBScreen
//   }
// });

// class EcranAScreen extends React.Component {

//   render() {
 
//     return (
//       <View>
//         <Text style={styles.blue}>toto</Text>
//         <Button
//         title={"Go vers B"}
//         color="red"
//         onPress={() => {
//           this.props.navigation.navigate("EcranB")
//         }}
//         />
//       </View>
//     );
//   }
// }
 
// class EcranBScreen extends React.Component {
 
//   render() {
 
//     return (
//       <Button
//         title={"Go vers A"}
//         style={styles.red}
//         onPress={() => {
//           this.props.navigation.goBack()
//         }}
//         />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   red:{
//     backgroundColor: 'red',
//   },
//   blue:{
//     backgroundColor: 'whitesmoke',
//   },
//   menu: {
//     flex: 1,
//   },
//   icon: {
//     width: 25, 
//     height: 25,
//   },
// });