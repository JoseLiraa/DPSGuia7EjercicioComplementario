import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Contact() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#D0D1E4", opacity: 0.9 }}>

        <Card>
        <Card.Title>Bengala</Card.Title>
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
                source={require("../img/gato1.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Especie:</Text>
              <Text>Bengalensis</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>Persa</Card.Title>
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
                source={require("../img/gato2.jpeg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Irán</Text>
            </View>
          </View>
        </Card>

        <Card>
        <Card.Title>Maine Coon</Card.Title>
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
                source={require("../img/gato3.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Maine, Estados Unidos</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>British Shorthair</Card.Title>
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
                source={require("../img/gato4.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Reino Unido</Text>
            </View>
          </View>
        </Card>



        <Card>
        <Card.Title>Bombay</Card.Title>
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
                source={require("../img/gato5.jpg")}
              />
            </View>
            <View style={{ flexBasis: "35%",  marginTop: 25 }}>
              <Text style={{ fontWeight: "bold", fontSize:15 }}>Origen:</Text>
              <Text>Reino Unido</Text>
            </View>
          </View>
        </Card>

      </View>
    </ScrollView>
  );
}
