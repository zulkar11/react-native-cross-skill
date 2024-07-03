import {basePublicApi} from '../../../redux/base';

export const resetPasswordApi = basePublicApi.injectEndpoints({
  endpoints: builder => ({
    resetPassword: builder.mutation({
      query: ({userName}) => ({
        url: 'auths/reset',
        method: 'POST',
        body: {user_name: userName},
      }),
    }),
  }),
});

export const {useResetPasswordMutation} = resetPasswordApi;
