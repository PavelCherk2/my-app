import React from 'react';
import './Lightdark1.css';

export function ThemeChange() {
  const [theme, setTheme] = React.useState('light');

  function func() {
    if (theme == 'light') {
      let value = 'dark'
      setTheme(value)
      document.body.classList.add("dark");
    }
    else if (theme == 'dark') {
      let value = 'light'
      setTheme(value)
      document.body.classList.remove("dark");
    }
  }
  return <div>
    <img src={theme === "dark" ? "light.png" : "dark.png"} onClick={func} ></img>
    <div className={theme}>
      <p>
        Раньше я говорил: «Я надеюсь, что все изменится».
        Потом я понял, что существует единственный способ, чтобы все изменилось, — измениться мне самому. Джим Рон
      </p>
      <img src='pict1.png'></img>
      <p>
        Большинство неудачников — это люди, которые не поняли, насколько близки они были к успеху, когда сдались. Томас Эдисон
      </p>
    </div>
  </div>
}

