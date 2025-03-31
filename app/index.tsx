import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import globalStyles from './global-styles';
import VerticalSpace from '@/components/VerticalSpace';

export default function RegisterPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.registerSafeArea}>
      <Text style={globalStyles.titleRegister}>Create an account</Text>
      <Text style={globalStyles.subtitleRegister}>
        Great to have you on board. Please start by providing us with the
        following info
      </Text>
      <VerticalSpace size="extralarge" />
      <VerticalSpace size="extralarge" />
      <View style={globalStyles.viewTextInputRegister}>
        <Svg
          width={15}
          height={16}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.5 15H2.944A1.944 1.944 0 0 1 1 13.056c0-3.174 4.667-3.111 6.222-3.111 1.556 0 6.222-.063 6.222 3.11 0 1.075-.87 1.945-1.944 1.945ZM7.222 7.222a3.111 3.111 0 1 0 0-6.222 3.111 3.111 0 0 0 0 6.222Z"
          />
        </Svg>
        <TextInput
          placeholder="First name"
          onChangeText={() => {}}
          style={globalStyles.textInput}
        />
      </View>
      <VerticalSpace size="medium" />
      <View style={globalStyles.viewTextInputRegister}>
        <Svg
          width={15}
          height={16}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.5 15H2.944A1.944 1.944 0 0 1 1 13.056c0-3.174 4.667-3.111 6.222-3.111 1.556 0 6.222-.063 6.222 3.11 0 1.075-.87 1.945-1.944 1.945ZM7.222 7.222a3.111 3.111 0 1 0 0-6.222 3.111 3.111 0 0 0 0 6.222Z"
          />
        </Svg>
        <TextInput
          placeholder="Last name"
          onChangeText={() => {}}
          style={globalStyles.textInput}
        />
      </View>
      <VerticalSpace size="medium" />
      <View style={globalStyles.viewTextInputRegister}>
        <Svg
          width={16}
          height={16}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.2 10.8C.118 5.715.84 3.387 1.376 2.637c.069-.121 1.766-2.66 3.584-1.17C9.474 5.184 3.947 5.052 7.55 8.45c3.603 3.398 3.266-1.924 6.983 2.59 1.49 1.819-1.05 3.515-1.17 3.583-.75.537-3.08 1.26-8.163-3.824Z"
            clipRule="evenodd"
          />
        </Svg>
        <TextInput
          placeholder="Phone number"
          onChangeText={() => {}}
          keyboardType="phone-pad"
          style={globalStyles.textInput}
        />
      </View>
      <VerticalSpace size="medium" />
      <View style={globalStyles.viewTextInputRegister}>
        <Svg
          width={16}
          height={16}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
          />
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 8v1a2 2 0 1 0 4 0V8a7 7 0 1 0-3 5.745"
          />
        </Svg>
        <TextInput
          placeholder="Email"
          onChangeText={() => {}}
          keyboardType="email-address"
          style={globalStyles.textInput}
        />
      </View>
      <VerticalSpace size="medium" />
      <View style={globalStyles.viewTextInputRegister}>
        <Svg
          width={14}
          height={17}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.992 7.074V4.27a3.27 3.27 0 0 0-6.54 0v2.804"
          />
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6.722 6.722c-1.37 0-2.442.104-3.27.352C1.636 7.618 1 8.856 1 11.218c0 3.438 1.346 4.496 5.722 4.496s5.722-1.058 5.722-4.496c0-2.362-.635-3.6-2.452-4.144-.828-.248-1.9-.352-3.27-.352Z"
          />
        </Svg>
        <TextInput
          placeholder="Password"
          onChangeText={() => {}}
          keyboardType="visible-password"
          style={globalStyles.textInput}
        />
        <Svg
          width={24}
          height={24}
          fill="none"
          style={globalStyles.marginEndIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
          />
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
        </Svg>
      </View>
      <VerticalSpace size="medium" />
      <TouchableOpacity
        style={globalStyles.viewTextInputRegister}
        onPress={() => router.push('/select-country-page')}
      >
        <Svg
          width={16}
          height={16}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.65}
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM1 8h14"
          />
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.65}
            d="M8 1c1.876 1.917 2.942 4.404 3 7-.058 2.596-1.124 5.083-3 7-1.876-1.917-2.942-4.404-3-7 .058-2.596 1.124-5.083 3-7v0Z"
          />
        </Svg>
        <TextInput
          placeholder="Country"
          onChangeText={() => {}}
          editable={false}
          style={globalStyles.textInput}
        />
        <Svg
          width={14}
          height={8}
          fill="none"
          style={globalStyles.marginEndIconTextInput}
        >
          <Path
            stroke="#87898E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6 6-6"
          />
        </Svg>
      </TouchableOpacity>
      <VerticalSpace size="medium" />
      <TouchableOpacity
        style={globalStyles.viewButton}
        onPress={() => router.push('/otp-page')}
      >
        <Text style={globalStyles.textButton}>Sign Up</Text>
      </TouchableOpacity>
      <VerticalSpace size="extralarge" />
      <View style={globalStyles.flexRow}>
        <Text style={globalStyles.textDescLogin}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={globalStyles.login}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
