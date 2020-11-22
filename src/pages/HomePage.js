import WordCard from '../components/WordCard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { Loading3QuartersOutlined } from '@ant-design/icons'

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

  const { vocabController } = useContext(AppContext);
  const { vocabs, deleteVocab } = vocabController;

  const renderVocabs = () => {
    if (!vocabs) {
      return <Loading3QuartersOutlined spin />
    }
    else if (vocabs.length <= 0) {
      return <p>No data</p>
    } else {
      return vocabs && vocabs.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={8} lg={6} >
            <WordCard  {...item} onDelete={() => { deleteVocab(index) }} />
          </Col>
        )
      })

    }
  }


  return (
    <StyledWrapper>
      <h1>My vocabularies</h1>
      <Row gutter={[16, 24]}>
        {renderVocabs()}
      </Row>
    </StyledWrapper>
  );


}

export default HomePage;