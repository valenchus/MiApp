import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutme/AboutMe";
import routes from "./routes";
import Contact from "./pages/contact/Contact";
import MyLikes from "./pages/mylikes/MyLikes";
import Portfolio from "./pages/portfolio/Portfolio";
import WhatIDo from "./pages/whatido/WhatIDo";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { Character } from "./components/Character/Character";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById("root");

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}></Route>
        <Route path={routes.HOME} element={<Home />}></Route>
        <Route path={routes.ABOUT_ME} element={<AboutMe />}></Route>
        <Route path={routes.CONTACT} element={<Contact />}></Route>
        <Route path={routes.MY_LIKES} element={<MyLikes />}></Route>
        <Route path={routes.PORTFOLIO} element={<Portfolio />}></Route>
        <Route path={routes.WHAT_I_DO} element={<WhatIDo />}></Route>
        <Route path="characters/:id" element={<Character />}></Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,

  rootElement
);
