import React from "react";
import { View, Text } from "react-native";
import RNProductCarousel from "@toggled-apps/react-native-product-carousel";

export default function App() {
  const content = (
    <View>
      <Text style={{ fontWeight: "800", marginTop: 10 }}>
        CROSSBODY BAG WITH CHAIN STRAP
      </Text>
      <Text style={{ marginBottom: 20 }}>29.99 GBP</Text>
      <Text style={{ fontSize: 13, marginBottom: 10 }}>
        Crossbody-style bag in contrast colours. Contrast-coloured trims and
        topstitching on the exterior. Front pocket with metal gold chain.
        Detachable wide crossbody strap. Lined interior with zip pocket. Front
        flap with magnetic clasp closure.
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 10 }}>
        Height x Length x Width: 18 x 23.5 x 6.5 cm. / 7.0 x 9.2 x 2.5″
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "600", marginBottom: 10 }}>JOIN LIFE</Text>
      <Text style={{ fontSize: 13 }}>
        Care for fiber: at least 25% recycled polyester.
      </Text>
      <Text style={{ fontSize: 13 }}>
        This fibre is made from recycled PET plastic, like that used in water
        bottles. By transforming this waste into a new resource, we reduce the
        production of virgin raw materials and the consumption of water, energy
        and natural resources.
      </Text>
    </View>
  );
  const data = [
    "https://static.zara.net/photos///2020/I/1/1/p/6890/510/202/2/w/2216/6890510202_1_1_1.jpg?ts=1594233934903",
    "https://static.zara.net/photos///2020/V/1/1/p/6890/510/202/2/w/2216/6890510202_2_1_1.jpg?ts=1591280395123",
    "https://static.zara.net/photos///2020/V/1/1/p/6890/510/202/2/w/2216/6890510202_2_2_1.jpg?ts=1591280388787",
    "https://static.zara.net/photos///2020/V/1/1/p/6890/510/202/2/w/2216/6890510202_2_3_1.jpg?ts=1591280384545",
    "https://static.zara.net/photos///2020/V/1/1/p/6890/510/202/2/w/2216/6890510202_2_4_1.jpg?ts=1591280381999",
  ];
  return (
    <View style={{ flex: 1 }}>
      <RNProductCarousel content={content} data={data} />
    </View>
  );
}
