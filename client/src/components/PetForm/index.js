// import React,  { useState } from "react";
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_PET } from "../../utils/mutations";
// import { QUERY_PETS } from "../../utils/queries";

// // import { Link } from 'react-router-dom';
// // import { Form, Button, Alert } from "react-bootstrap";

// // import { useMutation } from '@apollo/client';
// // import { ADD_PET } from '../utils/mutations';
// // import { QUERY_PETS } from '../../utils/queries';
// const PetForm = () => {
//   const [pet,  setPet] = useState ('');
//   const [addPet, { error }] = useMutation(ADD_PET, {
//     update(cache, { data: { addPet }}) {
//       try {
//         const { pets } = cache.readQuery({ query: QUERY_PETS });
//         Cache.writeQuery({
//           query: QUERY_PETS,
//           data: {pets: [addPet,  ...pets]},
//         });
  
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   })
  
  
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log("hello")
   
    
//   try {
//     const { data } = await addPet({
//     //   addPet: {
//     //       variables:
//     //     dogName,
//     //     dogBreed,
//     //     dogGender,
//     //     dogAge
//     //   }
//     // })
// //     setPet('')
// //   } catch (err) {
// //     console.error(err);
// //   }
// } ,


// const handleChange = (event) => {
//     const { pet, value } = event.target;

//     if (pet === 'addPet' && value.length <= 280) {
//       setPet(value);
     
//     }
//   };

//   return (
//     <form onSubmit={handleInput}>
//       <input className="dogName" id="dogName" placeholder="dog name" onSubmit={handleFormSubmit}></input>
//       <input className="dogBreed" id="dogBreed" placeholder="dog breed" onSubmit={handleFormSubmit}></input>
//       <input
//         className="dogGender"
//         id="dogGender"
//         placeholder="dog gender"
//       ></input>
//          <div className="col-12 col-lg-9">
//               <textarea
//                 name="pet"
               
//                 value={addPet}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//       <input className="dogAge" id="dogAge" placeholder="dog age" onSubmit={handleFormSubmit}></input>
//       <button className="submit" id="submit" type="submit">Add Pet</button>

//     </form>
//   );
// };
// export default PetForm;


