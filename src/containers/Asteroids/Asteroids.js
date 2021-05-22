import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadAsteroids} from '../../redux/actionCreators';
import Input from '../../components/Input/Input';
import Table from '../../components/Table/Table';

export default function Asteroids() {
    const dispatch = useDispatch();
    const [date, setDate] = useState({
        start: '',
        end: '',
    });
    const [err,setErr] = useState('');

    const {asteroidsArray, loading, errorFromServer} = useSelector(state => {
        const {asteroidsReducer: {asteroids,loading,error}} = state;
        return {
            asteroidsArray: asteroids,
            loading,
            errorFromServer: error
        };
    });

    // функция рендерер
    function renderer() {
        const styles = {
            textAlign: 'center',
            fontSize: '30px',
            marginTop: '10px'
        };
        let component = 
        <div style={styles}>Нет данных</div>;
        if(loading) {
            component = 
            <div style={styles}>Загрузка данных</div>
        } else if(!loading && asteroidsArray.length > 0) {
            component = <Table asteroidsArray={asteroidsArray}/>
        } else if(!loading && asteroidsArray.length === 0 && errorFromServer) {
            component = <div style={styles}>Ошибка загрузки данных</div>
        }
        return component;
    };

    // отправка запроса
    function handleFetchData() {
        const {start, end} = date;
        if (start === '' || end === '') {
            setErr('Выберите обе даты');
            return;
        } else {
            dispatch(loadAsteroids(date))
            setErr('');
            setDate((_) => {
                return {
                    start: '',
                    end: ''
                }
            })
        }
    };

    // обработка значений из инпутов
    function handlePickDate(e) {
        setDate((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    return (
        <div className="asteroids_page_wrapper">
            <h2 className="asteroids_page_header">Информация об астероидах пролетающих вблизи Земли</h2>
            {err !== '' && <div>{err}</div>}
            <div className="inputs_wrapper">
                <div className="inputs_wrapper_inner">
                    <Input onChange={handlePickDate} value={date.start} name="start" label="Дата с:"/>
                    <Input onChange={handlePickDate} value={date.end} name="end" label="Дата до:"/>
                </div>
                <button onClick={handleFetchData}>Отправить запрос</button>
            </div>
            <div className="asteroids_cards_wrapper">
                {renderer()}
            </div>
        </div>
    )
}
