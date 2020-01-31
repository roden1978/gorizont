import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";

export const renderTextField = ({
                                    label,
                                    input,
                                    value,
                                    meta: {touched, invalid, error},
                                    inputProps,
    full,
                                    ...custom

                                }) => (
    <TextField
        label={label}
        value={input.value}
        placeholder={label}
        error={touched && invalid}
        fullWidth={full}
        helperText={touched && error}
        {...input}
        {...inputProps}
        {...custom}
    />
)

export const renderCheckbox = ({input, label, disabled}) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                    disabled={disabled}
                />
            }
            label={label}
        />
    </div>
)

/*export const radioButton = ({input, ...rest}) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
        </RadioGroup>
    </FormControl>
)*/

export const renderFromHelper = ({touched, error}) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

export const renderSelectField = ({
                                      input,
                                      label,
                                      meta: {touched, error},
                                      children,
                                      ...custom
                                  }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
            native
            onChange={input.onChange}
            {...input}
            {...custom}
        >
            {children}
        </Select>
        {renderFromHelper({touched, error})}
    </FormControl>
)

