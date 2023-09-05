import Header from "./components/Header/Header";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <main class="main">
          <section class="main-content">
            <div class="main-content__header">
              <h3 class="main-content__h3">Nazwa kolumny</h3>
              <h3 class="main-content__h3">Typ danych</h3>
              <h3 class="main-content__h3">Usuń</h3>
            </div>
            <section class="main-content__body">
              <div class="main-content__body__box">
                <input
                  type="text"
                  value="id"
                  class="main-content__body__box__field__content input-name"
                />
                <select name="type" class="main-content__body__box__select">
                  <option value="id">id</option>
                  <option value="first_name_male">Imię (męskie)</option>
                  <option value="last_name_male">Nazwisko (męskie)</option>
                  <option value="first_name_female">Imię (żeńskie)</option>
                  <option value="last_name_female">Nazwisko (żeńskie)</option>
                  <option value="gender_m">Płeć (M)</option>
                  <option value="gender_f">Płeć (K)</option>
                  <option value="birth_date">Data urodzenia</option>
                  <option value="card_number">Numer karty</option>
                  <option value="city">Miasto</option>
                  <option value="country">Kraj (Polska)</option>
                  <option value="marka_samochodu">Marka samochodu</option>
                  <option value="model_samochodu">Model samochodu</option>
                  <option value="kolor">Kolor</option>
                </select>
                <button class="main-content__body__box__delete__field">
                  X
                </button>
              </div>
            </section>
            <button class="main-content__body__add__field">
              Dodaj kolejną kolumnę
            </button>
          </section>

          <hr />

          <section class="main-content__content__options">
            <div class="main-content__content__options__box">
              <label>Liczba wierszy:</label>
              <input
                type="number"
                id="rows-number"
                class="main-content__content__options__box__input__data"
                value="10"
              />
            </div>
            <div class="main-content__content__options__box">
              <label for="">Nazwa Tabeli:</label>
              <input
                type="text"
                id="tablename"
                class="main-content__content__options__box__input__data"
                placeholder="nazwa"
                required
              />
            </div>
            <div class="main-content__content__options__box">
              <input type="checkbox" id="create" checked />
              <label for="create">Stworzyć tabelę?</label>
            </div>
            <button
              id="download_data"
              class="main-content__content__options__confirm__button"
            >
              Pobierz bazę danych
            </button>
          </section>

          <section class="main-arguments">
            <hr />
            <h2 class="main-arguments__h2">
              Dlaczego powinieneś wybrać naszą stronę?
            </h2>
            <ul class="main-arguments__list">
              <li>
                - Przestań tracić czas na tworzenie bazy aby przetestować swoje
                umiejętności
              </li>
              <li>- Nasza usługa jest darmowa</li>
              <li>- Jesteśmy nowi na rynku daj nam się wykazać</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
