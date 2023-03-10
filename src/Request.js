// import './Request.css';
// import { useState, useEffect } from "react";
// import { db } from './firebase-config'
// import { collection, getDocs } from 'firebase/firestore';

// function Request() {
//   const [donorform, setForm] = useState([]);
//   const donorformReference = collection(db, "donorform");

//   useEffect(() => {
//     const getForm = async () => {
//       const data = await getDocs(donorformReference);
//       setForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }
//     getForm()
//   }, []);

//   return (
//     <div>
//       {donorform.map((form) => (
//         <div className='request-order' key={form.id}>
//           <form>
//             <div className='form-group'>
//               <label className='request-title'>From</label>:
//               <label className='request-data'>Donar, {form.id}</label>
//             </div>
//             <div className='form-group'>
//               <label className='request-title'>Title</label>:
//               <label className='request-data'>{form.Title}</label>
//             </div>
//             <div className='form-group'>
//               <label className='request-title'>Description</label>:
//               <label className='request-data description'>{form.Description}</label>
//             </div>
//             <div className='form-group multi-group'>
//               <div>
//                 <label className='request-title'>Qty</label>:
//                 <label className='request-data'>{form.Qty}</label>
//               </div>
//               <div>
//                 <label className='request-title'>Location</label>:
//                 <label className='request-data'>{form.Location}</label>
//               </div>
//             </div>
//             <div className='form-group'>
//               <label className='request-title'>Best Before</label>:
//               <label className='request-data'>{form.BestBefore}</label>
//             </div>
//             <div className='btn-group'>
//               <button className='btn btn-accept'>Accept</button>
//               <button className='btn btn-reject'>Decline</button>
//             </div>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Request;
import './Request.css';
import { useState, useEffect } from "react";
import { db } from './firebase-config'
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';

function Request() {
  const [donorform, setForm] = useState([]);
  const donorformReference = collection(db, "donorform");

  useEffect(() => {
    const getForm = async () => {
      const data = await getDocs(donorformReference);
      setForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getForm()
  }, []);

  const handleAccept = async (formID) => {
    try {
        console.log("I am handleAccept");
      const formRef = doc(db, "donorform", formID);
      const form = await addDoc(collection(db, "accepted"), await formRef.get());
      await deleteDoc(formRef);
      console.log("Form accepted: ", formID);
    } catch (e) {
      console.error(e);
    }
  }

  const handleDecline = async (formID) => {
    try {
         console.log("I am handleDecline");
      const formRef = doc(db, "donorform", formID);
      await deleteDoc(formRef);
      console.log("Form declined: ", formID);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      {donorform.map((form) => (
        <div className='request-order' key={form.id}>
          <form>
            <div className='form-group'>
              <label className='request-title'>From</label>:
              <label className='request-data'>Donar, {form.id}</label>
            </div>
            <div className='form-group'>
              <label className='request-title'>Title</label>:
              <label className='request-data'>{form.Title}</label>
            </div>
            <div className='form-group'>
              <label className='request-title'>Description</label>:
              <label className='request-data description'>{form.Description}</label>
            </div>
            <div className='form-group multi-group'>
              <div>
                <label className='request-title'>Qty</label>:
                <label className='request-data'>{form.Qty}</label>
              </div>
              <div>
                <label className='request-title'>Location</label>:
                <label className='request-data'>{form.Location}</label>
              </div>
            </div>
            <div className='form-group'>
              <label className='request-title'>Best Before</label>:
              <label className='request-data'>{form.BestBefore}</label>
            </div>
            <div className='btn-group'>
              <button className='btn btn-accept' onClick={() => handleAccept(form.id)}>Accept</button>
              <button className='btn btn-reject' onClick={() => handleDecline(form.id)}>Decline</button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}
export default Request;

