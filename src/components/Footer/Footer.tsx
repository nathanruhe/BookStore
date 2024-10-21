import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer () {
  // logica


  // renderizado
  return (
    <>
      <footer className="bg-[rgb(34,34,34)] text-white flex justify-center items-center gap-8 h-[10vh]">
        <a href="https://github.com/nathanruhe"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nathanruhe/"><FaLinkedin /></a>
        <a href="https://discord.com/users/1102680805261725767"><FaDiscord /></a>
      </footer>
    </>
  );
}

export default Footer;