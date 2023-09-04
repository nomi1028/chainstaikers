import Image from 'next/image'
import Contact from './Components/contact'
import Categories from './Components/category/category'
import "./globals.css"
import Products from './Components/product/Product'
export default function Home() {
  return (
    <main >
      <Categories/>
    <Products/>
    <Contact/>
    </main>
  )
}
