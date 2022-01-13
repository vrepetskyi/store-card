import styles from './Option.module.scss'

export default function Option({type, value, selected, handler}) {
    return (
        <button id={styles.option} onClick={() => handler(value)}>
            <div
            id={styles[type]}
            className={value == selected && styles.selected}
            style={type == 'color' ? {
                '--color': value
            } : null}
            >
                {type == 'size' && value}
            </div>
        </button>
    )
}