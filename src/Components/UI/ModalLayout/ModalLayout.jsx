import { useEffect } from 'react';
import { IconButton } from '@mui/material'
import classes from './ModalLayout.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { cx } from '../../../Utils/classnames';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ModalLayout = (props) => {
    const { children, onClose, className } = props

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={cx(classes.main, className)}  data-aos="zoom-in" data-aos-duration="200">
            <div className={classes.header}>
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default ModalLayout