
import React, { useState } from 'react';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Button, Checkbox, FormControlLabel, Stack} from '@mui/material';

// const data = [
//     {
//         state: 'Andhra Pradesh',
//         district: 'Nellore',
//         mandal: 'kota',
//         village: 'kota',
//     },
//     {
//         state: 'Andhra Pradesh',
//         district: 'tirupati',
//         mandal: 'bogole',
//         village: 'mungamuru',
//     },
//     {
//         state: 'Telangana',
//         district: 'warangal',
//         mandal: 'rajole',
//         village: 'siddipet',
//     },
//     {
//         state: 'Telangana',
//         district: 'warangal',
//         mandal: 'gadwal',
//         village: 'vidyanagar',
//     },
//     {
//         state: 'UP',
//         district: 'Delhi',
//         mandal: 'Delhi',
//         village: 'Agra',
//     },
// ];
const data= [
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1",
        "ProductName": "AD 228",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1",
        "ProductName": "bizhub 216",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1",
        "ProductName": "bizhub 226",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1",
        "ProductName": "DOCUJET 4322",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1",
        "ProductName": "ineo 226",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1 H",
        "ProductName": "AD 248",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1 H",
        "ProductName": "bizhub 236",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1 H",
        "ProductName": "bizhub 246",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 1 H",
        "ProductName": "bizhub 7223",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 2",
        "ProductName": "AD 208",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 2",
        "ProductName": "bizhub 206",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 2",
        "ProductName": "DOCUJET 4320",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair",
        "DevelopmentCodeName": "Altair 2",
        "ProductName": "ineo 206",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 1",
        "ProductName": "AD 227",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 1",
        "ProductName": "bizhub 215i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 1",
        "ProductName": "bizhub 225i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 1",
        "ProductName": "bizhub 7121i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 1",
        "ProductName": "ineo 225i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 2",
        "ProductName": "AD 207",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 2",
        "ProductName": "bizhub 205i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Altair R",
        "DevelopmentCodeName": "Altair R 2",
        "ProductName": "ineo 205i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 1",
        "ProductName": "AD 308",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 1",
        "ProductName": "bizhub 306",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 1",
        "ProductName": "bizhub 7228",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 1",
        "ProductName": "ineo 306",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 2",
        "ProductName": "AD 268",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 2",
        "ProductName": "bizhub 266",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb",
        "DevelopmentCodeName": "Deneb 2",
        "ProductName": "ineo 266",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 1",
        "ProductName": "AD 308e",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 1",
        "ProductName": "AD 308i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 1",
        "ProductName": "bizhub 306i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 1",
        "ProductName": "bizhub 7228i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 1",
        "ProductName": "ineo 306i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 2",
        "ProductName": "AD 268e",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 2",
        "ProductName": "AD 268i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    },
    {
        "Series": "Deneb MLK",
        "DevelopmentCodeName": "Deneb MLK 2",
        "ProductName": "bizhub 266i",
        "Genre": "A3 MFP B/W",
        "ReleaseDate": "",
        "EOLDate": ""
    }]
const TreeViewExample = () => {
    const [treeData, setTreeData] = useState([]);
    const [products, setProducts] = useState(false);

    const constructTreeData = () => {
        const states = {};

        data.forEach(item => {
            const { Genre, Series, DevelopmentCodeName, ProductName } = item;

            if (!states[Genre]) {
                states[Genre] = {};
            }
            if (!states[Genre][Series]) {
                states[Genre][Series] = {};
            }
            if (!states[Genre][Series][DevelopmentCodeName]) {
                states[Genre][Series][DevelopmentCodeName] = [];
            }

            states[Genre][Series][DevelopmentCodeName].push(ProductName);
        });

        setTreeData(states);

    };
    const selectProduct=()=>{
        setProducts(!products)
    }

    return (
        <Stack>
            <Button onClick={constructTreeData}>Click to Build Tree</Button>
            {treeData && (
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    {Object.keys(treeData).map(state => (
                        <TreeItem key={state} nodeId={state} label={state} label={<FormControlLabel
                            control={<Checkbox
                                size="small"
                                key={state}
                                checked={products}
                                // indeterminate={!productsByCategory[productName].every(p => props.products.map(i => i.key).includes(p.key)) && productsByCategory[productName].some(p => props.products.map(i => i.key).includes(p.key))}
                                onChange={(event) => event.currentTarget.value ? console.log("checked "+state) : null}
                                onClick={(e) => e.stopPropagation()}
                            />}
                            label={<>{state}</>}
                            key={state}
                            onClick={(e) => e.preventDefault()}
                        />}>
                            {Object.keys(treeData[state]).map(district => (
                                <TreeItem  nodeId={`${state}-${district}`} label={<FormControlLabel
                                    control={<Checkbox
                                        size="small"
                                        key={district}
                                        // checked={productsByCategory[productName].every(p => props.products.map(i => i.key).includes(p.key))}
                                        // indeterminate={!productsByCategory[productName].every(p => props.products.map(i => i.key).includes(p.key)) && productsByCategory[productName].some(p => props.products.map(i => i.key).includes(p.key))}
                                        // onChange={(event) => handleChangeProductCategory(event, productName)}
                                        onChange={(event) => event.currentTarget.value ? console.log("checked "+district) : null}
                                        onClick={(e) => e.stopPropagation()}
                                    />}
                                    label={<>{district}</>}
                                    key={district}
                                    onClick={(e) => e.preventDefault()}
                                />}>
                                    {Object.keys(treeData[state][district]).map(mandal => (
                                        <TreeItem nodeId={`${state}-${district}-${mandal}`} label={<FormControlLabel
                                            control={<Checkbox
                                                size="small"
                                                checked={true}
                                                onChange={(event) => event.currentTarget.value ? console.log("checked "+mandal) : null}
                                                onClick={(e) => e.stopPropagation()}
                                            />}
                                            label={<>{mandal}</>}
                                            key={mandal}
                                            onClick={(e) => e.preventDefault()}
                                        />}>
                                            {treeData[state][district][mandal].map(village => (
                                                <TreeItem  nodeId={`${state}-${district}-${mandal}-${village}`} label={<FormControlLabel
                                                    control={<Checkbox
                                                        size="small"
                                                        // checked={()=>{console.log("checked")}}
                                                        onChange={(event) => event.currentTarget.value ? console.log("checked "+village) : null}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />}
                                                    label={<>{village}</>}
                                                    key={village}
                                                    onClick={(e) => e.preventDefault()}
                                                />} />
                                            ))}
                                        </TreeItem>
                                    ))}
                                </TreeItem>
                            ))}
                        </TreeItem>
                    ))}
                </TreeView>
            )}
        </Stack>
    );
};

export default TreeViewExample;
