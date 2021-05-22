import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MarsPictures from '../../components/MarsPicture/MarsPicture';
import Select from '../../components/Select/Select';
import {fetchPictures} from '../../redux/marsPicturesReducer';

const mappedCameras = {
    "Передняя камера предотвращения опасности": "FHAZ",
    "Задняя камера предотвращения опасности": "RHAZ",
    "Мачтовая камера": "MAST",
    "Химико-фотоаппаратный комплекс": "CHEMCAM",
    "Ручной тепловизор Mars": "MAHLI",
    "Спускаемый имидж-сканер на Марс": "MARDI",
    "Навигационная камера":  "NAVCAM",
    "Панорамная камера":  "PANCAM",
    "Миниатюрный термоэмиссионный спектрометр (Mini-TES)": "MINITES",
}

const keysForOptions = Object.keys(mappedCameras);

// отчет с нуля 
const days = Array.from({length: 31},(_,i) => i < 9 ? "0" + ++i : (++i).toString());
const months = Array.from({length:12},(_,i) => i < 9 ? "0" + ++i : (++i).toString());
const years = Array.from({length: 100},(_,i) => 1922+i);

export default function Mars() {
    const dispatch = useDispatch();
    const [camera,setCamera] = useState('');
    const [date,setDate] = useState({
        day: '',
        month: '',
        year: '',
    })

    const {marsReducer} = useSelector(state => {
        return state;
    });
    const {data, loading, error} = marsReducer;

    function handleChangeCamera(e) {
        setCamera(e.target.value);
    };

    function handleChangeDate(e) {
        setDate((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })       
    };
    useEffect(() => {
        const {day, month, year} = date;
        const allNonEmpty = [day,month,year,camera].every(value => value !== '');
        const cameraName = camera ? mappedCameras[camera] : null
        if (allNonEmpty) {
            dispatch(fetchPictures({
                cameraName: cameraName,
                ...date
            }));
            setCamera('')
            setDate((_) => {
                return {
                    day: '',
                    month: '',
                    year: ''
                }
            })
        }
    }, [date,camera])
    return (
        <div className="mars_page">
            <div className="mars_select_wrapper">
                <div className="mars_select_item">
                    <label className="mars_select_label">Выберите камеру: </label>
                    <Select options={keysForOptions} value={camera} onChange={handleChangeCamera}/>
                </div>
                <div className="mars_select_item">
                    <label className="mars_select_label">Выберите день: </label>
                    <Select options={days} onChange={handleChangeDate} name="day" value={date.day}/>
                </div>
                <div className="mars_select_item">
                    <label className="mars_select_label">Выберите месяц: </label>
                    <Select options={months} onChange={handleChangeDate} name="month" value={date.month}/>
                </div>
                <div className="mars_select_item">
                    <label className="mars_select_label">Выберите год: </label>
                    <Select options={years} onChange={handleChangeDate} name="year" value={date.year}/>
                </div>
            </div>
            {loading === 'process' && <div>Загружаю</div>}
            {loading === 'success' &&<MarsPictures data={data}/>}
            {error && <div>Ошибка сервера</div>}
        </div>
    )
}