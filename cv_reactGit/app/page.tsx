'use client'
import { Center, Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box, Heading, Text} from '@chakra-ui/react';
import { space } from 'postcss/lib/list'
import { ChakraProvider, Container, VStack, Icon, Link} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Home() {

/*pour creer un bouton qui télécharge le cv*/
 
    const handleDownload = () => {
      // Crée un lien <a> pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = 'image/CvS.pdf'; 
      link.download = 'CV_EID.pdf';
      
      // Ajoute le lien au DOM et le déclenche
      document.body.appendChild(link);
      link.click();
  
      // Nettoie le lien du DOM
      document.body.removeChild(link);
    };
  

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

{/* contenu de l'acceuil */}
    <TabPanel className="contenu">

     <div id="paragrapheAcceuil">

    <Box p={8} maxW="1200px" mx="auto"  justifyContent="space-between" >
      <Heading as="h1" mb={4} textAlign={'center'}>
        Étudiante en Master 2 Web Analyste
      </Heading>

      <Text mb={4} justifyContent="space-between">
        Je suis actuellement à la recherche d un stage de 6 mois à partir de février 2023.
        <br/>Mon domaine d expertise se concentre sur la data (Data Analyste, gestion de bases de données), le référencement naturel et la programmation Front-End.
        <br/> Au cours de mon cursus, j ai développé des compétences approfondies en programmation (HTML, CSS, JavaScript, SQLite) ainsi qu une forte aptitude au travail en groupe. Mon expérience en tant que volontaire en service civique a renforcé ma rigueur, ma prise d initiative et ma capacité à analyser des situations en vue d adopter une démarche d amélioration continue.
        <br/>L intégration au sein de votre entreprise représenterait pour moi l opportunité d appliquer mes connaissances techniques dans un contexte professionnel concret. Je recherche une entreprise qui favorise le dépassement de soi, qui me permette de perfectionner de nouvelles compétences et qui m accompagne dans la transition entre l étudiante que je suis et la professionnelle que je souhaite devenir.
        <br/>Si mon profil correspond à vos besoins, n hésitez pas à me contacter ! 
      </Text>

    </Box>



    </div>

        
      <div id="telechargement" onClick={handleDownload}>
      <Button colorScheme='blue' width={'220px'}>Télécharger le CV en PDF</Button>

      
    </div>  

    </TabPanel>

    {/* page de contact */}

    <TabPanel className="contenu">
    <ChakraProvider>
      <Container maxW="md" centerContent>
        <VStack spacing={4} align="stretch">
          <Link href="tel:+33 768273332">
            <Icon as={FaPhone} boxSize={6} />
            <Text>Téléphone: 07 68 27 33 32</Text>
          </Link>

          <Link href="eid.maryam@hotmail.com">
            <Icon as={FaEnvelope} boxSize={6} />
            <Text>eid.maryam@hotmail.com</Text>
          </Link>

          <Link href="www.linkedin.com/in/maryameid" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
            <Text>LinkedIn: EID Maryam</Text>
          </Link>
        </VStack>
      </Container>
    </ChakraProvider>
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
