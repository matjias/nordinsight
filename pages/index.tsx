import styles from "../styles/Home.module.css";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductDetails from "../components/ProductDetails";
import Partners from "../components/Partners";
import RiskGuarantee from "../components/RiskGuarantee";
import Testimonials from "../components/Testimonials";
import ContactModal from "../components/ContactModal";
import { useState } from "react";
import Layout from "../components/general/Layout";
import CTA from "../components/CTA";

const Home: React.FC= () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NordInsight - Improving MRI safety through data</title>
        <meta name="description" content="The only implant database radiologists and radiographers
            will ever need to find MRI-conditinals" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Layout>
      <section>
        <Hero />
      </section>
      <div className={styles.content}>
      <section>
        <Features />
      </section>
      <section>
        <CTA/>
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Partners heading="Join the many hospitals optimizing their MRI procedures with NordInsight"/>
      </section>
      <section>
        <ProductDetails />
      </section>
      <section>
        <RiskGuarantee openModal={toggleModal}/>
      </section>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
      </Layout>
    </div>
  );
};

export default Home;
