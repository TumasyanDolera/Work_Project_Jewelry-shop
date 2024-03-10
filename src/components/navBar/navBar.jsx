import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box >
      <Flex
        bg={useColorModeValue("#FFFDD0", 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Box display={"flex"} w={'100px'}>
              <Image
                src='https://papik.pro/grafic/uploads/posts/2023-04/1681619911_papik-pro-p-logotip-yuvelirnogo-magazina-vektor-47.jpg'
              ></Image>
            </Box>
          </Text>
          <Text ml={'50px'} fontSize={'28'} mt={'1'} color={"#DAA520"}>ЮВЕЛИРНЫЙ МАГАЗИН</Text>

        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} bg={"white"} w={"80px"}>
          Войти
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#DAA520'}
            href={'#'}
            _hover={{
              bg: '#F0E68C',
            }}>
            Регистрация
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
      </Collapse>
    </Box>
  )
}





