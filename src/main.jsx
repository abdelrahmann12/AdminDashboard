import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import Contacts from "./components/Contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      <Route index  element={<Dashboard></Dashboard>} />
      <Route path="team"  element={<Team></Team>} />
      <Route path="contacts"  element={<Contacts></Contacts>} />
      <Route path="invoices"  element={<Invoices></Invoices>} />
      <Route path="form"  element={<Form></Form>} />
    </Route>
    

  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);