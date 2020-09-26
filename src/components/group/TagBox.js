import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
    width: 100%;
    h2{
        color: black;
        margin: 0;
        font-size: 0.7rem;
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 100%;
    border: 1px solid gray;
    input, button {
        outline: none;
        border: none;
        font-size: 0.8rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding: 0rem 1rem;
        border: none;
        background: gray;
        color: white;
        font-weight: bold;
        &:hover{
            background: #6D6D6D;
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    &:hover{
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.2rem;
`;

const TagItem = React.memo(({ tag, onRemove }) => (
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(( { tags, onRemove }) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
));

const TagBox = ({ onChangeTags, tags }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if(!tag) return;
            if(localTags.includes(tag)) return;
            const nextTags = [...localTags, tag];
            setLocalTags([...localTags, tag]);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        insertTag(input.trim());
        setInput('');
    },
    [input, insertTag],
    );
    
    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return (
        <TagBoxBlock>
            <h2>태그</h2>
            <TagForm onSubmit={onSubmit}>
                <input placeholder="태그를 입력하세요" value={input} onChange={onChange} />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};

export default TagBox;