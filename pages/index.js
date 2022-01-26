import { Box, Button, Text, TextField, Image, GridDisplay } from '@skynexui/components';
import appConfig from '../config.json'
import matrix from '../assets/matrix.jpg'
import { useRouter } from 'next/router'
import React from 'react';
console.log(matrix);


function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
    </>
  );
}


// function Titulo(props) {
//     console.log(props)
//     const Tag = props.tag;
//     return(
//         <>
//             <Tag>{props.children}</Tag>
//             <style jsx>{`
//                 ${Tag} {
//                     color: ${appConfig.theme.colors.neutrals['000']};
//                     font-size: 24px;
//                     font-weigth: 608;
//                 }
//             `}</style>
//         </>
//     )
// }

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     );
// }

// export default HomePage

export default function PaginaInicial() {
  //const username = 'alexcostadotnetdev';
  const [username, setUsername] = React.useState('');
  const [userImagem, setUserImagem] = React.useState('');
  const routeNext = useRouter();

  return (
    <>

      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: `url(https://i0.wp.com/www.3dart.it/wp-content/uploads/2021/09/The-Matrix-4-Resurrections-Pre-Teaser-Trailer_0018_Layer-19.jpg?resize=1400%2C588&ssl=1)`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguém clicou no btn de entrar do formulário!!!');
              routeNext.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>
            {/* <input
              type="text"
              value={username}
              onChange={function (e) {
                console.log('usuário digitou', e.target.value);
                const valor = e.target.value;
                setUsername(valor);
              }}
            /> */}
            <TextField
              value={username}
              onChange={function (e) {
                const valor = e.target.value;
                const ValorImagem = username.trim().length <= 2 ? "" : `https://github.com/${e.target.value}.png`;
                console.log(ValorImagem)
                setUserImagem(ValorImagem)
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
            
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image

              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',

              }}

              src={`${userImagem}`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
            
          </Box>
          {/* Photo Area */}          
        </Box>
        

      </Box>
    </>
  );
}