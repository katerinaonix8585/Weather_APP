import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
  background?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '70px'};
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  padding: 20px;
  background: ${({ disabled, background }) => disabled ? "grey" : (background || "#1f27f5")};
  color: white;
  font-size: 16px;
  cursor: pointer;  
`;

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string;  
  type?: ButtonType;
  disabled?: boolean;
  background?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onButtonClick?: () => void;
}
