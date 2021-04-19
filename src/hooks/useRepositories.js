// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = variables => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      }
    });
  };

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;
  // if (loading) return loading;
  if (error) return error;

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useRepositories;

// Using default fetch with React useEffetc:
// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     // Replace the IP address part with your own IP address!
//     const response = await fetch('http://192.168.31.81:5000/api/repositories');
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();

//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// }
