import React from 'react';
import Ex01_Sub,{num, name} from './Ex01_Sub';
import Ex01_Sub02, { Ex01_Sub03 } from './Ex01_Sub02';

const Ex01_Exprot = () => {
    return (
        <div>
            <Ex01_Sub/>
            <Ex01_Sub02/>
            <Ex01_Sub03/>
             num:{num} / name:{name}
        </div>
    );
};

export default Ex01_Exprot;