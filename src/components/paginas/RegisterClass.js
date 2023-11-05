import React, {useState, useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase';
import {Link} from 'react-router-dom';
import ViewClass from '../../ui/viewClass';


const RegisterClass = () => {

    const [clases, setClases] =useState([]);
    const { firebase } = useContext(FirebaseContext);


    useEffect(() => {
        const getClass = () => {
          firebase.db.collection('datos').onSnapshot(handleSnapshot);



           
        }
        getClass();
    },[]);


    function handleSnapshot(snapshot){
        const clases = snapshot.docs.map(doc =>{
            return{
                id : doc.id,
                ...doc.data()
            }
        });
        setClases(clases);
    }



    return (  
        <>
        <div>
        <h1 className='text-3xl font-light mb-4'>Clases</h1>
            <Link to='/register-routine' className=' bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold'>
                Agregar Rutina
            </Link>
        </div>

            {clases.map(clase =>(
                <ViewClass 
                    key={clase.id}
                    clase={clase}
                />
            ))}


        </>
    );
}
 
export default RegisterClass;