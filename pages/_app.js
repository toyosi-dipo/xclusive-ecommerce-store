import GlobalProvider from "../context/GlobalContext";
import SharedLayout from "../layouts/SharedLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <SharedLayout>
        <Component {...pageProps} />
      </SharedLayout>
    </GlobalProvider>
  );
}
