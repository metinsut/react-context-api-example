import React from "react";
import { ThemeContext } from "./ThemeContext";

class LocaleContent extends React.Component {
   render() {
      return (
         <ThemeContext.Consumer>
            {context => (
               <h1 ref={h1 => (this.h = h1)}>{context.state.content}</h1>
            )}
         </ThemeContext.Consumer>
      );
   }
}

export default LocaleContent;
