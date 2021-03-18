import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const user = await mutate({ variables: {username, password} });
    const { data } = user;

    try {
      const auth = new AuthStorage('user');
      await auth.setAccessToken(data.authorize.accessToken);

      // const theAuth = await auth.getAccessToken(`auth:credentials`);
      // console.log('the auth is:', theAuth);
      } catch (e) {
        console.log(e);
      }

    return user;
  };

  return [signIn, result];
};

export default useSignIn;
