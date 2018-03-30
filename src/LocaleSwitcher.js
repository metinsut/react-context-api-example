import React from "react";
import {ThemeContext, localeMap} from "./ThemeContext";


class LocaleSwitcher extends React.Component {
   state = localeMap["en-US"];
   render() {
      return (
         <ThemeContext.Provider
            value={{
               state: this.state,
               updateLocale: e => this.setState(localeMap[e.target.value])
            }}
         >
            {this.props.children}
         </ThemeContext.Provider>
      );
   }
}

export default LocaleSwitcher;
