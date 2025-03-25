import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Transcations from "./pages/Transcations";
import Budget from "./pages/Budget";
import Settings from "./pages/Settings";
import Piechart from "./components/Dashboard/Piechart";
import Balance from "./components/Dashboard/Balance";
import Income from "./components/Transactions/Income"
import Expenses from "./components/Transactions/Expenses"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          { path: "piechart", element: <Piechart /> },
          { path: "balance", element: <Balance /> },
        ],
      },
      { path: "/transactions", element: <Transcations />,children:[
        {path:"income",element:<Income/>},
        {path:"expenses",element:<Expenses/>},
      ]},
      { path: "/budget", element: <Budget /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
