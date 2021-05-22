import React from 'react';

export default function Row({item, index}) {
    return (
        <div className="row_wrapper">
            <div className="row_item">{item.name}</div>
            <div className="row_item asteroid_closest_date">
                {item.close_approach_data[0].close_approach_date}
            </div>
            <div className="row_item four_sub_columns">
                <div className="diameter_inner">
                    <div>
                        <span>Макс: </span>
                        <span>
                            {Number(item.estimated_diameter.feet.estimated_diameter_max).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span>Мин: </span>
                        <span>
                            {Number(item.estimated_diameter.feet.estimated_diameter_min).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="diameter_inner">
                    <div>
                        <span>Макс: </span>
                        <span>
                            {Number(item.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span>Мин: </span>
                        <span>
                            {Number(item.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="diameter_inner">
                    <div>
                        <span>Макс: </span>
                        <span>
                            {Number(item.estimated_diameter.meters.estimated_diameter_max).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span>Мин: </span>
                        <span>
                            {Number(item.estimated_diameter.meters.estimated_diameter_min).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="diameter_inner">
                    <div>
                        <span>Макс: </span>
                        <span>
                            {Number(item.estimated_diameter.miles.estimated_diameter_max).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span>Мин: </span>
                        <span>
                            {Number(item.estimated_diameter.miles.estimated_diameter_min).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="row_item">
                <span>{item.absolute_magnitude_h}</span>
            </div>
            <div className="row_item three_sub_columns">
                <div className="velocity_inner">
                    <span>
                        {Number(item.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)}
                    </span>
                </div>
                <div className="velocity_inner">
                    <span>
                        {Number(item.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)}
                    </span>
                </div>
                <div className="velocity_inner">
                    <span>
                        {Number(item.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="row_item">
                <a href={item.nasa_jpl_url}>Источник</a>
            </div>
        </div>
    )
}