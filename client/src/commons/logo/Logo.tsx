import { LogoWrapper } from "./Logo.styled";

import logoSvg from "@/assets/logo.svg";

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logoSvg} alt="logo" />
      <h1><span>J</span>JAb</h1>
    </LogoWrapper>
  )
};

export default Logo;