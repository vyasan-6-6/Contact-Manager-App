import React, { Component } from 'react'

export class AddContact extends Component {
  render() {
    return (
      <div className='ui main'>
         
            <h1>Add Contact</h1>
            <form action="" className='ui form'>
                <div className='field'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='name' />
                </div>
                <div className='field'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='name' />
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
      
    )
  }
}

export default AddContact