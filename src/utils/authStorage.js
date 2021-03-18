import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const credentials = await AsyncStorage.getItem(
      `${this.namespace}:credentials`
    );

    return credentials ? JSON.parse(credentials): [];
  }

  async setAccessToken(accessToken) {

    const allKeys = await AsyncStorage.getAllKeys();
    console.log(allKeys);

    return await AsyncStorage.setItem(
      `${this.namespace}:credentials`, JSON.stringify(accessToken),
    );
    // console.log('Set acess Token - Check for auth:credentials');
    // const theUser = await AsyncStorage.getItem(`${this.namespace}:credentials`);
    // console.log(theUser);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:credentials`);
    // await AsyncStorage.clear();
    // console.log('After removing');
    // const allKeys = await AsyncStorage.getAllKeys();
    // console.log(allKeys);
  }
}

export default AuthStorage;
