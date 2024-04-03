import Rescuec from "../services/Rescue-Card";
export function Rescue() {
  const data = [
    {
      img: "https://thumbs.dreamstime.com/b/providing-medical-care-to-wounded-dog-veterinarian-imposes-bandage-dog-s-leg-providing-medical-care-to-wounded-135121030.jpg",
      title: "Help Brownie",
      description:
        "Brownie was in an accident where she hurt her leg very badly. She is in terrible pain and is receiving treatment for her injury. Please donate to help us give her the best care",
    },
    {
      img: "https://assets3.thrillist.com/v1/image/2771432/381x254/crop;webp=auto;jpeg_quality=60.jpg",
      title: "Help Simba",
      description:
        "Simba has a terrible maggot wound in and around his eye. He needs to be treated immediately so that his injury does not worsen. Please donate towards his treatment.",
    },
    {
      img: "/assets/kalu.jpg",
      title: "Help Kalu",
      description:
        "Rowdy is paralyzed and faces the danger of permanent paralysis. While he is currently in hospital and receiving treatment, he is in dire need of your support. Please donate to help us give Rowdy the best possible care.",
    },
  ];
  const data1 = [
    {
      img: "/assets/Luck.jpg",
      title: "Help Luck",
      description:
        "Luck was found injured in Malad West, Mumbai. She was found in severe pain with her tail completely severed from her body. Please support her on her road to recovery by donating towards her treatment.",
    },
    {
      img: "/assets/nail.jpg",
      title: "Help Chikki",
      description:
        "Chikki was found in a dump, barely conscious after being attacked by someone with a nail. A little girl discovered her and brought her to us for treatment. This 2-month-old has bite marks and wounds all over his body and is unable to even stand. Please help her by donating towards his treatment and care.",
    },
    {
      img: "/assets/romeo.jpg",
      title: "Help Romeo",
      description:
        "Romeo is suffering from  maggot-infested wounds. He is trying his best to stay strong and survive but he’s in desperate need of your support. Please help Johnny by donating towards his treatment and care.",
    },
  ];
  const data2 = [
    {
      img: "/assets/Trooper.jpg",
      title: "Help Trooper",
      description:
        "Trooper has a terrible maggot wound in and around his eye. He needs to be treated immediately so that his injury does not worsen. Please donate towards his treatment.",
    },
    {
      img: "https://previews.123rf.com/images/malaha3/malaha32006/malaha3200600125/149894609-red-cat-with-a-damaged-eye-in-a-fight-red-blood-pets-street-cat-kitty-animal-world-predatory.jpg",
      title: "Help Abbi",
      description:
        "Daaku has an eye issue that requires urgent attention. This 4-month-old needs your support so that she can get the best treatment possible. Please donate towards her treatment",
    },
  ];
  return (
    <div className="rescue">
      <div className="rescue1">
        <h1>Rescues</h1>
        <p>We have rescued 50+ animals till date.</p>
        <a href="/rescueform">
          <button className="rescuebtn">Help us Rescue an animal</button>
        </a>
      </div>
      <div className="rescuetagline">
        <h1>"Unleash Compassion: Rescue a Stray Cat or Dog."</h1>
        <p>
          Be it an animal that’s been hit by a car or one that’s been abandoned
          by its human, we are here to help. Our dedicated teams assess the
          situation and send help, prioritising animals most in need of urgent
          care.
        </p>
      </div>
      <div className="animalcare">
        <h1> Animals in Care </h1>
        <div id="care">
          {data.map((cardData) => (
            <Rescuec data={cardData} />
          ))}
        </div>
        <div id="care1">
          {data1.map((cardData) => (
            <Rescuec data={cardData} />
          ))}
        </div>
        <div id="care2">
          {data2.map((cardData) => (
            <Rescuec data={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
}
