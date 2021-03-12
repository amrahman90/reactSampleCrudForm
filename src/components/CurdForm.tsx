import React, { useState, useEffect } from 'react';
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

    const [numberOfData, setNumberOfData] = useState(6);

    const [selectValues, setSelectValue] = useState([
        { currentValue: 'none', id: '0' },
        { currentValue: 'none', id: '1' },
        { currentValue: 'none', id: '2' },
        { currentValue: 'none', id: '3' },
        { currentValue: 'none', id: '4' },
        { currentValue: 'none', id: '5' },
        { currentValue: 'none', id: '6' }
    ]);

    const [activeSelected, setActiveSelected] = useState([
        { currentValue: 'none', id: '0' },
        { currentValue: 'none', id: '1' },
        { currentValue: 'none', id: '2' },
        { currentValue: 'none', id: '3' },
        { currentValue: 'none', id: '4' },
        { currentValue: 'none', id: '5' },
        { currentValue: 'none', id: '6' }
    ]);

    const selectOnChangeHandler = (event: any, selectId: string) => {
        console.log('debug-event ', event.target.value, event.target.id);


        const values = [...activeSelected];
        const index = parseInt(selectId);
        const selectValue = event.target.value;

        values[index].currentValue = selectValue;
        values[index].id = selectId;

        console.log('active select ', values);
        setActiveSelected(values);

    }

    const selectGenerator = (currentValue: string, selectId: string) => {

        const options = [];

        options.push(
            <option value={0}>None</option>
        );

        for (let i = 1; i <= numberOfData; ++i) {
            options.push(<option key={i} value={i}>{i}</option>);
        }

        return (
            <Select
                native
                onChange={(e) => selectOnChangeHandler(e, selectId)}
                defaultValue={currentValue}
                inputProps={{
                    name: selectId,
                    id: selectId,
                }}
            >
                {options}

            </Select>

        );
    }



    useEffect(() => {

        const values = [...selectValues];

        activeSelected.forEach((currentSelected, index) => {

            if (currentSelected.currentValue === 'none') {
                values[index].currentValue = `${index}`;
                values[index].id = `${index}`;
            }
            else {
                values[index].currentValue = currentSelected.currentValue;
                values[index].id = currentSelected.id;
            }
        });

        setSelectValue(values);

        console.log('inside use effect ', values);

    }, [activeSelected]);


    const numberOfDataOnChangeHandler = (event: any) => {
        setNumberOfData(event.target.value);
        // console.log('debug-event ', event.target.value);
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
                {selectGenerator('0', '0')}
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
                {selectGenerator('0', '1')}
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
                {selectGenerator('0', '2')}

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Fabrication ID</p>
                {selectGenerator('0', '3')}

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Device ID</p>
                {selectGenerator('0', '4')}
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
                {selectGenerator('0', '5')}

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >
                    DNS ID
                </p>
                {selectGenerator('0', '6')}
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