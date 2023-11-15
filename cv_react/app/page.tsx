
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
   <Image
   objectfit='cover'
  borderRadius='full'
  boxSize='300px'
  src='image/avatar.jpg'
  alt='Maryam EID'
  />

<h1>Maryam EID</h1>


<IconButton
  variant='outline'
  colorScheme='teal'
  aria-label='Send email'
  icon={< />}
/>


    </main>
  )
}
