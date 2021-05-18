import s from "./Warnings.module.css"
const Warnings = (props) => {
    return (
        <div className={s.messages}>
            {props.dialog}
        </div>
    )
}
export default Warnings