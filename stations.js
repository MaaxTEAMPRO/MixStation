const stations = [
    { name: 'Antenne Bayern - Oldies but Goldies', url: 'http://stream.antenne.de/oldies-but-goldies/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/15521/aby_streamlogo_webradio_hd_large_oldie_antenne-v1.jpg/0e9ddff78317a4c549fd53a3690c0fe3.webp' },
    { name: 'Hunter FM - 80s Retro', url: 'https://live.hunter.fm/80s_high', icon: 'https://cdn.hunter.fm/image/thumb/station/80s-third/400x400ht.jpg' },
    { name: 'Hunter FM Pop', url: 'https://live.hunter.fm/pop_high', icon: 'https://cdn.hunter.fm/image/thumb/station/pop-third/400x400ht.jpg' },
    { name: 'Hunter - Moda Sertaneja', url: 'https://live.hunter.fm/modasertaneja_high', icon: 'https://cdn.hunter.fm/image/thumb/station/modasertaneja-third/400x400ht.jpg' },
    { name: 'Hunter FM - Sertanejo', url: 'https://live.hunter.fm/sertanejo_high', icon: 'https://cdn.hunter.fm/image/thumb/station/sertanejo-third/400x400ht.jpg' },
    { name: 'Antenne Bayern - 80er Kulthits', url: 'http://stream.antenne.de/80er-kulthits/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7/streamlogo_80er_aby-v1.jpg/f8dc8c8fa5c1686cebb0714f1f3993d1.webp' },
    { name: 'Antenne Bayern - 70er Rock', url: 'https://s8-webradio.antenne.de/antenne-bayern-70er-rock/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/13897/streamlogo_70er_rock_aby_neu_2000x2000-v1.jpg/c3cea2d625af4aa2d72ceea7f5fb78e8.webp' },
    { name: 'Antenne Bayern - 70er Hits', url: 'http://stream.antenne.de/70er-hits/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7306/streamlogo_70er_aby-v1.jpg/16418bb5de8f35b53118916fbde10963.webp' },
    { name: 'Oldie Antenne - 80er New Wave', url: 'https://s2-webradio.oldie-antenne.de/oldie-antenne-80er-new-wave/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37871/oldie_80er_new_wave_2000x2000-v1.png/48169e95224200f782d028138d02395a.webp' },
    { name: 'Oldie Antenne - 80er hits', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-80er-hits/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37897/oldie_80er_hits_2000x2000-v1.png/1d4b792598e17f2a6b57a9c75a84b518.webp' },
    { name: 'Oldie Antenne - Rock Classics', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-rock-classics/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/38373/oldie_rock_classics_2000x2000-1-v1.jpg/712b25de61f422616daec7e071600950.webp' },
    { name: 'Oldie Antenne - NDW', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-ndw/stream/mp3', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37891/oldie_ndw_2000x2000-v1.png/142209e0174fd65ece3267b476b2c060.webp' },
    { name: 'Antenne Bayern - Coffee Music', url: 'http://stream.antenne.de/coffee/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7265/streamlogo_coffee_music_aby-v1.jpg/47e36e3e99540ea5a40f4f6f3bb9e12b.webp' },
    { name: 'Antenne Bayern', url: 'http://stream.antenne.de:80/antenne', icon: 'https://www.antenne.de/media/cache/3/version/18696/streamlogo_simulcast_live_aby_neu_2000x2000-v1.jpg/5e26f53136d9fcbd4f9101a8e1c652ba.webp' },
    { name: 'Gauchesca Sul', url: 'http://stream.zeno.fm/vmd4znn8hg8uv', icon: 'https://img.radios.com.br/radio/lg/radio212211_1708734422.jpg' },
    { name: 'Galaxy Rosenheim', url: 'http://s17.myradiostream.com:13366/;stream.mp3', icon: 'https://static.mytuner.mobi/media/tvos_radios/cen64zK5NK.jpg' },
    { name: 'Truckers FM', url: 'http://radio.truckers.fm/', icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3debb4fa-7b99-45b1-9f53-3bb261212a10-profile_image-300x300.png' },
    { name: 'Simulator Radio', url: 'https://simulatorradio.stream/stream.mp3', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0DhgUuCRMGBVt7_YccKtB4DHFzAnK0p5_5V6Kj_WZS4uq46-IArm_w94GDkClQnpEW4&usqp=CAU' },
    { name: 'Jovem Pan Classic', url: 'https://ice.fabricahost.com.br/classicpan', icon: 'https://s.jpimg.com.br/wp-content/themes/jovempan/assets/src/images/classic-pan/capa-classicpan-1024x1024.png' },
    { name: 'Jovem Pan', url: 'https://ice.fabricahost.com.br/jovempansp1009', icon: 'https://s.jpimg.com.br/wp-content/themes/jovempan/assets/build/images/logos-player/jpfm.jpg?v2' },
    { name: 'Radio Clube de Canoinhas', url: 'https://cast.youngtech.radio.br/radio/8370/radio', icon: 'https://img.radios.com.br/radio/lg/radio11834_1525086515.jpg' },

    { name: 'Band FM Floripa', url: 'https://cast2.youngtech.radio.br/radio/8010/radio', icon: 'https://pubimg.band.uol.com.br/Files/bandfm-live.png' },
    { name: 'Mix FM São Paulo', url: '        https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_SAOPAULOAAC.aac', icon: 'https://img.radios.com.br/radio/lg/radio13955_1532353280.png' },

    { name: 'Italia anni 60', url: 'https://str01.fluidstream.net/anni60.mp3', icon: 'https://www.radioitaliaannisessanta.it/images/ria60/za_network/inserzioni/radioitaliaanni60.jpg' },
    { name: '100.9 Classic Country', url: 'https://live.amperwave.net/direct/wboc-waaifmmp3-ibc2?_=84', icon: 'https://mm.aiircdn.com/609/5cd2c3c93418e.png' },
    { name: '1FM - Country One', url: 'https://strm112.1.fm/country_mobile_mp3', icon: 'https://static.tuneyou.com/images/logos/500_500/11/15511/1.FMDeepHouse_8.png' },
    { name: 'RFM - 80s', url: 'https://stream.rfm.fr/rfm-wr7.aac', icon: 'https://resize2-rfm.lanmedia.fr/r/100,100,forcex/crop/100,100,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-80-s/3281-3-fre-FR/RFM-80-s.png' },
    { name: 'RFM - Slow', url: 'https://rfm.lmn.fm/rfm-wr13.aac', icon: 'https://resize-rfm.lanmedia.fr/r/67,,forcex/crop/67,67,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-slow/54053-1-fre-FR/RFM-Slow.png' },
    { name: 'RFM Lounge', url: 'http://stream.rfm.fr/rfm-wr6.mp3', icon: 'https://resize1-rfm.lanmedia.fr/r/67,,forcex/crop/67,67,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-lounge/19264-14-fre-FR/RFM-Lounge.png' },
    { name: 'TruckSim FM', url: 'http://radio.trucksim.fm:8000/stream', icon: 'https://trucksim.fm/assets/img/avatars/autodj.jpg?2' },

    { name: 'AS FM', url: 'https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream', icon: 'https://www.radio-uzivo.com/images/radio-stanica/as-fm_200_1.jpg' },

    { name: 'Antenne Bayern - TOP 40', url: 'http://mp3channels.webradio.antenne.de/top-40', icon: 'https://www.antenne.de/media/cache/3/version/7264/streamlogo_top_40_aby-v1.jpg/bfef8f7751448ff6550b339ef8bb420c.webp' },
    { name: 'Antenne Bayern - 2000 Hits', url: 'https://s2-webradio.antenne.de/2000er-hits', icon: 'https://www.antenne.de/media/cache/3/version/7320/streamlogo_2000er_aby-v1.jpg/eb8c905312265f37f465cb9d341a68f3.webp' },

    { name: 'Antenne Bayern - Happy Hits', url: 'https://s6-webradio.antenne.de/happy-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7290/streamlogo_happy_hits_aby-v1.jpg/61e889f16860424c0b621f6a01163367.webp' },
    { name: 'Antenne Bayern - Party Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7352/streamlogo_party_hits_aby-v1.jpg/8c39bbc032baf2b3ff5bb2c74a946b81.webp' },
    { name: 'Antenne Bayern - Summer Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7392/streamlogo_sommer_hits_aby-v1.jpg/fe42c77ce70903b129f9ddf635c50625.webp' },
    { name: 'Antenne Bayern - In The Mix', url: 'http://mp3channels.webradio.antenne.de/hitmix', icon: 'https://www.antenne.de/media/cache/3/version/6/streamlogo_in_the_mix_aby-v1.jpg/f5c30ea9c1bf5214dbc0695f9bca4cac.webp' },
    { name: 'Ibiza - Global Radio', url: 'https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3', icon: 'https://i1.sndcdn.com/avatars-XAzhBFgew2ytmeyZ-CkDDPg-t500x500.jpg' },
    { name: 'Ibiza - Global Classics', url: 'https://control.streaming-pro.com:8000/ibizaglobalclassics.mp3', icon: 'https://i1.sndcdn.com/avatars-Fh7RCyr9yeKYRfJC-k0LqPg-t1080x1080.jpg' },
    { name: 'FG Radio - Remixes', url: 'https://stream.rcs.revma.com/w1psqtmd342vv', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/27/FG_1400_%C3%97_1400.jpg' },
    { name: 'FG Radio - Mix House', url: 'https://stream.rcs.revma.com/5kucq079n98uv', icon: 'https://yt3.googleusercontent.com/Y9gwp10yBGJ4DZd0sCb8NAQJTU404d297vRmC7uIsiQWxHDCKtmrqeWzGAnTmhMmTbszLs79x2E=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'FG Radio - Tech House', url: 'https://stream.rcs.revma.com/007e1v9f772vv', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuOfzVXpFD2ZcZf6FYSSe3igf8nrdRd4E0y73AtIFcdU3tqLFswPw26CtuGofTwJ6AlA&usqp=CAU' }
];