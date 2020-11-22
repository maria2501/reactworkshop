import React, { useContext,useState } from 'react'
import styled from 'styled-components';
import { Input, Select, Button } from 'antd';
import AppContext from '../context/AppContext';

const StyedWrapper = styled.div`
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
`

const typeOptions = [
    { label: 'noun', value: 'noun' },
    { label: 'verb', value: 'verb' },
    { label: 'adjective', value: 'adjective' },
    { label: 'adverb', value: 'adverb' },
    { label: 'preposition', value: 'preposition' },
    { label: 'conjunction', value: 'conjunction' }
]

const AddWordPage = () => {
    
  const {vocabs, setVocabs} = useContext(AppContext);


    const [word, setWord] = useState('');
    const [types, setTypes] = useState([]);
    const [meanings, setMeanings] = useState('');


    const handleClick = () => {
        setVocabs([...vocabs, {
            word,
            types,
            meanings: meanings.split(",").map((item) => item.trim())
        }])
    }

    return (
        <StyedWrapper>

            <h1>Add Word</h1>

            <div>

                <div className='form-item'>
                    <div>
                        <label htmlFor='word-input'>Word</label>
                    </div>
                    <Input
                        id='word-input'
                        placeholder="English word"
                        onChange={(e) => { setWord(e.target.value) }}
                        value={word}
                    />
                </div>

                <div className='form-item'>
                    <div>
                        <label htmlFor='select-types'>Types</label>
                    </div>
                    <Select
                        className='select-types'
                        id='select-types'
                        options={typeOptions}
                        mode="multiple"
                        placeholder="Select types"
                        onChange={(values) => { setTypes(values) }}
                        value={types}
                    />
                </div>

                <div className='form-item'>
                    <div>
                        <label htmlFor='meaning-input'>Meanings</label>
                    </div>
                    <Input
                        id='meaning-input'
                        placeholder="Meanings"
                        onChange={(e) => { setMeanings(e.target.value) }}
                        value={meanings}
                    />
                </div>

            </div>

            <Button
                className='form-item'
                type='primary'
                onClick={handleClick}
            >
                Add vocab
            </Button>

        </StyedWrapper>
    )
}

export default AddWordPage