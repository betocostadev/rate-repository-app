import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      // call the mutate function here with the right arguments
      const credentials = await mutate({ variables: {username, password} });
      const { data } = credentials;

      if (data && data.authorize) {
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
      }

      return data;

    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return [signIn, result];
};

export default useSignIn;
