import Category from "../components/Category"
import Header from "../components/Header"

export const metadata = {
    title: 'Categories',
}

export default function CategoriesPage() {
  return (
    <div>
      <Header text="Categories"/>
      <Category title="Books" imageSource="/../public/images/books.jpg"/>
    </div>
  )
}