import classes from "./hero.module.scss";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes["heading-primary"]}>
        <span className={classes["heading-primary-main"]}>
          &lt;Gilberto &#8725;&gt;
        </span>
        <span className={classes["heading-primary-sub"]}>
          Desenvolvedor Front-end
        </span>
      </h1>
    </section>
  );
};

export default HeroSection;
