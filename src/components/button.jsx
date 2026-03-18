import styles from "./button.module.css";

const DifferentButton = () => {
  const goToGitHub = () => {
    window.open("https://github.com/andreag18l/collector-library-frontend", "_blank");
  };

  return (
    <button className={styles.btn} onClick={goToGitHub}>
      Ver en GitHub
    </button>
  );
};

export default DifferentButton;