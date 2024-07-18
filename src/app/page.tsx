import { GeoForm } from '@/components/GeoForm'
import { Person } from '@/components/Person'

const Page = () => {
  return(

    <div className='flex flex-col items-center'>
      <h1 className="font-bold text-lg bg-sky-500 hover:bg-sky-700">Hello World!</h1>
      <h3>Algum outro texto!</h3>
      <GeoForm/>
      <Person/>
    </div>

  )
}


//Todo componente criado, eu tenho que exportar
export default Page
