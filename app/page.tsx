import Header from "./components/Header"
import Category from "./components/Category"

export default function HomePage() {
  return (
    <div>
      <Header text="About The Blog" />
      <br></br>
      <Header text="Categories"/>
      <Category title="Books" imageSource="/../public/images/books.jpg"/>
    </div>
  )
}
