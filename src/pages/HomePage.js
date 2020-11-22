import WordCard from '../components/WordCard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const StyledWrapper = styled.div`
  padding: 20px 10%;
  @media(max-width: 425px) {
    padding: 20px 10px;
  }
  .select-types {
    width: 100%;
  }
  .form-item {
    margin-bottom: 10px;
  }
`;

function HomePage() {

  const {vocabs, setVocabs} = useContext(AppContext);



  const handleDelete = (index) => {
    const newArr = vocabs.filter((data, id) => {
      return id !== index
    });
    setVocabs(newArr);
  }

  return (
    <StyledWrapper>
      <h1>My vocabularies</h1>
      <Row gutter={[16, 24]}>
        {vocabs.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={8} lg={6} >
              <WordCard  {...item} onDelete={() => { handleDelete(index) }} />
            </Col>
          )
        })}
      </Row>
    </StyledWrapper>
  );


}

export default HomePage;