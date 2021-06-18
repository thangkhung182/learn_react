export default function ActionButton(props) {
    return(
        <button className={"btn btn-" + props.theme + " m-2"}
            onClick={props.callback}
        >
            {props.text}
        </button>
    )
}