import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/group/TagBox';
import { changeAddGroupField } from '../../modules/group';

const TagBoxContainer = () => {
    const dispatch = useDispatch();
    const { tags } = useSelector(({ group }) => ({
        tags: group.add_group.tags,
    }));

    const onChangeTags = nextTags => {
        dispatch(changeAddGroupField({ key: 'tags', value: nextTags}));
    };

    return (
        <TagBox onChangeTags={onChangeTags} tags={tags} />
    );
};

export default TagBoxContainer;