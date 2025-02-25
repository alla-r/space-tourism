import Header from "../components/header";
import Button from "../components/button";
import { TEXT_PRESET_1, TEXT_PRESET_6, TEXT_PRESET_9 } from "../twcssPresets";

function Home() {
  return (
    <main className="h-screen bg-[url('../assets/home/background-home-mobile.jpg')] bg-cover bg-center sm:bg-[url('../assets/home/background-home-tablet.jpg')] md:bg-[url('../assets/home/background-home-desktop.jpg')]">
      <Header />
      <section className="px-6 text-center">
        <div className="max-w-sm text-blue-300 sm:max-w-lg">
          <h1 className={TEXT_PRESET_6}>
            So, you want to travel to <span className={`${TEXT_PRESET_1} text-white`}>Space</span>
          </h1>
          <p className={TEXT_PRESET_9}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>

        <Button />
      </section>
    </main>
  );
}

export default Home;
