import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from './global-styles';
import VerticalSpace from '@/components/VerticalSpace';
import otpImage from '../assets/images/otp-image.png';
import icBack from '../assets/images/ic-back.png';
import HorizontalSpace from '@/components/HorizontalSpace';

export default function OTPPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <ActivityIndicator
        size={150}
        color="#407AFF"
        style={{
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      />
    );

  return (
    <SafeAreaView style={globalStyles.flagSafeArea}>
      <VerticalSpace size="large" />
      <View style={globalStyles.flagViewContainer}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Image source={icBack} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Image source={otpImage} style={{ alignSelf: 'center' }} />
        <VerticalSpace size="extralarge" />
        <VerticalSpace size="extralarge" />
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: '600',
            }}
          >
            OTP Verification
          </Text>
          <VerticalSpace size="medium" />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#87898E',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 16,
              }}
            >
              Enter the OTP sent to
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 16,
                marginStart: 4,
              }}
            >
              +234-7087139241
            </Text>
          </View>
          <VerticalSpace size="large" />
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={{
                height: 54,
                width: 54,
                fontSize: 24,
                fontWeight: '600',
                borderBottomWidth: 1,
                textAlign: 'center',
                borderColor: '#DADADA',
              }}
            />
            <HorizontalSpace size="large" />
            <TextInput
              style={{
                height: 54,
                width: 54,
                fontSize: 24,
                fontWeight: '600',
                borderBottomWidth: 1,
                textAlign: 'center',
                borderColor: '#DADADA',
              }}
            />
            <HorizontalSpace size="large" />
            <TextInput
              style={{
                height: 54,
                width: 54,
                fontSize: 24,
                fontWeight: '600',
                borderBottomWidth: 1,
                textAlign: 'center',
                borderColor: '#DADADA',
              }}
            />
            <HorizontalSpace size="large" />
            <TextInput
              style={{
                height: 54,
                width: 54,
                fontSize: 24,
                fontWeight: '600',
                borderBottomWidth: 1,
                textAlign: 'center',
                borderColor: '#DADADA',
              }}
            />
          </View>
          <VerticalSpace size="large" />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#87898E',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 16,
              }}
            >
              Didn’t recieve an OTP?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#FF6565',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 16,
                  marginStart: 4,
                }}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
          <VerticalSpace size="extralarge" />
          <VerticalSpace size="extralarge" />
          <TouchableOpacity
            style={globalStyles.viewButton}
            onPress={() => router.push('/success-page')}
          >
            <Text style={globalStyles.textButton}>Verify & Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
