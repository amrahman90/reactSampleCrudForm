import React from 'react';
import {
    TextField,
    Checkbox,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select
} from '@material-ui/core/';

const CurdForm: React.FunctionComponent = () => {

    const styles = {
        inlineBlock: {
            display: 'inline-block',
            marginRight: '10px'
        }
    }

    const numberOfDataOnChangeHandler = (event: any) => {
        console.log('debug-event ', event.target.value);
    }


    return (

        <form>
            <div>
                <p style={styles.inlineBlock}>
                    Name of the key
                </p>
                <TextField style={{ display: 'inline-block', marginLeft: '10px' }} id="outlined-basic" label="Name of the key" size="small" />
            </div>
            <div>
                <p style={styles.inlineBlock}>Use Fixed ID</p>
                <Checkbox
                    checked={true}
                />
                <TextField id="outlined-basic" label="ID Code" size="small" />
            </div>
            <div>
                <p
                    style={styles.inlineBlock}
                >Header Line</p>
                <Radio
                    style={styles.inlineBlock}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />

                <Radio
                    style={styles.inlineBlock}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
            </div>

            <div>
                <p style={styles.inlineBlock}>Separator Style</p>
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                </div>

            </div>

            <div>
                <p style={styles.inlineBlock}>Number of Data</p>
                <TextField
                    onChange={numberOfDataOnChangeHandler}
                    size="small"
                    defaultValue={6}
                    InputProps={{ inputProps: { min: 1, max: 7 } }}
                    style={{ display: 'inline-block', marginLeft: '10px' }}
                    type="number"
                />
            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >DIN ID</p>
                <Select
                    native
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>Ten</option>
                    <option value={2}>Twenty</option>
                    <option value={3}>Thirty</option>
                </Select>
                <Radio
                    style={styles.inlineBlock}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <p style={styles.inlineBlock}>Fabrication ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Fixed ID</p>
                <TextField
                    style={styles.inlineBlock}
                    id="outlined-basic" label="Fixed ID" size="small" />
                <Radio
                    style={styles.inlineBlock}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <p style={styles.inlineBlock}>Serial ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Serial ID</p>
                <TextField
                    style={styles.inlineBlock}
                    id="outlined-basic" label="Serial ID" size="small" />

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Fabrication ID</p>
                <TextField
                    style={styles.inlineBlock}
                    id="outlined-basic" label="Fabrication ID" size="small" />

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Device ID</p>
                <TextField
                    style={styles.inlineBlock}
                    id="outlined-basic" label="Device ID" size="small" />
                <Radio
                    style={styles.inlineBlock}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <p style={styles.inlineBlock}>DNS ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >IP ID</p>
                <TextField
                    style={styles.inlineBlock}
                    id="outlined-basic" label="Device ID" size="small" />

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >
                    DNS ID
                </p>

                <TextField

                    style={styles.inlineBlock}
                    id="outlined-basic" label="Device ID" size="small"
                />
            </div>

            <div>
                <button>
                    Save
                </button>
                <button>
                    Cancel
                </button>
            </div>

        </form>

    );
}

export default CurdForm;