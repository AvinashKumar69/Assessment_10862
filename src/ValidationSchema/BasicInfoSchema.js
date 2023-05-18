import * as yup from 'yup';
import {
  emailRegExp,
  onlyCharacterRegExp,
  phoneRegExp,
} from '../constants/Regex';

export const isFirstNameValid = yup
  .string()
  .required('This is required')
  .matches(onlyCharacterRegExp, 'Only characters are allowed')
  .min(3, 'Must be at least 3 characters');

export const isLastNameValid = yup
  .string()
  .required('This is required')
  .matches(onlyCharacterRegExp, 'Only characters are allowed')
  .min(3, 'Must be at least 3 characters');

export const isPhoneNumberValid = yup
  .string()
  // .required('This is required')
  .matches(phoneRegExp, 'Enter a valid 10 digit phone number');

export const isEmailValid = yup
  .string()
  // .required('This is required')
  .email('Enter a valid email')
  .matches(emailRegExp, 'Enter a valid email');

export const isPasswordValid = yup
  .string()
  .required('This is required')
  .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
  .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
  .matches(/\d/, 'Password must have a number')
  .matches(
    /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    'Password must have a special character',
  )
  .min(5, ({min}) => `Password must be at least ${min} characters`);

export const isConfirmPasswordValid = yup
  .string()
  .required('This is required')
  .oneOf([yup.ref('password')], 'Passwords do not match');
