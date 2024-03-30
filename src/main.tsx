import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Toaster } from "react-hot-toast";
// import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link: link,

  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("jwt") || "",
  },
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
