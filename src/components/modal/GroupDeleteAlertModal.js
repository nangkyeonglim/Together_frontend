import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    p{
        margin: 0;
    }
    .content_block{
        text-align: center;
    }
    .agree_block{
        font-size: 0.9rem;
        text-align: center;
        padding-top: 0.5rem;  
        font-weight: 100;
    }
    .button-block{
        margin-top : 1rem;
        button{
            color: white;
            background: #e74c3c;
            border: 1px solid #e74c3c;
            border-radius: 4px;
            padding: 0.5rem 1rem;
            font-weight: bold;
            cursor: pointer;
        }
        button:hover{
            background: #D92D1C;
            border: 1px solid #D92D1C;

        }
    }
   
`;

const GroupDeleteAlertModal = ({handleDelete}) => {
    return (
        <ContentBlock>
        <p className="content_block">정말 그룹을 삭제하실 건가요?</p>
        <p className="agree_block">삭제 시 그룹과 해당 데이터는 영구 삭제됩니다.</p>
        <div className="button-block">
            <button onClick={handleDelete}>삭제</button>
        </div>
    </ContentBlock>
    );
};

export default GroupDeleteAlertModal;