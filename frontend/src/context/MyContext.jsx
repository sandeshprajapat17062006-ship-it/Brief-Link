import { createContext, useEffect, useState, useCallback } from "react";
import api from "../APIs/Api";

export const MyContext = createContext();

export const MyContextData = ({ children }) => {
  const [links, setLinks] = useState([]);

  const getAllLinks = useCallback(async () => {
    try {
      const response = await api.get("/urls");
      setLinks(response.data.data.urls);
    } catch (error) {
      console.error("Failed to fetch links:", error);
    }
  }, []);

  useEffect(() => {
    getAllLinks();

    const handleFocus = () => {
      getAllLinks();
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [getAllLinks]);

  const refreshLink = () => {
    return getAllLinks();
  };

  const incrementClick = (id) => {
    setLinks((prevLinks) =>
      prevLinks.map((item) =>
        item._id === id ? { ...item, clicks: (item.clicks || 0) + 1 } : item,
      ),
    );
  };

  return (
    <MyContext.Provider
      value={{ links, setLinks, refreshLink, incrementClick }}
    >
      {children}
    </MyContext.Provider>
  );
};
