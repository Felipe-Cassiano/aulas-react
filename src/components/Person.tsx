let getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}

type Props = {
    name: string
    avatar: string
    filmes: string[]
}

export const Person = (props: Props) => {
    
    return (
        <>
            <h1 className="text-red-700">{props.name} - {getWeekDay()} </h1>
            <img src={props.avatar} alt={props.name} className="max-w-xl"/>
            <ul>
                <li>{props.filmes[0]}</li>
                <li>{props.filmes[1]}</li>
                <li>{props.filmes[2]}</li>
            </ul>
        </>
    )
}