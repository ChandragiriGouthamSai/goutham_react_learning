import React from 'react';
import { Checkbox, TreeView, TreeItem } from '@mui/material';

const data = [
    {
        Series: 'Altair',
        DevelopmentCodeName: 'Altair 1',
        ProductName: 'AD 228',
        Genre: 'A3 MFP B/W',
    },
    {
        Series: 'Altair',
        DevelopmentCodeName: 'Altair 1',
        ProductName: 'bizhub 216',
        Genre: 'A3 MFP B/W',
    },
    // Add more data as needed
];

const TreeViewWithCheckboxes = () => {
    const renderTree = (nodes) => (
        <TreeItem
            key={nodes.ProductName}
            nodeId={nodes.ProductName}
            label={
                <div>
                    <Checkbox
                        // Add your checkbox state and onChange logic here
                        // checked={...}
                        // onChange={...}
                    />
                    {nodes.ProductName}
                </div>
            }
        >
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    // Organize the data into a nested structure based on genre, series, development code, and product name
    const nestedData = data.reduce((acc, item) => {
        let genreNode = acc.find((node) => node.Genre === item.Genre);
        if (!genreNode) {
            genreNode = {
                Genre: item.Genre,
                children: [],
            };
            acc.push(genreNode);
        }

        let seriesNode = genreNode.children.find(
            (node) => node.Series === item.Series
        );
        if (!seriesNode) {
            seriesNode = {
                Series: item.Series,
                children: [],
            };
            genreNode.children.push(seriesNode);
        }

        let developmentCodeNode = seriesNode.children.find(
            (node) => node.DevelopmentCodeName === item.DevelopmentCodeName
        );
        if (!developmentCodeNode) {
            developmentCodeNode = {
                DevelopmentCodeName: item.DevelopmentCodeName,
                children: [],
            };
            seriesNode.children.push(developmentCodeNode);
        }

        developmentCodeNode.children.push({
            ProductName: item.ProductName,
        });

        return acc;
    }, []);

    return (
        <TreeView
            defaultCollapseIcon={<span>-</span>}
            defaultExpandIcon={<span>+</span>}
        >
            {nestedData.map((genreNode) => renderTree(genreNode))}
        </TreeView>
    );
};

export default TreeViewWithCheckboxes;
