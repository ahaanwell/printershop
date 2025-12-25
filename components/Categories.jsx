import { ShoppingCart } from "lucide-react";

function Categories(){
    const categories = [
    {
      title: "Printers",
      image: "/printer1.webp",
      deals: "From $79"
    },
    {
      title: "Ink Cartridges",
      image: "/epson-ink.webp",
      deals: "Up to 50% Off"
    },
    {
      title: "Software",
      image: "/coreldraw.webp",
      deals: "Up to 50% Off"
    },
  ];
    return(
        <div className="w-full md:w-[90%] mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Find the perfect printing solution for your needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90 mb-3">{category.deals}</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-fit">
                  Shop Now
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Categories;