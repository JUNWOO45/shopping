import React from "react";
import { QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { routes, pages } from "./routes";
import { getClient } from "./queryClients";
import { ReactQueryDevtools } from "react-query/devtools";
import GNB from "./components/gnb";

const App = () => {
  console.log("pages: ", pages);
  console.log("routes: ", routes);
  const element = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GNB />
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
