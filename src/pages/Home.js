import Navbar from "../components/Navbar";
import "../css/Home.css";
import heroImage1 from "../assets/images/introduction/hero-image-1.jpg";
import heroImage2 from "../assets/images/introduction/hero-image-2.jpg";
import heroImage3 from "../assets/images/introduction/hero-image-3.jpg";
import heroImage4 from "../assets/images/introduction/hero-image-4.jpg";
import heroImage5 from "../assets/images/introduction/hero-image-5.jpg";
import heroImage6 from "../assets/images/introduction/hero-image-6.jpg";
import heroImage7 from "../assets/images/introduction/hero-image-7.jpg";
import heroImage8 from "../assets/images/introduction/hero-image-8.jpg";
import heroImage9 from "../assets/images/introduction/hero-image-9.jpg";
import Image from "../components/Image";
import HeroCard from "../components/HeroCard";
import Heading from "../components/Heading";
import CustomizeButton from "../components/CustomizeButton";
import { useState, useEffect } from "react";

import Link from "../components/Link";
import Card from "../components/Card";
import cardImage1 from "../assets/images/routine/strength.png";
import cardImage2 from "../assets/images/routine/cardiovascular.png";
import cardImage3 from "../assets/images/routine/yoga.png";
import CustomTimeline from "../components/CustomTimeline";

import balanceEating from "../assets/images/nutrition/balance-eating-image.jpg";
import deliciousRecipe from "../assets/images/nutrition/delicious recipes.jpg";
import mealPlanning from "../assets/images/nutrition/meal-planning image.jpg";

import Fade from "react-reveal/Fade";
import mindfulnessImage from "../assets/images/mindfulness/mindfulness-image.jpg";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
/* import "normalize.css/normalize.css"; */
import "../css/slider-animation.css";

/** Testimonies */
import Alex from "../assets/images/testimonies/Alex.jpg";
import Jessica from "../assets/images/testimonies/Jessica.jpg";
import Emily from "../assets/images/testimonies/Emily.jpg";
import Footer from "../components/Footer";

const images = [
  {
    src: heroImage1,
    alt: "Elevate your Fitness Journey",
    title: "Elevate Your Fitness Journey",
    description: "Discover a Balanced Approach to Health and Wellness",
    buttonText: "Get Started",
  },
  {
    src: heroImage2,
    alt: "Embrace Active Living",
    title: "Embrace Active Living",
    description:
      "Unlock Your Potential with Effective Workouts and Mindful Practices",
    buttonText: "Explore Workouts",
  },
  {
    src: heroImage3,
    alt: "Nourish Your Body, Fuel Your Mind",
    title: "Nourish Your Body, Fuel Your Mind",
    description: "Delicious Recipes and Nutrition Tips for a Vibrant Lifestyle",
    buttonText: "Try Recipes",
  },
  {
    src: heroImage4,
    alt: "Find Your Flow",
    title: "Find Your Flow",
    description: "Mindfulness Techniques for Inner Peace and Stress Relief",
    buttonText: "Start Mindfulness",
  },
  {
    src: heroImage5,
    alt: "Real Stories, Real Results",
    title: "Real Stories, Real Results",
    description: "Meet Those Who Transformed Their Lives Through FitFlow",
    buttonText: "Read Success Stories",
  },
  {
    src: heroImage6,
    alt: "Stay Informed, Stay Inspired",
    title: "Stay Informed, Stay Inspired",
    description: "Latest Fitness Trends and Expert Insights in Our Blog",
    buttonText: "Read Our Blog",
  },
  {
    src: heroImage7,
    alt: "Step into Motion",
    title: "Step into Motion",
    description: "Engaging Video Content to Energize Your Body and Mind",
    buttonText: "Watch Videos",
  },
  {
    src: heroImage8,
    alt: "Join Our FitFlow Community",
    title: "Join Our FitFlow Community",
    description: "Subscribe for Updates and Exclusive Wellness Content",
    buttonText: "Subscribe Now",
  },
  {
    src: heroImage9,
    alt: "Connect with Us",
    title: "Connect with Us",
    description: "Reach Out for Personalized Guidance and Collaboration",
    buttonText: "Get in Touch",
  },
];

