import AdoptCard from "./Adopt-card";
export function Adoption() {
  const adoptdata = [
    {
      img: "/assets/angela.jpeg",
      title: "Angela",
      gender: "Gender:Female",
      age: "Age-2 years",
      description:
        "Angela has this look of constant surprise on her face. From far away that she is a skittish little kitty, but she's quite the opposite! She will approach you gingerly, but once close enough she will in her little quirky way get you to play and give her head scritches.",
    },
    {
      img: "/assets/simba.jpeg",
      title: "Help Simba",
      gender: "Gender : Male",
      age: "Age- 5 months",
      description:
        "Just like the Lion King, Simba's named after, He is fearless, brave, and spicy! This sweet boy as a kitten was found by our team, weak, malnourished, and sickly. Being the brave and feisty kitty she is, Misty fought through all odds ",
    },
    {
      img: "/assets/Max.jpg",
      title: "Max",
      gender: "Gender : Male",
      age: "Age- 7 months",
      description:
        "Max was yelping and whimpering in pain when we found him.  But now he needs a home.We couldn’t have chosen a better name for this tiny brave boy. Little Patch is shy at first but he can have his moments!",
    },
  ];
  const adoptdata1 = [
    {
      img: "/assets/obiiii.jpeg",
      title: "Obii",
      gender: "Gender:Male",
      age: "Age- 7 Months",
      description:
        "We have a happy and healthy Obii with us here for adoption!He is a magical little kitty. His special abilities? To make anyone fall in love with just a blink and head tilt. He is a sweet little boy, who has endless energy when it comes to playing with toys and other kitties. She can make you smile even on a bad day",
    },
    {
      img: "/assets/Tommy.jpg",
      title: "Tommy",
      gender: "Gender : Male",
      age: "Age- 2 months",
      description:
        "Tommy is an adorable and affectionate puppy ready to find his forever home! With his irresistible puppy eyes and wagging tail, he is sure to steal your heart. Tommy is a bundle of joy who loves to play, snuggle, and explore the world around him.",
    },
    {
      img: "/assets/Champ.jpg",
      title: "Champ",
      gender: "Gender : Male",
      age: "Age- 1 year ",
      description:
        "Champ is a remarkable dog with an irresistible personality and a heart full of love. With his striking appearance and boundless energy, he is sure to become your ultimate companion. Champ is known for his loyalty, intelligence, and eagerness to please.",
    },
  ];
  const adoptdata2 = [
    {
      img: "/assets/Venom.jpg",
      title: "Venom",
      gender: "Gender : Male",
      age: "Age- 3 year ",
      description:
        "Venom is a captivating feline with an intriguing aura and a heart full of love. Donning a sleek black coat, he exudes elegance and grace. Despite his name, Venom is anything but dangerous. He is a sweet and affectionate cat who craves human companionship.",
    },
    {
      img: "/assets/bella.jpg",
      title: "Beela",
      gender: "Gender : Female",
      age: "Age- 2 months ",
      description:
        "Bella is a delightful and enchanting kitten ready to steal your heart. With her playful antics and adorable face, she is sure to bring joy and laughter to your home. Bella is a bundle of energy who loves exploring, chasing toys, and cuddling up for a nap on your lap.",
    },
  ];
  return (
    <div className="involved2">
      <div className="adpotinvoled">
        <div className="adoptpara">
          <div className="adoptpara1">
            <p>
              <h2>Life is better with a furry friend. Come meet our brood</h2>
              We have hundreds of animals waiting eagerly to find their forever
              homes. Many of them have been rescued from the streets and each of
              them is deserving of a loving, caring family they can call their
              own. It’s a lot easier to adopt than you think. We promise. And
              we’re here to guide you every step of the way.
              <h2>Adoption is a commitment</h2>
              Adopting an animal is not a decision to take lightly. Cats and
              dogs can live as long as 15 years. We want to ensure that our
              animals go to people who will provide them with a clean, safe,
              family environment, will feed them properly, take care of them
              when they are sick, and will – above all – love them long time.
            </p>
          </div>
          <div className="adoptpara2">
            <img src="/assets/adoptparaimg.jpg"></img>
          </div>
        </div>
        <h1>Cats Up for adoption</h1>
        <p>
          All the cats have also been spayed or neutered, and are regularly
          vaccinated and dewormed.
          <br /> <br />
          Please don’t feel sorry for our kitties, their disabilities make no
          difference to their lifestyle, energy, intelligence, or playfulness!
          They are each unique in their own way.
        </p>
        <div className="adoptinvolvedtag">
          <p>
            Dont stop just adopt <br />
            "From Stray to Family, Adopt and Transform Lives."
          </p>
        </div>
      </div>
      <div id="care">
        {adoptdata.map((cardData) => (
          <AdoptCard data={cardData} />
        ))}
      </div>
      <div id="care1">
        {adoptdata1.map((cardData) => (
          <AdoptCard data={cardData} />
        ))}
      </div>
      <div id="care2">
        {adoptdata2.map((cardData) => (
          <AdoptCard data={cardData} />
        ))}
        
      </div> 
      <h1 className="faqheader">Frequently Asked Questions</h1>
      <div className="faqscontainer">
        
      <div className="faqs">
        <h3>how do i adopt an animal from pawfriends</h3>
        <p>
          {" "}
          The first step would be to visit the cafe, and spend time with our
          cats to see if there is one (or two) you connect with. You can also
          request for our Adoption Manual to get a better idea of the basics of
          preparing to adopt a cat and their care. Once you are sure about
          adopting and have a cat in mind, our senior staff will conduct your
          interview, which will involve filling up a questionnaire to formalize
          the process. If all goes well, all you will have to do then is submit
          a photocopy of your address proof and a government ID, sign our
          official adoption papers, and you are good to take home your new
          family member!
        </p>
      </div>
      <div className="faqs">
        <h3>
          How does the adoption process at Cat Café Work? <br />
          What are the documents required?
        </h3>
        <p>
          The adoption process begins with you visiting the cats a couple of
          times at Cat Café Studio and spending time with our kitties to see who
          you best connect with. Our Adoption Manager will also be present to
          help you answer any queries and doubts you may have! They know our
          cats the best and can also give you an insight into what the cat’s
          likes, dislikes, quirks, and, personalities are like. We welcome
          first-timer adopters too! The Cat Café Staff will be happy to help you
          in your quest to find your furever companion! The next step would
          involve taking our Adoption Manual for a read. The manual will take
          you through the basics of cat care and adoption preparation. Once you
          have gone through the manual and know which cat/s you would like to
          adopt, we will then conduct an interview and make you fill out a
          questionnaire. This is not only to make sure that you are serious and
          committed to adopting a cat but also to clear any questions you may
          have about being a pet parent. If all goes well, you sign the official
          Cat Café Studio Adoption Papers, submit a photocopy of your address
          proof and a government ID and you are good to take home your pet.
        </p>
      </div>
     </div>
     <div className="faqscontainer2">
      <div className="faqs">
        <h3> What are the requirements to be fulfilled before adopting?</h3>
        <p>
          We first suggest that come over to meet the kitties, get to know them,
          and talk to our adoption manager. Our Manager will take you through
          everything that entails with regards to cat care but also our adoption
          process. But here are compulsory requirements you must meet to adopt a
          cat,dog from here<br/>  1. You will have to be above the age of 24
          to adopt. If not you will have to bring in your parent or legal
          guardian who will.<br/> 2. If you are renting the place, you will need to
          have your landlord’s permission.<br/>  3. You will need to get your windows
          and balcony meshed, to cat-proof your home <br/> 4. Most importantly, you
          need to be 10000% sure about committing your life to the cat you are
          adopting for the rest of the kitty’s life.
        </p>
      </div>
      
   
      <div className="faqs">
        <h3>
          {" "}
          Can I still adopt a cat if my work keeps me out of the house for most
          of the day?
        </h3>
        <p>
          Cats are a really good option as pets for working individuals, they
          can usually stay by themselves at home for 6-8hours as long as they
          have fresh food and water, a clean litter box, and toys/cat furniture
          to keep them entertained! When you return after a long, hard day at
          work, they’ll come to you with infinite cuddles and snuggles,
          automatically making your day better! If you are often away from home,
          do consider getting a second cat or adopting in pairs. It will not
          only double the love you get, but the cats will also have each other
          for comfort and companionship while you are away. Its a win-win!
        </p>
      </div>
      </div>
    </div>
  );
}
