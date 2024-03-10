import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setItems, selectProduct } from '../../redux-toolkit/features/features';
import handleToken from '../../redux-toolkit/getTimeshtamp/timeshtamp';
import {
  Stack,
  Text,
  Button,
  Box,
  Input,
  VStack
} from '@chakra-ui/react';

export default function FilteredProducts() {
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');
  const dispatch = useDispatch();
  const { token, items } = useSelector(selectProduct);
  const [noItemsFound, setNoItemsFound] = useState(false);

  useEffect(() => {
    const tokenFromFunction = handleToken();
    dispatch(setToken(tokenFromFunction));
    console.log(token, 'jjjjjj');
  }, [dispatch, token]);

  const handleApplyFilter = () => {
    const maxPrice = parseFloat(price);
    if (isNaN(maxPrice)) {
      console.error('Invalid price input. Please enter a valid number.');
      return;
    }
    let filteredItems = items.filter((item) => {
      const isPriceValid = isNaN(maxPrice) || item.price <= maxPrice;
      return isPriceValid;
    });
    if (brand) {
      filteredItems = filteredItems.filter((item) => item.brand)
    }
    if (product) {
      filteredItems = filteredItems.filter((item) => item.product)
    }
    if (!price && !brand && !product) {
      dispatch(setItems(items));
      return;
    }
    if (filteredItems.length === 0) {
      setNoItemsFound(true);
      setPrice('');
      setProduct('');
      setBrand('');
      setTimeout(() => {
        setNoItemsFound(false);
        dispatch(setItems(items));
      }, 3000);
    } else {
      dispatch(setItems(filteredItems));
      setPrice('');
      setProduct('');
      setBrand('');
    }
  };
  return (
    <VStack spacing={4} align="stretch" ml={'50px'} mr={'50px'} mt={'30px'}>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Выберите товар
        </Text>
        <Stack direction="row" spacing={4}>
          <Input
            placeholder="Название"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            focusBorderColor="#F0E68C"
            borderColor={'#F0E68C'}
          />
          <Input
            type="number"
            placeholder="Максимальная цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            focusBorderColor="#F0E68C"
            borderColor={'#F0E68C'}
          />
          <Input
            placeholder="Бранд"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            focusBorderColor="#F0E68C"
            borderColor={'#F0E68C'}
          />
          <Button
            background={'#DAA520'}
            _hover={{
              bg: '#F0E68C',
            }}
            w={'200px'}
            onClick={handleApplyFilter}

          >
            Найти
          </Button>
        </Stack>
      </Box>
      <Box>
        {noItemsFound && (
          <Text fontSize="lg" color="red.500" mt={4}>
            No items found with the specified parameters.
          </Text>
        )}
      </Box>
    </VStack>
  );
}






















