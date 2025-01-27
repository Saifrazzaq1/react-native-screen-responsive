import { Dimensions } from 'react-native';

const { width: fullWidth, height: fullHeight } = Dimensions.get('window');
const heightRef = fullHeight / 820; // Base height for scaling
const widthRef = fullWidth / 375;   // Base width for scaling
const fontRef = fullHeight / 820;   // Base font scaling

/**
 * Scale a value based on the device dimensions.
 * @param {number} size - The value to scale.
 * @param {'width'|'height'|'font'} type - The scaling type.
 * @returns {number} - The scaled value.
 */
const scale = (size, type = 'width') => {
    switch (type) {
        case 'height':
            return size * heightRef;
        case 'font':
            return size * fontRef;
        default:
            return size * widthRef;
    }
};

export { fullWidth, fullHeight, heightRef, widthRef, fontRef, scale };
