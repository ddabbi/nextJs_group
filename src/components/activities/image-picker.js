import styles from './image-picker.module.css'


// 등록버튼에 선택된 이미지에 대한 label과 name을 전달해줘야함
export default function ImagePicker({label, name}){
    return(
        <div className={styles.picker}>
            <label htmlFor={name}></label>
            <div className={styles.file}>
                <input type='file' id={name} name={name} accept='image/png, image/jpeg'/>
            </div>
        </div>
    )
}