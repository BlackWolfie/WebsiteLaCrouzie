import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default ButtonGroup;
