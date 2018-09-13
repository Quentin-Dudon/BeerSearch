import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, FlatList, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const API_KEY = "5361a2d990b9675151ba0b3c495dc3ca";

export default class LocalBar extends Component {
  constructor(){
    super();
    this.state = {
      city: "",
      data: [],
      image: "",
      region: {},
      markers: []
    }
  }

  componentWillMount() {
    this.getLocalBars();
  }

  render() {
    const list = this.state.data.length == 0 ? <Text style={styles.item}>No results for your search...</Text> : <FlatList
      data={this.state.data}
      renderItem={this.renderItem.bind(this)}
    />

    return (
      <ScrollView>
        <Text style={styles.title}>Bar near you</Text>
        <Text style={styles.subTitle}>Your location: { this.state.city }</Text>
        {/* { this.renderGoogleMap() } */}
        { list }
      </ScrollView>
    );
  }

  async getLocalBars() {
    let currentUserPosition = "new york";
    let url = 'http://beermapping.com/webservice/locquery/' + API_KEY + '/' + currentUserPosition + '&s=json';

    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      let googleMapUrl;
      let lat;
      let lon;
      let imageUrl;

      for (let i = 0; i < responseJson.length; i++) {
        imageUrl = 'http://beermapping.com/webservice/locimage/' + API_KEY + '/' + responseJson[i]["id"] + '&s=json';
        // googleMapUrl = 'http://beermapping.com/webservice/locmap/' + API_KEY + '/' + responseJson[i]["id"] + '&s=json';
        // let responseGoogleMapUrl = await fetch(googleMapUrl);
        // let responseJsonGoogleMapUrl = await responseGoogleMapUrl.json();

        // lat = responseJsonGoogleMapUrl[i]["lat"];
        // lon = responseJsonGoogleMapUrl[i]["lng"];

        // let points = { latitude: lat, longitude: lon };
        // console.warn(points);
      }

      this.setState({
        city: currentUserPosition,
        data: responseJson,
        image: imageUrl,
      });
    } catch (error) {
        alert("L'erreur suivante est survenue :\n" + error);
    }
  }

  renderGoogleMap() {
    return <MapView
      region={this.state.region}
      //onRegionChange={this.onRegionChange}
    >
      {this.state.markers.map(marker => (
        <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>;
  }

  renderItem(item) {
    return render  = [
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.item.name}</Text>
        <Text style={styles.itemText}>Status: {item.item.status}</Text>
        <Text style={styles.itemText}>Location: {item.item.street} - {item.item.city} - {item.item.country}</Text>
        <View style={styles.itemRating}>
          <Text style={styles.itemRatingTitle}>Rating</Text>
          <Text style={styles.itemRatingNumber}>{Math.floor(item.item.overall)}</Text>
        </View>
      </View>
    ];
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  item: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor:'#2EC4B6',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
    marginBottom: 10,
  },
  itemText: {
    color: "#fff",
  },
  itemRating: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor:'#fff',
  },
  itemRatingTitle: {
    fontSize: 12,
    color: "#fff",
  },
  itemRatingNumber: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  }
});