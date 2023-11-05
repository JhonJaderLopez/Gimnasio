import React, {useContext,useRef} from 'react';
import {FirebaseContext} from '../../src/components/firebase'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";


const ViewClass = ({clase}) => {
    
    
    const existenciaRef =useRef(clase.existencia);

    const {firebase} = useContext(FirebaseContext)

    const {id, exercise, time, machine, imagen, existencia, description} = clase;

    const actualizarDisponibilidad=()=>{
        const existencia = (existenciaRef.current.value === "true")
        try {
            firebase.db.collection('datos')
            .doc(id)
            .update({
                existencia
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='inline-block'>
        <Card className="mt-6 w-96">
            <CardBody>
            <img
          src={imagen}
          alt="ui/ux review check"
        />
                <Typography variant="h6" color="blue-gray" className=" inline-block pt-2">
                    EJERCICIO: {exercise}
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    HORA: {time}
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    MAQUINA: {machine}
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    DESCRIPCION: {description}
                </Typography>
                <div className='sm:flex sm:-mx-2 pl-3'>
                        <label className='block mt-5 sm:w-2/4'>
                            <span className='block text-gray-800 mb-2'>Disponibilidad</span>
                            
                            <select 
                                className=' bg-white shadow appearance-none border rounded  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                                value={existencia}
                                ref={existenciaRef}
                                onChange={()=>actualizarDisponibilidad()}
                            >
                                <option value='true'>Disponible</option>
                                <option value='false'>No Disponible</option>
                            </select>
                        </label>
                    </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className='bg-red-600'>Bloquear</Button>
                <a href='/register-routine'><Button className='mx-5 bg-blue-600'>Asignar rutina</Button></a>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ViewClass    