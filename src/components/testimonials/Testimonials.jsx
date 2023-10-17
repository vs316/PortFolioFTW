import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    avatar: AVTR1,
    name: "Jane Doe 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis necessitatibus nisi dolor a dolorum labore, sunt consequuntur sapiente asperiores quibusdam rem, esse officia distinctio laudantium ducimus enim repudiandae id.",
  },
  {
    avatar: AVTR2,
    name: "Jane Doe 2",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolores perferendis cumque tempora. Maiores recusandae obcaecati ducimus ex neque optio deserunt eaque, quaerat dolor quidem eos rem pariatur. Perspiciatis, ratione!",
  },
  {
    avatar: AVTR3,
    name: "Jane Doe 3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque magni perferendis maxime iusto dolore exercitationem accusantium quidem corporis sed architecto in modi debitis cumque, asperiores ab ipsa. Facilis, nihil!",
  },
  {
    avatar: AVTR4,
    name: "Jane Doe 4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatem explicabo unde, rerum vel repudiandae quae nisi atque! Accusantium tempore, aliquid optio exercitationem nesciunt mollitia eaque quo possimus numquam omnis?",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Slider className="container testimonials__container" {...settings}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <div key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
