import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContextProvider>
      <ApolloProvider client={client}>
        <App />
        <Toaster />
      </ApolloProvider>
    </AppContextProvider>
  </BrowserRouter>
);
