import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useUserData = variables => {
  const { data, userReviews, error, loading, fetchMore, ...result } = useQuery(GET_AUTHORIZED_USER, {
    variables: variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      }
    });
  };

  if (error) return error;

  return {
    userReviews: data?.authorizedUser.reviews ? data.authorizedUser.reviews : null,
    fetchMore: handleFetchMore,
    loading,
    ...result
  }
};

export default useUserData;
