# react-simplest-pagination

This is simple pagination component for react.

## How it looks like

![](http://image.prntscr.com/image/aaa5e70503244587b8fa5017361be7da.png)

## Installation

```
npm install --save react-simplest-pagination
```

## Example

this is an example of usage

```javascript
import Pagination from 'react-simplest-pagination'
...
<Pagination
  currentPage={state.page}
  totalPages={totalPages}
  onPageClick={this.setPage} />

```

## Properties

| property       | type     | default | description                                                          |
|----------------|----------|---------|----------------------------------------------------------------------|
| currentPage    | int      |         | current page number                                                  |
| totalPages     | int      |         | total pages amount                                                   |
| onPageClick    | function |         | callback on page click: onClick={(num) => onPageClick(num)}          |
| containerStyle | object   |         | react style object like: {fontSize: 11}                              |
| buttonStyle    | object   |         | react style object like: {fontSize: 11}                              |

## The best documentation

[https://github.com/beornborn/react-simplest-pagination/blob/master/src/index.js](https://github.com/beornborn/react-simplest-pagination/blob/master/src/index.js)
