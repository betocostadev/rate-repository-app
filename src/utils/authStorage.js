import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const test = await AsyncStorage.getItem(
      `${this.namespace}`
    );
    console.log('auth?');
    console.log(test);
    const credentials = await AsyncStorage.getItem(
      `${this.namespace}:credentials`
    );
    return credentials ? JSON.parse(credentials): [];
  }

  async setAccessToken(accessToken) {
    return await AsyncStorage.setItem(
      `${this.namespace}:credentials`, JSON.stringify(accessToken),
    );
    // const theUser = await AsyncStorage.getItem(`${this.namespace}:credentials`);
    // console.log(theUser);
  }

  async removeAccessToken() {
    console.log('removeAccessToken');
    return await AsyncStorage.removeItem(`${this.namespace}:credentials`);
    // return await AsyncStorage.clear();
    // const allKeys = await AsyncStorage.getAllKeys();
    // console.log(allKeys);
  }
}

export default AuthStorage;
