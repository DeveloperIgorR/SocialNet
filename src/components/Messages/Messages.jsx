import s from "./Messages.module.css"
import MessagesItem from "./MessagesItem/MessagesItem"
import Warnings from "./Warnings/Warnings"
let MessagesArray= [
    {id:1, message:"Hey, how are you?"},
    {id:2, message:"Do you like Star Wars?"},
    {id:3, message:"May the power be with you!"},
    {id:4, message:"May the power be with you!"},
    {id:5, message:"May the power be with you!"},
    {id:6, message:"May the power be with you!"},
    {id:7, message:"May the power be with you!"},
    ]
let NamesArray= [
    {id:1, name:"Yoda"},
    {id:2, name:"Obivankenobi"},
    {id:3, name:"Vindu"},
    {id:4, name:"Kvaygon"},
    {id:5, name:"EnikenSkywalker"},
    {id:6, name:"Padme"},
    {id:7, name:"LukSkywalker"},
]
let NamesElements = NamesArray.map(n =><MessagesItem name={n.name} id={n.id} />)
let MessageElements = MessagesArray.map(m =><Warnings dialog={m.message}/>)
const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {NamesElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>                             
        </div>
    )
}
export default Messages