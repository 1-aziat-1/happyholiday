import style from './Choices.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays} from '../../../store/holidaysSlice';
import { useEffect, useState } from 'react';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imageSlice';
import { NavLink, useParams } from 'react-router-dom';



const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const { holidays, loading} = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const {holiday} = useParams();


    

    const toggleChoices = () => {
        if (loading !== 'success') return;
        setIsOpenChoices(!isOpenChoices);
    };

    useEffect(()=>{
        dispatch(fetchHolidays());
        if(holiday){
            dispatch(fetchText(holiday));
            dispatch(fetchImage(holiday));
        }
    }, [holiday]);
    


    

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {loading !== 'success' ? 'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}
            </button>
            {isOpenChoices && (
                    <ul className={style.list}>
                        {Object.entries(holidays).map(item => (
                            <li 
                                key={item[0]} 
                                className={style.item} 
                                onClick={()=>{
                                    toggleChoices();
                                }}
                            >
                                <NavLink 
                                    to={`card/${item[0]}`}
                                    className={({isActive}) => (isActive ? style.linkActivr : '')}
                                >{item[1]}</NavLink>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Choices;