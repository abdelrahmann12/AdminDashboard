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
import Calendar  from "./page/calender/Calender";
import FAQ from "./page/faq/FAQ";
import Bar from "./page/barchart/Bar";
import Piechart from "./page/piechart/Piechart";
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/geography/Geography";
import NotFound from "./page/NotFound/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      <Route index  element={<Dashboard></Dashboard>} />
      <Route path="team"  element={<Team></Team>} />
      <Route path="contacts"  element={<Contacts></Contacts>} />
      <Route path="invoices"  element={<Invoices></Invoices>} />
      <Route path="form"  element={<Form></Form>} />
      <Route path="calendar"  element={<Calendar></Calendar>} />
      <Route path="faq"  element={<FAQ></FAQ>} />
      <Route path="bar"  element={<Bar></Bar>} />
      <Route path="pie"  element={<Piechart></Piechart>} />
      <Route path="line"  element={<LineChart></LineChart>} />
      <Route path="geography"  element={<Geography></Geography>} />
      <Route path="*"  element={<NotFound></NotFound>} />


    </Route>
    

  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);