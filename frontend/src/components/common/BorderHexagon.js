import styled from 'styled-components';
import { Box } from '@mui/material';
import Hexagon from './Hexagon';

const BorderHexagon = ({
  image,
  width,
  height,
  border, // '2px solid Gold'
  unit = 'px',
}) => {
  const weight = border.split(' ')[0].replace('px', '');
  const color = border.split(' ')[2];

  return (
    <Border width={width} height={height} unit={unit} weight={weight} color={color}>
      <Hexagon image={image} width={width} height={height} unit={unit} color={color}></Hexagon>
    </Border>
  );
};

const Border = styled(Box)`
  clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);
  width: calc(${(props) => props.width}${(props) => props.unit} + ${(props) => props.weight * 2}px);
  height: calc(${(props) => props.height}${(props) => props.unit} + ${(props) => props.weight * 2}px);
  padding: ${(props) => props.weight}px;
  background-color: ${(props) => props.color};
  margin: auto;
`;

export default BorderHexagon;
