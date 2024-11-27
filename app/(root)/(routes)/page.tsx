import styles from "./page.module.css";

// For Components
import { Background } from "../_components/Background/Background";
import { Fav_Subscription } from "../_components/Fav_Subscription/Fav_Subscription";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <>
      <Background
        h6Text="Welcome to Prime Video"
        pText="Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"
        BtnText="Join Prime Now"
        Imgurl="/assets/1.jpg"
      />

      <Background
        h6Text="Movie rentals on Prime Video"
        pText="Early Access to new movies, before digital subscription"
        BtnText="Rent Now"
        Imgurl="/assets/2.jpg"
      />


      <Fav_Subscription />



    </>
  );
}
