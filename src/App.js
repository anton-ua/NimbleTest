import Header from "./Components/Header/Header";
import styles from "./App.module.css";
import InputForm from "./Components/InputForm/InputForm";
import TrackerList from "./Components/TrackerList/TrackerList";

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
        <div className={styles.container}>
          <TrackerList />
        </div>
      </body>
    </div>
  );
};

export default App;
