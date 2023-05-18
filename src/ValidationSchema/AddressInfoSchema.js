import * as yup from 'yup';
import {onlyCharacterRegExp} from '../constants/Regex';

export const isValidAddress = yup
  .string()
  .required('This is required')
  .min(3, 'Must be at least 3 characters');

export const isValidLandmark = yup
  .string()
  .required('This is required')
  .min(3, 'Must be at least 3 characters');

export const isValidCity = yup
  .string()
  .matches(onlyCharacterRegExp, 'Only characters are allowed');

export const isvalidState = yup.string().required('This is required');

export const isValidPincode = yup
  .number('Only numbers are allowed')
  .min(6, 'Must be of valid 6 digits');
