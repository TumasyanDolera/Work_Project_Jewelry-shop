import { useEffect, useState } from 'react';
import handleToken from '../../redux-toolkit/getTimeshtamp/timeshtamp';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIds, setItems, selectProduct } from '../../redux-toolkit/features/features';
import { getIds, getItems } from '../../redux-toolkit/services/services';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {
    Card,
    CardFooter,
    CardBody,
    Heading,
    Stack,
    Divider,
    Text,
    Button,
    ButtonGroup,
    Box,
} from '@chakra-ui/react';

export default function Product() {
    const dispatch = useDispatch();
    const { token, ids, items } = useSelector(selectProduct);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

    useEffect(() => {
        const tokenFromFunction = handleToken();
        dispatch(setToken(tokenFromFunction));
    }, [dispatch]);

    useEffect(() => {
        const handleGetIds = async () => {
            if (token) {
                try {
                    const resultIds = await getIds(token, currentPage);
                    dispatch(setIds(resultIds));
                } catch (e) {
                    console.error(e);
                }
            }
        };

        handleGetIds();
    }, [token, dispatch, currentPage]);

    useEffect(() => {
        const handleGetItems = async () => {
            try {
                const resultItems = await getItems(token, ids);
                dispatch(setItems(resultItems));
            } catch (e) {
                console.error(e);
            }
        };

        handleGetItems();
    }, [token, ids, dispatch]);

    const handlePageChange = (newPage) => {
        const totalPages = Math.ceil(ids.length);
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <Box display="flex" flexWrap={'wrap'} marginBottom={'100px'} marginTop={'50px'} >
                {items.map((item, index) => (
                    <Card key={item.id || index} maxW="sm" mt="70" m={'25px'} ml={'50px'} h={'350px'}>
                        <CardBody>
                            <Stack display={'inline-block'} mt="1" spacing="3">
                                <Heading size="lg" textAlign="center" w={'200px'} h={'130'}>
                                    {item.brand}
                                </Heading>
                                <Text fontSize="2xl" color={'black'}>
                                    Цена: {item.price} руб.
                                </Text>
                                <Text fontSize="1xl" color={'black'} w={'200px'} >
                                    {item.product}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing="2">
                                <Button variant="solid" background={'#DAA520'}
                                    _hover={{
                                        bg: '#F0E68C',
                                    }}>
                                    Buy now
                                </Button>
                                <Button variant="ghost" colorScheme="black">
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                 ))}
            </Box>
            <Box ml={'750px'} display={'flex'} mb={'50'}>
                <Button
                    mr={'30px'}
                    bg={'#F0E68C'}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    color={currentPage === 1 ? 'grey' : 'black'}
                >
                    <FaAngleLeft />
                </Button>
                <Box mt={'7px'}> {currentPage} </Box>
                <Button
                    ml={'30px'}
                    bg={'#F0E68C'}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage * itemsPerPage >= ids.length}
                >
                    <FaAngleRight />
                </Button>
            </Box>
        </Box>
    );
}