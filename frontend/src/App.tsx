import RentalsCards from "./applications/users/views/sections/rentals/RentalsCards";
import Header from "./applications/users/views/layouts/header/Header";
import Navbar from "./applications/users/views/layouts/navbar/Navbar";
import Footer from "./applications/users/views/layouts/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <RentalsCards /> 
      <Footer/>
    </>
  );
}
export default App;
