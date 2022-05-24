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
import Product from "../components/product";

const Home: React.FC= () => {

  return (
    <div className={styles.container}>
      {/* <Background className={styles.bgtop} />
      <div className={styles.bgwave}>
      </div> */}
      <Head>
        <title>NordInsight - Improving MRI safety through data</title>
        <meta name="description" content="The only implant database radiologists and radiographers
            will ever need to find MRI-conditinals" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <section className={styles.slide}>
        <Navigation />
        <Landing />
      </section>
      <section id='mision' className={styles.slide}>
        <Product />
      </section>
      <section id='team' className={styles.slide}>
        <Team />
      </section>
      <section id='contact' className={styles.slide}>
        <Contact />
      </section>
      {/* <section id='mision' className={styles.slide}>
        <Mission />
      </section>
      <section id='products' className={styles.slide}>
        <Products />
      </section>
      
       */}
        <Footer />
      {/* <Background className={styles.bgbottom} /> */}
    </div>
  );
};

export default Home;