const testimonies = [
  {
    src: Alex,
    stories:
      "I embarked on a journey with FitFlow that changed my life. With dedication and support, I lost 25 pounds and gained the confidence I never knew I had.",
    name: "Alex",
  },
  {
    src: Jessica,
    stories:
      "My FitFlow journey was transformative. Through ups and downs, I discovered a healthier and happier version of myself that I'm proud of.",
    name: "Jessica",
  },
  {
    src: Emily,
    stories:
      "FitFlow became my daily companion, helping me overcome challenges and push my limits. Today, I'm stronger, happier, and more determined than ever.",
    name: "Emily",
  },
];

const Home = () => {
  // Effects for Image Carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navigateToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Sample Carousel Code

  return (
    <>
      <Navbar />

      {/* INTRDUCTION SECTION */}
      <Fade left big>
        <section className="section home">
          <HeroCard
            Image={
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                isHero={true}
                // Pass isTransitioning prop
              />
            }
            headingText={
              <Heading
                text={images[currentImageIndex].title}
                fontWeight={"600"}
                color={"white"}
                letterSpacing={"1.6px"}
                fontSize={"4em"}
                isHero={true}
              />
            }
            subText={images[currentImageIndex].description}
            button={
              <CustomizeButton text={images[currentImageIndex].buttonText} />
            }
          />

          <div className="slider-navigation">
            {images.map((_, index) => (
              <div
                key={index}
                className={`nav-btn ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => navigateToImage(index)}
              ></div>
            ))}
          </div>
        </section>
      </Fade>

      {/* ROUTINE SECTION */}
      <section className="section routine">
        <div className="container py-5 px-3 routine-container">
          <div className="routine-intro-content">
            <Heading
              text={"Pick Your Routine"}
              highlight={true}
              letterSpacing={"1.6px"}
              fontSize={"50px"}
              fontWeight={"bold"}
            />

            <div className="routine-intro-link">
              <p>
                Elevate your fitness journey with our carefully curated workout
                routines. Whether you're a beginner taking your first steps
                toward a healthier lifestyle or a fitness enthusiast looking for
                new challenges, we have something for everyone.
              </p>
              <Link
                text={"EXPLORE ROUTINE >"}
                textDecoration={true}
                fontWeight={"600"}
                letterSpacing={"1.6px"}
                fontSize={"16px"}
              />
            </div>
          </div>
          {/* You can add cards here */}
          <div className="cards-container">
            <Card
              titleText={"Strength Training"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Unlock the benefits of strength training. Build lean muscle, boost metabolism, and increase overall strength through targeted routines designed to grow with you."
              }
              toPlaceAt={"routine"}
              image={<Image src={cardImage1} alt={"Strength Training"} />}
              buttonLink={
                <Link
                  text={"Train Strength >"}
                  textDecoration={true}
                  fontWeight={"600"}
                  letterSpacing={"1.6px"}
                  fontSize={"15px"}
                />
              }
            />
            <Card
              titleText={"Cardiovascular Workouts"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Rev up your heart rate and energy with our cardio workouts. Enhance endurance, burn calories, and improve fitness. Explore a range of routines from HIIT to steady-state cardio, tailored to your preferences."
              }
              toPlaceAt={"routine"}
              image={<Image src={cardImage2} alt={"Cardiovascular Workouts"} />}
              buttonLink={
                <Link
                  text={"Train Cardiovascular >"}
                  textDecoration={true}
                  fontWeight={"600"}
                  letterSpacing={"1.6px"}
                  fontSize={"15px"}
                />
              }
            />
            <Card
              titleText={"Flexibility and Mobility"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Improve flexibility with our stretching routines. Ease tension, posture, and prevent injuries. Perfect for beginners and seasoned yogis alike."
              }
              toPlaceAt={"routine"}
              image={
                <Image src={cardImage3} alt={"Flexibility and Mobility"} />
              }
              buttonLink={
                <Link
                  text={"Train Flexibility and Mobility >"}
                  textDecoration={true}
                  fontWeight={"600"}
                  letterSpacing={"1.6px"}
                  fontSize={"15px"}
                />
              }
            />
          </div>
        </div>
      </section>

      {/* NUTRITION SECTION */}
      <section className="section nutrition">
        <div className="container py-5 px-3">
          <div className="nutrition-heading-content mb-5">
            <Heading
              text={"Nutrition Tips"}
              highlight={true}
              letterSpacing={"1.6px"}
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
            />
            <p>Fuel Your Fitness Journey with Smart Choices</p>
          </div>

          {/* You can add cards here */}
          <div className="cards-container">
            <Card
              titleText={"Delicious Recipes"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Explore our nutritious recipes that make healthy eating delightful. From snacks to meals, we've got your cravings covered."
              }
              height={"100%"}
              color={"white"}
              toPlaceAt={"nutrition"}
              image={<Image src={deliciousRecipe} alt={"Strength Training"} />}
            />
            <Card
              titleText={"Balance Eating"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Discover the art of balanced eating. Incorporate a variety of nutrients to energize your body and support your goals."
              }
              height={"100%"}
              color={"white"}
              toPlaceAt={"nutrition"}
              image={
                <Image src={balanceEating} alt={"Cardiovascular Workouts"} />
              }
            />
            <Card
              titleText={"Meal Planning Strategies"}
              backgroundColor={"#D9D9D9"}
              subText={
                "Explore our nutritious recipes that make healthy eating delightful. From snacks to meals, we've got your cravings covered."
              }
              toPlaceAt={"nutrition"}
              image={
                <Image src={mealPlanning} alt={"Flexibility and Mobility"} />
              }
              height={"100%"}
              color={"white"}
              buttonLink={
                <Link
                  text={"Train Flexibility and Mobility >"}
                  textDecoration={true}
                  fontWeight={"600"}
                  letterSpacing={"1.6px"}
                  fontSize={"15px"}
                />
              }
            />
          </div>
          <CustomTimeline
            Heading={
              <Heading
                text={"How It Works"}
                highlight={true}
                color={"white"}
                letterSpacing={"1.6px"}
                fontWeight={"bold"}
                fontSize={"40px"}
              />
            }
            color={"white"}
            contents={[
              {
                heading: "Nutrient Variety",
                subContent:
                  "Mix up fruits, veggies, proteins, and whole grains for balanced nutrition.",
              },
              {
                heading: "Mindful Portions",
                subContent:
                  "Learn portion control to support health and prevent overeating.",
              },
              {
                heading: "Flavorful Choices:",
                subContent:
                  "Enjoy tasty meals that align with your nutritional goals.",
              },
              {
                heading: "Meal Prep Mastery",
                subContent:
                  "Plan and prep meals for convenience and healthy eating.",
              },
              {
                heading: "Smart Snacking",
                subContent:
                  "Opt for nutrient-rich snacks to curb cravings and stay energized.",
              },
              {
                heading: "Hydration Habits",
                subContent:
                  "Stay hydrated with water and hydrating beverages throughout the day.",
              },
              {
                heading: "Mindful Eating",
                subContent:
                  "Tune into hunger cues and eat with intention for mindful nourishment.",
              },
              /*  {
                heading: "Nutrition Labels",
                subContent:
                  "Decode labels to make informed choices about packaged foods.",
              },
              {
                heading: "Balanced Macros",
                subContent:
                  "Include proteins, carbs, and fats in your meals for a well-rounded diet.",
              },
              {
                heading: "Flexible Choices",
                subContent:
                  "Allow room for occasional treats while focusing on overall balance.",
              }, */
            ]}
          />
          <div className="nutrition-footer-content mt-5">
            <p>
              Elevate your fitness results with the power of nourishment.
              Remember, a well-fueled body is the foundation of a successful
              fitness journey.
            </p>
            <Link
              text={"Explore Nutrition Tips >"}
              textDecoration={true}
              fontWeight={"600"}
              letterSpacing={"1.6px"}
              fontSize={"15px"}
              color={"white"}
            />
          </div>
        </div>
      </section>
      <section className="section mindfulness">
        <Image
          src={mindfulnessImage}
          alt={"Mindfulness Image"}
          isHero={true}
          opacity={"0.8"}
        />
        <div className="container py-5 px-3">
          <div className="mindfulness-content">
            <Heading
              text={"Mindfulness and Wellness"}
              highlight={true}
              letterSpacing={"1.6px"}
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
            />
            <p className="mindfulness-subtext">
              Nurture your mind and soul with our mindfulness practices. Achieve
              tranquility and mental clarity for a balanced well-being.
            </p>
            <Link
              text={"Explore Mindfulness and Wellness >"}
              textDecoration={true}
              fontWeight={"600"}
              letterSpacing={"1.6px"}
              fontSize={"15px"}
              color={"white"}
            />
          </div>
        </div>
      </section>
      <section className="section testimony">
        <div className="container py-5 px-3">
          <div className="testimony-content">
            <Heading
              text={"Success Stories"}
              highlight={true}
              letterSpacing={"1.6px"}
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              width={"30%"}
            />
            <p>Real People, Real Transformations</p>
          </div>
          <div className="testimony-card">
            <Slider className="slider-wrapper ">
              {testimonies.map((testimony, index) => (
                <div key={index} className="slider-content">
                  <div className="testimony-image">
                    <Image src={testimony.src} alt={testimony.name} />
                  </div>
                  <div className="inner p-5">
                    <p>
                      <em>" {testimony.stories} "</em>
                    </p>
                    <h5>-{testimony.name}</h5>
                  </div>
                </div>
              ))}
            </Slider>
            <div
              className="testimony-link mt-5"
              style={{ textAlign: "center" }}
            >
              <Link
                text={"Read More Success Stories >"}
                textDecoration={true}
                fontWeight={"600"}
                letterSpacing={"1.6px"}
                fontSize={"15px"}
                color={"white"}
              />
            </div>
          </div>
          <section className="articles mt-5">
            <div className="article-content">
              <div className="article-title container p-5">
                <Heading
                  text={"Articles"}
                  highlight={false}
                  fontSize={"35px"}
                  fontWeight={"bold"}
                  color={"#000"}
                />
              </div>

              <div className="articles">
                <div className="article">
                  <Heading
                    text={"The Power of Mindful Eating"}
                    highlight={false}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#000"}
                  />
                  <p>
                    Discover how mindfulness can transform your relationship
                    with food and support your health goals.
                  </p>
                  <div className="link">
                    <Link
                      text={"Read More >"}
                      textDecoration={true}
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"#000"}
                    />
                  </div>
                </div>
                <div className="article">
                  <Heading
                    text={"Unlocking Strength: A Guide to Resistance Training"}
                    highlight={false}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#000"}
                  />
                  <p>
                    Dive into the world of resistance training and learn how it
                    can help you build muscle and increase strength.
                  </p>
                  <div className="link">
                    <Link
                      text={"Read More >"}
                      textDecoration={true}
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"#000"}
                    />
                  </div>
                </div>
                <div className="article">
                  <Heading
                    text={"The Science of Cardiovascular Fitness"}
                    highlight={false}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#000"}
                  />
                  <p>
                    Explore the science behind cardiovascular exercise and its
                    impact on your heart health and overall fitness.
                  </p>
                  <div className="link">
                    <Link
                      text={"Read More >"}
                      textDecoration={true}
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"#000"}
                    />
                  </div>
                </div>
                <div className="article">
                  <Heading
                    text={"Finding Balance: Work, Life, and Fitness"}
                    highlight={false}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#000"}
                  />
                  <p>
                    Learn strategies to strike a harmonious balance between your
                    fitness journey and everyday life demands.
                  </p>
                  <div className="link">
                    <Link
                      text={"Read More >"}
                      textDecoration={true}
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"#000"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
