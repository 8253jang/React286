import { getEmotionImage } from '../util/get-emotion-image';

import './ButtonStyle.css';

const Button =({text="없음", img, imgId})=>{
        return(
        <div className='divBtn'>
         <img src={img}/>
         <img src={getEmotionImage(imgId)}/>
         <button>{text}</button>
        </div>
    )
}

export default Button;