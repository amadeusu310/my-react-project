import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import NewPostPage from "./components/NewPostPage";
import { CardsProvider } from "./CardsContext";

export type Card = {
  name: string;
  category: string;
  money: string;
};

const router = createBrowserRouter([
  { path: "/", element: <SearchPage /> },
  { path: "/new-post", element: <NewPostPage /> }
]);

export default function App() {
  return (
    <CardsProvider>
      <RouterProvider router={router} />
    </CardsProvider>
  );
}
