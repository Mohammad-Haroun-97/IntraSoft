import React from 'react'
import {FormControl,makeStyles,TextField} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

const useStyle=makeStyles((theme)=>({
    formControl:{
width:'267px'
    },
    formControlFullWidth:{
        width:'267px'

    }

}))

function Language({fullWidth=false,multiple=false}) {
const styles=useStyle()
    return (
        <>
        <FormControl  fullWidth={false} className={multiple || fullWidth ? styles.formControl :styles.formControlFullWidth } >
        <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" 
      />
    }
    />
        </FormControl>
        </>
    )
    
}

const top100Films=[
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
]

export default Language