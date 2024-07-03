import {basePublicApi} from '../../redux/base';

export const homePageApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    homePageData: builder.query({
      query: () => 'home-page',
    }),
  }),
});

export const {useHomePageDataQuery} = homePageApi;
