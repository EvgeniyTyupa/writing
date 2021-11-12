import { Button } from '@mui/material'
import { cx } from '../../../Utils/classnames'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const { text, type = "reg", className, onClick } = props
    return(
        <Button className={cx(classes.main, type === "reg" ? classes.red : classes.green)} onClick={onClick}>
            {text}
        </Button>
    )
}

export default CustomButton