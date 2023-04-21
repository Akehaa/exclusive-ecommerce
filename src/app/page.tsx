import { Carousel } from "../components/Home/Carousel/Carousel";
import { NavigationBar } from "../components/Home/NavigationBar";


export default function Home() {

  return (
    <main>
      <section className="grid grid-cols-[auto_53%] md:grid-cols-[auto_75%] lg:grid-cols-[auto_68%] justify-start items-center mb-32">
        <aside>
          <NavigationBar />
        </aside>
        <div className="ml-5 lg:mt-2">
          <Carousel />
        </div>
      </section>
    </main>
  )
}
