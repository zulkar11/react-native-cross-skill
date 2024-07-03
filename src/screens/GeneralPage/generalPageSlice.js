import {basePublicApi} from '../../redux/base';

// Define a new API slice for the dynamic page endpoint
export const pageApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    // Define the endpoint for fetching page data with a dynamic part in the URL
    fetchPage: builder.query({
      query: pageSlug => `frontend/pages/${pageSlug}`,
    }),
  }),
});

// Export the generated hook for accessing the endpoint
export const {useFetchPageQuery} = pageApi;
