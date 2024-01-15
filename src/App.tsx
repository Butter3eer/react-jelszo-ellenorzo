import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PasswordChecker } from './Hibauzenet';

function App() {

  const [ password, setPassword ] = useState('');
  const passwordRegex = /^[a-z]*$/;

  return <div>
      <header>
        <h1>Jelszó ellenőrzés</h1>
        <p>Jelszó ellenörző alkalmazás</p>
      </header>
      <main>
        <label>Jelszó: <input type="password" name="jelszo" id="jelszo" onInput={ e => setPassword(e.currentTarget.value)} /></label>
        <PasswordChecker hibauzenet={password.length < 8 ? ['A jelszó gyenge.'] : []} sulyos={0} />
        <PasswordChecker hibauzenet={password.length >= 8 && passwordRegex.test(password) ? [ 'A jelszó közepes.'] : []} sulyos={1} />
        <PasswordChecker hibauzenet={password.length >= 8 && !passwordRegex.test(password) ? ['A jelszó erős.'] : []} sulyos={2} />
      </main>
      <footer>
        <p>Készítő: Pál Csenge <br /> 2024.01.15</p>
      </footer>
    </div>;
}

export default App
