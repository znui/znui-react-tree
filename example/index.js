
require('znui-react');
require('../src/index.less');
require('./index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var tree = require('../src/index.js');
var _data = [
    {
        id: 1,
        label: 'A',
        data: [
            {
                id: 11,
                label: 'AB1',
                data: [
                    {
                        id: 111,
                        label: 'ABB1'
                    },
                    {
                        id: 112,
                        label: 'ABB2'
                    }
                ]
            },
            {
                id: 12,
                label: 'AC1',
            },
            {
                id: 13,
                label: 'AD1',
            },
            {
                id: 12,
                label: 'AC1',
            },
            {
                id: 13,
                label: 'AD1',
            },
            {
                id: 12,
                label: 'AC1',
            },
            {
                id: 13,
                label: 'AD1',
            }
        ]
    },
    {
        id: 2,
        label: 'B',
        data: [
            {
                id: 11,
                label: 'AB1',
                data: [
                    {
                        id: 111,
                        label: 'ABB1'
                    },
                    {
                        id: 112,
                        label: 'ABB2'
                    }
                ]
            },
            {
                id: 12,
                label: 'AC12',
            },
            {
                id: 13,
                label: 'AD13',
            }
        ]
    },
    {
        id: 3,
        label: 'C',
        data: [
            {
                id: 11,
                label: '3AB1',
                data: [
                    {
                        id: 111,
                        label: 'ABB1'
                    },
                    {
                        id: 112,
                        label: 'ABB2'
                    }
                ]
            },
            {
                id: 12,
                label: '3AC1',
            },
            {
                id: 13,
                label: '3AD1',
            }
        ]
    },
    {
        id: 4,
        label: 'D',
        data: [
            {
                id: 11,
                label: '4AB1',
                data: [
                    {
                        id: 111,
                        label: 'ABB1'
                    },
                    {
                        id: 112,
                        label: 'ABB2'
                    }
                ]
            },
            {
                id: 12,
                label: '4AC1',
            },
            {
                id: 13,
                label: '4AD1',
            }
        ]
    }
]
ReactDOM.render(
    <div style={{width: 1000, border: '1px solid #CCC'}}>
        <tree.Tree data={_data} onItemClick={(event, owner)=>console.log(owner)} />
        <tree.AccordionTree style={{margin: 50}} data={_data} onItemClick={(event, owner)=>console.log(owner)} />
    </div>,
    document.getElementById('container'),
);

