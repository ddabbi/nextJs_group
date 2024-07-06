import { connectDB } from "@/util/db"
import { ObjectId } from "mongodb";
import styles from './page.module.css';
import Image from "next/image";

export default async function GroupPostPage({params}){

    // slug : 몽고DB의 _id
    // 자세히보기 버튼이 /group/${_id}
    const db = (await connectDB).db('mydb');
    const activity = await db.collection('group').findOne({_id:ObjectId.createFromHexString(params.slug)});
    console.log(activity);
    // 줄바꿈 문자열이 반영이 안ㄷ됨 '<br/>'로 대체
    activity.content = activity.content.replace(/\n/g, '<br/>')

    return(
        <div>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={activity.image} alt={activity.title} fill/>
                </div>
                <div className={styles.headerText}>
                    <h1>{activity.title}</h1>
                    <p className={styles.creator}>
                        작성자: {activity.creator}
                    </p>
                    <p className={styles.summary}>
                        {activity.summary}
                    </p>
                </div>
            </header>
            <main>
                <p dangerouslySetInnerHTML={{__html:activity.content}} className={styles.content}></p>
            </main>
        </div>
    )
}