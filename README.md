# React Native Dot Intro

This react native module is intended to provide a beautifully animated product carousel to present different picture of your product plus an expandable description.

<!-- ![Alt Text](./assets/react-native-dot-intro.gif) -->

## Usage

```
yarn add @toggled-apps/react-native-product-carousel

or 

npm install @toggled-apps/react-native-product-carousel
```
Install Gesture Handler and Reanimated v1, these are required for `@gorhom/bottom-sheet`:

### For React Native
```
yarn add react-native-reanimated react-native-gesture-handler

or

npm install react-native-reanimated react-native-gesture-handler
```

React Native Gesture Handler needs extra steps to finalize its installation, please follow their [installation instructions](https://github.com/software-mansion/react-native-gesture-handler).

React Native Reanimated v1 needs extra steps to finalize its installation, please follow their [installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/getting_started).

### For Expo
```
expo install react-native-gesture-handler
yarn add react-native-reanimated
```

## Example Usage
```javascript
import React from "react";
import { View, Text } from "react-native";
import RNProductCarousel from "@toggled-apps/react-native-product-carousel";

export default function App() {
  const content = (
    <View>
      <Text style={{ fontWeight: "800" }}>
        Example Product
      </Text>
    </View>
  );
  const data = [
    "https://image/url",
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
```

## Props

  data,
  dotColor = "#333",
  dotSize = 6,
  dotSpacing = 6,
  indicatorColor = "#333",

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|content|any|Required|None|Render view for product description.|
|data|array|Optional|800|An an array of urls of images for your carousel.|
|dotoColor|string|Option|"#333"|Color of pagination dots.|
|dotSize|number|Optional|6|Size of pagination dots.|
|dotSpacing|number|Optional|6|The spacing between pagination dots.|
|indicatorColor|string|Optional|"#333"|Color of page indicator.|

## 🚀 Run the example
The provided example uses [expo](https://expo.io/). Navigate to the "examples" directory and run:

- Install packages with `yarn` or `npm install`.
- Run `yarn ios` or `yarn android` or `npm run ios` or `npm run android`.

## 💸 Credit

Credit goes to Catalin Miron for providing both an insightful [tutorial](https://youtu.be/FIAPuq24b0g) on which this module is based off of.

This design is based off of the Zara app experience.

## 🤟 Contributions
This project is mantained by Toggled LTD (@toggled-apps).

We welcome all contributions to the upkeep and further development of this module! Feel free to raise PRs and Issues 😇

## MIT License
Copyright 2020 Toggled LTD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

