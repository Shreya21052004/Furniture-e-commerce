import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom'
import { User, Search } from 'lucide-react'
function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
    navigate('/search-results')
  }

  return (
    <div className="flex flex-col w-full">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <User className="w-6 h-6" /> */}
            <Link to="/login"><User className="text-gray-600 hover:text-gray-800" /></Link>
            <span className="text-lg font-medium uppercase">Name of Account Holder</span>
          </div>
          <nav>
            <ul className="flex space-x-8 uppercase text-sm font-medium">
              <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link to="/cart" className="hover:text-gray-600">Cart</Link></li>
              <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="bg-[#FFDAB9] py-12 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold tracking-tight">STYLE SPACE</h1>
          <h2 className="text-2xl font-medium">ONE STOP SITE FOR FURNITURE AND HOME DECOR</h2>
          <div className="max-w-2xl mx-auto relative">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-2 border-black pr-12"
              />
              <button 
                type="submit" 
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home Page Component
function Home() {
  const categories = [
    { id: 1, name: 'Living Room', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80' },
    { id: 4, name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 5, name: 'Outdoor', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
    { id: 6, name: 'Decor', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80' },
  ]

  return (
    <div className="space-y-12">
      {/* <h1 className="text-5xl font-bold text-center text-gray-800 mt-12">STYLE SPACE</h1>
      <h2 className="text-5xl font-bold text-center text-gray-800 mt-12">ONE STOP SITE FOR FURNITURE AND HOME DECOR</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Product data
const productData = {
  1: [ // Living Room
    { id: 1, name: 'Elegant Sofa', description: 'Comfortable and stylish sofa for your living room', price: 999.99, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, name: 'Modern Coffee Table', description: 'Sleek design coffee table for your living space', price: 249.99, image: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
    { id: 3, name: 'Cozy Armchair', description: 'Perfect armchair for reading or relaxing', price: 399.99, image: 'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ],
  2: [ // Bedroom
    { id: 4, name: 'Queen Size Bed', description: 'Luxurious queen size bed for a good night\'s sleep', price: 799.99, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 5, name: 'Bedside Table', description: 'Compact and functional bedside table', price: 129.99, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
    { id: 6, name: 'Wardrobe', description: 'Spacious wardrobe for all your clothes', price: 599.99, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ],
  3: [ // Dining Room
    { id: 7, name: 'Dining Table Set', description: 'Beautiful dining set for family gatherings', price: 799.99, image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 8, name: 'Buffet Cabinet', description: 'Elegant buffet cabinet for storage and display', price: 449.99, image: 'https://images.unsplash.com/photo-1593194632872-3d20ab8fd6d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ],
  4: [ // Office
    { id: 9, name: 'Office Desk', description: 'Spacious desk for your home office', price: 299.99, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 10, name: 'Ergonomic Chair', description: 'Comfortable chair for long working hours', price: 199.99, image: 'https://images.unsplash.com/photo-1579486419608-63d7da23d5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 11, name: 'Bookshelf', description: 'Spacious bookshelf for your home library', price: 349.99, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1139&q=80' },
  ],
  5: [ // Outdoor
    { id: 12, name: 'Patio Set', description: 'Comfortable outdoor seating set', price: 699.99, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
    { id: 13, name: 'Garden Bench', description: 'Rustic bench for your garden', price: 199.99, image: 'https://images.unsplash.com/photo-1568323993144-20d546ba585d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ],
  6: [ // Decor
    { id: 14, name: 'Wall Clock', description: 'Stylish wall clock for any room', price: 79.99, image: 'https://images.unsplash.com/photo-1594380394759-fd5e98db56b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 15, name: 'Decorative Vase', description: 'Elegant vase for your home', price: 49.99, image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' },
    { id: 16, name: 'Throw Pillows Set', description: 'Set of decorative throw pillows', price: 39.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
  ],
}

// Product Category Page Component
function ProductCategory() {
  const { id } = useParams();
  const products = productData[id] || []

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Product Category {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Cart Page Component
function Cart() {
  const cartItems = [
    { id: 1, name: 'Elegant Sofa', price: 999.99, quantity: 1, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, name: 'Modern Coffee Table', price: 249.99, quantity: 1, image: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
    { id: 3, name: 'Cozy Armchair', price: 399.99, quantity: 1, image: 'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">MY CART</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button className="text-red-500 hover:text-red-700">REMOVE</button>
            </div>
          </div>
        ))}
        <div className="mt-6 text-right">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          <Link
            to="/checkout"
            className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700">BACK TO HOME</Link>
    </div>
  )
}

// Sign Up Page Component
function SignUp() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Create new Account</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">NAME</label>
          <input type="text" id="name" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">EMAIL</label>
          <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">PASSWORD</label>
          <input type="password" id="password" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">PHONE NUMBER</label>
          <input type="tel" id="phone" className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  )
}


// Login Page Component
function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700">EMAIL</label>
          <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">PASSWORD</label>
          <input type="password" id="password" className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
      </p>
    </div>
  )
}

// Checkout Page Component
function Checkout() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input type="tel" id="phone" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <textarea id="address" className="w-full border rounded px-3 py-2" rows={3} required></textarea>
            </div>
            <div>
              <label htmlFor="pincode" className="block text-gray-700">Pincode</label>
              <input type="text" id="pincode" className="w-full border rounded px-3 py-2" required />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Price Details</h2>
          <div className="space-y-2">
            <p className="flex justify-between"><span>Price (3 items)</span><span>$1649.97</span></p>
            <p className="flex justify-between"><span>Delivery Charges</span><span>$10.00</span></p>
            <p className="flex justify-between"><span>Platform Fee</span><span>$5.00</span></p>
            <p className="flex justify-between font-bold"><span>Total Payable</span><span>$1664.97</span></p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
          <p className="text-gray-600">100% Safe and secure payments</p>
          {/* Add payment options here */}
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
          Place Order
        </button>
      </div>
    </div>
  )
}

// About Page Component
function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Style Space</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="mb-4">
          Style Space is your one-stop destination for all your furniture and home decor needs. We believe that everyone deserves to live in a space that reflects their personal style and enhances their daily life.
        </p>
        <p className="mb-4">
          Founded in 2023, Style Space has quickly become a leader in the online furniture retail industry. Our mission is to provide high-quality, stylish, and affordable furniture to customers across the country.
        </p>
        <p className="mb-4">
          We work with talented designers and reliable manufacturers to bring you a wide range of products that cater to various tastes and budgets. From modern minimalist designs to classic traditional pieces, we have something for everyone.
        </p>
        <p>
          At Style Space, we're not just selling furniture; we're helping you create the home of your dreams. Our team of interior design experts is always ready to assist you in making the best choices for your space.
        </p>
      </div>
    </div>
  )
}

// Contact Page Component
function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="mb-6">We'd love to hear from you! Whether you have a question about our products, need design advice, or want to share your feedback, our team is here to help.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" className="w-full border rounded px-3 py-2" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Email:</strong> info@stylespace.com</p>
            <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p className="mb-2"><strong>Address:</strong> 123 Furniture Lane, Decor City, ST 12345</p>
            <p className="mb-4"><strong>Hours:</strong> Monday - Friday: 9am - 5pm EST</p>
            <p>Follow us on social media for the latest updates and design inspiration!</p>
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </div>
  )
}

// Search Results Component
function SearchResults({ searchResults }) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Search Results</h1>
      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounde

d hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Main App Component
export default function App() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (searchTerm) => {
    const allProducts = Object.values(productData).flat()
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filteredProducts)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header onSearch={handleSearch} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search-results" element={<SearchResults searchResults={searchResults} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}






