import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "./components/products/ProductList/productList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductDetail } from "./components/products/ProductDetail/productDetail";
import { Navbar } from "./components/layout/navbar/navbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
