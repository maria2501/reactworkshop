import React from 'react';
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons'
const StyledWrapper = styled.div`
    box-shadow: 0 0 10px 0 rgba(0,0,0,.25);
    padding: 8px;
    border-radius: 8px;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .delete-icon{
        color: red;
        cursor: pointer;
    }
`



const WordCard = (props) => {

    const formatDate =props.createdAt ? props.createdAt.toLocaleDateString('th-Th',
        {day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'}
) : "";
    return (
        <StyledWrapper>
            <div className='top'>

                <div>
                    <b>{props.word}</b> <span>({props.types.join(",")})</span>
                </div>
                <DeleteOutlined className='delete-icon' 
                onClick={props.onDelete}/>

            </div>
            <div>{props.meanings.join(",")}</div>

            <div>
                Date:{formatDate}
            </div>

        </StyledWrapper>
    )
}

export default WordCard
