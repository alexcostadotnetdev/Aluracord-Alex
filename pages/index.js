import appConfig from '../config.json'

function GlobalStyle() {
    return (
    <style global jsx>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: white;
        }
    `}</style>
    );
}


function Titulo(props) {
    console.log(props)
    const Tag = props.tag;
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weigth: 608;
                }
            `}</style>
        </>
    )
}

function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
            <h2>Discord - Alura Matrix</h2>
        </div>
    );
}

export default HomePage