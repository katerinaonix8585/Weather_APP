import { ButtonComponent } from "./styles";
import { ButtonProps } from './types';

function Button({ name, type = "button", disabled = false, background = "#1f27f5", width = "100%", height = "70px", borderRadius = "4px", border = "2px solid white", onButtonClick }: ButtonProps) {
  return (
    <ButtonComponent 
      disabled={disabled} 
      type={type} 
      onClick={onButtonClick} 
      background={background}
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border} 
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
