import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import globalStyles from './global-styles';
import VerticalSpace from '@/components/VerticalSpace';
import CountryEntity from '@/entity/country-entity';
import toTitleCase from '@/utils';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache,
});

export default function SelectCountryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');
  const LIST_LAUNCHES = gql`
    query ListCountriesByName {
      countries(filter: { name: { regex: "^${toTitleCase(keyword)}" } }) {
        code
        name
        phone
        emoji
      }
    }
  `;
  let { data, error } = useQuery(LIST_LAUNCHES, { client });

  const getCountriesBySearch = async () => {
    const result = await client.query({ query: LIST_LAUNCHES }).catch((e) => {
      error = e;
    });
    data = result;
  };

  const renderItem = ({ item }: { item: CountryEntity }) => (
    <View style={globalStyles.viewFlags}>
      <Text
        style={{
          fontSize: 24,
        }}
      >
        {item.emoji ?? ''}
      </Text>
      <Text
        style={{
          flex: 1,
          marginStart: 8,
          fontSize: 13,
          fontWeight: '400',
          lineHeight: 15,
        }}
      >
        {item.name ?? '-'}
      </Text>
      <TouchableOpacity onPress={() => setSelectedId(item.code)}>
        <View
          style={
            selectedId === item.code
              ? globalStyles.radioActive
              : globalStyles.radioInActive
          }
        />
      </TouchableOpacity>
    </View>
  );

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={globalStyles.flagSafeArea}>
      <VerticalSpace size="large" />
      <View style={globalStyles.flagViewContainer}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={globalStyles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={globalStyles.selectCountryTitle}>Select Country</Text>
      </View>
      <VerticalSpace size="large" />
      <View style={globalStyles.containerSearch}>
        <Svg
          width={22}
          height={22}
          fill="none"
          style={globalStyles.marginStartIconTextInput}
        >
          <Path
            fill="url(#a)"
            d="M.423.572h21.262v21.262H.423z"
            transform="rotate(-.159 .423 .572)"
          />
          <Defs>
            <Pattern
              id="a"
              width={1}
              height={1}
              patternContentUnits="objectBoundingBox"
            >
              <Use xlinkHref="#b" transform="scale(.0084)" />
            </Pattern>
            <Image
              xlinkHref="data:image/png;base64,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"
              id="b"
              width={119}
              height={119}
            />
          </Defs>
        </Svg>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => {
            setKeyword(text);
            getCountriesBySearch();
          }}
          keyboardType="email-address"
          style={globalStyles.textInput}
        />
      </View>
      <VerticalSpace size="large" />
      <Text style={globalStyles.viewTitleFlag}>Flags & Names</Text>
      <FlatList
        data={data?.countries ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        contentContainerStyle={{ padding: 8 }}
      />
    </SafeAreaView>
  );
}
