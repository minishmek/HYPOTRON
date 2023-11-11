import React from 'react';
import '../css/style.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div>
      <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo" href="index.html">HYPOTRON</a>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__list-item">
              <a href="pages/hypoxic_training.html" class="menu__list-link">Гіпоксичні тренування</a>
            </li>
            <li class="menu__list-item">
              <a href="pages/device.html" class="menu__list-link">Пристрій</a>
            </li>
            <li class="menu__list-item">
              <a href="pages/scientific_works.html" class="menu__list-link">Наукові праці</a>
            </li>
            <li class="menu__list-item">
              <a href="pages/working_with_the_device.html" class="menu__list-link">Робота з пристроєм</a>
            </li>
            <li class="menu__list-item">
              <a href="pages/contacts.html" class="menu__list-link">Контакти</a>
            </li>
          </ul>
        </nav>
        <div class="user-nav">
          <a class="user-nav__link" href="/login">Вхід</a>
          <a class="user-nav__link" href="/register">Реєстрація</a>
        </div>
      </div>
    </div>
  </header>
  <section class="top">
    <div class="container">
      <div class="top__inner">
        <h1 class="top__title">
          АПАРАТ ІНТЕРВАЛЬНИХ НОРМОБАРИЧНИХ ГІПОКСИЧНИХ ТРЕНУВАНЬ ОРГАНІЗМУ
          «ГІПОТРОН»
        </h1>
        <p class="top__text">
          Апарат інтервальних нормобаричних гіпоксичних тренувань організму
          «ГІПОТРОН» призначений для підвищення неспецифічної резистентності
          організму до екстремальних факторів методом зворотного дихання з
          підтримкою концентрації кисню на заданому рівні в камері дихання.
        </p>
        <p class="top__text">
          Апарат застосовується для підвищення стійкості організму до радіаційного опромінення; для лікування неспецифічних захворювань органів дихання; для лікування серцево-судинної системи, органів кровотворення, алергічних захворювань шкіри, діабету, хронічних гінекологічних захворювань; для стимуляції системи імунологічного захисту.
        </p>
        <a class="top__link" href="pages/login_doctor.html">Почати</a>
      </div>
    </div>
  </section>
  <footer class="footer_main">
    <div class="container">
      <p class="footer__text">© 2023 HYPOTRON. Всі права захищені.</p>
    </div>
  </footer>
    </div>
  );
};

export default Home;