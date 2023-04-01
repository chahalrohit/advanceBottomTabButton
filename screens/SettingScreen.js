import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{marginTop: 300, alignSelf: 'center', marginBottom: 50}}>
        Setting Screen
      </Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
