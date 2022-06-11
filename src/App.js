import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";
import Books from "./pages/Books";
function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/welcome" />}
                    />
                    <Route path="/welcome" element={<Welcome />}>
                        <Route
                            path="new-user"
                            element={<p>Welcome, new user!</p>}
                        ></Route>
                    </Route>
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                    <Route path="/books" element={<Books />} />
                    <Route path="*" element={<p>404</p>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
