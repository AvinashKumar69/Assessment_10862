import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const DropdownTextInput = props => {
  const {
    placeholder,
    onBlur,
    onChangeText,
    value,
    label,
    keyboardType,
    maxLength,
    handleSelection,
    requiredField,
    name,
    listData,
    leftIcon,
    rightIcon,
    transformedRightIcon,
    selectedValue,
  } = props;

  const [showDropdown, setShowDropdown] = useState(false);

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
        editable={false}
        // * **
        left={leftIcon && <TextInput.Icon icon={leftIcon} iconColor="#000" />}
        right={
          rightIcon && (
            <TextInput.Icon
              icon={rightIcon}
              size={35}
              iconColor="#000"
              onPress={() => setShowDropdown(!showDropdown)}
            />
          )
        }
        // * **
        name={name}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
      {showDropdown && (
        <View style={styles.dropdownContainer}>
          {listData?.map((item, i) => {
            return (
              <Text
                key={String(i)}
                style={styles.dropdownItem}
                onPress={() => {
                  setShowDropdown(!showDropdown);
                  handleSelection(item);
                }}>
                {item}
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default DropdownTextInput;

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
    padding: 10,
    backgroundColor: '#fafafa',
    height: 30,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
  },
  dropdownContainer: {
    maxHeight: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});
