import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <img className="about__img" src="./aboutme.svg" alt="" />
            <div className="about__content">
              <p>
                I am __________, a 22-year-old Software Engineer from Tashkent,
                Uzbekistan, currently living in Warsaw, Poland.
              </p>
                <p>
                I am always contributing to developer events by giving a talk or
                as a mentor, especially the ones that engage women in tech. As a
                developer, I really want to see more diversity in the industry.
                </p>
                <p>
                Recently I experimented working standing and found it really
                useful to stay focused and a little healthier. I was able to
                transform my workstation with the books I read.
                </p>
                <p>
                In short, it's me, Azimjon, a friendly programmer from
                Uzbekistan. You can read my story of becoming a software
                engineer here.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
