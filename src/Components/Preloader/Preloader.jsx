import classes from './Preloader.module.css'
import preloader from '../../Assets/preloader.svg'
import BackgroundLayout from '../UI/BackgroundLayout/BackgroundLayout'

const Preloader = (props) => {
    return(
        <BackgroundLayout className={classes.index}>
            <img src={preloader} alt="preloader" className={classes.main}/>
        </BackgroundLayout>
    )
}

export default Preloader