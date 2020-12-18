import React from "react";
import { View, Text } from "react-native";
import RNProductCarousel from "@toggled-apps/react-native-product-carousel";

export default function App() {
  const content = (
    <View>
      <Text style={{ fontWeight: "800" }}>
        SOFT MINI CROSSBODY BAG WITH KISS LOCK
      </Text>
      <Text style={{ marginBottom: 20 }}>29.99£</Text>
      <Text style={{ fontSize: 13, marginBottom: 10 }}>
        Mini crossbody bag available in various colours. Featuring two
        compartments. Handles and detachable crossbody shoulder strap. Lined
        interior. Clasp with two metal pieces.
      </Text>
      <Text style={{ fontSize: 13 }}>
        Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7″
      </Text>
    </View>
  );
  const data = [
    "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
    "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
    "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
    "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
    "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
  ];
  return (
    <View style={{ flex: 1 }}>
      <RNProductCarousel
        content={content}
        data={data}
      />
    </View>
  );
}
