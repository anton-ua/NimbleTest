import Header from "./Components/Header/Header";
import styles from "./App.module.css";
import InputForm from "./Components/InputForm/InputForm";

const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <div className={styles.container}>
          <Header />
        </div>
      </header>
      <body>
        <div className={styles.container}>
          <InputForm />
        </div>
      </body>
    </div>
  );
};

export default App;
