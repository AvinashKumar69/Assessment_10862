import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import * as yup from 'yup';

import {
  isValidAddress,
  isValidCity,
  isValidLandmark,
  isValidPincode,
  isvalidState,
} from '../../ValidationSchema/AddressInfoSchema';
import CustomTextInput from '../../components/CustomTextInput';
import DropdownTextInput from '../../components/DropdownTextInput';
import Header from '../../components/Header';
import {stateDataArray} from '../../constants/ListData';

const AddressInfoSchema = yup.object().shape({
  address: isValidAddress,
  landmark: isValidLandmark,
  city: isValidCity,
  state: isvalidState,
  pincode: isValidPincode,
});

const AddressInfo = ({navigation}) => {
  const initialValues = {
    address: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleBasicInfoForm = values => {
    // TODO:- set auth user to true and navigate to main stack screens
    Alert.alert(
      'Woohooo!',
      'You have successfully completed the regsitration process. We will get back to you soon.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );
  };

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar barStyle="light-content" backgroundColor="#293264" />
      )}
      <Header title={'Your Address'} showBackButton={true} />

      <Formik
        validationSchema={AddressInfoSchema}
        initialValues={initialValues}
        onSubmit={values => handleBasicInfoForm(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wrapperContainer}>
            <CustomTextInput
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
              name="address"
              placeholder="Address"
              // label="Address"
              leftIcon="office-building"
            />
            {errors.address && touched.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('landmark')}
              onBlur={handleBlur('landmark')}
              value={values.landmark}
              name="landmark"
              placeholder="Landmark"
              // label="Landmark"
              leftIcon="office-building-marker"
            />
            {errors.landmark && touched.landmark && (
              <Text style={styles.errorText}>{errors.landmark}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              name="city"
              placeholder="City"
              // label="City"
              leftIcon="office-building-marker"
            />
            {errors.city && touched.city && (
              <Text style={styles.errorText}>{errors.city}</Text>
            )}

            <DropdownTextInput
              handleSelection={e => {
                setSelectedValue(e);
                setFieldValue('state', e);
              }}
              selectedValue={selectedValue}
              name="state"
              placeholder="Select your state"
              value={values.state}
              listData={stateDataArray}
              rightIcon="menu-down"
            />
            {errors.state && touched.state && (
              <Text style={styles.errorText}>{errors.state}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('pincode')}
              onBlur={handleBlur('pincode')}
              value={values.pincode}
              name="pincode"
              placeholder="Pin Code"
              // label="Pin Code"
              maxLength={6}
              keyboardType="numeric"
              leftIcon="office-building-marker"
            />
            {errors.pincode && touched.pincode && (
              <Text style={styles.errorText}>{errors.pincode}</Text>
            )}

            <Button
              mode="contained"
              style={styles.buttonStyle}
              contentStyle={styles.buttonContentStyle}
              labelStyle={styles.buttonLabelStyle}
              onPress={handleSubmit}>
              Submit
            </Button>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

export default AddressInfo;

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
    minHeight: '100%',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FF0000',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: '#293264',
    marginVertical: 10,
  },
  buttonContentStyle: {
    height: 48,
  },
  buttonLabelStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fafafa',
  },
});
