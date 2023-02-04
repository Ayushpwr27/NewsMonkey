import React, { Component } from 'react'
import loading from './Spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" width={'100px'} />
      </div>
    )
  }
}

export default Spinner