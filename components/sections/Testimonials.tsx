import { useState } from "react";
import styles from "../../styles/Testimonials.module.css"
import TestimonialCard from '../TestimonialCard'

const Testimonials: React.FC = () => {
  const testimonialData = [
    {
      imgUrl: "/test_profile.jpg",
      text: '"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight’s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"',
      name: "Samuel Oliviera",
      position: "Head of Radiology"
    },
    {
      imgUrl: "/test_profile.jpg",
      text: '"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight’s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"',
      name: "Samuel Oliviera",
      position: "Head of Radiology"
    },
    {
      imgUrl: "/test_profile.jpg",
      text: '"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight’s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"',
      name: "Samuel Oliviera",
      position: "Head of Radiology"
    }, 
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const testimonialWidth = target.scrollWidth / testimonialData.length;
    const current = Math.round(target.scrollLeft / testimonialWidth);
    setCurrentTestimonial(current);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Real Stories from Hospitals Like Yours</h3>

      <div className={styles.cards} onScroll={handleScroll}>
      {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgUrl={testimonial.imgUrl}
            text={testimonial.text}
            name={testimonial.name}
            position={testimonial.position}
          />
        ))}
      </div>
      <div className={styles.dots}>
        {testimonialData.map((_, index) => (
          <span key={index} className={index === currentTestimonial ? styles.activeDot : styles.dot}></span>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
