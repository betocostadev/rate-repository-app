import { useQuery } from '@apollo/client';
import { GET_USER_REVIEWS } from '../graphql/queries';

const useUserReviews = variables => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_USER_REVIEWS, {
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
    userReviews: data?.authorizedUser.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

export default useUserReviews;
