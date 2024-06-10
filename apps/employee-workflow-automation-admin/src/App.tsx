import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { TaskStatusList } from "./taskStatus/TaskStatusList";
import { TaskStatusCreate } from "./taskStatus/TaskStatusCreate";
import { TaskStatusEdit } from "./taskStatus/TaskStatusEdit";
import { TaskStatusShow } from "./taskStatus/TaskStatusShow";
import { ClientStageList } from "./clientStage/ClientStageList";
import { ClientStageCreate } from "./clientStage/ClientStageCreate";
import { ClientStageEdit } from "./clientStage/ClientStageEdit";
import { ClientStageShow } from "./clientStage/ClientStageShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { PriorityList } from "./priority/PriorityList";
import { PriorityCreate } from "./priority/PriorityCreate";
import { PriorityEdit } from "./priority/PriorityEdit";
import { PriorityShow } from "./priority/PriorityShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Employee Workflow Automation"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="TaskStatus"
          list={TaskStatusList}
          edit={TaskStatusEdit}
          create={TaskStatusCreate}
          show={TaskStatusShow}
        />
        <Resource
          name="ClientStage"
          list={ClientStageList}
          edit={ClientStageEdit}
          create={ClientStageCreate}
          show={ClientStageShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Priority"
          list={PriorityList}
          edit={PriorityEdit}
          create={PriorityCreate}
          show={PriorityShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
