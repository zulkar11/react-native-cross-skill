import {basePublicApi} from '../../redux/base';

// Define a new API slice for product details
export const productDetailsApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    // Endpoint for fetching product details by slug
    productDetails: builder.query({
      query: slug => `products/${slug}`,
    }),
  }),
});

// Export the generated hook for accessing the endpoint
export const {useProductDetailsQuery} = productDetailsApi;
