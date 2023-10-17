import React, { useContext } from 'react'
import {useFormik} from 'formik'
import {FirebaseContext } from '../firebase';

const Routine = () => {

    const {firebase} = useContext(FirebaseContext);
    console.log({FirebaseContext});
    
    const formik =useFormik({
        initialValues :{
            exercise:'',
            time:'',
            machine:'',
            description:'',
        },
        onSubmit: datos=>{
            try {
                firebase.db.collection('datos').add(datos);
            } catch (error) {
                
            }
        }
    });

  return (
    <>
    
    <div className='flex justify-center mt-10'>
        <div className='w-full max-w-3xl '>
        <h1 className='text-3xl font-light mb-4'>Asignar Rutina</h1>
            <form
                onSubmit={formik.handleSubmit}
            >
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='exercise'>Ejercicio</label>
                    <select
                         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='exercise'
                         name='exercise'
                         value={formik.values.exercise}
                         onChange={formik.handleChange}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='Abdominales'>Abdominales</option>
                        <option value='Flexiones'>Flexiones</option>
                        <option value='Burpies'>Burpies</option>
                        <option value='Sentadillas'>Sentadillas</option>
                        <option value='Payasito'>Payasito</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>Hora</label>
                    <select
                         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='time'
                         name='time'
                         value={formik.values.time}
                         onChange={formik.handleChange}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='8:00-10:00'>8:00-10:00</option>
                        <option value='10:00-12:00'>10:00-12:00</option>
                        <option value='12:00-2:00'>12:00-2:00</option>
                        <option value='2:00-4:00'>2:00-4:00</option>
                        <option value='4:00-6:00'>4:00-6:00</option>
                        <option value='6:00-8:00'>6:00-8:00</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='machine'>Maquina</label>
                    <select
                         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='machine'
                         name='machine'
                         value={formik.values.machine}
                         onChange={formik.handleChange}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='Polea-Dual'>Polea Dual</option>
                        <option value='Polea-Recta'>Polea Recta</option>
                        <option value='Caminadora'>Caminadora</option>
                        <option value='Banco-Abdominal'>Banco Abdominal</option>
                        <option value='Banco-Multiple-Polea'>Banco Multiple Polea</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Descripcion</label>
                    <textarea
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
                        id='description'
                        placeholder='Descripcion de la rutina'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    ></textarea>
                </div>
                <input
                    type='submit'
                    className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
                    value='Asignar Rutina'
                    onClick={() => {alert("Rutina Asignada")}}
                    
                />
            </form>
        </div>
    </div>
    </>
  )
}

export default Routine