import ImagePicker from '@/components/activities/image-picker';
import styles from './page.module.css';

// 프론트앤드에서 서버로 데이터를 전ㅅ송할땐
// form, fetch, ...

export default function SharePage(){
    return(
        <div>
            <header className={styles.header}>
                <h1>
                    우리동아리 <span className={styles.span}>활동 등록</span>
                </h1>
            </header>
            <main className={styles.main}>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <p>
                            <label htmlFor='name'>이름</label>
                            <input type='text' id='name' required/>
                        </p>
                        <p>
                            <label htmlFor='email'>이메일</label>
                            <input type='text' id='email' required/>
                        </p>
                    </div>

                    <p>
                        <label htmlFor='title'>제목</label>
                        <input type='text' id='title' required/>
                    </p>
                    <p>
                        <label htmlFor='summary'>요약</label>
                        <input type='text' id='summary' required/>
                    </p>
                    {/* name: 서버가 전달바을 키      required: submit클릭 시 해당 input이 비어있다면 등록X */}
                    <p>
                        <label htmlFor='content'>내용</label>
                        <textarea id='content' name='content' rows="10" required></textarea>
                    </p>
                    <ImagePicker />
                    <p className={styles.actions}>
                        <button type='submit'>등록</button>
                    </p>
                </form>
            </main>
        </div>
    )
}
