import { color } from '@mui/system';
import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/filter.module.css'



export const FilterCards = ({ name, segments, callback, defaultIndex = 0, controlRef, handleCards }: any) => {

    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const componentReady = useRef();


    //Determina cuando el componente esta listo
    useEffect(() => {
        componentReady.current;
    }, [componentReady]);

    useEffect(() => {
        const activeSegmentRef = segments[activeIndex].ref;
        const { offsetWidth, offsetLeft } = activeSegmentRef.current;
        const { style } = controlRef.current;
    
        style.setProperty("--highlight-width", `${offsetWidth}px`);
        style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
    }, [activeIndex, callback, controlRef, segments]);

    // Funcion para activar cada categoria del filtro, segun la que este activa asi se mapean el objeto de cards
    const onInputChange = (value: any, index: any) => {
        setActiveIndex(index);
        handleCards(value)
        callback(value, index);
    };
    console.log('seleccionado:', componentReady.current);

    return (
        // Maquetacion del filtro estatico
        <div className={styles.filterCards}>
            <div className={styles.controlsContainer} ref={controlRef}>
                <div className={`${styles.controls} ${componentReady.current ? `${styles.ready}` : "idle"}`}>
                    {segments?.map((item: any, i: any) => (
                        <div
                            key={item.value}
                            className={`${styles.segment} ${i === activeIndex ? `${styles.active}` : `${styles.inactive}`}`}
                            ref={item.ref}
                        >
                            <input
                                type="radio"
                                value={item.value}
                                id={item.label}
                                name={name}
                                onChange={() => onInputChange(item.value, i)}
                                checked={i === activeIndex}
                            />
                            <label htmlFor={item.label}>{item.label}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}