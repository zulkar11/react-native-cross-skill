import {basePublicApi} from '../../redux/base';

export const blogListApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    blogLists: builder.query({
      query: () => 'blogs',
    }),
  }),
});

export const {useBlogListsQuery} = blogListApi;
