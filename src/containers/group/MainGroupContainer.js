import React, { useEffect } from 'react';
import MainGroup from '../../components/group/MainGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroup } from '../../modules/group';


const MainGroupContainer = () => {
    const dispatch = useDispatch();
    const { group_list } = useSelector(({ group }) => ({
        group_list: group.group_list,
    }));

    //모든 그룹 불러오기(lazy loading 적용)
    useEffect(()=> {
        dispatch(getAllGroup());
    },[dispatch])

    return (
        <MainGroup 
            group_list={group_list}
        />
    );
};

export default MainGroupContainer;