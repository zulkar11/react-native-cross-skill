import {basePublicApi} from '../../redux/base';

export const categoryApi = basePublicApi.injectEndpoints({
  endpoints: (builder) => ({
    categoryPageData: builder.query({
      query: () => 'categories?limit=60',
    }),
  }),
});

export const { useCategoryPageDataQuery } = categoryApi;
