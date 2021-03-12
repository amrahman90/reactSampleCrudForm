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

    const [selectValues, setSelectValue] = useState<Array<{ currentValue: string, id: string }>>([]);

    const [activeSelected, setActiveSelected] = useState([
        { currentValue: '0', id: '0' },
        { currentValue: '0', id: '1' },
        { currentValue: '0', id: '2' },
        { currentValue: '0', id: '3' },
        { currentValue: '0', id: '4' },
        { currentValue: '0', id: '5' },
        { currentValue: '0', id: '6' }
    ]);

    // const [selectLookUp, setSelectLookUp] = useState(new Map());

    const selectOnChangeHandler = (event: any, selectId: string) => {
        console.log('debug-event ', event.target.value, event.target.id);


        const values = [...activeSelected];
        const index = parseInt(selectId);
        const selectValue = event.target.value;

        values[index].currentValue = selectValue;
        values[index].id = selectId;

        console.log('active select ', values);
        setActiveSelected(values);

        // pushing the selected value for looking up in a constant time in Hashmap

        // setSelectLookUp(selectLookUp.set(selectValue, true));

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
                // defaultValue={currentValue}
                value={currentValue}
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

        const values: Array<{ currentValue: string, id: string }> = [];
        const selectLookUp = new Map();

        //First get the user inputted select values

        let userSelected = 0;

        activeSelected.forEach((current, idx) => {

            if (current.currentValue !== '0') {
                values[idx] = { currentValue: current.currentValue, id: current.id };
                selectLookUp.set(current.currentValue, true);
                userSelected++;
            }
            else {
                values[idx] = { currentValue: '0', id: current.id };
            }
        });

        // getting rest of the numbers

        const restOfValues: Array<string> = [];

        if (userSelected < numberOfData) {

            const remainingSelection = numberOfData - userSelected;

            let counter = 0;

            for (let i = 1; i <= 7; ++i) {
                if (!selectLookUp.has(`${i}`) && (counter < remainingSelection)) {
                    restOfValues.push(`${i}`);
                    counter++;
                }
            }
        }

        let index = 0;

        if (restOfValues.length > 0 && selectLookUp.size > 0) {
            values.forEach((current, idx) => {
                if (current.currentValue === '0') {
                    values[idx] = { currentValue: restOfValues[index], id: current.id };
                    index++;
                    // console.log('values ', current.currentValue);
                }
            });
        }

        setSelectValue(values);

        // console.log('inside use effect ', values);
        // console.log('select look up ', selectLookUp);
        // console.log('rem ', restOfValues);


    }, [activeSelected, numberOfData]);


    const numberOfDataOnChangeHandler = (event: any) => {
        setNumberOfData(event.target.value);

        setActiveSelected([
            { currentValue: '0', id: '0' },
            { currentValue: '0', id: '1' },
            { currentValue: '0', id: '2' },
            { currentValue: '0', id: '3' },
            { currentValue: '0', id: '4' },
            { currentValue: '0', id: '5' },
            { currentValue: '0', id: '6' }
        ]);
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
                {
                    selectValues[0] !== undefined
                        ?
                        selectGenerator(selectValues[0].currentValue, '0')
                        :
                        selectGenerator('0', '0')
                }
                <Checkbox
                    checked={true}
                />

                <p style={styles.inlineBlock}>Fabrication ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Fixed ID</p>
                {
                    selectValues[1] !== undefined
                        ?
                        selectGenerator(selectValues[1].currentValue, '1')
                        :
                        selectGenerator('0', '1')
                }
                <Checkbox
                    checked={true}
                />
                <p style={styles.inlineBlock}>Serial ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Serial ID</p>
                {
                    selectValues[2] !== undefined
                        ?
                        selectGenerator(selectValues[2].currentValue, '2')
                        :
                        selectGenerator('0', '2')
                }

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Fabrication ID</p>
                {
                    selectValues[3] !== undefined
                        ?
                        selectGenerator(selectValues[3].currentValue, '3')
                        :
                        selectGenerator('0', '3')
                }

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >Device ID</p>
                {
                    selectValues[4] !== undefined
                        ?
                        selectGenerator(selectValues[4].currentValue, '4')
                        :
                        selectGenerator('0', '4')
                }
                <Checkbox
                    checked={true}
                />
                <p style={styles.inlineBlock}>DNS ID included</p>

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >IP ID</p>
                {
                    selectValues[5] !== undefined
                        ?
                        selectGenerator(selectValues[5].currentValue, '5')
                        :
                        selectGenerator('0', '5')
                }

            </div>

            <div>
                <p
                    style={styles.inlineBlock}
                >
                    DNS ID
                </p>

                {
                    selectValues[6] !== undefined
                        ?
                        selectGenerator(selectValues[6].currentValue, '6')
                        :
                        selectGenerator('0', '6')
                }
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