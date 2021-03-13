import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, Grid, Radio, Select, Paper, Typography, Button } from '@material-ui/core/';

const CurdForm: React.FunctionComponent = () => {
  const styles = {
    inlineBlock: {
      display: 'inline-block',
      marginRight: '10px',
    },
  };

  //Regex for alphabets

  const alphabetsRegex = /^[A-Za-z]+$/;


  const [nameOfTheKey, setNameOfTheKey] = useState();
  const [isNameOfKeyHasError, setIsNameOfKeyHasError] = useState(false);

  const nameOfKeyChange = (event: any) => {


    console.log('name of key ', event.target.value);
  };


  const [numberOfData, setNumberOfData] = useState(6);
  const [selectIdToValue, setSelectIdToValue] = useState(new Map());

  const selectOnChangeHandler = (event: any, selectId: string) => {
    setSelectIdToValue(new Map(selectIdToValue.set(selectId, event.target.value)));
  };

  // useEffect(() => {
  //   console.log('selectId to value ', selectIdToValue);
  // }, [selectIdToValue]);

  const selectOptions = (selectId: string) => {
    const options = [];
    const availableOptions = [];
    const invokedList = new Map();

    selectIdToValue.forEach((entry, key) => {
      console.log('map', key, entry);

      if (entry !== '0') {
        invokedList.set(entry, true);
      }
    });

    for (let i = 1; i <= numberOfData; ++i) {
      if (!invokedList.has(`${i}`)) {
        availableOptions.push(i);
      }
    }

    if (selectIdToValue.has(selectId)) {
      if (selectIdToValue.get(selectId) !== '0') {
        availableOptions.push(parseInt(selectIdToValue.get(selectId)));
      }
    }

    availableOptions.sort();

    console.log('availableOptions ', availableOptions);

    options.push(
      <option key={0} value={0}>
        None
      </option>
    );

    availableOptions.forEach((option, index) => {
      options.push(
        <option key={index + 1} value={option}>
          {option}
        </option>
      );
    });

    return options;
  };

  useEffect(() => {
    selectIdToValue.forEach((entry, key) => {
      setSelectIdToValue(new Map(selectIdToValue.set(key, '0')));
    });
  }, [numberOfData]);

  const numberOfDataOnChangeHandler = (event: any) => {
    setNumberOfData(event.target.value);

    selectIdToValue.forEach((entry, key) => {
      setSelectIdToValue(new Map(selectIdToValue.set(key, '0')));
    });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography>Name of the key</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            value={nameOfTheKey}
            onChange={nameOfKeyChange}
            error={true}
            InputProps={{
              inputProps: {
                min: 1,
                max: 7,
                onKeyDown: (event) => {
                  if(!event.key.match(alphabetsRegex)){
                    event.preventDefault();
                    // console.log('true');
                  }
                  // console.log('onl key down ', event.key);
                },
              },
            }}
            id="outlined-basic"
            label="Name of the key"
            size="small"
          />
        </Grid>
        <Grid item xs={3}>
          <Typography>Use Fixed ID</Typography>
        </Grid>
        <Grid item xs={1}>
          <Checkbox checked={true} />
        </Grid>
        <Grid item xs={7}>
          <TextField id="outlined-basic" label="ID Code" size="small" />
        </Grid>

        {/* Third Row */}

        <Grid item xs={3}>
          <Typography>Header Line</Typography>
        </Grid>
        <Grid item xs={1}>
          <Radio value="d" color="default" name="radio-button-demo" inputProps={{ 'aria-label': 'D' }} />
        </Grid>
        <Grid item xs={8}>
          <Radio value="d" color="default" name="radio-button-demo" inputProps={{ 'aria-label': 'D' }} />
        </Grid>

        {/* Fourth Row */}
        <Grid item xs={3}>
          <Typography>Separator Style</Typography>
        </Grid>

        <Grid item xs={9}>
          <div>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
          </div>
        </Grid>

        {/* Fifth Row */}

        <Grid item xs={3}>
          <Typography>Number of Data</Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            onChange={numberOfDataOnChangeHandler}
            size="small"
            defaultValue={6}
            InputProps={{
              inputProps: {
                min: 1,
                max: 7,
                onKeyDown: (event) => {
                  event.preventDefault();
                },
              },
            }}
            // style={{ marginLeft: '10px' }}
            type="number"
          />
        </Grid>

        {/* Sixth Row */}

        <Grid item xs={3}>
          <Typography>DIN ID</Typography>
        </Grid>
        <Grid item xs={3}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('1')}
            onChange={(e) => selectOnChangeHandler(e, '1')}
            inputProps={{
              name: '1',
              id: '1',
            }}
          >
            {selectOptions('1')}
          </Select>
        </Grid>

        <Grid item xs={1}>
          <Checkbox checked={true} />
        </Grid>

        <Grid item xs={5}>
          <Typography>Fabrication ID included</Typography>
        </Grid>

        {/* Seventh Row  */}

        <Grid item xs={3}>
          <Typography>Fixed ID</Typography>
        </Grid>

        <Grid item xs={3}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('2')}
            onChange={(e) => selectOnChangeHandler(e, '2')}
            inputProps={{
              name: '2',
              id: '2',
            }}
          >
            {selectOptions('2')}
          </Select>
        </Grid>

        <Grid item xs={1}>
          <Checkbox checked={true} />
        </Grid>

        <Grid item xs={5}>
          <Typography>Serial ID included</Typography>
        </Grid>

        {/* Eighth Row  */}

        <Grid item xs={3}>
          <Typography>Serial ID</Typography>
        </Grid>

        <Grid item xs={9}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('3')}
            onChange={(e) => selectOnChangeHandler(e, '3')}
            inputProps={{
              name: '3',
              id: '3',
            }}
          >
            {selectOptions('3')}
          </Select>
        </Grid>

        {/* Ninth Row  */}

        <Grid item xs={3}>
          <p style={styles.inlineBlock}>Fabrication ID</p>
        </Grid>
        <Grid item xs={9}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('4')}
            onChange={(e) => selectOnChangeHandler(e, '4')}
            inputProps={{
              name: '4',
              id: '4',
            }}
          >
            {selectOptions('4')}
          </Select>
        </Grid>

        {/* Tenth Row */}

        <Grid item xs={3}>
          <Typography>Device ID</Typography>
        </Grid>

        <Grid item xs={3}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('5')}
            onChange={(e) => selectOnChangeHandler(e, '5')}
            inputProps={{
              name: '5',
              id: '5',
            }}
          >
            {selectOptions('5')}
          </Select>
        </Grid>

        <Grid item xs={1}>
          <Checkbox checked={true} />
        </Grid>

        <Grid item xs={5}>
          <Typography>DNS ID Included</Typography>
        </Grid>

        {/* Eleventh Row  */}

        <Grid item xs={3}>
          <Typography>IP ID</Typography>
        </Grid>

        <Grid item xs={9}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('6')}
            onChange={(e) => selectOnChangeHandler(e, '6')}
            inputProps={{
              name: '6',
              id: '6',
            }}
          >
            {selectOptions('6')}
          </Select>
        </Grid>

        {/* twelfth Row  */}

        <Grid item xs={3}>
          <Typography>DNS ID</Typography>
        </Grid>

        <Grid item xs={9}>
          <Select
            native
            defaultValue={'None'}
            value={selectIdToValue.get('7')}
            onChange={(e) => selectOnChangeHandler(e, '7')}
            inputProps={{
              name: '7',
              id: '7',
            }}
          >
            {selectOptions('7')}
          </Select>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurdForm;
