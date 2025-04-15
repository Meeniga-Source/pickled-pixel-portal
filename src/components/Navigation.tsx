
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
    { name: "Contact", href: "#contact" },
  ];

  return (
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
  );
};

export default Navigation;
