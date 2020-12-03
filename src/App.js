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
      <main>
        <div className={styles.container}>
          <InputForm />
        </div>
        <div className={styles.container}>
          <TrackerList />
        </div>
      </main>
    </div>
  );
};

export default App;
