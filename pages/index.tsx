import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navigation from "../components/navigation";
import Landing from "../components/landing";
import Mission from "../components/mission";
import Products from "../components/products";
import Team from "../components/team";
import Background from "../components/background";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home: React.FC= () => {

  return (
    <div className={styles.container}>
      <Background className={styles.bgtop} />
      <div className={styles.bgwave}>
      </div>
      <Head>
        <title>NordInsight - Building the future</title>
        <meta name="description" content="Landing page of NordInsight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.slide}>
        <Navigation />
        <Landing />
      </section>
      <section id='mision' className={styles.slide}>
        <Mission />
      </section>
      <section id='products' className={styles.slide}>
        <Products />
      </section>
      <section id='team' className={styles.slide}>
        <Team />
      </section>
      <section id='contact' className={styles.slide}>
        <Contact />
      </section>
        <Footer />
      {/* <Background className={styles.bgbottom} /> */}
    </div>
  );
};

export default Home;
