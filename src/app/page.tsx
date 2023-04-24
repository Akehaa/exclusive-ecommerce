import { Carousel } from "../components/Home/Carousel/Carousel";
import { NavigationBar } from "../components/Home/NavigationBar";


export default function Home() {

  return (
    <main className="w-11/12 lg:w-5/6 mx-auto">
      <section className="grid justify-start grid-cols-[auto_60%] md:grid-cols-[auto_70%] xl:grid-cols-[auto_75%] 2xl:grid-cols-[auto_83%] mb-32">
        <aside>
          <NavigationBar />
        </aside>
        <div className="ml-5 mt-5 lg:ml-10 lg:mt-10">
          <Carousel />
        </div>
      </section>
    </main>
  )
}
