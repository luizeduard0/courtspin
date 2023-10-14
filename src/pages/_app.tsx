import { AppProps } from "next/app";
import { wrapper } from "@/redux/store";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PROTECTED_ROUTES } from "@/utils/constants";
import { useEffect } from "react";
import '@/styles/globals.scss'
import Header from "@/components/common/header";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();

  const isAuthenticated = (): boolean => {
    return store.getState().auth?.user?.token.length || false
  }

  function isProtectedRoute(): boolean {
    return PROTECTED_ROUTES.includes(router.pathname)
  }

  useEffect(() => {
    if (!isAuthenticated() && isProtectedRoute()) {
      router.push('/auth')
    }
  })


  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}