import React, { Component } from 'react'

export class AddContact extends Component {
  render() {
    return (
      <div className='ui main' style={{ marginTop: "5rem" }}>
   
  <h1>Add Contact</h1>
            <form action="" className='ui form'>
                <div className='field'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='name' />
                </div>
                <div className='field'>
                    <label htmlFor="">Emali</label>
                    <input type="email" name='email' placeholder='email' />
                </div>
                <button className='ui button blue'>Add</button>
            </form> 
</div>

      
    )
  }
}

export default AddContact