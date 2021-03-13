import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, Grid, Radio, Select, Paper, Typography, Button } from '@material-ui/core/';

const CurdForm: React.FunctionComponent = () => {
  const styles = {
    inlineBlock: {
      display: 'inline-block',
      marginRight: '10px',
    },
  };

  const [numberOfData, setNumberOfData] = useState(6);
  const [selectIdToValue, setSelectIdToValue] = useState(new Map());

  //Regex for alphabets

  const alphabetsRegex = /^[A-Za-z]+$/;

  // Name of the key
  const [nameOfTheKey, setNameOfTheKey] = useState();
  const [isNameOfKeyHasError, setIsNameOfKeyHasError] = useState(false);
  //Use Fixed ID
  const [isFixedIdChecked, setIsFixedIdChecked] = useState(false);
  const [fixedIdCode, setFixedIdCode] = useState();

  //Header Line

  const [headerLine, setHeaderLine] = useState("yes");

  //Separator Style

  const [separatorStyle, setSeparatorStyle] = useState('');

  // Is Fabrication ID included

  const [isDisabledFabricationIdIncluded, setIsDisabledFabricationIdIncluded] = useState(true);
  const [isFabricationIdChecked, setIsFabricationIdChecked] = useState(false);

  // Is Serial ID included

  const [isDisabledSerialIdIncluded, setIsDisabledSerialIdIncluded] = useState(true);
  const [isSerialIdChecked, setIsSerialIdChecked] = useState(false);

  // Is DNS ID included

  const [isDisabledDNSIdIncluded, setIsDisabledDNSIdIncluded] = useState(true);
  const [isDNSIdChecked, setIsDNSIdChecked] = useState(false);


  const nameOfKeyChange = (event: any) => {
    console.log('name of key ', event.target.value);
  };

  const selectOnChangeHandler = (event: any, selectId: string) => {
    setSelectIdToValue(new Map(selectIdToValue.set(selectId, event.target.value)));
  };

  useEffect(() => {

    //When fabrication ID has got changed

    if (selectIdToValue.has('4') && selectIdToValue.get('4') !== '0') {
      setIsDisabledFabricationIdIncluded(false);
    }
    else {
      setIsDisabledFabricationIdIncluded(true);
    }

    // When serial ID has got changed

    if (selectIdToValue.has('3') && selectIdToValue.get('3') !== '0') {
      setIsDisabledSerialIdIncluded(false);
    }
    else {
      setIsDisabledSerialIdIncluded(true);
    }

    //When DNS ID has got changed


    if (selectIdToValue.has('7') && selectIdToValue.get('7') !== '0') {
      setIsDisabledDNSIdIncluded(false);
    }
    else {
      setIsDisabledDNSIdIncluded(true);
    }


  }, [selectIdToValue]);

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
            error={isNameOfKeyHasError}
            InputProps={{
              inputProps: {
                maxLength: 10,
                onKeyDown: (event) => {
                  if (!event.key.match(alphabetsRegex)) {
                    event.preventDefault();
                  }
                },
              },
            }}
            id="outlined-basic"
            label={"Name of the key"}
            helperText={isNameOfKeyHasError ? "Cannot be empty" : null}
            size="small"
          />
        </Grid>
        <Grid item xs={3}>
          <Typography>Use Fixed ID</Typography>
        </Grid>
        <Grid item xs={1}>
          <Checkbox onClick={() => {
            setIsFixedIdChecked(!isFixedIdChecked);
          }} checked={isFixedIdChecked} />
        </Grid>
        <Grid item xs={7}>
          <TextField
            disabled={isFixedIdChecked ? true : false}
            id="outlined-basic"
            inputProps={{ maxLength: 3 }}
            label="ID Code"
            size="small" />
        </Grid>

        {/* Third Row */}

        <Grid item xs={3}>
          <Typography>Header Line</Typography>
        </Grid>

        <Grid item xs={9}>
          <div className="radio-toolbar">
            <input
              onChange={(e) => {
                setHeaderLine(e.target.value);
              }}

              type="radio"
              id="radioYes"
              name="headerLine"
              value="yes"
              defaultChecked={true}
            ></input>
            <label htmlFor="radioYes">Yes</label>

            <input
              onChange={(e) => {
                setHeaderLine(e.target.value);
              }}
              type="radio"
              id="radioNo"
              name="headerLine"
              value="no"></input>
            <label htmlFor="radioNo">No</label>
          </div>
        </Grid>

        {/* Fourth Row */}
        <Grid item xs={3}>
          <Typography>Separator Style</Typography>
        </Grid>

        <Grid item xs={9}>
          <div className="radio-toolbar-separator">
            <input onChange={(e) => {
              setSeparatorStyle(e.target.value);
              console.log('header line radio ', e.target.value);
            }}
              type="radio" id="a" name="SeparatorStyle" value="A"></input>
            <label htmlFor="a">A</label>

            <input onChange={(e) => {
              setSeparatorStyle(e.target.value);

              console.log('header line radio ', e.target.value);
            }}
              type="radio" id="b" name="SeparatorStyle" value="B"></input>
            <label htmlFor="b">B</label>

            <input onChange={(e) => {
              setSeparatorStyle(e.target.value);

              console.log('header line radio ', e.target.value);
            }}
              type="radio" id="c" name="SeparatorStyle" value="C"></input>
            <label htmlFor="c">C</label>

            <input onChange={(e) => {
              setSeparatorStyle(e.target.value);

              console.log('header line radio ', e.target.value);
            }} type="radio" id="d" name="SeparatorStyle" value="D"></input>
            <label htmlFor="d">D</label>
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
          <Checkbox
            onClick={() => {
              setIsFabricationIdChecked(!isFabricationIdChecked);
            }}
            checked={isFabricationIdChecked}
            disabled={isDisabledFabricationIdIncluded} />
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
          <Checkbox
            onClick={() => {
              setIsSerialIdChecked(!isSerialIdChecked);
            }}
            checked={isSerialIdChecked}
            disabled={isDisabledSerialIdIncluded} />
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
          <Typography>Fabrication ID</Typography>
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
          <Checkbox
            onClick={() => {
              setIsDNSIdChecked(!isDNSIdChecked);
            }}
            checked={isDNSIdChecked}
            disabled={isDisabledDNSIdIncluded} />
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
