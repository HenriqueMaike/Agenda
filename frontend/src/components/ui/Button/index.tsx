import styles from './style.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({...rest}: ButtonProps){
    return(
        <button className={styles.button}{...rest}></button> 
    )
}