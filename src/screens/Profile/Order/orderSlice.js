import {baseAuthApi} from '../../redux/base';

export const ordersApi = baseAuthApi.injectEndpoints({
  endpoints: builder => ({
    userOrders: builder.query({
      query: userId => `/${userId}/orders`,
    }),
    orderDetails: builder.query({
      query: orderId => `/orders/${orderId}`,
    }),
  }),
});

export const {useUserOrdersQuery, useOrderDetailsQuery} = ordersApi;
