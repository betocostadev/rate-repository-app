import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const credentials = await AsyncStorage.getItem(
      `${this.namespace}:user`
    );

    return credentials ? JSON.parse(credentials): '';
  }

  async setAccessToken(accessToken) {
    const currentUser = await this.getAccessToken();
    if (!currentUser) {
      console.log('No user stored');
    }
    const newUser = accessToken;

    await AsyncStorage.setItem(
      `${this.namespace}:user`,
      JSON.stringify(newUser),
    );
    const allKeys = await AsyncStorage.getAllKeys();
    console.log(allKeys);
    const theUser = await AsyncStorage.getItem('user');
    console.log(theUser);

  }

  async removeAccessToken() {
    console.log('will remove the user');
    await AsyncStorage.removeItem(`${this.namespace}:user`);
    const allKeys = await AsyncStorage.getAllKeys();
    console.log(allKeys);
    const theUser = await AsyncStorage.getItem('user');
    console.log(theUser);
  }
}

export default AuthStorage;
