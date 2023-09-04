// import ReactQueryProvider from '@/lib/utils/react-query-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storeConfig } from '../react-hands-v2';
import AppLayout from '@/components/app-layout';

// Define initial state and actions
const store = {
  count: 0,
  userState: null,
  local_userState: null,
  local_createAccountFormData: {
    username: '',
    primaryPhone: '',
    primaryPhone2: '',
    email: '',
  },
  drawerOpen: true,
  notificationsOpen: false,
};

const actions = {
  decrement: (state: any) => ({ count: state.count - 1 }),
  increment: (state: any) => ({ count: state.count + 1 }),
  updateUser: (state: any, { payload }: any) => ({
    userState: payload,
    local_userState: payload,
  }),
  setCreateAccountFormData: (state: any, { payload }: any) => ({
    local_createAccountFormData: payload,
  }),
  unSetUser: () => ({
    userState: null,
    local_userState: null,
  }),
  openDrawer: () => ({
    drawerOpen: true,
  }),
  closeDrawer: () => ({
    drawerOpen: false,
  }),
  toggleDrawer: (state: any) => ({
    drawerOpen: !state.drawerOpen,
  }),
  toggleNotifications: (state: any) => ({
    notificationsOpen: !state.notificationsOpen,
  }),
  closeNotifications: () => ({
    notificationsOpen: false,
  }),
};

// Configure the store
const StoreProvider = storeConfig(store, actions);

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ReactQueryProvider>
    <StoreProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </StoreProvider>
    // </ReactQueryProvider>
  );
}
