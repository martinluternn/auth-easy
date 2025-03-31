import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  medium: { width: 16 },
  large: { width: 24 },
  extraLarge: { width: 32 },
});

function HorizontalSpace({
  size,
}: {
  size: 'medium' | 'large' | 'extralarge';
}) {
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

export default HorizontalSpace;
