import styles from './Header.module.css';
import images from '~/assets/images';
// import classNames from 'classnames/bind';
// sử dụng thư viện css bind của classnames
// import styles from './Header.module.scss';
// const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>
                <div className={styles.search}>
                    <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                    <button className={styles.clearBtn}>
                        <img src={images.close.default} />
                    </button>
                    <button className={styles.loadingBtn}>
                        <img src={images.loading.default} />
                    </button>
                    <button className={styles.searchBtn}>
                        <img src={images.search.default} />
                    </button>
                </div>
                <div className={styles.actions}>
                    <button className={styles.register}>Đăng kí</button>
                    <button className={styles.login}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
