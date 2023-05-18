import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const SelectGender = props => {
  const {gender, setGender} = props;

  return (
    <View style={styles.wrapperContainer}>
      <Text style={styles.headingText}>Gender</Text>

      <View style={styles.topRadioContainer}>
        <View style={styles.radioContainer}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text style={styles.radioText}>Male</Text>
        </View>

        <View style={styles.radioContainer}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
          <Text style={styles.radioText}>Female</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  wrapperContainer: {
    // flexDirection:'row'
  },
  headingText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
  },
  topRadioContainer: {
    flexDirection: 'row',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  radioText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
});
