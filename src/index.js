import React from 'react'
import Radium from 'radium'

@Radium
class Pagination extends React.Component {
  pageButton(num, style) {
    const onClick = this.props.onPageClick ? () => this.props.onPageClick(num) : () => {}

    return <div key={'page_'+num}
      style={style}
      onClick={onClick}>{num}
    </div>
  }

  render() {
    const { currentPage, totalPages } = this.props

    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      button: {
        backgroundColor: '#fff',
        padding: '5px 10px',
        cursor: 'pointer'
      },
      active: {
        cursor: 'default',
        color: '#fff',
        backgroundColor: '#337ab7'
      }
    }

    var buttons = [];
    for (let i=1; i <= totalPages; i++) {
      buttons.push(this.pageButton(i, [styles.button, i === currentPage ? styles.active : {}]))
    }

    return <div style={styles.container}>
      {buttons}
    </div>
  }
}

Pagination.PropTypes = {
  currentPage: React.PropTypes.number.isRequired,
  totalPages: React.PropTypes.number.isRequired,
  onPageClick: React.PropTypes.func
}

export default Pagination
