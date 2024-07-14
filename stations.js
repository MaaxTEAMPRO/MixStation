const stations = [
    { name: 'Antenne Bayern - Oldies but Goldies', url: 'http://stream.antenne.de/oldies-but-goldies/stream/aacp', icon: 'icons/Antenne_Bayern_Oldies_but_Goldies.webp' },
    { name: 'Hunter FM - 80s Retro', url: 'https://live.hunter.fm/80s_high', icon: 'icons/Hunter_FM_80s_Retro.jpg' },
    { name: 'Hunter FM Pop', url: 'https://live.hunter.fm/pop_high', icon: 'icons/Hunter_FM_Pop.jpg' },
    { name: 'Hunter - Moda Sertaneja', url: 'https://live.hunter.fm/modasertaneja_high', icon: 'icons/Hunter_Moda_Sertaneja.jpg' },
    { name: 'Hunter FM - Sertanejo', url: 'https://live.hunter.fm/sertanejo_high', icon: 'icons/Hunter_FM_Sertanejo.jpg' },
    { name: 'Antenne Bayern - 80er Kulthits', url: 'http://stream.antenne.de/80er-kulthits/stream/aacp', icon: 'icons/Antenne_Bayern_80er_Kulthits.png' },
    { name: 'Antenne Bayern - 70er Rock', url: 'https://s8-webradio.antenne.de/antenne-bayern-70er-rock/stream/aacp', icon: 'icons/Antenne_Bayern_70er_Rock.webp' },
    { name: 'Antenne Bayern - 70er Hits', url: 'http://stream.antenne.de/70er-hits/stream/aacp', icon: 'icons/Antenne_Bayern_70er_Hits.webp' },
    { name: 'Oldie Antenne - 80er New Wave', url: 'https://s2-webradio.oldie-antenne.de/oldie-antenne-80er-new-wave/stream/aacp', icon: 'icons/Oldie_Antenne_80er_New_Wave.webp' },
    { name: 'Oldie Antenne - 80er hits', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-80er-hits/stream/aacp', icon: 'icons/Oldie_Antenne_80er_Hits.webp' },
    { name: 'Oldie Antenne - Rock Classics', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-rock-classics/stream/aacp', icon: 'icons/Oldie_Antenne_Rock_Classics.webp' },
    { name: 'Oldie Antenne - NDW', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-ndw/stream/mp3', icon: 'icons/Oldie_Antenne_NDW.webp' },
    { name: 'Antenne Bayern - Coffee Music', url: 'http://stream.antenne.de/coffee/stream/aacp', icon: 'icons/Antenne_Bayern_Coffee_Music.webp' },
    { name: 'Antenne Bayern', url: 'http://stream.antenne.de:80/antenne', icon: 'icons/Antenne_Bayern.webp' },
    { name: 'Gauchesca Sul', url: 'http://stream.zeno.fm/vmd4znn8hg8uv', icon: 'icons/Gauchesca_Sul.jpg' },
    { name: 'Galaxy Rosenheim', url: 'http://s17.myradiostream.com:13366/;stream.mp3', icon: 'icons/Galaxy_Rosenheim.jpg' },
    { name: 'Truckers FM', url: 'http://radio.truckers.fm/', icon: 'icons/Truckers_FM.png' },
    { name: 'Simulator Radio', url: 'https://simulatorradio.stream/stream.mp3', icon: 'icons/simulator_radio.png' },
    { name: 'Jovem Pan Classic', url: 'https://ice.fabricahost.com.br/classicpan', icon: 'icons/Jovem_Pan_Classic.png' },
    { name: 'Jovem Pan', url: 'https://ice.fabricahost.com.br/jovempansp1009', icon: 'icons/Jovem_Pan.jpg' },
    { name: 'Radio Clube de Canoinhas', url: 'https://cast.youngtech.radio.br/radio/8370/radio', icon: 'icons/Radio_Clube_de_Canoinhas.jpg' },

    { name: 'Band FM Floripa', url: 'https://cast2.youngtech.radio.br/radio/8010/radio', icon: 'icons/Band_FM_Floripa.png' },
    { name: 'Mix FM São Paulo', url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_SAOPAULOAAC.aac', icon: 'icons/Mix_FM_Sao_Paulo.png' },

    { name: 'Italia anni 60', url: 'https://str01.fluidstream.net/anni60.mp3', icon: 'icons/Italia_anni_60.jpg' },
    { name: '100.9 Classic Country', url: 'https://live.amperwave.net/direct/wboc-waaifmmp3-ibc2?_=84', icon: 'icons/100_9_Classic_Country.png' },
    { name: '1FM - Country One', url: 'https://strm112.1.fm/country_mobile_mp3', icon: 'icons/1FM_Country_One.png' },
    { name: 'RFM - 80s', url: 'https://stream.rfm.fr/rfm-wr7.aac', icon: 'icons/RFM_80s.png' },
    { name: 'RFM - Slow', url: 'https://rfm.lmn.fm/rfm-wr13.aac', icon: 'icons/RFM_Slow.png' },
    { name: 'RFM Lounge', url: 'http://stream.rfm.fr/rfm-wr6.mp3', icon: 'icons/RFM_Lounge.png' },
    { name: 'TruckSim FM', url: 'http://radio.trucksim.fm:8000/stream', icon: 'icons/TruckSim_FM.jpg' },

    { name: 'AS FM', url: 'https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream', icon: 'icons/AS_FM.jpg' },

    { name: 'Antenne Bayern - TOP 40', url: 'http://mp3channels.webradio.antenne.de/top-40', icon: 'icons/Antenne_Bayern_TOP_40.webp' },
    { name: 'Antenne Bayern - 2000 Hits', url: 'https://s2-webradio.antenne.de/2000er-hits', icon: 'icons/Antenne_Bayern_2000_Hits.webp' },

    { name: 'Antenne Bayern - Happy Hits', url: 'https://s6-webradio.antenne.de/happy-hits/stream/mp3', icon: 'icons/Antenne_Bayern_Happy_Hits.webp' },
    { name: 'Antenne Bayern - Party Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'icons/Antenne_Bayern_Party_Hits.webp' },
    { name: 'Antenne Bayern - Summer Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'icons/Antenne_Bayern_Summer_Hits.webp' },
    { name: 'Antenne Bayern - In The Mix', url: 'http://mp3channels.webradio.antenne.de/hitmix', icon: 'icons/Antenne_Bayern_In_The_Mix.webp' },
    { name: 'Ibiza - Global Radio', url: 'https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3', icon: 'icons/ibiza_global_radio.png' },
    { name: 'Ibiza - Global Classics', url: 'https://control.streaming-pro.com:8000/ibizaglobalclassics.mp3', icon: 'icons/Ibiza_Global_Classics.jpg' },
    { name: 'FG Radio - Remixes', url: 'https://stream.rcs.revma.com/w1psqtmd342vv', icon: 'icons/FG_Radio_Remixes.jpg' },
    { name: 'FG Radio - Mix House', url: 'https://stream.rcs.revma.com/5kucq079n98uv', icon: 'icons/fg_radio.png' },
    { name: 'FG Radio - Tech House', url: 'https://stream.rcs.revma.com/007e1v9f772vv', icon: 'icons/fg_radio.png' }
];