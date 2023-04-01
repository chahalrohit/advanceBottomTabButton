import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{marginTop: 300, alignSelf: 'center', marginBottom: 50}}>
        Home Screen
      </Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
