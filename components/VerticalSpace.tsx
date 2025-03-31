import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  medium: { height: 16 },
  large: { height: 24 },
  extraLarge: { height: 32 },
});

function VerticalSpace({ size }: { size: 'medium' | 'large' | 'extralarge' }) {
  return (
    <View
      style={
        // eslint-disable-next-line no-nested-ternary
        size === 'medium'
          ? styles.medium
          : size === 'large'
            ? styles.large
            : styles.extraLarge
      }
    />
  );
}

export default VerticalSpace;
