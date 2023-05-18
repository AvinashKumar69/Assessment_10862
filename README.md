# Context and goal

I have done this mobile application as per the internal assessment process of the organization, and it's good opportunities to brush up the relevant tech stacks.

This app is developed with React Native, coupled with some extra nice packages to handle routing, dataflow and UI elements.

### APK download link
> APK Link:- **https://i.diawi.com/7VGNQN**

## Main technologies/ packages used

- [React Native](https://reactnative.dev/)

> A framework for building native apps for Android and iOS with React.

- [React Navigation](https://reactnavigation.org/)

> React Navigation provides routing and navigation for Expo and React Native apps.

- [React Native Paper](https://callstack.github.io/react-native-paper/)

> Cross-platform Material Design for React Native.

- [Formik & Yup](https://formik.org/)

> Formik is the world's most popular open source form library for React and React Native.

- [React Native Image Crop Picker](https://www.npmjs.com/package/react-native-image-crop-picker)

> iOS/Android image picker with support for camera, video, configurable compression, multiple images and cropping.

## Running the project

- Clone this project

```
git clone < project-url.git >
```

- Make sure you have NodeJS & NPM installed in your system.

- [Install NodeJS](https://nodejs.org/en) on your computer.

- [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your computer

- Go to the root folder of the project and run `npm` command in a terminal.

  > This command will look into the _package.json_ file and install all the dependencies listed here.

- Install react-native-cli globally on your computer (Follow the instructions given on the React Native docs.)

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```

react-native run-android

```

### More details about the project

**About the project**

> It contains a registration process spread across the three screens where each screen is capturing the user's details like Basic Info on the 1st screen, Educational & Professional Info on the 2nd screen, and finally Address Details on the 3rd screeen.

- The fields which are Required are marked with the asterick.

- The user can upload his/ her profile pic using either camera (front/ back) or from gallery.

**Basic flow of the project**

- The entry point of the project, in App.jsx, contains a **RootNavigation** components. This component handles the navigation between the AuthStack (it contains the screens which are used for the user regsitration) and the MainStack (it will contain the other files of the app).

- **RootNavigation** component receives a isAuthenticated variable, using which it decides in which stack to go. For a unRegistered/ new user, it will redirect him/ her to AuthStack, whereas for an authenticated user, it will send him to the MainStack screens.

> AuthStack

- This contains the 3 screens where user can do the regsitration process and fill up their details.

- The UI is created using **React Native Paper** and the validations have been handled by **Formik & Yup** libraries.

> User profile pic

- This has been created using the **React-Native-Image-Crop-Picker** library. This requires the relevant permissions from the user (like storage/ camera/ media files etc) to work properly.

- When user clicks on the edit icon (on the profile section), then a _Modal_ will open up which will contain two buttons (camera & gallery).

- If the user clicks on the camera button, then device's physical camera will open up (front/ back), and user can take the pic.
- If the user clicks on the gallery button, then device's gallery will open up, and user can select a pic to upload as the profile image.

> Validations

- If a user after filling the fields, clicks on the Next/Submit button, then the **Formik** will try to validate the field values using the validation schema provided by **Yup**, before navigating to another screen.

- If any validation will fail, then **Formik** will give errors so that user can rectify the same.

**Conclusion**

- On the final screen, once the user clicks on the Submit button, after passing all the validation checks, he/ she will receive a Alert showing success message.
