import * as Constant from './common/Constant';
import LoginPage from './pages/public/Login/Login';
import NotFoundPage from './pages/private/NotFound/NotFound';
import OverviewPage from './pages/private/Overview/Overview';
import CategoryPage from './pages/private/Category/Category';
import AttributePage from './pages/private/Attribute/Attribute';
import GroupSetAttributePage from './pages/private/GroupSetAttribute/GroupSetAttribute';
import ConfirmProductsPage from './pages/private/ConfirmProducts/ConfirmProducts';
import DetailConfirmProducts from './pages/private/ConfirmProducts/DetailConfirmProducts';
import MerchantList from './pages/private/Merchants/MerchantList';
import MerchantDetail from './pages/private/Merchants/MerchantDetail';

export const LoadablePages = [
  {
    component: OverviewPage,
    path: Constant.ROUTER_URL.OVERVIEW_PAGE,
  },
  {
    component: CategoryPage,
    path: Constant.ROUTER_URL.CATEGORY_PAGE,
  },
  {
    component: AttributePage,
    path: Constant.ROUTER_URL.ATTRIBUTE_PAGE,
  },
  {
    component: GroupSetAttributePage,
    path: Constant.ROUTER_URL.GROUP_SET_ATTRIBUTE_PAGE,
  },
  {
    component: ConfirmProductsPage,
    path: Constant.ROUTER_URL.CONFIRM_PRODUCTS_PAGE,
  },
  {
    component: DetailConfirmProducts,
    path: Constant.ROUTER_URL.DETAIL_CONFIRM_PRODUCTS_PAGE,
  },
  {
    component: LoginPage,
    path: [Constant.ROUTER_URL.LOGIN_PAGE, Constant.ROUTER_URL.DEFAULT_PAGE],
  },
  {
    component: MerchantList,
    path: Constant.ROUTER_URL.MERCHANTS_PAGE,
  },
  {
    component: MerchantDetail,
    path: Constant.ROUTER_URL.MERCHANT_DETAIL_PAGE,
  },
  {
    component: MerchantDetail,
    path: Constant.ROUTER_URL.MERCHANT_ADD_PAGE,
  },

  {
    component: NotFoundPage,
    path: '*',
  },
];
