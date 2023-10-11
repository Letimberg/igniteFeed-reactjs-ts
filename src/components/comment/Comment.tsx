import { ThumbsUp, Trash } from "phosphor-react"
import styles from "../comment/Comment.module.css"
import { Avatar } from "../avatar/Avatar"
import { useState } from "react"

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Letimberg Cavalcante</strong>
                            <time
                                title="06 de Outubro às 13:42h"
                                dateTime="2023-05-11 11:31:30"
                            >
                                Cercar de 1h atrás.
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
