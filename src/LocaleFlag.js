import React from "react";
import { CDNFlagIcon } from "react-flag-kit";
import {ThemeContext} from "./ThemeContext";

const LocaleFlag = () => (
   <ThemeContext.Consumer>
     {context => <CDNFlagIcon code={context.state.flag} size={256} />}
   </ThemeContext.Consumer>
 );

 export default LocaleFlag;
