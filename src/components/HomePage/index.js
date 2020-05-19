import React, {Fragment} from "react";

const MyHomePage = (props) => {
  return(
    <Fragment>
    <header className="header">
    <nav className="nav container">
        <ul className="nav__list d-none d-md-flex">
            <li className="nav__item">
                <a
                    href="#"
                    className="nav__link active"
                    onclick="setActive(this)"
                >
                    HOME
                </a>
            </li>
            <li className="nav__item">
                <a
                    href="#contact"
                    className="nav__link"
                    onclick="setActive(this)"
                >
                    GET IN TOUCH
                </a>
            </li>
            <li className="nav__item">
                <a
                    href="#values"
                    className="nav__link"
                    onclick="setActive(this)"
                >
                    VALUES
                </a>
            </li>
            <li className="nav__item">
                <a
                    href="#projects"
                    className="nav__link"
                    onclick="setActive(this)"
                >
                    PROJECTS
                </a>
            </li>
        </ul>
        <div className="nav__icon d-md-none">
            <a href="javascript:;" onclick="toggleNavMenu()">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M31.5 18H11.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M31.5 9H17.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M31.5 27H4.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
        <div className="nav-mobile">
            <ul className="nav__list">
                <li className="nav__item">
                    <a
                        href="#"
                        className="nav__link active"
                        onclick="setActive(this)"
                    >
                        HOME
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        href="#contact"
                        className="nav__link"
                        onclick="setActive(this)"
                    >
                        GET IN TOUCH
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        href="#values"
                        className="nav__link"
                        onclick="setActive(this)"
                    >
                        VALUES
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        href="#projects"
                        className="nav__link"
                        onclick="setActive(this)"
                    >
                        PROJECTS
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        className="nav__link nav__link--close"
                        onclick="closeNavMobile()"
                    >
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M45 15L15 45"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15 15L45 45"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main>
    <div className="container">
        <section>
            <div className="row align-items-center landing">
                <div className="d-md-none col-12">
                    <div className="landing__image">
                        <img
                            src="./assets/img/adokiye.png"
                            alt="Adokiye Iruene"
                        />
                    </div>
                </div>
                <div className="col-md-7">
                    <h2 className="font-weight-normal">Hi.</h2>
                    <h1 className="font-weight-normal bebas landing__title">
                        I'M
                        <span className="primary">{ ADOKIYE }</span>
                        &amp; I'M A FULL-STACK WEB DEVELOPER
                    </h1>
                    <h3 className="font-weight-light landing__hero">
                        I’m an enthusiastic web developer and I have
                        developed simple and intelligent solutions from
                        complex requirements. I’m available for remote
                        gigs. Let’s make something special
                    </h3>
                    <a href="#contact" className="landing__link">HIRE ME</a>
                </div>
                <div className="d-none d-md-block col-md-5">
                    <div className="landing__image">
                        <img
                            src="./assets/img/adokiye.png"
                            alt="Adokiye Iruene"
                        />
                    </div>
                </div>
                <div className="landing__scroll">
                    <a href="#values">
                        <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.41666 3.5L13 13.0833L22.5833 3.5"
                                stroke="#9038FF"
                                stroke-width="5.27083"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.41666 3.5L13 13.0833L22.5833 3.5"
                                stroke="#9038FF"
                                stroke-width="5.27083"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section id="values" className="values">
            <div className="values__title">
                <h2 className="bebas text-center">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.2182 34.9272L20.5455 22.5999L8.2182 10.2726"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.6546 39.0363L41.0909 39.0363"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Values
                </h2>
                <h4 className="landing__hero values__hero">
                    These are the values i bring to the table and
                    more...
                </h4>
            </div>
            <div className="row values__item--box">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6 values__item">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M48 10.6667H16C13.0545 10.6667 10.6667 13.0545 10.6667 16V48C10.6667 50.9455 13.0545 53.3333 16 53.3333H48C50.9455 53.3333 53.3333 50.9455 53.3333 48V16C53.3333 13.0545 50.9455 10.6667 48 10.6667Z"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40 24H24V40H40V24Z"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M24 2.66666V10.6667"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40 2.66666V10.6667"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M24 53.3333V61.3333"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40 53.3333V61.3333"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M53.3333 24H61.3333"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M53.3333 37.3333H61.3333"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.66667 24H10.6667"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.66667 37.3333H10.6667"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="mt-3">
                                Team Work
                            </p>
                        </div>
                        <div className="col-6 values__item">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M56 42.6667V21.3333C55.999 20.3981 55.7522 19.4795 55.2841 18.6698C54.8161 17.86 54.1433 17.1876 53.3333 16.72L34.6667 6.05334C33.8559 5.58524 32.9362 5.33881 32 5.33881C31.0638 5.33881 30.1441 5.58524 29.3333 6.05334L10.6667 16.72C9.8567 17.1876 9.18395 17.86 8.7159 18.6698C8.24785 19.4795 8.00096 20.3981 8 21.3333V42.6667C8.00096 43.6019 8.24785 44.5205 8.7159 45.3302C9.18395 46.14 9.8567 46.8124 10.6667 47.28L29.3333 57.9467C30.1441 58.4148 31.0638 58.6612 32 58.6612C32.9362 58.6612 33.8559 58.4148 34.6667 57.9467L53.3333 47.28C54.1433 46.8124 54.8161 46.14 55.2841 45.3302C55.7522 44.5205 55.999 43.6019 56 42.6667Z"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20 11.2267L32 18.16L44 11.2267"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20 52.7733V38.9333L8 32"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M56 32L44 38.9333V52.7733"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.72 18.56L32 32.0267L55.28 18.56"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M32 58.88V32"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="mt-3">Speed</p>
                        </div>
                        <div
                            className="col-6 values__item values__item--small"
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32 21.3333C45.2548 21.3333 56 17.7516 56 13.3333C56 8.91504 45.2548 5.33331 32 5.33331C18.7452 5.33331 8 8.91504 8 13.3333C8 17.7516 18.7452 21.3333 32 21.3333Z"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M56 32C56 36.4267 45.3333 40 32 40C18.6667 40 8 36.4267 8 32"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8 13.3333V50.6667C8 55.0933 18.6667 58.6667 32 58.6667C45.3333 58.6667 56 55.0933 56 50.6667V13.3333"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="mt-3">
                                Communication
                            </p>
                        </div>
                        <div
                            className="col-6 values__item values__item--small"
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M39.2 16.8C38.7114 17.2985 38.4377 17.9686 38.4377 18.6667C38.4377 19.3647 38.7114 20.0348 39.2 20.5333L43.4667 24.8C43.9652 25.2886 44.6353 25.5623 45.3333 25.5623C46.0314 25.5623 46.7015 25.2886 47.2 24.8L57.2533 14.7467C58.5942 17.7098 59.0002 21.0113 58.4172 24.211C57.8342 27.4108 56.2899 30.3569 53.9901 32.6567C51.6903 34.9566 48.7442 36.5009 45.5444 37.0839C42.3446 37.6669 39.0432 37.2609 36.08 35.92L17.6533 54.3467C16.5925 55.4075 15.1536 56.0035 13.6533 56.0035C12.153 56.0035 10.7142 55.4075 9.65333 54.3467C8.59247 53.2858 7.99648 51.8469 7.99648 50.3467C7.99648 48.8464 8.59247 47.4075 9.65333 46.3467L28.08 27.92C26.7391 24.9568 26.3331 21.6554 26.9161 18.4556C27.4991 15.2558 29.0434 12.3097 31.3433 10.0099C33.6431 7.71009 36.5892 6.16577 39.789 5.58277C42.9887 4.99976 46.2902 5.40576 49.2533 6.74665L39.2267 16.7733L39.2 16.8Z"
                                    stroke="#9038FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="mt-3">
                                Adaptability
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-none d-md-block col-md-6">
                    <div className="values__item values__item--large">
                        <img
                            src="./assets/img/values.svg"
                            alt="Values"
                        />
                        <p>I bring all to the table and more...</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="projects" id="projects">
            <div className="projects__title text-center text-md-left">
                <h2 className="bebas">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.2182 34.9272L20.5455 22.5999L8.2182 10.2726"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.6546 39.0363L41.0909 39.0363"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Projects
                </h2>
                <ul className="projects__list">
                    <li className="projects__item active">
                        <a href="#">ALL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">LARAVEL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">NODE JS</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">REACT NATIVE</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">FLUTTER</a>
                    </li>
                </ul>
            </div>

            <div className="project__list">
                <div className="project__item row sele">
                    <div className="col-5 col-md-6 project__item--box">
                        <h2 className="project__title">Sele</h2>
                        <h4 className="project__subtitle">
                            Talent Acclerator
                        </h4>
                        <a className="project__link" href="sele.html">
                            View Work
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.75 15H23.25"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.25 6.25L25 15L16.25 23.75"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="project__image">
                        <img src="./assets/img/sele.png" alt="Sele" />
                    </div>
                </div>
                <div className="project__item row move">
                    <div className="col-5 col-md-6 project__item--box">
                        <h2 className="project__title">9Move</h2>
                        <h4 className="project__subtitle">
                            Ride Hailing App
                        </h4>
                        <a className="project__link" href="sele.html">
                            View Work
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.75 15H23.25"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.25 6.25L25 15L16.25 23.75"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="project__image">
                        <img
                            src="./assets/img/nine-move.png"
                            alt="9Move"
                        />
                    </div>
                </div>
                <div className="project__item row kalewo">
                    <div className="col-5 col-md-6 project__item--box">
                        <h2 className="project__title">Kalewo</h2>
                        <h4 className="project__subtitle">
                            Live Streaming
                            <br />
                            Service
                        </h4>
                        <a className="project__link" href="sele.html">
                            View Work
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.75 15H23.25"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.25 6.25L25 15L16.25 23.75"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="project__image">
                        <img
                            src="./assets/img/kalewo.png"
                            alt="Kalewo"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="row contact" id="contact">
            <div className="values__title col-md-5 svg-absolute">
                <h2 className="bebas text-center text-md-left mb-3">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.2182 34.9272L20.5455 22.5999L8.2182 10.2726"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.6546 39.0363L41.0909 39.0363"
                            stroke="#9038FF"
                            stroke-width="4.10909"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Have a project?
                </h2>
                <h4 className="landing__hero values__hero project__hero">
                    Lets build something amazing together
                </h4>
            </div>
            <div className="col-md-7">
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6">
                            <button className="btn btn__primary w-100">
                                Send Message
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M17.1691 2.125L8.74777 10.5464"
                                            stroke="white"
                                            stroke-width="1.72255"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.1691 2.125L11.8101 17.4366L8.74778 10.5464L1.85757 7.48405L17.1691 2.125Z"
                                            stroke="white"
                                            stroke-width="1.72255"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect
                                                x="0.326416"
                                                y="0.59375"
                                                width="18.3739"
                                                height="18.3739"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</main>
<footer className="footer">
    <div className="container">
        <div className="row mt-4">
            <div className="col-md-6 footer__link--box">
                <a href="twitter.com" className="footer__link">
                    <svg
                        width="33"
                        height="28"
                        viewBox="0 0 33 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M31.3164 2.08498C30.0125 3.0047 28.5688 3.70814 27.041 4.1682C26.221 3.22532 25.1312 2.55703 23.9189 2.25372C22.7067 1.9504 21.4306 2.0267 20.2632 2.47229C19.0957 2.91788 18.0933 3.71126 17.3915 4.74513C16.6896 5.779 16.3222 7.00347 16.339 8.25295V9.61453C13.9462 9.67657 11.5752 9.14589 9.43713 8.06974C7.29908 6.99359 5.46037 5.40538 4.08474 3.44656C4.08474 3.44656 -1.36159 15.7008 10.8926 21.1471C8.0885 23.0506 4.74804 24.005 1.36157 23.8703C13.6158 30.6782 28.5932 23.8703 28.5932 8.2121C28.592 7.83283 28.5555 7.45451 28.4843 7.08199C29.8739 5.71154 30.8546 3.98127 31.3164 2.08498V2.08498Z"
                            stroke="white"
                            stroke-width="2.72316"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
                <a href="facebook.com" className="footer__link">
                    <svg
                        width="34"
                        height="33"
                        viewBox="0 0 34 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.9887 2.72314H20.9039C19.0984 2.72314 17.3668 3.4404 16.09 4.71713C14.8133 5.99387 14.096 7.72548 14.096 9.53105V13.6158H10.0113V19.0621H14.096V29.9548H19.5424V19.0621H23.6271L24.9887 13.6158H19.5424V9.53105C19.5424 9.16994 19.6858 8.82362 19.9412 8.56827C20.1965 8.31292 20.5428 8.16947 20.9039 8.16947H24.9887V2.72314Z"
                            stroke="white"
                            stroke-width="2.72316"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
                <a href="instagram.com" className="footer__link">
                    <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.4689 2.72314H9.85308C6.09317 2.72314 3.04517 5.77115 3.04517 9.53105V23.1469C3.04517 26.9068 6.09317 29.9548 9.85308 29.9548H23.4689C27.2288 29.9548 30.2768 26.9068 30.2768 23.1469V9.53105C30.2768 5.77115 27.2288 2.72314 23.4689 2.72314Z"
                            stroke="white"
                            stroke-width="2.72316"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M22.1074 15.4814C22.2754 16.6146 22.0819 17.7719 21.5542 18.7887C21.0266 19.8056 20.1918 20.6301 19.1686 21.1452C18.1453 21.6602 16.9857 21.8395 15.8547 21.6575C14.7237 21.4755 13.6789 20.9415 12.8688 20.1315C12.0588 19.3214 11.5248 18.2766 11.3428 17.1456C11.1608 16.0146 11.3401 14.855 11.8551 13.8317C12.3701 12.8084 13.1947 11.9736 14.2115 11.446C15.2284 10.9184 16.3857 10.7249 17.5188 10.8929C18.6747 11.0643 19.7448 11.6029 20.5711 12.4292C21.3974 13.2554 21.936 14.3256 22.1074 15.4814Z"
                            stroke="white"
                            stroke-width="2.72316"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.1497 8.8501H24.1638"
                            stroke="white"
                            stroke-width="2.72316"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </div>
            <div className="d-none d-md-block col-md-6">
                <p className="footer__credits">
                    <span className="mr-3">Adokiye 2019</span>
                    <span>Designed by Inioluwa</span>
                </p>
            </div>
        </div>
    </div>
</footer>
</Fragment>
  );
};
export default MyHomePage;