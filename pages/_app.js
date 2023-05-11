import CartProvider from "../context/CartContext";
import GlobalProvider from "../context/GlobalContext";
import SharedLayout from "../layouts/SharedLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <CartProvider>
        <SharedLayout>
          <Component {...pageProps} />
        </SharedLayout>
      </CartProvider>
    </GlobalProvider>
  );
}
