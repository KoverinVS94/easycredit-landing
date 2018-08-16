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
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-moneyboom"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-cashme"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-pozichka"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-groshi247"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                        </div>
                        <div className={`${hashClasses["row"]} ${hashClasses["wrap-items-credit"]}`}>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-moneyboom"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-cashme"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-pozichka"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                            <div className={hashClasses["item"]}>
                                <div className={hashClasses["item-top"]}>
                                    <i className={`${hashClasses["icon"]} ${hashClasses["icon-logo-groshi247"]}`}/>
                                    <span>Для новых друзей 0,01%</span>
                                    <div className={hashClasses["separator"]} />
                                </div>
                                <div className={hashClasses["item-middle"]}>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Первый кредит</span>
                                        <span className={hashClasses["item-value"]}>до 10 000 ₴</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>25 000 ₴</span>
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
                                        <span className={hashClasses["item-key"]}>Сумма мах.</span>
                                        <span className={hashClasses["item-value"]}>15 мин.</span>
                                    </div>
                                    <div className={hashClasses["line"]}>
                                        <span className={hashClasses["item-key"]}>Срок</span>
                                        <span className={hashClasses["item-value"]}>680%</span>
                                    </div>
                                </div>
                                <div className={hashClasses["item-bottom"]}>
                                    <span>
                                        10000 грн. на 3 месяцев, комиссия 7200 грн.,
                                        общие затраты на займ составляют 17200 грн., APR 396%.
                                    </span>
                                </div>
                                <div className={hashClasses["btn-container"]}>
                                    <button className={hashClasses["btn-action"]}>Подать заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
