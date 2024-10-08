import Head from "next/head";
import localFont from "next/font/local";
import Image from "next/image"; // Import component Image
import styles from "../styles/Home.module.css"; // Import styles từ Home.module.css
import { useRouter } from 'next/router';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();

  const goToPageB = () => {
    router.push('/b'); // Chuyển hướng sang trang /b
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containers}>
        <div className={styles.top}>
          <h1>Đây là bài thực hành</h1>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
          <img className={styles.image}
                src="/image/nui.png"
                alt="picture"
              />

          </div>
          <div className={styles.middlecenter}>
            <h2>Chào mừng đến với ứng dụng của tôi</h2>
            <p>
              Đây là phần giữa của layout, nơi bạn có thể thêm bất kỳ nội dung
              nào bạn muốn.
            </p>
            <button className={styles.button} onClick={goToPageB} >Nhấn vào đây</button>
          </div>
          <div className={styles.right}>

              <img className={styles.image}
                src="/image/bien.png"
                alt="picture"
              />
          </div>
        </div>
        <div className={styles.bottom}>
          <h1>END</h1>
        </div>
      </div>
    </>
  );
}
