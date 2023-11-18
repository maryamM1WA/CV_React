'use client'
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<div id="entete">
   <Image
    borderRadius='full'
    boxSize='80%'
    src='image/avatar.jpg'
    alt='Maryam EID'


  />


<h1>Maryam EID</h1>
</div>

<Tabs variant='soft-rounded' colorScheme='green' orientation='vertical'>
  <TabList id="menu">
    <Tab style={{ fontSize: '25px' }}>Acceuil</Tab>
    <Tab style={{ fontSize: '25px' }}>Contacts</Tab>
    <Tab style={{ fontSize: '25px' }}> Experiences</Tab>
    <Tab style={{ fontSize: '25px' }}> Compétences</Tab>
    <Tab style={{ fontSize: '25px' }}>Interêts</Tab>
  </TabList>
  <TabPanels>

    <TabPanel className="contenu">


      <Button colorScheme='blue'>Télécharger le CV en PDF</Button>



    </TabPanel>

    <TabPanel className="contenu">
      <p>two!</p>
    </TabPanel>

    <TabPanel className="contenu">
      <p>two!</p>
    </TabPanel>

    <TabPanel className="contenu">
      <p>two!</p>
    </TabPanel>


  <TabPanel className="contenu">
      <p>two!</p>
    </TabPanel>

  </TabPanels>
</Tabs>



    </main>
  )
}
