"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "vi" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "vi";
    }

    const stored = localStorage.getItem(STORAGE_KEY);

    return stored === "vi" || stored === "en" ? stored : "vi";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider"
    );
  }

  return context;
}