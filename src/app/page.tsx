'use client'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Product Explorer</h1>
          <p className="text-xl mb-6">Discover the best-selling products from a variety of categories</p>
          <a
            href="/best-selling"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition"
          >
            See best selling products
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 flex-grow">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Use Product Explorer?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Real-time Data</h3>
              <p className="text-gray-600">Get up-to-date information on the best-selling products directly from our API.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Wide Range of Products</h3>
              <p className="text-gray-600">Explore a variety of product categories and find what you need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">User-friendly Interface</h3>
              <p className="text-gray-600">Our clean and simple design makes it easy to browse products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Product Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
