// importing section
import React from "react";
import Location from "../components/Location/Location";

const About = () => {
  return (
    // html section
    <div className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          illo doloremque ea, laboriosam tenetur facilis rem modi suscipit quae
          magni voluptatem tempore quam, eligendi vel dolores pariatur eum
          commodi quasi sed natus officia enim fuga illum. Repellat, error.
          Magni nihil vero quibusdam iste esse eligendi rem dolore blanditiis,
          error libero porro sapiente commodi distinctio, deserunt nemo aliquid
          quasi repellat pariatur!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          commodi. Eaque reiciendis accusantium totam sit? Doloribus delectus
          sapiente eveniet labore a aliquid qui magnam possimus. Laboriosam
          reiciendis minima cupiditate suscipit est nihil quod. Necessitatibus
          at quod, enim repudiandae delectus mollitia officia perferendis nobis
          eligendi aliquam dolorum, dignissimos adipisci sequi cupiditate error
          neque officiis ratione cum pariatur! Blanditiis unde aperiam
          veritatis!
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
