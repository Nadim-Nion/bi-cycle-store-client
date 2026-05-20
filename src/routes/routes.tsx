import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentFail from "../pages/payment/PaymentFail";
import PaymentSuccess from "../pages/payment/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/payment/success/:transactionId",
    element: <PaymentSuccess />,
  },
  {
    path: "/payment/fail/:transactionId",
    element: <PaymentFail />,
  },
]);

export default router;
