import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  Image
} from '@chakra-ui/react'

export default function Footer() {
  const handleNavigate = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  return (
    <Box
      bg={useColorModeValue('#F0E68C', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text color={"black"} fontWeight={"700"}>Company</Text>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text color={"black"} fontWeight={"700"}>Support</Text>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Safety Center
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text color={"black"} fontWeight={"700"}>Legal</Text>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <Text color={"black"} fontWeight={"700"}>Install App</Text>
            <Box as='a' href='#' w={"100"}><Image src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'></Image></Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2024 JEVELERY SHOP. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Button 
             label={'Twitter'}
             onClick={() => handleNavigate('https://twitter.com')}>
              <FaTwitter />
            </Button>
            <Button 
             label={'YouTube'}
             onClick={() => handleNavigate('https://www.youtube.com')}>
              <FaYoutube />
            </Button>
            <Button 
             label={'Instagram'}
             onClick={() => handleNavigate('https://www.instagram.com')}>
              <FaInstagram />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}