import { PencilLine } from "phosphor-react"
import { Avatar } from "../avatar/Avatar"

import styles from "../sidebar/Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/letimberg.png" />

                <strong>Letimberg Cavalcante</strong>
                <span>Web Developer | Hemoce</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
