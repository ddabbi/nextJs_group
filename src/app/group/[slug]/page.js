export default function GroupPostPage({params}){
    return(
        <div>
            게시글 상세 페이지
            {/* 내가 접속한 동적 URL: params.폴더명 */}
            <p>{params.slug}</p>
        </div>
    )
}