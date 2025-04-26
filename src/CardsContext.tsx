import React, { createContext, useContext, useState, useEffect } from "react";
import { Card } from "./App";

type CardsContextType = {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) throw new Error("useCards must be used within CardsProvider");
  return context;
};

export const CardsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: Response = await fetch("http://localhost:3005/cards");
      const data = await response.json();
      setCards(data);
    };
    fetchData();
  }, []);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};