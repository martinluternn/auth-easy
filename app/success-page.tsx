import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import globalStyles from './global-styles';
import VerticalSpace from '@/components/VerticalSpace';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.flagSafeArea}>
      <View
        style={{
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <View
          style={{
            backgroundColor: '#407AFF',
            borderRadius: 120,
            height: 120,
            width: 120,
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: '#ffffff',
              textAlign: 'center',
              textAlignVertical: 'center',
              flex: 1,
            }}
          >
            ✔
          </Text>
        </View>
        <VerticalSpace size="extralarge" />
        <VerticalSpace size="extralarge" />
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#407AFF',
              fontSize: 24,
              fontWeight: '600',
            }}
          >
            Congratulations
          </Text>
          <VerticalSpace size="medium" />
          <Text
            style={{
              color: '#87898E',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 16,
            }}
          >
            You have successfully created your account
          </Text>
          <VerticalSpace size="extralarge" />
          <VerticalSpace size="extralarge" />
          <TouchableOpacity
            style={[globalStyles.viewButton, { backgroundColor: '#FF6565' }]}
            onPress={() => router.push('/')}
          >
            <Text style={globalStyles.textButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
