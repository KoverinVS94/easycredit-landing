import * as React from "react";
import { ControlledExpandElement } from "react-expand";

const hashClasses = require("main.scss");

export class SectionMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-main"]}`}>
                    <div className={hashClasses["container"]}>
                        <h1 className={hashClasses["title"]}>Лучшие сервисы онлайн кредитовния Украины</h1>
                        <p className={hashClasses["sub-title"]}>
                            Здесь вы можете найти, ознакомиться и
                            выбрать лучшие условия онлайн кредита.
                            Вся представленная ниже информация актуальна.
                        </p>
                        <div className={`${hashClasses["row"]} ${hashClasses["wrap-items-credit"]}`}>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-dinero"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 5000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>15 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 7 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,75%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://www.dinero.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-moneyveo"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 4 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>15 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>8 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,7%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://moneyveo.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-soscredit"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>10 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,07%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://soscredit.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-miloan"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>7 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 20 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>20 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>0,65%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://miloan.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-alexcredit"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 5 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>10 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,7%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://www.alexcredit.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-creditup"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 500 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>8 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,9%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://creditup.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-mycredit"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 35 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>20 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,6%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://mycredit.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-crediton"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>15 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 21 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,9%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://crediton.org.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-forzacredit"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 4 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>14 999 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 65 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,85%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://forzacredit.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-creditkasa"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 7 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 27 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>8 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>2%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://creditkasa.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-creditplus"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 3 500 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 1 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>1,8%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://creditplus.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-kfua"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 4 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма макс.</span>
                                        <span className={hashClasses["item-value"]}>15 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>от 5 до 30 дней </span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Возраст</span>
                                        <span className={hashClasses["item-value"]}>от 18 лет</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Рассмотрение</span>
                                        <span className={hashClasses["item-value"]}>20 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Процент в день</span>
                                        <span className={hashClasses["item-value"]}>2%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <a
                                    href="https://www.dinero.com.ua/"
                                    target="_blank"
                                    rel="noopener"
                                    className={hashClasses["btn-action"]}
                                >
                                    Подать заявку
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
