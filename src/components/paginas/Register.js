import React, { useContext } from 'react'
import {useFormik} from 'formik'
import {FirebaseContext } from '../firebase';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


const Register = () => {

    const {firebase} = useContext(FirebaseContext);
    console.log({FirebaseContext});

    const formik =useFormik({
        initialValues :{
            name:'',
            email:'',
            password:'',
        },

        onSubmit: users=>{
          try {
              firebase.db.collection('users').add(users);
          } catch (error) {
              
          }
      }
    });


  return (
    <div className='flex justify-center'>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input 
            size="lg" 
            label="name"
            id='name' 
            onChange={formik.handleChange}
            value={formik.values.name} 
          />
          <Input 
            size="lg" 
            label="email"
            id='email'
            onChange={formik.handleChange}
            value={formik.values.email}  
            />
          <Input 
            type="password" 
            size="lg" 
            label="password" 
            id='password'
            onChange={formik.handleChange}
            value={formik.values.password} 
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type='submit'>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  )
}

export default Register