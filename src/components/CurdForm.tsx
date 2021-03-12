import React, { useState, useEffect } from 'react';
import {
    TextField,
    Checkbox,
    Grid,
    Radio,
    Select,
    Paper,
    Typography,
    Button
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

        <div style={{ marginTop: '100px' }}>
            <Grid container spacing={3}>
                <Grid item xs={3} >
                    <Typography>Name of the key</Typography>
                </Grid>
                <Grid item xs={9} >
                    <TextField id="outlined-basic" label="Name of the key" size="small" />
                </Grid>
                <Grid item xs={3} >
                    <Typography>Use Fixed ID</Typography>
                </Grid>
                <Grid item xs={1} >
                    <Checkbox
                        checked={true}
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField id="outlined-basic" label="ID Code" size="small" />
                </Grid>

                {/* Third Row */}

                <Grid item xs={3} >
                    <Typography>Header Line</Typography>
                </Grid>
                <Grid item xs={1} >
                    <Radio
                        value="d"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                    />
                </Grid>
                <Grid item xs={8} >

                    <Radio
                        value="d"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                    />
                </Grid>

                {/* Fourth Row */}
                <Grid item xs={3} >
                    <Typography>Separator Style</Typography>
                </Grid>

                <Grid item xs={9} >
                    <div>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                        <button>D</button>
                    </div>

                </Grid>

                {/* Fifth Row */}

                <Grid item xs={3} >
                    <Typography>Number of Data</Typography>
                </Grid>

                <Grid item xs={9} >
                    <TextField
                        onChange={numberOfDataOnChangeHandler}
                        size="small"
                        defaultValue={6}
                        InputProps={{ inputProps: { min: 1, max: 7 } }}
                        // style={{ marginLeft: '10px' }}
                        type="number"
                    />

                </Grid>

                {/* Sixth Row */}

                <Grid item xs={3} >
                    <Typography>DIN ID</Typography>
                </Grid>
                <Grid item xs={3} >
                    {
                        selectValues[0] !== undefined
                            ?
                            selectGenerator(selectValues[0].currentValue, '0')
                            :
                            selectGenerator('0', '0')
                    }
                </Grid>

                <Grid item xs={1} >
                    <Checkbox
                        checked={true}
                    />
                </Grid>


                <Grid item xs={5} >
                    <Typography>Fabrication ID included</Typography>
                </Grid>


                {/* Seventh Row  */}

                <Grid item xs={3} >
                    <Typography>Fixed ID</Typography>
                </Grid>

                <Grid item xs={3} >
                    {
                        selectValues[1] !== undefined
                            ?
                            selectGenerator(selectValues[1].currentValue, '1')
                            :
                            selectGenerator('0', '1')
                    }
                </Grid>

                <Grid item xs={1} >
                    <Checkbox
                        checked={true}
                    />
                </Grid>

                <Grid item xs={5} >
                    <Typography>Serial ID included</Typography>
                </Grid>

                {/* Eighth Row  */}

                <Grid item xs={3} >
                    <Typography>Serial ID</Typography>
                </Grid>

                <Grid item xs={9} >
                    {
                        selectValues[2] !== undefined
                            ?
                            selectGenerator(selectValues[2].currentValue, '2')
                            :
                            selectGenerator('0', '2')
                    }
                </Grid>

                {/* Ninth Row  */}

                <Grid item xs={3} >
                    <p
                        style={styles.inlineBlock}
                    >Fabrication ID</p>


                </Grid>
                <Grid item xs={9} >
                    {
                        selectValues[3] !== undefined
                            ?
                            selectGenerator(selectValues[3].currentValue, '3')
                            :
                            selectGenerator('0', '3')
                    }
                </Grid>

                {/* Tenth Row */}

                <Grid item xs={3} >
                    <Typography>Device ID</Typography>
                </Grid>

                <Grid item xs={3} >
                    {
                        selectValues[4] !== undefined
                            ?
                            selectGenerator(selectValues[4].currentValue, '4')
                            :
                            selectGenerator('0', '4')
                    }
                </Grid>

                <Grid item xs={1} >
                    <Checkbox
                        checked={true}
                    />
                </Grid>

                <Grid item xs={5} >
                    <Typography>DNS ID Included</Typography>
                </Grid>

                {/* Eleventh Row  */}

                <Grid item xs={3} >
                    <Typography>IP ID</Typography>
                </Grid>

                <Grid item xs={9} >
                    {
                        selectValues[5] !== undefined
                            ?
                            selectGenerator(selectValues[5].currentValue, '5')
                            :
                            selectGenerator('0', '5')
                    }
                </Grid>

                {/* twelfth Row  */}

                <Grid item xs={3} >
                    <Typography>DNS ID</Typography>
                </Grid>

                <Grid item xs={9} >
                    {
                        selectValues[6] !== undefined
                            ?
                            selectGenerator(selectValues[6].currentValue, '6')
                            :
                            selectGenerator('0', '6')
                    }
                </Grid>

                <Grid
                    item xs={6}
                    direction="row"
                    alignItems="flex-end" justify="flex-end"
                >
                    <Button variant="contained" color="primary">Save</Button>
                </Grid>

                <Grid item xs={6}>
                    <Button variant="contained" color="primary">Cancel</Button>
                </Grid>

            </Grid>
        </div>
    );
}

export default CurdForm;