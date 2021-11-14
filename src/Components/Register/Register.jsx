import BackgroundLayout from '../UI/BackgroundLayout/BackgroundLayout'
import ModalLayout from '../UI/ModalLayout/ModalLayout'
import classes from './Register.module.css'
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { saveToGoogleTable } from '../../Redux/commonReducer'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#940014'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#940014' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        },
        '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            marginTop: 5
        }
    }
}));

const Register = (props) => {
    const { onClose, userURL, saveToGoogleTable, packetType } = props

    const material = useStyles()

    const { t } = useTranslation()

    const { handleSubmit, control, reset } = useForm()

    const onSubmit = (data) => {
        data.email = data.email.toLowerCase()
        data.userURL = userURL
        data.packetType = packetType

        saveToGoogleTable(data)

        reset({
            name: "",
            email: "",
            phone: ""
        })
    }

    return(
        <BackgroundLayout>
            <ModalLayout onClose={onClose} className={classes.window}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.field}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: t("errors.required") }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    classes={material}
                                    label={t("form.name")}
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                    autoComplete="off"
                                />
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{ 
                                required: {
                                    value: true,
                                    message: t("errors.required")
                                },
                                pattern: {
                                    value: /^[0-9+]\d{9,13}$/,
                                    message: t("errors.phone")
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    classes={material}
                                    label={t("form.phone")}
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                    autoComplete="off"
                                />
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ 
                                required: {
                                    value: true,
                                    message: t("errors.required")
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                    message: t("errors.email")
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    classes={material}
                                    label={t("form.email")}
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                    autoComplete="off"
                                />
                            )}
                        />
                    </div>
                    <Button type="submit">{t("actions.register")}</Button>
                </form>
            </ModalLayout>
        </BackgroundLayout>
    )
}


export default connect(null, {
    saveToGoogleTable
})(Register)