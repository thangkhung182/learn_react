export default function ThemeButton(props) {
    const handleClick = e => {
        console.log('ThemButton: type: ' + e.type 
            + ' target: ' + e.target.tagName
            + ' currentTarget: ' + e.currentTarget.tagName
        );

        //console.log('Invoked function prop')
        props.callback(props.theme)
    }

    return (<span className="m-1" onClick={handleClick}
                //onClickCapture={handleClick}
        >
            <button className={"btn btn-" + props.theme} onClick={handleClick}>
                Select {props.theme} theme
            </button>
    </span>)
}