import React from "react";
import HomeHead from "./_components/HomeHead";
import { HomeMidLeft, HomeMidRight } from "./_components/HomeMid";

const HomePage = () => {
  return (
    <div>
      <HomeHead />
      <div className="lg:my-10 my-6 w-full flex justify-center items-center flex-col border-black border-t-8 border-b-8 lg:p-10 p-4 bg-warning-200">
        <HomeMidLeft
          link="/projects"
          title="Projects"
          desc="Our services at Derby Decor encompass bespoke furniture design, personalized interior consultation, and meticulous craftsmanship. We collaborate closely with discerning clients to create custom pieces that harmonize with their unique aesthetic visions. From exclusive sourcing to exquisite finishing, our team ensures every detail is perfected to deliver unparalleled luxury and sophistication."
          image="/living.jpg"
        />

        <HomeMidRight
          link="/location"
          title="Location"
          desc="Meet us at our office at: FW5R+8X Vikas Associates, Handewadi Rd, Uruli
Devachi, Pune, Maharashtra 412308
"
          image="/people.jpg"
        />
        <HomeMidLeft
          link="/about"
          title="About Us"
          desc="We curate exceptional furniture pieces that transcend ordinary living spaces. Crafted with impeccable precision, our collections epitomize timeless elegance and unparalleled quality. Each design reflects an unwavering commitment to luxurious comfort, fusing sophisticated artistry with enduring materials, elevating every home into a sanctuary of refinement and distinction.
"
          image="/comfort.jpg"
        />
      </div>
    </div>
  );
};

export default HomePage;
