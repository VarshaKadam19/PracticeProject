import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='registerhere'>
        <h2 className='h2' >Registration Form</h2>
        <form id='register' action="https://formsubmit.co/541efd6169e85808bc3a367d3dbad2f3" method='POST'>
        <label className='l1'>First Name : </label>
        <br />
        <input type="text" name='fname' id='name' placeholder='Enter your first name' required />
        <br /><br />
        <label className='l2'>Last Name:</label>
        <br />
        <input type="text" name='lname' id='name' placeholder='Enter your last name' required />
        <br /><br />
        <label className='l3'>Your Age:</label>
        <br />
        <input type="number" name='age' id='name' placeholder='How old are you?' required />
        <br /><br />
        <label className='l4'>Email:</label>
        <br />
        <input type="email" name='email' id='name' placeholder='Enter your valid email' required />
        <br /><br />
        <label className='l5'>Gender:</label>
        <br />
        <input className='i1' type="radio" name='gender' id='male' />
        <span id="male">Male</span>
        <input type="radio" name='gender' id='female' />
        <span id='female'>Female</span>
        <br /><br />
        <label className='l6'>Known Language</label>
        <br />
        <input className='i2' type="checkbox" name="lang" id="hindi" />
        <span id="hindi">Hindi</span>
        <input type="checkbox" name="lang" id="eng" />
        <span id="eng">English</span>
        <input type="checkbox" name="lang" id="marathi" />
        <span id="marathi">Marathi</span>
        <br /><br />
        <label className='l7'>Password:</label>
        <br />
        <input type="password" name="pwd" id="name" placeholder='Enter valid password' required />
        <br /><br />
        <label className='l8'>Confirm Password</label>
        <br />
        <input type="password" name="pwd" id="name" placeholder='Enter your password again' required />
        <br /><br />
        <input type="submit" value="Submit" id="submit" />
        </form>
    </div>
  )
}

export default Register