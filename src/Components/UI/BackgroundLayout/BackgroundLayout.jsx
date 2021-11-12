import { useEffect } from 'react';
import classes from './BackgroundLayout.module.css'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { cx } from '../../../Utils/classnames';

const BackgroundLayout = (props) => {
    const { className } = props

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={cx(classes.main, className)} data-aos="fade" data-aos-duration="300">
            {props.children}
        </div>
    )
}

export default BackgroundLayout