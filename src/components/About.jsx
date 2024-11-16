import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    projects: false,
    experience: false,
    clients: false,
    reviews: false,
  });

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const clientsRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    };

    // Creating observers for each counter
    createObserver(projectsRef, "projects");
    createObserver(experienceRef, "experience");
    createObserver(clientsRef, "clients");
    createObserver(reviewsRef, "reviews");

    return () => {
      // Clean up observers if needed
      [projectsRef, experienceRef, clientsRef, reviewsRef].forEach((ref) => {
        if (ref.current) {
          const observer = new IntersectionObserver(() => {});
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section className="bg-[#0a192f] section sec2 about mt:0 lg:mt-6 p-8  px-6 lg:px-20" id="about">
      <div className="flex justify-center items-center ">
        <div className=" text-4xl lg:text-5xl leading-tight font-bold gradient-text py-4 ">
          About Me
        </div>
      </div>
      <div className="about-container grid grid-cols-1 lg:grid-cols-2 mt-0 lg:mt-4 gap-8">
        <div data-aos="zoom-in-down"     data-aos-delay="600" className="left-about pr-0 lg:pr-20">
          <p className="py-4 leading-8 text-[#ddd]">
            My name is Hasan Ali. I am a professional and enthusiastic programmer in my daily life.
            I am a quick learner with a self-learning attitude. I love to learn and explore new
            technologies and am passionate about problem-solving.
            <br /> <br /> I love almost all the stacks of web application development and love to make
            the web more open to the world. My core skill is based on JavaScript, and I love to do most
            of the things using JavaScript. I am available for any kind of job opportunity that suits my
            skills and interests.
          </p>
          <div className="btn-con">
            <a
              download="HASANALICV.pdf"
              href="assets/HASANALICV.pdf"
              className="button button_flex outline-none border border-bg-white rounded-lg text-white py-3 px-5 flex items-center hover:text-[#757575]"
            >
              Download CV
              <div className="ml-2">
                <FaArrowDown />
              </div>
            </a>
          </div>
        </div>


        <div data-aos="zoom-in-up"     data-aos-delay="800" className="right-about grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-0">
          <div className="p-6">
            <div className="abt-text flex flex-col">
              <p ref={projectsRef} className="large-text text-3xl font-bold text-[#8750f7]">
                {isVisible.projects && <CountUp end={50} duration={3} />}
              </p>
              <p className="uppercase font-semibold text-[#ddd] text-lg relative">
                Projects Completed
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="abt-text flex flex-col">
              <p ref={experienceRef} className="large-text text-3xl font-bold text-[#8750f7]">
                {isVisible.experience && <CountUp end={4} duration={4} />} +
              </p>
              <p className="uppercase font-semibold text-[#ddd] text-lg relative">
                Years of experience
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="abt-text flex flex-col">
              <p ref={clientsRef} className="large-text text-3xl font-bold text-[#8750f7]">
                {isVisible.clients && <CountUp end={80} duration={3} />}
              </p>
              <p className="uppercase font-semibold text-[#ddd] text-lg relative">
                Happy Clients
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="abt-text flex flex-col">
              <p ref={reviewsRef} className="large-text text-3xl font-bold text-[#8750f7]">
                {isVisible.reviews && <CountUp end={10} duration={5} />}
              </p>
              <p className="uppercase font-semibold text-[#ddd] text-lg relative">
                Customer Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
