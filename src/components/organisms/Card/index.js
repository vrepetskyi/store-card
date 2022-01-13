import styles from './Card.module.scss'
import Select from '../../molecules/Select'

export default function Card({price, name, colors, sizes, available}) {
    return (
        <div id={styles.card} className={available && styles.available}>
            <div id={styles.actions}>
                <button>
                    <img src='/share.svg' />
                </button>
                <button>
                    <img src='/heart.svg' />
                </button>
            </div>
            <span id={styles.price}>{`$${price}`}</span>
            <span id={styles.name}>{name}</span>
            <div id={styles.selects}>
                <Select type='color' options={colors} />
                <Select type='size' options={sizes} />
            </div>
        </div>
    )
}