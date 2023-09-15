// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Form from './Components/DailyReport/form';

const AppRouter = () => {
  return (
    <Routes>
      {/* <Switch> */}
        <Route  path="/login" element={<Login />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route path="/new-entry" element={<Form />} />
        {/* <Route path="/daily-report" component={DailyReport} />
        <Route path="/monthly-report" component={MonthlyReport} />
        <Route path="/employee-report" component={EmployeeReport} />
        <Route path="/employee" component={Employee} />
        <Route path="/logout" component={Logout} />  */}
      {/* </Switch> */}
    </Routes>
  );
};

export default AppRouter;
