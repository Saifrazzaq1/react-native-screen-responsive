# react-native-layout-responsive

A lightweight utility library for responsive layouts in React Native that handles device-specific adjustments, including support for both **Android** and **iOS**. It also provides optimized scaling for **tablets** and different screen sizes, ensuring your app works seamlessly across all devices.

## Installation

To install the package, run:

```bash
npm install react-native-layout-responsive

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale, fullWidth, fullHeight } from 'react-native-layout-responsive';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20), // Scales based on width
    marginBottom: scale(16, 'height'), // Scales based on height
  },
  title: {
    fontSize: scale(24, 'font'), // Scales font size
  },
});

export default App;

API
scale(size, type = 'width'): Scales a value based on the device dimensions (width, height, or font size).

Parameters:
size (number): The value to scale (e.g., padding, margin, font size).
type (string, optional): The scaling type (default is width, can also be height or font).
Returns: The scaled value.
fullWidth: The device's full screen width in pixels.

fullHeight: The device's full screen height in pixels.

heightRef: The reference ratio for height scaling (based on a default device).

widthRef: The reference ratio for width scaling (based on a default device).

fontRef: The reference ratio for font scaling (based on a default device).

Responsive Design for Android, iOS, and Tablets
This library provides automatic scaling for both Android and iOS devices. The scaling logic adjusts the layout based on screen size, resolution, and device orientation.

Smart Scaling: The package automatically scales elements like padding, margins, and font sizes based on device dimensions.
Tablet Responsiveness: It offers enhanced scaling support for tablets and larger screens by using a default reference size (like the iPhone 13 Pro Max dimensions) for consistent scaling across all screen sizes.
Tablet and Large Screen Support
On larger devices like tablets, this package ensures that your app’s layout maintains its integrity by adjusting spacing and text sizes proportionally.
You can also customize the scaling logic by tweaking the reference dimensions if needed.
Why Use This Package?
Cross-Platform Support: Fully supports both iOS and Android devices.
Responsive Design: Automatically adapts layouts for phones, tablets, and different screen sizes.
Lightweight: Minimal overhead for your app while providing essential layout utilities.
Easy Integration: Just import the utility and start scaling your layouts.
Installation Notes
This package works out of the box for most devices, but you can customize the reference dimensions and scaling factors by modifying the core values in the index.js file.
Ensure that your React Native project is up-to-date to avoid compatibility issues.
Contributing
Contributions are welcome! If you'd like to improve this package, feel free to fork the repository and submit a pull request.

License
MIT License. See LICENSE for more information.


---

### Explanation of the Sections:
- **Installation**: Instructions for installing your package via npm.
- **Usage**: Example code on how to integrate the `react-native-layout-responsive` package into a React Native project, demonstrating how to use the `scale()` function for scaling values.
- **API**: Details on the available functions and constants.
- **Responsive Design**: Explains how the package handles device and tablet-specific responsiveness.
- **Tablet Support**: Emphasizes the tablet handling, ensuring your app remains consistent on larger screens.
- **Contributing**: Encourages others to contribute to the development of the package.
- **License**: Mentions the MIT license (you can modify this if needed).

---

You can copy this documentation directly into the `README.md` file in your package directory. Let me know if you need any further modifications or additions!
