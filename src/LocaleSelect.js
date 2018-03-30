import React from "react";
import { ThemeContext } from "./ThemeContext";

class LocaleSelect extends React.Component {
   render() {
      return (
         <ThemeContext.Consumer>
            {context => (
               <select
                  value={context.state.locale}
                  onChange={context.updateLocale}
               >
                  <option value="en-US">English</option>
                  <option value="fr-FR">French</option>
                  <option value="es-ES">Spanish</option>
               </select>
            )}
         </ThemeContext.Consumer>
      );
   }
}

export default LocaleSelect;
