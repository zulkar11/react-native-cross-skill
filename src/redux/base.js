import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const basePublicApi = createApi({
  reducerPath: 'homePage',
  baseQuery: fetchBaseQuery({baseUrl: {`${process.env.BASE_URL}/api/v1/`}}),
  endpoints: () => ({}),
});


