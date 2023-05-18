import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const CustomTextInput = props => {
  const {
    placeholder,
    onBlur,
    onChangeText,
    value,
    label,
    keyboardType,
    maxLength,
    name,
    requiredField,
    leftIcon,
    rightIcon,
    transformedRightIcon,
    secureTextEntry,
  } = props;

  const [revealPassword, setRevealPassword] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.labelText}>
        {label}
        {requiredField && <Text style={styles.asterick}>*</Text>}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        mode="outlined"
        outlineColor="#000"
        activeOutlineColor="gray"
        placeholderTextColor="gray"
        secureTextEntry={!revealPassword ? secureTextEntry : false}
        // * **
        left={
          leftIcon && (
            <TextInput.Icon
              icon={leftIcon}
              iconColor="#000"
              style={styles.additionalIconStyle}
            />
          )
        }
        right={
          rightIcon && (
            <TextInput.Icon
              icon={!revealPassword ? rightIcon : transformedRightIcon}
              style={styles.additionalIconStyle}
              iconColor="#000"
              onPress={() => {
                if (name === 'password') {
                  setRevealPassword(!revealPassword);
                }
              }}
            />
          )
        }
        // * **
        name={name}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
  },
  asterick: {
    color: 'maroon',
  },
  input: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    height: 48,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
  },
  additionalIconStyle: {
    marginTop: 15,
  },
});
