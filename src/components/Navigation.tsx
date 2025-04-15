
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center gap-8 absolute right-8 top-8"
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-[#2C4001] hover:text-[#718F2A] text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute right-4 top-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Menu className="h-6 w-6 text-[#2C4001]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[250px] bg-[#F7F9F0]">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-[#2C4001] hover:text-[#718F2A] text-lg font-medium transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navigation;
