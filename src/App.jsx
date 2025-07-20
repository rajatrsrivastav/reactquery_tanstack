import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import FetchOld from "./pages/fetchOld";
import FetchRQ from "./pages/fetchRQ";
import { ErrorPage } from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fetchInd } from "./components/ui/fetchInd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path:'/rq/:id',
        element:<fetchInd/>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>;
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
};
export default App;
