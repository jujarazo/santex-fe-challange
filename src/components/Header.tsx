import styled from 'styled-components';

const StyledHeader = styled.header`
  background: red;
  padding: 25px;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <div>$ 0</div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
