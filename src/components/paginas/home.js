import React from 'react'
import { Button, 
  Carousel,Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import img1 from '../../img/Imagen1.jpg'
import img2 from '../../img/Imagen2.jpg'
import img3 from '../../img/Imagen3.jpg'
import img5 from '../../img/Imagen5.jpg'
import img6 from '../../img/Imagen6.jpg'
import img7 from '../../img/Imagen7.jpg'

const home = () => {
  return (
    <div>
    <Carousel autoplay={true} loop={true} className="relative h-56 overflow-hidden rounded-lg md:h-96">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    <h1 class="flex justify-center text-[#121f3d] mt-6 text-5xl font-bold">
      UNDERGOLD
    </h1>
    <p class="block font-sans text-xl font-normal leading-relaxed text-inherit antialiased mt-5 mb-16">
    Descubre UnderGold, tu destino para el fitness y el bienestar. Nuestro gimnasio de vanguardia 
    ofrece equipos de alta tecnología, clases emocionantes y entrenadores comprometidos. Sea cual sea tu nivel, 
    estamos aquí para ayudarte a brillar 
    como el oro que llevas dentro. ¡Únete a la familia UnderGold y alcanza tus metas de fitness!
    </p>
    <Card className="mt-6 w-80 inline-block mx-8">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img7}
          alt="card-image"
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UNDER PARTY
        </Typography>
        <Typography>
          Clase grupal que combina diferentes géneros musicales con
          un fin coreográfico. Te permite adquirir coordinación y memoria
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Tomar Clase</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-80 inline-block mx-8">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img5}
          alt="card-image"
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UNDER STRETCHING
        </Typography>
        <Typography>
          Clase grupal de estiramiento que permite mejorar la flexibilidad, 
          prevenir lesiones y ayuda a relajar los músculos y articulaciones.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Tomar Clase</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-80 inline-block mx-8">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img6}
          alt="card-image"
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody className=''>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UNDER SHAPE
        </Typography>
        <Typography>
          Clase exclusiva de Undergold, modalidad de entrenamiento intensa y dinámica, 
          con foco cardiovascular y neuromuscular
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Tomar Clase</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default home