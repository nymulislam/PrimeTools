import React from 'react';

const KeyMetrics = () => {
    return (
        <div className='bg-blue-700 text-white py-14 px-20 flex justify-center gap-20'>
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
            <div className="divider divider-horizontal before:bg-white after:bg-white opacity-70"></div>
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
            <div className="divider divider-horizontal before:bg-white after:bg-white opacity-70"></div>
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