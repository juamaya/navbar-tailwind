import Card from '../componentes/Card'


import coche from '../images/sandero_2024.jpg'
import spaceX from '../images/spaceX.jpg'
import pc from '../images/pc.jpg'
import girl from '../images/girl.gif'
import girl1 from '../images/girl1.gif'
import hand from '../images/hand.gif'

const Services = () => {
  return (
    <main className='bg-indigo-500 w-full  '>
      <div className='bg-black text-center text-white '>Services</div>

      <div className='flex justify-center'>
        <img src={coche} alt="Dacia_sandero_2024"   className='  w-full' />
      </div>
<div className='container mx-auto  p-5 columns-1 md:columns-3'>
<Card img={pc}/>
<Card img={coche}/>
<Card img={spaceX}/>

 
</div>
<div className='container mx-auto  p-4 columns-1 md:columns-3'>
<Card img={girl}/>
<Card img={hand}/>
<Card img={girl1}/>

 
</div>
    </main>
  )
}

export default Services