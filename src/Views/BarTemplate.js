import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import MapView from 'react-native-maps'; 
// import NavToBarTemplate from './Home'; 

export default class BarTemplate extends Component {

    // constructor(){
    //     super();
    
    //     this.state : variable de classe
    //     this.state = {
    //     data:[]
    //     };
    // }

    // getTemplateBar(item) {
    //     return render  = [
    //         <View style={styles.item}>
    //           <Text style={styles.itemTitle}>{item.item.name}</Text>
    //           <Text style={styles.itemText}>Status: {item.item.status}</Text>
    //           <Text style={styles.itemText}>Location: {item.item.street} - {item.item.city} - {item.item.country}</Text>
    //           <View style={styles.itemRating}>
    //             <Text style={styles.itemRatingTitle}>Rating</Text>
    //             <Text style={styles.itemRatingNumber}>{Math.floor(item.item.overall)}</Text>
    //           </View>
    //         </View>
    //     ];
    // }

    render() {
        return(
            <View style={{flex: 1}}>
                 <Button
                    title={"Go back"}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <Text style={styles.textFirst}>Bar Template</Text>               
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    textFirst: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 300,
    },
  });