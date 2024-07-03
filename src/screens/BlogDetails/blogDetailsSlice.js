import {basePublicApi} from '../../redux/base';

export const blogDetailsApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    blogDetails: builder.query({
      query: blogId => `blogs/${blogId}`,
    }),
  }),
});

export const {useBlogDetailsQuery} = blogDetailsApi;
