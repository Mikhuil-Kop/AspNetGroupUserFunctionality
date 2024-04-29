interface NavigationButtonProps{
    color: string,
    label: string
}

const NavigationButton = (props: NavigationButtonProps) => {
    return (
        <span style={{ color: props.color }}>{props.label}</span>
    );
}

export default NavigationButton;