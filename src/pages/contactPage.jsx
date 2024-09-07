import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 my-14">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-5xl my-8">Contact</h2>
          <p>
            We’d love to help you with an order, for general customer service
            enquiries or product questions. The best time to reach us is Mon -
            Sat 9.00 am - 6:00 pm.
          </p>
          <h3></h3>
          <h3>
            <span className="font-bold">Email:</span> contact@ayatcraft.com
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center xs:order-first sm:order-first md:order-none">
          <figure>
            <img
              src="https://i.ibb.co/F6ppqQk/image.jpg"
              alt="Ayat Art & Craft office"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
