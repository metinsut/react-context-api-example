import React from "react";
import { ThemeContext } from "./ThemeContext";

class LocaleContent extends React.Component {
   static contextType = ThemeContext;
   render() {
      return (
         <h1>{this.context.state.content}</h1>
      );
   }
}

export default LocaleContent;
