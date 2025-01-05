import styled from "styled-components";
import BcmIcons from "./bcmnexticons";

export const Icon = (props) => {
    const IconComponent = BcmIcons[props.icon];
    return (
        <IconStyle {...props}>
            <IconComponent />
        </IconStyle>
    );
};

export const IconStyle = styled.div`
  img,
  svg {
    width: ${({ size }) => (size ? size : 20)}px!important;
    height: ${({ size }) => (size ? size : 20)}px!important;

    ${({ color, theme }) =>
        color &&
        `
      path {
        fill: ${theme.colors[color]};
      }
    `}
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
