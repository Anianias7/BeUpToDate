import React from 'react'
import './Input.scss'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "../../themeConfig"

const InputField = ({
                        name,
                        type,
                        placeholder

                    }) => (

    <TextField className="Input"
           type={type}
           name={name}
           label={placeholder}
           placeholder={placeholder}/>

);

export default InputField;