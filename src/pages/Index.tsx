
import Logo from "../components/Logo";
import ProductList from "../components/ProductList";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 px-4 bg-[#F7F9F0] relative">
        <Navigation />
        <div className="max-w-6xl mx-auto">
          <Logo />
        </div>
      </header>
      
      <main>
        <section className="py-12 px-4 text-center">
          <h1 className="text-5xl font-bold text-[#2C4001] mb-4">
            Fresh & Crispy Pickles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted pickles made with love, using traditional recipes and the finest ingredients
          </p>
        </section>

        <section id="products">
          <ProductList />
        </section>
        
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      
      <footer className="bg-[#2C4001] text-white py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Pickle Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
