import { useState } from 'react'
import styles from './Select.module.scss'
import Option from '../../atoms/Option'

export default function Select({type, options}) {
    const [selected, setSelected] = useState()

    return (
        <div id={styles.container}>
            <button id={styles.left}>
                <img src='/shevron.svg' />
            </button>
            <div id={styles.options}>{
                options.map(option => <Option type={type} value={option} selected={selected} handler={setSelected} key={option} />)
            }</div>
            <button id={styles.right}>
                <img src='/shevron.svg' />
            </button>
        </div>
    )
}