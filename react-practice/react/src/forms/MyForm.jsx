// import React, { useState } from 'react';

// const MyForm = () => {
//   const [email, setEmail] = useState('');
//   const [isTrue, setIsTrue] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Your email is: ${email}`);
//     console.log('Form submitted');
//     setIsTrue(false); // Disable the button after submission
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type='email'
//             name='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         {/* Using the 'isTrue' state to disable the button */}
//         <input type='submit' value="Submit" disabled={!isTrue} />
//       </form>
//     </div>
//   );
// };

// export default MyForm;

import React from 'react'
import { useState } from 'react'
const MyForm = () => {
    const [data,SetData] = useState({})

    const handleChange = (e) => {
        SetData({...data})
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('Data Submited')
        alert(`Email:${data.email} and password is:${data.password}`)
        alert(data.email)
    }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
            Email:<input type='email' value={data.email} name='email' onChange={handleChange} />
        </label>
        <label>
            Password:<input type='password' value={data.password} name='password' onChange={handleChange}/>
        </label>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default MyForm
