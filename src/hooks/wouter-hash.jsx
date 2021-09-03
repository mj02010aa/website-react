import { useState, useEffect, useCallback } from "react";
import { Router, Route } from "wouter";

const currentLoc = () => window.location.hash.replace("#", "") || "/";

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLoc());

  useEffect(() => {
    const handler = () => setLoc(currentLoc());

    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback(to => (window.location.hash = to), []);
  return [loc, navigate];
};

export default useHashLocation;
