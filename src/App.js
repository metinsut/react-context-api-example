import React, { Component } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import LocaleSelect from "./LocaleSelect";
import LocaleFlag from "./LocaleFlag";
import LocaleContent from "./LocaleContent";

class App extends Component {
   render() {
      return (
         <LocaleSwitcher>
            <LocaleSelect />
            <LocaleFlag />
            <LocaleContent />
         </LocaleSwitcher>
      );
   }
}

export default App;
