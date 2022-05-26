import React from 'react';

const MyProfile = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='text-4xl text-primary text-center my-10'>Add New Profile</h1>
            <input type="text" placeholder="Name" class="input my-5 input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="text" placeholder="email" class="input mb-5 input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="text" placeholder="number" class="input mb-5 input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="text" placeholder="address" class="input mb-5 input-bordered input-primary w-full max-w-xs" /> <br />
            <button className='btn btn-primary'>Add Profile</button>
        </div>
    );
};

export default MyProfile;