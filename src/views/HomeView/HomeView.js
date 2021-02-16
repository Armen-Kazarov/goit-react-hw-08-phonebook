import s from "./HomeView.module.css";
import PhoneBookImg from "images/phonebook.png";

const HomeView = () => (
  <div style={s.container}>
    <h1 style={s.title}>
      Welcome to phonebook
      <img src={PhoneBookImg} alt='phonebook' className={s.img} />
    </h1>
  </div>
);

export default HomeView;