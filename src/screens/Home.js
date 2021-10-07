import React from 'react';
import {View,Text, Image, ScrollView} from 'react-native';
import { Card } from 'react-native-elements'

export default function Home({navigation}){

 return(
    <ScrollView>
 <View style={{backgroundColor:'#EFEEDD' , opacity:0.9}}>


 <Card>
        <Card.Title>Chow Chow</Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexBasis: "65%" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                resizeMode="contain"
                source={require("../img/perro1.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>China</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>Golden retriever</Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexBasis: "65%" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                resizeMode="contain"
                source={require("../img/perro2.jpeg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Escocia</Text>
            </View>
          </View>
        </Card>

        <Card>
        <Card.Title>Husky Siberiano</Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexBasis: "65%" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                resizeMode="contain"
                source={require("../img/perro3.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Rusia</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>Labrador retriever</Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexBasis: "65%" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                resizeMode="contain"
                source={require("../img/perro4.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Terranova Canadá</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>Pastor Aleman</Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexBasis: "65%" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                resizeMode="contain"
                source={require("../img/perro5.png")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Alemania</Text>
            </View>
          </View>
        </Card>
 </View>
 </ScrollView>
 );
}