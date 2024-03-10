import FiteredProducts from "../filteredproducts/filteredProducts";
import { Box } from '@chakra-ui/react'
import Product from '../products/product'
import WithSubnavigation from "../navBar/navBar";
import Footer from "../footer/footer";


export default function HomePage() {
  return (
    <Box bg={"#fffee0"}>
      <WithSubnavigation />
      <FiteredProducts />
      <Product />
      <Footer />
    </Box>
  )
}