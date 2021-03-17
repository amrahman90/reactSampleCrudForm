import React, { useState, useEffect } from "react";
import { getDataFromLocalStorage } from '../Helper/HelperFunctions';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom';

interface dataTable {
    nameofkey: string;
    createdAt: string;
    modifiedAt: string;
}

let originalRows: dataTable[] = [];

export default function CurdOverviewTable() {
    const [rows, setRows] = useState<dataTable[]>(originalRows);
    const [searched, setSearched] = useState<string>("");
    // const items = localStorage.getItem('curdFormData');
    const items = getDataFromLocalStorage('curdFormData');
    const [currentDeleteIndex, setDeleteIndex] = useState(-1);
    const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);

    useEffect(() => {
        const obj = JSON.parse(items || '{}');

        const arr = [];

        for (let i = 0; i < obj.length; ++i) {
            arr.push({
                nameofkey: obj[i].nameofkey,
                createdAt: obj[i].createdAt,
                modifiedAt: obj[i].modifiedAt
            });
        }

        originalRows = arr;
        setRows(originalRows);

        console.log('originial rows ', originalRows);

    }, []);

    useEffect(() => {

        if (currentDeleteIndex !== -1) {

            const newArr = [];
            for (let i = 0; i < originalRows.length; ++i) {
                if (i !== currentDeleteIndex) {
                    newArr.push(originalRows[i]);
                }
            }
            originalRows = newArr;
            setRows(newArr);

            localStorage.setItem('curdFormData', JSON.stringify(newArr));
        }



    }, [currentDeleteIndex, isDeleteButtonClicked]);

    const requestSearch = (searchedVal: string) => {

        console.log('searched val', searchedVal);
        console.log('original rows ', originalRows);

        const filteredRows = originalRows.filter((row) => {
            return row.nameofkey.toLowerCase().includes(searchedVal.toLowerCase());
        });

        console.log('filtered rows ', filteredRows);
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const handleRemove = (index: number) => {
        setIsDeleteButtonClicked(!isDeleteButtonClicked);
        setDeleteIndex(index);
    }

    return (
        < div style={{ marginTop: '100px' }}>
            <Paper>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name Of the Key</TableCell>
                                <TableCell align="right">Created At</TableCell>
                                <TableCell align="right">Modified At</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows?.map((row, index) => (
                                <TableRow key={row.nameofkey}>
                                    <TableCell component="th" scope="row">
                                        {row.nameofkey}
                                    </TableCell>
                                    <TableCell align="right">{row.createdAt}</TableCell>
                                    <TableCell align="right">{row.modifiedAt}</TableCell>
                                    <TableCell align="right">
                                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/form/${index}`}>
                                            <EditIcon />
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <TrashIcon onClick={() => handleRemove(index)} />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    );
}
