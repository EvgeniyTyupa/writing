import classes from './Navbar.module.css'
import logo from '../../Assets/logo.png'
import { useTranslation } from 'react-i18next'
import { MenuItem, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { connect } from 'react-redux'
import { setCurrentLanguage } from '../../Redux/commonReducer'
import Container from '../UI/Container/Container'

const useSelectStyles = makeStyles({
    root: {
        color: "#212529",
        outline: "none",
        '& .MuiOutlinedInput-notchedOutline': {
            border: "none"
        },
        '& .MuiOutlinedInput-input': {
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInputBase-root': {
            color: '#212529',
            fontSize: "19px",
            fontWeight: 300,
            fontFamily: 'Helvetica',
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:before':{
            borderBottom: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:after':{
            borderBottom: "none",
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-select': {
            paddingBottom: 0,
            color: '#212529',
            border: "none",
            outline: "none",
            fontSize: "16px"
        },
        '& .MuiSelect-selectMenu': {
            minHeight: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-icon': {
            color: '#212529',
            border: "none",
            outline: "none",
        }
    }
})

const Navbar = (props) => {
    const { currentLanguage, lang } = props

    const { t, i18n } = useTranslation()

    const material = useSelectStyles()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        props.setCurrentLanguage(event.target.value)
    }

    return(
        <div className={classes.main}>
            <Container className={classes.container}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.side}>
                    <h2>{t("navbar")}</h2>
                    <TextField select defaultValue={lang ? lang : "ru"} classes={material} onChange={handleLanguage} variant="outlined">
                        <MenuItem value="ru">RU</MenuItem>
                        <MenuItem value="ua">UA</MenuItem>
                    </TextField>
                </div>
            </Container>
        </div>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Navbar)