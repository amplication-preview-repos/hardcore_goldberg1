import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataUrlList } from "./dataUrl/DataUrlList";
import { DataUrlCreate } from "./dataUrl/DataUrlCreate";
import { DataUrlEdit } from "./dataUrl/DataUrlEdit";
import { DataUrlShow } from "./dataUrl/DataUrlShow";
import { DataFileList } from "./dataFile/DataFileList";
import { DataFileCreate } from "./dataFile/DataFileCreate";
import { DataFileEdit } from "./dataFile/DataFileEdit";
import { DataFileShow } from "./dataFile/DataFileShow";
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
        title={"DataAnalysisService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataUrl"
          list={DataUrlList}
          edit={DataUrlEdit}
          create={DataUrlCreate}
          show={DataUrlShow}
        />
        <Resource
          name="DataFile"
          list={DataFileList}
          edit={DataFileEdit}
          create={DataFileCreate}
          show={DataFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
