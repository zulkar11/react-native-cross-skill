import {configureStore} from '@reduxjs/toolkit';
import {homePageApi} from '../screens/Home/HomeSlice';
import {categoryApi} from '../screens/Category/categorySlice';
import {productsApi} from '../screens/ProductList/productListSlice';
import {pageApi} from '../screens/GeneralPage/generalPageSlice';
import {productDetailsApi} from '../screens/ProductDetails/productDetailsSlice';
import {resetPasswordApi} from '../screens/Login/Reset/resetSlice';
import {blogListApi} from '../screens/BlogList/blogListSlice';
import {blogDetailsApi} from '../screens/BlogDetails/blogDetailsSlice';

export const store = configureStore({
  reducer: {
    [homePageApi.reducerPath]: homePageApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [blogListApi.reducerPath]: blogListApi.reducer,
    [blogDetailsApi.reducerPath]: blogDetailsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      homePageApi.middleware,
      categoryApi.middleware,
      productsApi.middleware,
      pageApi.middleware,
      productDetailsApi.middleware,
      resetPasswordApi.middleware,
      blogListApi.middleware,
      blogDetailsApi.middleware,
    ),
  devTools: true,
});
