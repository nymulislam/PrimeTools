import React from 'react';

const KeyMetrics = () => {
    return (
        <div className='bg-indigo-700 text-white py-14 px-6 md:px-20 flex flex-col md:flex-row justify-center gap-8 md:gap-20 items-center'>
            <div>
                <div>
                    <h2 className='text-4xl font-bold'>
                       50K+
                    </h2>
                    <h6 className='opacity-70'>
                        Active Users
                    </h6>
                </div>
            </div>
            <div className="divider md:divider-horizontal before:bg-white after:bg-white opacity-70"></div>
            <div>
                <div>
                    <h2 className='text-4xl font-bold'>
                        200+
                    </h2>
                    <h6 className='opacity-70'>
                        Premium Tools
                    </h6>
                </div>
            </div>
            <div className="divider md:divider-horizontal before:bg-white after:bg-white opacity-70"></div>
            <div>
                <div>
                    <h2 className='text-4xl font-bold'>
                        4.9
                    </h2>
                    <h6 className='opacity-70'>
                        Rating
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default KeyMetrics;