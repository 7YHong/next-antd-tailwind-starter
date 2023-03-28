import '@/styles/globals.css';
import ProLayout from '../components/layout/proLayout';

export default function App({ Component, pageProps }) {
  // const getLayout =
  //   Component.getLayout || ((page) => <ProLayout>{ page }</ProLayout>);
  //   return getLayout(<Component {...pageProps} />)
  return <Component {...pageProps} />;
}
