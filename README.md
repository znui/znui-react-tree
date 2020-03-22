# znui-react-tree
React tree Component


[![npm](https://img.shields.io/npm/v/znui-react-tree.svg)](https://www.npmjs.com/package/znui-react-tree)
[![npm](https://img.shields.io/npm/dm/znui-react-tree.svg)](https://www.npmjs.com/package/znui-react-tree)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-tree/example/www/index.html)

## Installation

```bash
npm install znui-react-tree -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var tree = require('znui-react-tree');

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

```

## Preiview

<img src="https://znui.github.io/znui-react-tree/example/images/tree.png" />

## License

MIT