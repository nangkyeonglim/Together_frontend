import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import GroupTemplate from '../components/place/GroupTemplate';
import AddGroupModalContainer from '../containers/modal/AddGroupModalContainer';
import GroupDeleteAlertModalContainer from '../containers/modal/GroupDeleteAlertModalContainer';

const GroupPage = () => {
    return (
        <>
            <HeaderContainer />
            <GroupTemplate />
            <AddGroupModalContainer />
            <GroupDeleteAlertModalContainer />
        </>
    );
};

export default GroupPage;
