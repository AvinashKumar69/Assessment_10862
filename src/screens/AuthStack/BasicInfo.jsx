import {Formik} from 'formik';
import React, {useState} from 'react';
import {Platform, ScrollView, StatusBar, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';
import * as yup from 'yup';

import {
  isConfirmPasswordValid,
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isPasswordValid,
  isPhoneNumberValid,
} from '../../ValidationSchema/BasicInfoSchema';
import CustomModal from '../../components/CustomModal';
import CustomTextInput from '../../components/CustomTextInput';
import Header from '../../components/Header';
import SelectGender from '../../components/SelectGender';
import UserProfileImage from '../../components/UserProfileImage';

const BasicInfoSchema = yup.object().shape({
  firstName: isFirstNameValid,
  lastName: isLastNameValid,
  phoneNumber: isPhoneNumberValid,
  email: isEmailValid,
  password: isPasswordValid,
  confirmPassword: isConfirmPasswordValid,
});

const BasicInfo = ({navigation}) => {
  const [gender, setGender] = useState('male');
  const [showModal, setShowModal] = useState(false);
  const [localUri, setLocalUri] = useState(''); // localPath of the image from the imageCropPicker

  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleBasicInfoForm = values => {
    navigation.navigate('ProfessionalInfo', {
      basicInfoData: {...values, gender: gender},
    });
  };

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar barStyle="light-content" backgroundColor="#293264" />
      )}
      <Header title={'Register'} showBackButton={false} />

      <UserProfileImage setShowModal={setShowModal} localUri={localUri} />

      {showModal && (
        <CustomModal
          showModal={showModal}
          setShowModal={setShowModal}
          setLocalUri={setLocalUri}
        />
      )}

      <Formik
        validationSchema={BasicInfoSchema}
        initialValues={initialValues}
        onSubmit={values => handleBasicInfoForm(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wrapperContainer}>
            <CustomTextInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              name="firstName"
              placeholder="Enter your first name here"
              label="First Name"
              requiredField={true}
              leftIcon="account"
            />
            {errors.firstName && touched.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              name="lastName"
              placeholder="Enter your last name here"
              label="Last Name"
              requiredField={true}
              leftIcon="account"
            />
            {errors.lastName && touched.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              name="phoneNumber"
              placeholder="Enter your 10 digit phone number here"
              label="Phone Number"
              keyboardType="numeric"
              maxLength={10}
              leftIcon="phone"
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              name="email"
              placeholder="Your email goes here"
              label="Email"
              keyboardType="email-address"
              leftIcon="email"
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <SelectGender gender={gender} setGender={setGender} />

            <CustomTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              name="password"
              placeholder="Password"
              label="Password"
              requiredField={true}
              secureTextEntry={true}
              leftIcon="lock"
              rightIcon="eye-off"
              transformedRightIcon="eye"
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm password"
              label="Confirm Password"
              requiredField={true}
              secureTextEntry={true}
              leftIcon="lock"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <Button
              mode="contained"
              style={styles.buttonStyle}
              contentStyle={styles.buttonContentStyle}
              labelStyle={styles.buttonLabelStyle}
              onPress={handleSubmit}>
              Next
            </Button>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

export default BasicInfo;

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
