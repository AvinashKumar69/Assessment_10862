import * as yup from 'yup';
import {alphaOrNumericRegExp} from '../constants/Regex';

export const isEducationValid = yup.string().required('This is required');

export const isYearOfPassingValid = yup
  .number('Only numbers are allowed')
  .required('This is required')
  .min(4, 'Enter a valid 4 digit year');

export const isGradeValid = yup
  .string()
  .matches(alphaOrNumericRegExp, 'Only characters or numbers are allowed');

export const isExperienceValid = yup
  .string()
  .matches(/^[0-9]+$/, 'Only numbers are allowed');

export const isDesignationValid = yup
  .string()
  .matches(alphaOrNumericRegExp, 'Only characters or numbers are allowed');

export const isDomainValid = yup
  .string()
  .matches(alphaOrNumericRegExp, 'Only characters or numbers are allowed');
