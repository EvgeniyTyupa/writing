import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../Components/Navbar/Navbar'
import classes from './Main.module.css'
import Container from '../Components/UI/Container/Container'
import CustomButton from '../Components/UI/Button/CustomButton'
import { Button, Divider } from '@mui/material'
import { cx } from '../Utils/classnames'

import pen from "../Assets/pen.jpg"
import tesis from "../Assets/about.jpg"
import trener1 from '../Assets/irina.jpg'
import trener2 from "../Assets/uliana.jpg"
import whats from "../Assets/whats.png"
import viber from "../Assets/viber.png"
import inst from "../Assets/inst.png"
import fb from "../Assets/fb.png"
import globe from "../Assets/globe.png"
import tg from "../Assets/telegram.png"
import Register from '../Components/Register/Register'

import { useLocation, useNavigate } from 'react-router'
import { setCurrentLanguage } from '../Redux/commonReducer'

import Aos from 'aos';
import 'aos/dist/aos.css';

import { connect } from 'react-redux'
import Preloader from '../Components/Preloader/Preloader'
import Thankyou from '../Components/Thankyou/Thankyou'

const Main = (props) => {
    const { t, i18n } = useTranslation()

    const payRef = useRef(null)

    const search = useLocation().search
    const lang = new URLSearchParams(search).get('lang')

    const navigate = useNavigate()

    const [isActiveTrener1, setIsActiveTrener1] = useState(false)
    const [isActiveTrener2, setIsActiveTrener2] = useState(false)

    const [packetType, setPacketType] = useState(null)

    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)
    const [isOpenThankyou, setIsOpenThankyou] = useState(false)

    const [userURL, setUserURL] = useState(null)

    const handleRegister = (packetType) => {
        setPacketType(packetType)
        setIsOpenRegisterModal(!isOpenRegisterModal)
    }

    const closeRegister = () => {
        setPacketType(null)
        setIsOpenRegisterModal(false)
    }

    const handleThankyou = () => {
        setIsOpenThankyou(!isOpenThankyou)
    }

    const scrollToPaymentBlock = () => {
        payRef.current.scrollIntoView()
    }

    useEffect(() => {
        setUserURL(window.location.href)
    }, [])

    useEffect(() => {
        if(lang === "ru" || lang === "ua"){
            i18n.changeLanguage(lang)
            props.setCurrentLanguage(lang)
        }
    }, [])

    useEffect(() => {
        if(window.location.pathname === "/thankyou"){
            setIsOpenThankyou(true)
        }
    }, [window.location.pathname])

    useEffect(() => {
        navigate(window.location.pathname + `?lang=${props.currentLanguage}`)
    }, [props.currentLanguage])

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    useEffect(() => {
        if(props.isSuccess){
            switch(packetType){
                case "standart": {
                    setTimeout(function(){document.location.href = 'https://secure.wayforpay.com/button/b0056fa2382d0';}, 1000);
                    break
                }
                case "writer": {
                    setTimeout(function(){document.location.href = 'https://secure.wayforpay.com/button/b826eb270352b';}, 1000);
                    break
                }
            }
        }
    }, [props.isSuccess])

    return(
        <div className={classes.main}>
            {props.isFetching && <Preloader/>}
            {isOpenRegisterModal && <Register onClose={closeRegister} packetType={packetType} userURL={userURL}/>}
            {isOpenThankyou && <Thankyou onClick={handleThankyou}/>}
            <Navbar lang={lang}/>
            <Container>
                <div className={classes.home}>
                    <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">{t("home.title")}</h1>
                    <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="900">{t("home.subtitle")}</p>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500">Старт: 07/12</h2>
                    <ul data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2100">
                        <li>{t("home.points.one")} <strong>PROFI Space.</strong></li>
                        <li>{t("home.points.two")} <strong>{t("home.points.names")}</strong></li>
                        <li>{t("home.points.three")}</li>
                    </ul>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <CustomButton text={t("actions.register_now")} onClick={scrollToPaymentBlock}/>
                    </div>
                </div>
            </Container>
            <Divider light style={{ width: "100%", background: "#212529" }}/>
            <div className={classes.time}>
                <Container>
                    <div className={classes.date} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.counter}>
                            <h3>3</h3>
                            <span>{t("date.one")}</span>
                        </div>
                        <div className={cx(classes.counter, classes.centralCounter)}>
                            <h3>19:30 / 11:00</h3>
                            <span>{t("date.two")}</span>
                        </div>
                        <div className={classes.counter}>
                            <h3>7</h3>
                            <span>{t("date.three")}</span>
                        </div>
                    </div>
                    <div className={classes.dateBot}>
                        <div className={classes.dateText}>
                            <p>{t("date.text_one")}</p>
                            <p>{t("date.text_two")}</p>
                        </div>
                        <div className={classes.penContainer} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <img src={pen} alt="pen"/>
                        </div>
                    </div>

                    <Divider light style={{ width: "100%", background: "#212529" }}/>
                    <Divider light style={{ width: "100%", background: "#212529", marginTop: "15px" }}/>

                    <div className={classes.who} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.whoSide}>
                            <h1>{t("who.oneTitle")}</h1>
                            <p>{t("who.one")}</p>
                            <p>{t("who.two")}</p>
                        </div>
                        <p className={classes.arrow}>&gt;&gt;</p>
                        <div className={classes.whoSide}>
                            <h1>{t("who.twoTitle")}</h1>
                            <p>{t("who.three")}</p>
                            <p>{t("who.four")}</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={classes.invite} data-aos="fade-up" data-aos-duration="1500">
                <div className={classes.inviteText}>
                    <p>{t("invite")}</p>
                </div>
                <CustomButton text={t("actions.register")} onClick={scrollToPaymentBlock}/>
            </div>
            <div className={classes.tesis}>
                <Container className={classes.tesisContainer}>
                    <div className={classes.tesisImage}>
                        <img src={tesis} alt="tesis"/>
                    </div>
                    <div className={classes.tesisText} data-aos="fade-left" data-aos-duration="1500">
                        <h2>{t("tesis.title1")}</h2>
                        <h2>{t("tesis.title2")}</h2>
                        <h2>ПРО:</h2>
                        <ul>
                            <li>{t("tesis.one")}</li>
                            <li>{t("tesis.two")}</li>
                            <li>{t("tesis.three")}</li>
                            <li>{t("tesis.four")}</li>
                            <li>{t("tesis.five")}</li>
                            <li>{t("tesis.six")}</li>
                            <li>{t("tesis.seven")}</li>
                            <li>{t("tesis.eight")}</li>
                            <li>{t("tesis.nine")}</li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className={classes.shedule}>
                <Container className={classes.sheduleContainer}>
                    <h2>{t("shedule.title")}</h2>
                    <div className={classes.dayBlock} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>19:30</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.one.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.one.one")}</span>
                                    <span>{t("shedule.one.two")}</span>
                                    <span>{t("shedule.one.three")}</span>
                                    <span>{t("shedule.one.four")}</span>
                                    <span>{t("shedule.one.five")}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>19:30</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.two.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.two.one")}</span>
                                    <span>{t("shedule.two.two")}</span>
                                    <span>{t("shedule.two.three")}</span>
                                    <span>{t("shedule.two.four")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.dayBlock} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>11:00</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.three.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.three.one")}</span>
                                    <span>{t("shedule.three.two")}</span>
                                    <span>{t("shedule.three.three")}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>19:30</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.four.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.four.one")}</span>
                                    <span>{t("shedule.four.two")}</span>
                                    <span>{t("shedule.four.three")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.dayBlock} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>19:30</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.five.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.five.one")}</span>
                                    <span>{t("shedule.five.two")}</span>
                                    <span>{t("shedule.five.three")}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>11:00</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.six.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.six.one")}</span>
                                    <span>{t("shedule.six.two")}</span>
                                    <span>{t("shedule.six.three")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.dayBlock} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.day}>
                            <div className={classes.dayTime}>
                                <p>19:30</p>
                            </div>
                            <div className={classes.sheduleText}>
                                <p>{t("shedule.seven.date")}</p>
                                <div className={classes.shedulePoints}>
                                    <span>{t("shedule.seven.one")}</span>
                                    <span>{t("shedule.seven.two")}</span>
                                    <span>{t("shedule.seven.three")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={classes.bonus} data-aos="fade-up" data-aos-duration="1500">
                <div className={classes.inviteText}>
                    <h4>БОНУС!</h4>
                    <p>{t("bonus")}</p>
                </div>
                <CustomButton text={t("actions.register")}/>
            </div>
            <Container className={classes.treners}>
                <h2>{t("treners.title")}</h2>
                <div className={classes.trener} data-aos="fade-up" data-aos-duration="1500">
                    <img src={trener1} alt="trener"/>
                    <h5>{t("treners.one.name")}</h5>
                    <Button onClick={() => setIsActiveTrener1(!isActiveTrener1)}>
                        <span>&gt;&gt;</span>
                    </Button>
                    <div className={cx(classes.trenerInfo, isActiveTrener1 && classes.activeTrener)}>
                        <p>{t("treners.one.subtitle")}</p>
                        <span>{t("treners.one.one")}</span>
                        <span>{t("treners.one.two")}</span>
                        <span>{t("treners.one.three")}</span>
                    </div>
                </div>
                <div className={classes.trener} data-aos="fade-up" data-aos-duration="1500">
                    <img src={trener2} alt="trener"/>
                    <h5>{t("treners.two.name")}</h5>
                    <Button onClick={() => setIsActiveTrener2(!isActiveTrener2)}>
                        <span>&gt;&gt;</span>
                    </Button>
                    <div className={cx(classes.trenerInfo, isActiveTrener2 && classes.activeTrener)}>
                        <p>{t("treners.two.subtitle")}</p>
                        <span>{t("treners.two.one")}</span>
                        <span>{t("treners.two.two")}</span>
                        <span>{t("treners.two.three")}</span>
                        <span>{t("treners.two.four")}</span>
                    </div>
                </div>
            </Container>
            <Container className={classes.payment}>
                <h2 ref={payRef}>{t("payment.title")}</h2>
                <div className={classes.prices} data-aos="fade-up" data-aos-duration="1500">
                    <div className={classes.price}>
                        <div className={classes.priceBorder}/>
                        <div className={classes.priceBlock}>
                            <p>999 грн</p>
                            <span>{t("payment.one.name")}</span>
                        </div>
                        <ul className={classes.paymentPoints}>
                            <li>{t("payment.one.one")}</li>
                            <li>{t("payment.one.two")}</li>
                            <li>{t("payment.one.three")}</li>
                        </ul>
                        <div className={classes.payBut}>
                            <CustomButton text={t("payment.one.pay")} type="green" onClick={() => handleRegister("standart")}/> 
                        </div>
                    </div>
                    <div className={classes.price}>
                        <div className={classes.priceBorder}/>
                        <div className={classes.priceBlock}>
                            <p>1599 грн</p>
                            <span>{t("payment.two.name")}</span>
                        </div>
                        <ul className={classes.paymentPoints}>
                            <li>{t("payment.two.one")}</li>
                            <li>{t("payment.two.two")}</li>
                            <li>{t("payment.two.three")}</li>
                            <li>{t("payment.two.four")}</li>
                            <li>{t("payment.two.five")}</li>
                            <li>{t("payment.two.six")}</li>
                            <li>{t("payment.two.seven")}</li>
                            <li>{t("payment.two.eight")}</li>
                        </ul>
                        <div className={classes.payBut}>
                            <CustomButton text={t("payment.two.pay")} type="green" onClick={() => handleRegister("writer")}/>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className={classes.paymentBut}>
                <CustomButton text={t("payment.one.pay")} type="green" onClick={() => handleRegister("standart")}/> 
                <CustomButton text={t("payment.two.pay")} type="green" onClick={() => handleRegister("writer")}/>
            </Container>
            <Container className={classes.footer}>
                <h2>QUESTIONS?</h2>
                <div className={classes.bot} data-aos="fade" data-aos-duration="1500">
                    <div className={classes.contact}>
                        <a href="tel:+380637678430">(063)767-84-30</a>
                        <span>{t("footer.name")}</span>
                        <a href="viber://add?number=380637678430" target="_blank">
                            <img src={viber} alt="viber" className={classes.viber}/>
                        </a>
                        <a href="whatsapp://send?phone=+380637678430" target="_blank">
                            <img src={whats} alt="whatsapp" className={classes.wahtsapp}/>
                        </a>
                    </div>
                    <div className={classes.contact}>
                        <a href="tel:+380979099165">(097)909-91-65</a>
                        <span>{t("footer.name2")}</span>
                        <a href="viber://add?number=380979099165" target="_blank">
                            <img src={viber} alt="viber" className={classes.viber}/>
                        </a>
                        <a href="whatsapp://send?phone=+380979099165" target="_blank">
                            <img src={whats} alt="whatsapp" className={classes.wahtsapp}/>
                        </a>
                    </div>
                </div>
                <div className={classes.links}>
                    <a href="https://www.instagram.com/profi_business_school/" target="_blank" rel="noreferrer nofollow">
                        <img src={inst} alt="instagram"/>
                    </a>
                    <a href="https://www.facebook.com/profispaceschool/" target="_blank" rel="noreferrer nofollow">
                        <img src={fb} alt="facebook"/>
                    </a>
                    <a href="https://t.me/profi_space" target="_blank" rel="noreferrer nofollow">
                        <img src={tg} alt="telegram"/>
                    </a>
                    <a href="https://www.profi-space.com/" target="_blank" rel="noreferrer nofollow">
                        <img src={globe} alt="web"/>
                    </a>
                </div>
            </Container>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isSuccess: state.common.isSuccess,
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Main)