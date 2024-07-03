import {baseAuthApi} from '../../redux/base';

export const wishListApi = baseAuthApi.injectEndpoints({
  endpoints: builder => ({
    wishListPageData: builder.query({
      query: () => 'wishlists',
    }),
    addToWishList: builder.mutation({
      query: ({productId, userId}) => ({
        url: 'wishlists',
        method: 'POST',
        body: {product_id: productId, user_id: userId},
      }),
    }),
    deleteFromWishList: builder.mutation({
      query: productId => ({
        url: `wishlists/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useWishListPageDataQuery,
  useAddToWishListMutation,
  useDeleteFromWishListMutation,
} = wishListApi;
