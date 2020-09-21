import React, { useEffect } from 'react';
import EditProfile from '../../components/auth/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, changeField, editProfileImage } from '../../modules/auth'

const EditProfileContainer = () => {
    const dispatch = useDispatch();
   
    const { user_info } = useSelector(({ auth }) => ({
       user_info: auth.user_info
    }));

    const handleChange = e => {
        let {name, value} = e.target;

        dispatch(changeField({ name, value }));
    };

    const handleImageChange = e => {
        e.persist();
        const file = e.target.files[0];
        if(file !== undefined){
            var formData = new FormData();
            formData.append('data', file);
            dispatch(editProfileImage(formData));
        }
    }

    useEffect(() => {
        dispatch(getUser());
    },[dispatch])

    return (
        <EditProfile 
            user_info={user_info}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
        />
    );
};

export default EditProfileContainer;