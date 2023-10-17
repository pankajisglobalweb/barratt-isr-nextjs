import styles from './index.module.scss';

function LoaderComponent({ isLoading }) {
    return (
        <>
            {(isLoading) ?
                <div className={styles.loader_conteiner}>
                    <span className={styles.loader}></span>
                </div> : null
            }
        </>
    )
}

export default LoaderComponent;