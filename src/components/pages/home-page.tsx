import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <div className="w-full flex-1 relative  flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] bg-center bg-no-repeat bg-cover brightness-[0.25] z-1 blur-xs" />

      <div className="flex items-center justify-evenly z-2 p-20 text-white">
        <div className="space-y-8 flex flex-col items-center flex-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  text-center">
            Welcome To <br /> Paradise Nursery
          </h1>
          <div className="h-1 w-14 bg-primary text-primary" />
          <p className="text-xl leading-7 ">Where Green Meets Serenity</p>
          <Link to="/products">
            <Button size={"lg"} className="text-lg">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="flex-3 space-y-8">
          <p className="text-xl leading-7  text-center">
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p className="text-xl leading-7 ">
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p className="text-xl leading-7 ">
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          <p className="text-xl leading-7 ">
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
