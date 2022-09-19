// import classNames from 'classnames/bind';
import styles from './Header.module.css';
// sử dụng thư viện css bind của classnames
// import styles from './Header.module.scss';
// const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>a</div>
        </header>
    );
}

export default Header;
