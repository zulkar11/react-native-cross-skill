import {baseAuthApi} from '../../redux/base';

export const refundsApi = baseAuthApi.injectEndpoints({
  endpoints: builder => ({
    createRefund: builder.mutation({
      query: refundData => ({
        url: 'refunds',
        method: 'POST',
        body: refundData,
      }),
    }),
  }),
});

export const {useCreateRefundMutation} = refundsApi;
