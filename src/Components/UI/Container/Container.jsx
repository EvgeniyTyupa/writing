import { cx } from '../../../Utils/classnames'
import classes from './Container.module.css'

const Container = (props) => {
    return(
        <div className={cx(classes.main, props.className)}>
            {props.children}
        </div>
    )
}

export default Container