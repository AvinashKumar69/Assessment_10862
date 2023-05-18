import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import * as yup from 'yup';

import {
  isDesignationValid,
  isDomainValid,
  isEducationValid,
  isExperienceValid,
  isGradeValid,
  isYearOfPassingValid,
} from '../../ValidationSchema/ProfessionalInfoSchema';
import CustomTextInput from '../../components/CustomTextInput';
import DropdownTextInput from '../../components/DropdownTextInput';
import Header from '../../components/Header';
import {educationDataArray} from '../../constants/ListData';

const ProfessionalInfoSchema = yup.object().shape({
  education: isEducationValid,
  yearOfPassing: isYearOfPassingValid,
  grade: isGradeValid,
  experience: isExperienceValid,
  designation: isDesignationValid,
  domain: isDomainValid,
});

const ProfessionalInfo = ({navigation}) => {
  const initialValues = {
    education: '',
    yearOfPassing: '',
    grade: '',
    experience: '',
    designation: '',
    domain: '',
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleProfessionalInfoForm = values => {
    navigation.navigate('AddressInfo');
  };

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar barStyle="light-content" backgroundColor="#293264" />
      )}
      <Header title={'Your Info'} showBackButton={true} />

      <Formik
        validationSchema={ProfessionalInfoSchema}
        initialValues={initialValues}
        onSubmit={values => handleProfessionalInfoForm(values)}>
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
            <Text style={styles.subHeading}>Educational Info</Text>

            <DropdownTextInput
              handleSelection={e => {
                setSelectedValue(e);
                setFieldValue('education', e);
              }}
              selectedValue={selectedValue}
              name="education"
              placeholder="Select your qualification"
              label="Education"
              requiredField={true}
              value={values.education}
              listData={educationDataArray}
              rightIcon="menu-down"
            />
            {errors.education && touched.education && (
              <Text style={styles.errorText}>{errors.education}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('yearOfPassing')}
              onBlur={handleBlur('yearOfPassing')}
              value={values.yearOfPassing}
              name="yearOfPassing"
              placeholder="Enter year of passing"
              label="Year of Passing"
              keyboardType="numeric"
              maxLength={4}
              requiredField={true}
            />
            {errors.yearOfPassing && touched.yearOfPassing && (
              <Text style={styles.errorText}>{errors.yearOfPassing}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('grade')}
              onBlur={handleBlur('grade')}
              value={values.grade}
              name="grade"
              placeholder="Enter your grade or percentage"
              label="Grade"
            />
            {errors.grade && touched.grade && (
              <Text style={styles.errorText}>{errors.grade}</Text>
            )}

            <Divider style={styles.divider} />
            <Text style={styles.subHeading}>Professional Info</Text>

            <CustomTextInput
              onChangeText={handleChange('experience')}
              onBlur={handleBlur('experience')}
              value={values.experience}
              name="experience"
              placeholder="Enter the years of experience"
              label="Experience"
              keyboardType="numeric"
            />
            {errors.experience && touched.experience && (
              <Text style={styles.errorText}>{errors.experience}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('designation')}
              onBlur={handleBlur('designation')}
              value={values.designation}
              name="designation"
              placeholder="Enter your designation"
              label="Designation"
            />
            {errors.designation && touched.designation && (
              <Text style={styles.errorText}>{errors.designation}</Text>
            )}

            <CustomTextInput
              onChangeText={handleChange('domain')}
              onBlur={handleBlur('domain')}
              value={values.domain}
              name="domain"
              placeholder="Enter your domain"
              label="Domain"
            />
            {errors.domain && touched.domain && (
              <Text style={styles.errorText}>{errors.domain}</Text>
            )}

            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                style={styles.buttonStyle}
                contentStyle={[
                  styles.buttonContentStyle,
                  styles.additionalButtonStyle,
                ]}
                labelStyle={[
                  styles.buttonLabelStyle,
                  styles.additionalButtonLabelStyle,
                ]}
                onPress={() => navigation.goBack()}>
                Previous
              </Button>

              <Button
                mode="contained"
                style={styles.buttonStyle}
                contentStyle={styles.buttonContentStyle}
                labelStyle={styles.buttonLabelStyle}
                onPress={handleSubmit}>
                Next
              </Button>
            </View>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

export default ProfessionalInfo;

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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: '#293264',
    marginVertical: 10,
    width: '48%',
  },
  additionalButtonStyle: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#293264',
  },
  buttonContentStyle: {
    height: 48,
  },
  buttonLabelStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fafafa',
  },
  additionalButtonLabelStyle: {
    color: '#293264',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  divider: {
    marginTop: 5,
    marginBottom: 10,
    paddingVertical: 0.5,
    color: '#000',
  },
});
