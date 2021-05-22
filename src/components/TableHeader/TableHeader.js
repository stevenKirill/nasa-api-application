import React from 'react'

const fields = [
    {
        name: "Имя"
    },
    {
        name: "Дата приближения к земле"
    },
    {
        name: "Приблизительный диаметр",
        subNames: ["В футах", "В километрах", "В метрах", "В милях"]
    },
    {
        name: "Абсолютная высота"
    },
    {
        name: "Относительная скорость",
        subNames: ["Км/ч","Км/сек","Мили/ч"]
    },
    {
        name: "Ссылки"
    }
];

export default function TableHeader() {
    return (
        <div className="table_header_wrapper">
            {fields.map((field) => {
                let component = null;
                if(field?.subNames) {
                    let classProp = field.subNames.length === 3 ? 
                    'three_sub_columns' : 'four_sub_columns';
                    component = <div className="table_header">
                                    <span>{field.name}</span>
                                    <div className={`table_header_sub_wrapper ${classProp}`}>
                                        {field.subNames.map((subField) => {
                                            return (
                                                <div className="table_header_sub">
                                                    {subField}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                } else {
                    component = <div className="table_header">
                                    <span>{field.name}</span>
                                </div>
                }
                return component;
            })}
        </div>
    )
}
