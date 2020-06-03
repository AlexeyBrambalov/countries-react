import React from 'react'

export default function NavBar() {

    let initialTheme

    const darkMode = () => {

        

        if(initialTheme) {
            document.documentElement.style.setProperty('--background-color', 'hsl(0, 0%, 98%)');
            document.documentElement.style.setProperty('--text-color', 'hsl(200, 15%, 8%)');
            document.documentElement.style.setProperty('--elements-color', 'hsl(0, 0%, 100%)');
  
            initialTheme = false;  
          } else {
            document.documentElement.style.setProperty('--background-color', 'hsl(207, 26%, 17%)');
            document.documentElement.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--elements-color', 'hsl(209, 23%, 22%)');
            initialTheme = true;
          }
  
    }
    return (
    <nav className="nav">
        <div className="titleText">Where in the world?</div>
        <div className="darkMode" onClick={darkMode}>Dark mode</div>
    </nav>
    )
}
