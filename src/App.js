import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Шатравин Роман Сергеевич\n";
  const NewCode = "Добавил новую строчку для 5 лабы"
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
         {NewCode}
      </header>
    </div>
  );
}

export default App;
