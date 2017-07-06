import React from "react";

import {Route, Link} from "react-router-dom";

import Detalhe from './Detalhe';

export default class Titulos extends React.Component {

    render() {


    const film = {
       page: 1,
       total_results: 313542,
       total_pages: 15678,
       results: [
          {
             vote_count: 922,
             id: 166426,
             video: false,
             vote_average: 6.5,
             title: "Piratas do Caribe: A Vingança de Salazar",
             popularity: 177.9722,
             poster_path: "/xHGwFcaWy6Ng6MagII45P3w0wOw.jpg",
             original_language: "en",
             original_title: "Pirates of the Caribbean: Dead Men Tell No Tales",
             genre_ids: [
                28,
                12,
                35,
                14
             ],
             backdrop_path: "/3DVKG54lqYbdh8RNylXeCf4MBPw.jpg",
             adult: false,
             overview: "O Capitão Jack, que anda passando por uma onda de azar, sente os ventos da má sorte soprando com muita força quando os marinheiros fantasmas assassinos, liderados pelo aterrorizante Capitão Salazar (Javier Bardem), escapam do triângulo do diabo decididos a matar todos os piratas em seu caminho, especialmente Jack.",
             release_date: "2017-05-23"
          },
          {
             vote_count: 620,
             id: 297762,
             video: false,
             vote_average: 7.1,
             title: "Mulher-Maravilha",
             popularity: 115.70027,
             poster_path: "/ujQthWB6c0ojlARk28NSTmqidbF.jpg",
             original_language: "en",
             original_title: "Wonder Woman",
             genre_ids: [
                28,
                12,
                14,
                878
             ],
             backdrop_path: "/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg",
             adult: false,
             overview: "Antes de ser Mulher-Maravilha, ela era Diana, princesa das Amazonas, treinada para ser uma guerreira imbatível. Criada numa ilha paraíso protegida e escondida, tudo muda quando um piloto americano chega em seu território e avisa sobre um grande conflito tomando forma no mundo. Diana deixa seu lar convencida de que pode impedir a ameaça crescente. Lutando ao lado dos homens em uma guerra para dar fim a todas as outras, Diana descobre seus poderes… e seu destino.",
             release_date: "2017-05-30"
          },
          {
             vote_count: 3020,
             id: 321612,
             video: false,
             vote_average: 6.8,
             title: "A Bela e a Fera",
             popularity: 77.16829,
             poster_path: "/9V4wl4rnUcLfGuTe4J5NjOFbDil.jpg",
             original_language: "en",
             original_title: "Beauty and the Beast",
             genre_ids: [
                10402,
                10751,
                14,
                10749
             ],
             backdrop_path: "/7QshG75xKCmClghQDU1ta2BTaja.jpg",
             adult: false,
             overview: "Moradora de uma pequena aldeia francesa, Bela (Emma Watson) tem o pai capturado pela Fera e decide entregar sua vida ao estranho ser em troca da liberdade do progenitor. No castelo ela conhece objetos mágicos e descobre que a Fera é na verdade um príncipe que precisa de amor para voltar à forma humana.",
             release_date: "2017-03-16"
          },
          {
             vote_count: 3731,
             id: 263115,
             video: false,
             vote_average: 7.5,
             title: "Logan",
             popularity: 64.87357,
             poster_path: "/9EXnebqbb7dOhONLPV9Tg2oh2KD.jpg",
             original_language: "en",
             original_title: "Logan",
             genre_ids: [
                28,
                18,
                878
             ],
             backdrop_path: "/miqmTwqvnYiPEdolZv0biI7vFw2.jpg",
             adult: false,
             overview: "Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.",
             release_date: "2017-02-28"
          },
          {
             vote_count: 5716,
             id: 22,
             video: false,
             vote_average: 7.4,
             title: "Piratas do Caribe: A Maldição do Pérola Negra",
             popularity: 59.01884,
             poster_path: "/bSzff9RqSJNU8GKtaBbIRqaxGrU.jpg",
             original_language: "en",
             original_title: "Pirates of the Caribbean: The Curse of the Black Pearl",
             genre_ids: [
                12,
                14,
                28
             ],
             backdrop_path: "/fQZQYW9Hrg8TpYZH4KgbRptkcCN.jpg",
             adult: false,
             overview: "Em pleno século XVII, o pirata Jack Sparrow (Johnny Depp) tem seu navio saqueado e roubado pelo capitão Barbossa (Geoffrey Rush) e sua tripulação. Com o navio de Sparrow, Barbossa invade e saqueia a cidade de Port Royal, levando consigo Elizabeth Swann (Keira Knightley), a filha do governador (Jonathan Pryce). Decidido a recuperar sua embarcação, Sparrow recebe a ajuda de Will Turner (Orlando Bloom), um grande amigo de Elizabeth que parte em seu encalço. Porém, o que ambos não sabem é que o Pérola Negra, navio de Barbossa, foi atingido por uma terrível maldição que faz com que eles naveguem eternamente pelos oceanos e se transformem em esqueletos à noite.",
             release_date: "2003-07-09"
          },
          {
             vote_count: 2188,
             id: 283995,
             video: false,
             vote_average: 7.6,
             title: "Guardiões da Galáxia Vol. 2",
             popularity: 40.39121,
             poster_path: "/ezSpIN2bUnVnhqZDTk5RTQA33VR.jpg",
             original_language: "en",
             original_title: "Guardians of the Galaxy Vol. 2",
             genre_ids: [
                28,
                12,
                35,
                878
             ],
             backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
             adult: false,
             overview: "Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo.",
             release_date: "2017-04-19"
          },
          {
             vote_count: 1672,
             id: 335797,
             video: false,
             vote_average: 6.8,
             title: "Sing - Quem Canta Seus Males Espanta",
             popularity: 33.481293,
             poster_path: "/1LEeSindznWQnXIglb7Ica9MITe.jpg",
             original_language: "en",
             original_title: "Sing",
             genre_ids: [
                16,
                35,
                18,
                10751,
                10402
             ],
             backdrop_path: "/usJKCEMXV3tECgIJj8ZTEndmY2E.jpg",
             adult: false,
             overview: "Um empolgado coala chamado Buster decide criar uma competição de canto para aumentar os rendimentos de seu antigo teatro. A disputa movimenta o mundo animal e promove a revelação de diversos talentos da cidade, todos de olho nos 15 minutos de fama e US$ 100 mil dólares de prêmio.",
             release_date: "2016-11-23"
          },
          {
             vote_count: 960,
             id: 126889,
             video: false,
             vote_average: 6,
             title: "Alien: Covenant",
             popularity: 32.696445,
             poster_path: "/ewVHnq4lUiovxBCu64qxq5bT2lu.jpg",
             original_language: "en",
             original_title: "Alien: Covenant",
             genre_ids: [
                27,
                878,
                53
             ],
             backdrop_path: "/kMU8trT43p5LFoJ4plIySMOsZ1T.jpg",
             adult: false,
             overview: "Ridley Scott retorna ao universo que criou com ALIEN: COVENANT, um novo capítulo em sua inovadora franquia ALIEN. A tripulação do navio-colônia Covenant, ligada a um remoto planeta no lado distante da galáxia, descobre o que eles acham que é um paraíso inexplorado, mas na verdade é um mundo escuro e perigoso. Quando descobrem uma ameaça além de sua imaginação, devem tentar uma fuga angustiante.",
             release_date: "2017-05-09"
          },
          {
             vote_count: 1618,
             id: 324552,
             video: false,
             vote_average: 6.5,
             title: "John Wick: Um Novo Dia Para Matar",
             popularity: 32.380913,
             poster_path: "/pkRLUQQdlve7H7LjhyNODF7F5mK.jpg",
             original_language: "en",
             original_title: "John Wick: Chapter 2",
             genre_ids: [
                53,
                28,
                80
             ],
             backdrop_path: "/dQ6s3Ud2KoOs3LKw6xgZr1cw7Yq.jpg",
             adult: false,
             overview: "Após recuperar seu carro, John Wick (Keanu Reeves) acredita que enfim poderá se aposentar. Entretanto, a reaparição de Santino D'Antonio (Riccardo Scarmacio) atrapalha seus planos. Dono de uma promissória em nome de Wick, por ele usada para deixar o posto de assassino profissional da Alta Cúpula, Santino cobra a dívida existente e insiste para que ele mate sua própria irmã, Gianna (Claudia Gerini).",
             release_date: "2017-02-08"
          },
          {
             vote_count: 4229,
             id: 245891,
             video: false,
             vote_average: 7,
             title: "De Volta ao Jogo",
             popularity: 31.750858,
             poster_path: "/rboZslo3eQWKBQ3QvlO6wGV0J3K.jpg",
             original_language: "en",
             original_title: "John Wick",
             genre_ids: [
                28,
                53
             ],
             backdrop_path: "/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg",
             adult: false,
             overview: "John Wick (Keanu Reeves) já foi um dos assassinos mais temidos da cidade de Nova York, trabalhando em parceria com a máfia russa. Um dia, ele decide se aposentar, e neste período tem que lidar com a triste morte de sua esposa. Vítima de uma doença grave, ela já previa a sua própria morte, e deu de presente ao marido um cachorro para cuidar em seu período de luto. No entanto, poucos dias após o funeral, o cachorro é morto por ladrões que roubam o seu carro. John Wick parte em busca de vingança contra estes homens que ele já conhecia muito bem, e que roubaram o último símbolo da mulher que ele amava.",
             release_date: "2014-10-22"
          },
          {
             vote_count: 8848,
             id: 157336,
             video: false,
             vote_average: 8,
             title: "Interestelar",
             popularity: 29.942484,
             poster_path: "/o2eH7rg6XlWLkyjNVAIxQcWkQzi.jpg",
             original_language: "en",
             original_title: "Interstellar",
             genre_ids: [
                12,
                18,
                878
             ],
             backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
             adult: false,
             overview: "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
             release_date: "2014-11-05"
          },
          {
             vote_count: 4313,
             id: 58,
             video: false,
             vote_average: 6.9,
             title: "Piratas do Caribe: O Baú da Morte",
             popularity: 29.474396,
             poster_path: "/198VOcNCsD4wNzHp8dkAqWXleDf.jpg",
             original_language: "en",
             original_title: "Pirates of the Caribbean: Dead Man's Chest",
             genre_ids: [
                12,
                14,
                28
             ],
             backdrop_path: "/hdHgIcljPHli4xaJGt0INz8Gn3J.jpg",
             adult: false,
             overview: "Elizabeth Swann (Keira Knightley), a filha do governador Weatherby (Jonathan Pryce), está prestes a se casar com o ferreiro Will Turner (Orlando Bloom). Porém o evento é atrapalhado pela ameaça de Davy Jones (Bill Nighy), o capitão do assombrado navio Flying Dutchman, que tem uma dívida de sangue com o capitão Jack Sparrow (Johnny Depp), amigo do casal. Temendo ser amaldiçoado a uma vida após a morte como escravo de Jones, Sparrow precisa encontrar o misterioso baú da morte para escapar da ameaça.",
             release_date: "2006-06-20"
          },
          {
             vote_count: 7672,
             id: 118340,
             video: false,
             vote_average: 7.9,
             title: "Guardiões da Galáxia",
             popularity: 29.188337,
             poster_path: "/jp8VuqoeknyLe56JtFDIqhUaRrZ.jpg",
             original_language: "en",
             original_title: "Guardians of the Galaxy",
             genre_ids: [
                28,
                878,
                12
             ],
             backdrop_path: "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
             adult: false,
             overview: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.",
             release_date: "2014-07-30"
          },
          {
             vote_count: 3242,
             id: 87101,
             video: false,
             vote_average: 5.8,
             title: "O Exterminador do Futuro: Gênesis",
             popularity: 25.74933,
             poster_path: "/3bsLapI6DxME6niIb74aSD71DRH.jpg",
             original_language: "en",
             original_title: "Terminator Genisys",
             genre_ids: [
                878,
                28,
                53,
                12
             ],
             backdrop_path: "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
             adult: false,
             overview: "Em 2029, a resistência humana contra as máquinas é comandada por John Connor (Jason Clarke). Ao saber que a Skynet enviou um exterminador ao passado com o objetivo de matar sua mãe, Sarah Connor (Emilia Clarke), antes de seu nascimento, John envia o sargento Kyle Reese (Jai Courtney) de volta ao ano de 1984, na intenção de garantir a segurança dela. Entretanto, ao chegar Reese é surpreendido pelo fato de que Sarah tem como protetor outro exterminador T-800 (Arnold Schwarzenegger), enviado para protegê-la quando ainda era criança.",
             release_date: "2015-06-23"
          },
          {
             vote_count: 755,
             id: 324849,
             video: false,
             vote_average: 7.2,
             title: "LEGO Batman: O Filme",
             popularity: 25.712742,
             poster_path: "/gBTf3DMaVvIqTQQ7QdZxt9ftRF1.jpg",
             original_language: "en",
             original_title: "The Lego Batman Movie",
             genre_ids: [
                14,
                28,
                16,
                35,
                10751
             ],
             backdrop_path: "/gbO4tWvMC0oLbNvHP9Zth3eUeAA.jpg",
             adult: false,
             overview: "No spin-off de Uma Aventura Lego, Batman (Will Arnett) descobre que adotou acidentalmente um garoto órfão. Ele se torna ninguém menos que seu ajudante Robin (Michael Cera). A dupla formada pelo arrogante Homem-Morcego e o seu empolgado ajudante deve combater o crime e prender o Coringa (Zach Galifianakis).",
             release_date: "2017-02-08"
          },
          {
             vote_count: 4134,
             id: 1865,
             video: false,
             vote_average: 6.4,
             title: "Piratas do Caribe: Navegando em Águas Misteriosas",
             popularity: 24.50622,
             poster_path: "/yLpjYNHm6S5vZdm26VMoypyHXUK.jpg",
             original_language: "en",
             original_title: "Pirates of the Caribbean: On Stranger Tides",
             genre_ids: [
                12,
                28,
                14
             ],
             backdrop_path: "/l7zANdjgTvYqwZUx76Vk0EKpCH5.jpg",
             adult: false,
             overview: "O capitão Jack Sparrow (Johnny Depp) vai até Londres para resgatar Gibbs (Kevin McNally), integrante de sua tripulação no Pérola Negra. Lá ele descobre que alguém está usando seu nome para conseguir marujos em uma viagem rumo à Fonte da Juventude. Sparrow investiga e logo percebe que Angelica (Penélope Cruz), um antigo caso que balançou seu coração, é a responsável pela farsa. Ela é filha do lendário pirata Barba Negra (Ian McShane), que está com os dias contados. Desta forma, Angelica quer encontrar a Fonte da Juventude para que seu pai tenha mais alguns anos de vida. No encalço deles está o capitão Barbossa (Geoffrey Rush), que agora trabalha para o império britânico.",
             release_date: "2011-05-14"
          },
          {
             vote_count: 725,
             id: 395992,
             video: false,
             vote_average: 6.1,
             title: "Vida",
             popularity: 24.038738,
             poster_path: "/AjMU2jLA84H17e5Gn4xIhSwqK7i.jpg",
             original_language: "en",
             original_title: "Life",
             genre_ids: [
                27,
                878,
                53
             ],
             backdrop_path: "/haEACwDiVTnPFcwd9KDlZBae1Ef.jpg",
             adult: false,
             overview: "Um time de cientistas a bordo da Estação Espacial Internacional cuja missão de descoberta se transforma em medo puro quando eles encontram uma forma de vida em desenvolvimento que causou a extinção da vida em Marte e agora ameaça a tripulação e a vida na Terra.",
             release_date: "2017-03-23"
          },
          {
             vote_count: 7413,
             id: 135397,
             video: false,
             vote_average: 6.5,
             title: "Jurassic World: O Mundo dos Dinossauros",
             popularity: 23.4236,
             poster_path: "/6xdqXJl5ukTvQOl3j0GOuHQnozJ.jpg",
             original_language: "en",
             original_title: "Jurassic World",
             genre_ids: [
                28,
                12,
                878,
                53
             ],
             backdrop_path: "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
             adult: false,
             overview: "O Jurassic Park, localizado na ilha Nublar, enfim está aberto ao público. Com isso, as pessoas podem conferir shows acrobáticos com dinossauros e até mesmo fazer passeios bem perto deles, já que agora estão domesticados. Entretanto, a equipe chefiada pela doutora Claire (Bryce Dallas Howard) passa a fazer experiências genéticas com estes seres, de forma a criar novas espécies. Uma delas logo adquire inteligência bem mais alta, logo se tornando uma grande ameaça para a existência humana.",
             release_date: "2015-06-09"
          },
          {
             vote_count: 3658,
             id: 285,
             video: false,
             vote_average: 6.9,
             title: "Piratas do Caribe: No Fim do Mundo",
             popularity: 23.150272,
             poster_path: "/bmeQQUMZCvzttwHKmHmkbZIDqZn.jpg",
             original_language: "en",
             original_title: "Pirates of the Caribbean: At World's End",
             genre_ids: [
                12,
                14,
                28
             ],
             backdrop_path: "/8ZgpAftUiYTU76IhUADITa3Ur9n.jpg",
             adult: false,
             overview: "O lorde Cuttler Beckett (Tom Hollander), da Companhia das Índias Orientais, detém o comando do navio-fantasma Flying Dutchman. O navio, agora sob o comando do almirante James Norrington (Jack Davenport), tem por missão vagar pelos sete mares em busca de piratas e matá-los sem piedade. Na intenção de deter Beckett, Will Turner (Orlando Bloom), Elizabeth Swann (Keira Knightley) e o capitão Barbossa (Geoffrey Rush) precisam reunir os Nove Lordes da Corte da Irmandade. Porém falta um dos Lordes, o capitão Jack Sparrow (Johnny Depp). O trio parte para Cingapura, na intenção de conseguir o mapa que os conduzirá ao fim do mundo, o que possibilitará que Jack seja resgatado. Porém para conseguir o mapa eles precisarão enfrentar um pirata chinês, o capitão Sao Feng (Chow Yun-Fat).",
             release_date: "2007-05-19"
          },
          {
             vote_count: 57,
             id: 282035,
             video: false,
             vote_average: 4.8,
             title: "A Múmia",
             popularity: 22.936108,
             poster_path: "/vH9Hd7njePEe6xnRrYYaDmF2yqX.jpg",
             original_language: "en",
             original_title: "The Mummy",
             genre_ids: [
                28,
                12,
                14,
                27,
                53
             ],
             backdrop_path: "/qedJJ2z9oBYKxxO4Pp8qAkfgPst.jpg",
             adult: false,
             overview: "Nas profundezas do deserto, uma antiga rainha (Sofia Boutella) cujo destino foi injustamente tirado está mumificada. Apesar de estar sepultada em sua cripta, ela desperta nos dias atuais. Com uma maldade acumulada ao longo dos anos, ela espelha terror desde as areais do Oriente Médio até os becos de Londres.",
             release_date: "2017-06-06"
          }
       ]
    };

        const fimesLista = film.results.map((titulo, index) => {
            return (
                 <div class="box">
                    <article key={index.toString()} class="media">

                        <figure class="media-left">
                            <p class="image is-128x128">
                                <img src={'https://image.tmdb.org/t/p/w500/' + titulo.poster_path} />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p>
                                <strong class="titulo"><Link to={"/detalhes/" + titulo.id}> {titulo.title} </Link></strong>
                                <small class="categoria">{titulo.original_title}</small>
                                <small class="ano-tempo">{titulo.release_date} | 2h50m</small>
                                {titulo.overview}
                                <br />
                                <small class="rate">Avaliação: {titulo.vote_average}</small>
                            </p>
                            </div>
                        </div>

                    </article>
                </div>
            )
        });

        return (
            <div class="container">
                <div class="notification">
                    {fimesLista}
                </div>
            </div>
        );
    }
}
