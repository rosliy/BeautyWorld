interface EmployeeCardProps {
    fullName: string;
    photo?: string;
    position: string;
    onClick: () => void;
}


export function EmployeeCard(props: EmployeeCardProps) {
return (
    <div className='employee'>
        <img src={props.photo} width={200} alt="" />
        <p>{props.fullName}</p>
        <p>{props.position}</p>
        <button onClick={props.onClick}>Remove</button>
    </div>
);
}