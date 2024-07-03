import { basePublicApi } from '../../redux/base';

export const productsApi = basePublicApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => {
        const { search, min_price, max_price, sort_by, limit, page, category, availability } = options || {};

        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (min_price) params.append('min_price', min_price.toString());
        if (max_price) params.append('max_price', max_price.toString());
        if (sort_by) params.append('sort_by', sort_by);
        if (limit) params.append('limit', limit.toString());
        if (page) params.append('page', page.toString());
        if (category) params.append('category', category);
        if (availability) params.append('availability', availability);

        const url = `/frontend/products?${params.toString()}`;
        console.log('Request URL:', url); // Log the constructed URL

        return { url };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
