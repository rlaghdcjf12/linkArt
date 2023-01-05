import styled, { css } from 'styled-components';
import { Box } from '@mui/material';

const Hexagon = ({ image, width, height, unit = 'px', color = 'Gold' }) => {
  return (
    <Hexa width={width} height={height} unit={unit}>
      {image ? (
        <Image width={width} height={height} unit={unit} src={image} alt='bee hive'></Image>
      ) : (
        <DefaultColor color={color} />
      )}
    </Hexa>
  );
};

const fullSize = css`
  width: 100%;
  height: 100%;
`;
const Hexa = styled.div`
  clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);
  width: ${(props) => props.width}${(props) => props.unit};
  height: ${(props) => props.height}${(props) => props.unit};
  background-color: white;
`;
const Image = styled.img`
  ${fullSize};
  object-fit: cover;
`;
const DefaultColor = styled(Box)`
  ${fullSize};
  background-color: ${(props) => props.color};
`;
export default Hexagon;
