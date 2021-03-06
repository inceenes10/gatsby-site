import React from 'react';
import styles from './pagination.module.css';
import { useTranslation } from "../../Hooks/Translation";
import LocalizedLink from "../LocalizedLink/LocalizedLink"

class Pagination extends React.Component {



    render() {

        const { t } = useTranslation();

        const { pageNum, currentPage, pathPrefix } = this.props;

        if (pageNum === 1) return null;

        let arr = Array.from({ length: pageNum }, (_, i) => i + 1)

        if (pageNum > 6) {
            if (pageNum - currentPage < 3) {
                arr.splice(3, currentPage - 5);
                arr.splice(2, 1, '···')
            }
            else if (currentPage < 5) {
                arr.splice(currentPage + 1, arr.length - 5 - currentPage);
                arr.splice(currentPage + 1, 1, '···')
            }
            else {
                arr.splice(3, currentPage - 5, '···');
                arr.splice(7, pageNum - currentPage - 4, '···');
            }
        }


        let prevPath = `${pathPrefix}/${currentPage - 1}`;

        if (pathPrefix === 'page' && currentPage === 2) {
            prevPath = null;
        }
        else if (currentPage === 2 && pathPrefix !== 'page') {
            prevPath = pathPrefix
        }

        return (
            <div className={styles.container}>
                <LocalizedLink className={styles.item} to={prevPath}>{t('prev')}</LocalizedLink>
                {
                    arr.map(item => {
                        if (item === '···') {
                            return <div className={styles.item} key={item}>···</div>
                        }
                        else if (item === 1) {
                            return <LocalizedLink to={`${pathPrefix}`} key={item} className={currentPage !== item ? `${styles.item}` : `${styles.item} ${styles.active}`}>{item}</LocalizedLink>
                        }
                        return (
                            <LocalizedLink to={`${pathPrefix}/${item}`} key={item} className={currentPage !== item ? `${styles.item}` : `${styles.item} ${styles.active}`}>
                                {item}
                            </LocalizedLink>
                        )
                    })
                }
                { currentPage !== pageNum && <LocalizedLink className={styles.item} to={`${pathPrefix}/${currentPage + 1}`}>{t('next')}</LocalizedLink> }
            </div>
        )
    }
}



export default Pagination;