import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,Avatar
  } from "@material-tailwind/react";
import img1 from '../../img/Imagen1.jpg'

const RegisterClass = () => {

    

    return (  
        <>
        <Card className="mt-6 w-96">
            <CardBody>
                <Avatar src={img1} alt="avatar" className='inline-block mb-5'/>
                <Typography variant="h5" color="blue-gray" className="mx-4 inline-block">
                    Juan David
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    Proposito del entrenamiento: 
                </Typography>
                <Typography>
                    Bajar grasa gh
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    Paquete de horas: 
                </Typography>
                <Typography>
                    Horario: Lunes 7-8
                </Typography>
                <Typography variant='h6' color='blue-gray'>
                    Datos adicionales: 
                </Typography>
                <Typography>
                    Tengo 28 años
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className='bg-red-600'>Bloquear</Button>
                <a href='/register-routine'><Button className='mx-5 bg-blue-600'>Asignar rutina</Button></a>
            </CardFooter>
        </Card>

        </>
    );
}
 
export default RegisterClass;