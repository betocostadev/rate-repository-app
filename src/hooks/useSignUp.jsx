import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password}) => {
    try {
      const user = await mutate({ variables: {username, password} });
      return user;

    } catch (error) {
      console.log(e);
      return e;
    }
  };

  return [signUp, result]
};

export default useSignUp;
