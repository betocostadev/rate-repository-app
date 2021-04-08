import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = id => {
  console.log(`
  ===========
  Use repository fetch
  id is: ${id}
  ===========
  `)

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return loading;
  if (error) return error;

  return data
};

export default useRepository;
