import React from "react";

export const localeMap = {
   "en-US": { locale: "en-US", flag: "US", content: "Hello, World!" },
   "fr-FR": { locale: "fr-FR", flag: "FR", content: "Bonjour le monde!" },
   "es-ES": { locale: "es-ES", flag: "ES", content: "¡Hola Mundo!" }
};

export const ThemeContext = React.createContext(localeMap);