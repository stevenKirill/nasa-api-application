import React from 'react';

export default function MarsPictures({data}) {
    const styles = {
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '10px',
    };
    let componentToRender = null;
    if(!data) {
        componentToRender = <div style={styles}>Фотографии марса</div>
    } else if(data.length === 0) {
        componentToRender = <div style={styles}>Нет фотографии по данному запросу</div>
    } else {
        componentToRender = 
        <div className="mars_pictures_wrapper">
            {data.map((marsPictureObject) => {
            return (
                <div data-id={marsPictureObject.id} className="mars_picture_each">
                    <label>Марсоход: {marsPictureObject.rover.name}</label>
                    <span style={{
                        marginLeft: '5px'
                    }}>Дата приземления: {marsPictureObject.rover.landing_date}</span>
                    <div>
                        <img src={marsPictureObject.img_src} width="300px" height="300px"/>
                    </div>
                </div>
            )
        })}
        </div>
    }
    return <div>{componentToRender}</div>
}
