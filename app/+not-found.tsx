import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container} lightColor="" darkColor="">
        <ThemedText type="title" lightColor="" darkColor="">
          This screen doesn't exist.
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" lightColor="" darkColor="">
            Go to home screen!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
