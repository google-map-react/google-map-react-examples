import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fefefe;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 15px;
  border: 1px solid #d8d8d8;
  list-style: none;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #7f7f7f;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding: 15px 15px 15px 0;
  color: #000000;
  text-decoration: none;
  text-align: center;
`;

const defaultPath = process.env.REACT_APP_BASE_PATH;

const Home = () => (
  <Wrapper>
    <h1>google-map-react examples</h1>
    <List>
      <ListItem>
        <StyledLink to={`${defaultPath}default`}>Default</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={`${defaultPath}searchbox`}>SearchBox</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={`${defaultPath}autocomplete`}>Autocomplete</StyledLink>
      </ListItem>
    </List>
  </Wrapper>
);

export default Home;
