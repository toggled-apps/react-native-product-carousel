import * as React from "react";
import { Image, Animated, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const ITEM_HEIGHT = height * 0.75;

interface Props {
  content: any;
  data: string[];
  dotColor: string;
  dotSize: number;
  dotSpacing: number;
  indicatorColor: string;
  itemHeight: number;
}

const ProductCarousel = ({
  content,
  data,
  dotColor = "#333",
  dotSize = 6,
  dotSpacing = 6,
  indicatorColor = "#333",
}: Props) => {

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const translateY = Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
    inputRange: [0, 1],
    outputRange: [0, dotSize + dotSpacing],
  });

  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(
    () => [height - ITEM_HEIGHT, height / 2, height],
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width, height: ITEM_HEIGHT }}>
        <Animated.FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: true,
            }
          )}
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={{ width, height: ITEM_HEIGHT, resizeMode: "cover" }}
              />
            );
          }}
        />
        <View
          style={{ position: "absolute", bottom: ITEM_HEIGHT / 3, left: 20 }}
        >
          {data.map((_, i) => {
            return (
              <View
                key={i}
                style={{
                  height: dotSize,
                  width: dotSize,
                  borderRadius: dotSize,
                  backgroundColor: dotColor,
                  marginBottom: dotSize,
                }}
              />
            );
          })}
          <Animated.View
            style={{
              position: "absolute",
              top: -dotSize / 2,
              left: -dotSize / 2,
              height: dotSize * 2,
              width: dotSize * 2,
              borderWidth: 1,
              borderColor: indicatorColor,
              borderRadius: dotSize,
              transform: [
                {
                  translateY,
                },
              ],
            }}
          />
        </View>
      </View>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <BottomSheetScrollView
          contentContainerStyle={{ padding: 20 }}
          style={{ backgroundColor: "white" }}
        >
          {content}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default ProductCarousel;
