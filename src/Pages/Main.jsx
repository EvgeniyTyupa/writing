import { useTranslation } from 'react-i18next'
import Navbar from '../Components/Navbar/Navbar'
import classes from './Main.module.css'
import Container from '../Components/UI/Container/Container'
import CustomButton from '../Components/UI/Button/CustomButton'
import Divider from '@mui/material/Divider';
import { cx } from '../Utils/classnames'

import pen from "../Assets/pen.jpg"

const Main = (props) => {
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <Navbar/>
            <Container>
                <div className={classes.home}>
                    <h1>{t("home.title")}</h1>
                    <p>{t("home.subtitle")}</p>
                    <h2>Старт: 07/12</h2>
                    <ul>
                        <li>{t("home.points.one")} <strong>PROFI Space.</strong></li>
                        <li>{t("home.points.two")} <strong>{t("home.points.names")}</strong></li>
                        <li>{t("home.points.three")}</li>
                    </ul>
                    <CustomButton text={t("actions.register_now")}/>
                </div>
            </Container>
            <Divider light style={{ width: "100%", background: "#212529" }}/>
            <div className={classes.time}>
                <Container>
                    <div className={classes.date}>
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
                        <img src={pen} alt="pen"/>
                    </div>

                    <Divider light style={{ width: "100%", background: "#212529" }}/>
                    <Divider light style={{ width: "100%", background: "#212529", marginTop: "15px" }}/>

                    <div className={classes.who}>
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
            <div className={classes.invite}>
                <div className={classes.inviteText}>
                    <p>{t("invite")}</p>
                </div>
                <CustomButton text={t("actions.register")}/>
            </div>
        </div>
    )
}

export default Main