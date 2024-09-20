import styled from 'styled-components';

export const NavBarStyled = styled.div`
  background-color: #1a1927;
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  flex-direction: column;
  padding: 15px 5px 10px 10px;
  color: white;
> p{
  
  padding: 0px 0px 0px 5px;
  font-size: small;
}
> .title{
  display: block;
  font-weight: bold;
  margin: 0px 8px;
  color: white ;
  font-size: xx-large;
  height: auto;
  width: 100%;
}
> ul li{
  
  padding: 0px 8px;
}
`;