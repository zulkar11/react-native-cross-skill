import {basePublicApi} from '../../redux/base';

export const userApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    fetchUserById: builder.query({
      query: userId => `/users/${userId}`,
    }),
    updateUserById: builder.mutation({
      query: ({userId, userData}) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: userData,
      }),
    }),
  }),
});

export const {useFetchUserByIdQuery, useUpdateUserByIdMutation} = userApi;
