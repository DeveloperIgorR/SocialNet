import s from "./Messages.module.css"
const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={s.user + ' ' + s.active}>
                    Yoda
                </div>
                <div className={s.user}>
                    Obivankenobi
            </div>
                <div className={s.user}>
                    Vindu
            </div>
                <div className={s.user}>
                    Kvaygon
            </div>
                <div className={s.user}>
                    EnikenSkywalker
            </div>
                <div className={s.user}>
                    Padme
            </div>
                <div className={s.user}>
                    LukSkywalker
            </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    feel the power!
            </div>
                <div className={s.message}>
                    do you love Star Wars?
            </div>
                <div className={s.message}>
                    may the power be with you!
                </div>

            </div>
        </div>
    )
}
export default Messages