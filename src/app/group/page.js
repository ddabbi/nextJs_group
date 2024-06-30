import Link from "next/link";

export default function GroupPage(){
    return(
        <div>
            동아리 게시글
            <p><Link href="/group/post-1">게시글1</Link></p>
            <p><Link href="/group/post-2">게시글2</Link></p>
        </div>
    )
}


// 리액트에서는 URL변경을 위해서
// <a></a>태그를 사용하지 않고(새로고침방지)
// Link컴포넌트를 이용