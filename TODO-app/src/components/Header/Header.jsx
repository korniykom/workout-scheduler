/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const getCurrentDayOfTheWeek = () => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[new Date().getDay()];
};

export default function Header({ sideBarIsOpen, setSideBarIsOpen }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (sideBarIsOpen) {
      setSideBarIsOpen(() => {
        return false;
      });
      navigate(-1);
    }
    if (!sideBarIsOpen) {
      setSideBarIsOpen(() => {
        return true;
      });
      navigate("sidebar");
    }
  };
  return (
    <div className={styles.container}>
      <svg
        onClick={handleClick}
        className={styles.icon}
        viewBox="0 0 32 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.6 3.14286H30.4C30.8243 3.14286 31.2313 2.9773 31.5314 2.6826C31.8314 2.3879 32 1.9882 32 1.57143C32 1.15466 31.8314 0.754961 31.5314 0.460261C31.2313 0.165561 30.8243 0 30.4 0H1.6C1.17565 0 0.768687 0.165561 0.468629 0.460261C0.168571 0.754961 0 1.15466 0 1.57143C0 1.9882 0.168571 2.3879 0.468629 2.6826C0.768687 2.9773 1.17565 3.14286 1.6 3.14286ZM1.6 9.42857H24C24.4243 9.42857 24.8313 9.26301 25.1314 8.96831C25.4314 8.67361 25.6 8.27391 25.6 7.85714C25.6 7.44037 25.4314 7.04068 25.1314 6.74598C24.8313 6.45128 24.4243 6.28571 24 6.28571H1.6C1.17565 6.28571 0.768687 6.45128 0.468629 6.74598C0.168571 7.04068 0 7.44037 0 7.85714C0 8.27391 0.168571 8.67361 0.468629 8.96831C0.768687 9.26301 1.17565 9.42857 1.6 9.42857ZM30.4 12.5714H1.6C1.17565 12.5714 0.768687 12.737 0.468629 13.0317C0.168571 13.3264 0 13.7261 0 14.1429C0 14.5596 0.168571 14.9593 0.468629 15.254C0.768687 15.5487 1.17565 15.7143 1.6 15.7143H30.4C30.8243 15.7143 31.2313 15.5487 31.5314 15.254C31.8314 14.9593 32 14.5596 32 14.1429C32 13.7261 31.8314 13.3264 31.5314 13.0317C31.2313 12.737 30.8243 12.5714 30.4 12.5714ZM24 18.8571H1.6C1.17565 18.8571 0.768687 19.0227 0.468629 19.3174C0.168571 19.6121 0 20.0118 0 20.4286C0 20.8453 0.168571 21.245 0.468629 21.5397C0.768687 21.8344 1.17565 22 1.6 22H24C24.4243 22 24.8313 21.8344 25.1314 21.5397C25.4314 21.245 25.6 20.8453 25.6 20.4286C25.6 20.0118 25.4314 19.6121 25.1314 19.3174C24.8313 19.0227 24.4243 18.8571 24 18.8571Z"
          fill="#B69DF7"
        />
      </svg>

      <p className={styles.title}>
        {sideBarIsOpen ? "Menu" : getCurrentDayOfTheWeek()}
      </p>
      <span className={styles.icon}></span>
    </div>
  );
}
