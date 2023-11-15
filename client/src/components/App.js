import React, { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

// pages
import { Error, Home } from "@pages";

// utils
// import { routes } from "@utils";

// context
import { setInteractiveParams, useGlobalDispatch } from "@context";
import { setupBackendAPI } from "../utils/backendAPI";

export function App() {
  const [searchParams] = useSearchParams();
  const [hasInitBackendAPI, setHasInitBackendAPI] = useState(false);

  // context
  const globalDispatch = useGlobalDispatch();

  useEffect(() => {
    const interactiveParams = {
      assetId: searchParams.get("assetId"),
      displayName: searchParams.get("displayName"),
      interactiveNonce: searchParams.get("interactiveNonce"),
      interactivePublicKey: searchParams.get("interactivePublicKey"),
      profileId: searchParams.get("profileId"),
      sceneDropId: searchParams.get("sceneDropId"),
      uniqueName: searchParams.get("uniqueName"),
      urlSlug: searchParams.get("urlSlug"),
      username: searchParams.get("username"),
      visitorId: searchParams.get("visitorId"),
    };

    if (interactiveParams.assetId) {
      setInteractiveParams({
        dispatch: globalDispatch,
        ...interactiveParams,
      });
    }

    const setupAPI = async () => {
      await setupBackendAPI(interactiveParams);
      setHasInitBackendAPI(true);
    };
    if (!hasInitBackendAPI) setupAPI();
  }, [globalDispatch, hasInitBackendAPI, searchParams]);

  return (
    <Routes>
      {/* {routes.map((route, index) => {
        return <Route element={<route.component />} key={index} path={route.path} />
      })} */}
      <Route element={<Home />} exact path="/" />
      <Route element={<Error />} exact path="*" />
    </Routes>
  );
}

export default App;
