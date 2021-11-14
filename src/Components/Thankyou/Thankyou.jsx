import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { setIsSuccess } from '../../Redux/commonReducer'
import BackgroundLayout from '../UI/BackgroundLayout/BackgroundLayout'
import ModalLayout from '../UI/ModalLayout/ModalLayout'
import classes from './Thankyou.module.css'

const Thankyou = (props) => {
    const { onClick, setIsSuccess, currentLanguage } = props

    const navigate = useNavigate()

    const handleModal = () => {
        navigate(`/?lang=${currentLanguage}`)
        onClick()
        setIsSuccess(false)
    }

    const { t } = useTranslation()

    return(
        <BackgroundLayout>
            <ModalLayout onClose={handleModal} className={classes.window}>
                <p className={classes.text}>{t("thankyou")}</p>
            </ModalLayout>
        </BackgroundLayout>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setIsSuccess
})(Thankyou)