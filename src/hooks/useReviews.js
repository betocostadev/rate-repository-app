import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = id => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return loading;
  if (error) return error;

  // console.log(data.repository)

  return data.repository;
};

export default useReviews;
