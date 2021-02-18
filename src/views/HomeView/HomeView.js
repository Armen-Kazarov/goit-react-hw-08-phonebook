import s from "./HomeView.module.css";
import PhoneBookImg from "images/phonebook.png";

const HomeView = () => (
  <div >
    <h1 className={s.title}>
      Welcome to phonebook
    </h1>
    <img src={PhoneBookImg} alt='phonebook' className={s.image} width="50"/>
  </div>
);

export default HomeView;