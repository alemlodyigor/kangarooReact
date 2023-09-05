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

          <section class="main-changes">
            <hr />
            <h2 class="main-changes__h2">Spis zmian</h2>

            <h3 class="main-changes__date">11.05.2023</h3>
            <ul class="main-changes__list">
              <li>- Refaktoryzacja kodu</li>
            </ul>

            <h3 class="main-changes__date">22.01.2023</h3>
            <ul class="main-changes__list">
              <li>- Usprawnienie dodawania nowych kolumn do strony</li>
              <li>- Zniesienie limitu 13 kolumn</li>
            </ul>

            <h3 class="main-changes__date">17.12.2022</h3>
            <ul class="main-changes__list">
              <li>- Naprawienie błędów z wyświetlaniem trybu jasnego</li>
            </ul>

            <h3 class="main-changes__date">16.12.2022</h3>
            <ul class="main-changes__list">
              <li>- Dodanie trybu jasnego strony</li>
            </ul>

            <h3 class="main-changes__date">13.12.2022</h3>
            <ul class="main-changes__list">
              <li>- Naprawienie błędu losowania pustych imion i nazwisk</li>
            </ul>

            <h3 class="main-changes__date">07.12.2022</h3>
            <ul class="main-changes__list">
              <li>- Poprawiono wygląd z dodawanymi kolumnami</li>
            </ul>

            <h3 class="main-changes__date">01.12.2022</h3>
            <ol class="main-changes__list">
              <li>
                Dodanie nowych funkcji:
                <ul>
                  <li>
                    - Usuwanie i dodawanie wierszy kolumn (ograniczono do 13-stu
                    w darmowej wersji)
                  </li>
                  <li>- Pobieranie wygenerowanej bazy danych</li>
                </ul>
              </li>
            </ol>

            <h3 class="main-changes__date">30.11.2022</h3>
            <ol class="main-changes__list">
              <li>
                Dodanie danych:
                <ul>
                  <li>- Data urodzenia</li>
                  <li>- Numer karty kredytowej</li>
                </ul>
              </li>
              <li>
                Dodanie nowych funkcji:
                <ul>
                  <li>- Utworzenie tabeli</li>
                </ul>
              </li>
            </ol>

            <h3 class="main-changes__date">29.11.2022</h3>
            <ol class="main-changes__list">
              <li>
                Dodanie danych:
                <ul>
                  <li>- Kraj - Polska</li>
                  <li>- Miasta</li>
                  <li>- Marka samochodu</li>
                  <li>- Model samochodu</li>
                  <li>- Kolor</li>
                </ul>
              </li>
            </ol>

            <h3 class="main-changes__date">28.11.2022</h3>
            <ol class="main-changes__list">
              <li>
                Dodanie danych:
                <ul>
                  <li>- Imiona męskie</li>
                  <li>- Nazwiska męskie</li>
                  <li>- Imiona żeńskie</li>
                  <li>- Nazwiska żeńskie</li>
                  <li>- Płeć</li>
                </ul>
              </li>
            </ol>
          </section>
        </main>

        <footer class="footer">
          <p class="footer__p">
            &copy; alemlodyigor Do not copy code or any part of that without
            permissions
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
