import nock from "nock";

nock("https://refine-fake-rest.pankod.com:443", {
    encodedQueryParams: true,
})
    .get("/users")
    .query({ _order: "asc", _sort: "id" })
    .reply(
        200,
        [
            {
                id: 1,
                firstName: "Camilla",
                email: "russel_medhurst82@gmail.com",
                lastName: "Reilly",
                status: false,
                birthday: "2020-10-18T15:07:56.404Z",
                avatar: [
                    {
                        name: "Camilla.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902154",
                        url:
                            "http://www.gravatar.com/avatar/e8a34e6383aa65933b5ad4587b116d0a?s=300",
                    },
                ],
            },
            {
                id: 2,
                firstName: "Jacynthe",
                email: "jamel_ondricka95@gmail.com",
                lastName: "Waelchi",
                status: true,
                birthday: "2020-10-17T13:45:13.314Z",
                avatar: [
                    {
                        name: "Jacynthe.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902163",
                        url:
                            "http://www.gravatar.com/avatar/421cd73b438f4efe1c48dc5beaa7ee25?s=300",
                    },
                ],
            },
            {
                id: 3,
                firstName: "Alexanne",
                email: "emmy.fisher@hotmail.com",
                lastName: "Farrell",
                status: true,
                birthday: "2021-05-11T14:56:17.106Z",
                avatar: [
                    {
                        name: "Alexanne.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902163",
                        url:
                            "http://www.gravatar.com/avatar/0f5ee1f86d5198a28fc25c932326c91f?s=300",
                    },
                ],
            },
            {
                id: 4,
                firstName: "Judd",
                email: "berneice7@hotmail.com",
                lastName: "Kessler",
                status: true,
                birthday: "2020-09-25T04:47:38.690Z",
                avatar: [
                    {
                        name: "Judd.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902163",
                        url:
                            "http://www.gravatar.com/avatar/a54f466c8fc417424172963f365c8d17?s=300",
                    },
                ],
            },
            {
                id: 5,
                firstName: "Kelly",
                email: "donald_quitzon@yahoo.com",
                lastName: "Feil",
                status: false,
                birthday: "2020-11-03T05:19:05.979Z",
                avatar: [
                    {
                        name: "Kelly.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902163",
                        url:
                            "http://www.gravatar.com/avatar/6513771a92fb224d8527c6b5d5943619?s=300",
                    },
                ],
            },
            {
                id: 6,
                firstName: "Remington",
                email: "amely_sanford@yahoo.com",
                lastName: "Mohr",
                status: false,
                birthday: "2020-10-19T14:01:25.511Z",
                avatar: [
                    {
                        name: "Remington.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902163",
                        url:
                            "http://www.gravatar.com/avatar/8b4e222e397ed7ce70d22194384e221e?s=300",
                    },
                ],
            },
            {
                id: 7,
                firstName: "Delaney",
                email: "noelia77@gmail.com",
                lastName: "Funk",
                status: true,
                birthday: "2021-01-06T15:31:30.377Z",
                avatar: [
                    {
                        name: "Delaney.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/a54c750e8f6db6d35c493988f255d79a?s=300",
                    },
                ],
            },
            {
                id: 8,
                firstName: "Demarco",
                email: "zakary_parker@gmail.com",
                lastName: "Davis",
                status: true,
                birthday: "2020-11-19T10:24:48.316Z",
                avatar: [
                    {
                        name: "Demarco.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/27e5fe54e2cfe16fae38c5185887e6ff?s=300",
                    },
                ],
            },
            {
                id: 9,
                firstName: "Greta",
                email: "halie30@gmail.com",
                lastName: "O'Reilly",
                status: false,
                birthday: "2021-02-21T13:09:39.669Z",
                avatar: [
                    {
                        name: "Greta.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/8c76f628ab83a9d188c1c0c3aa238e8b?s=300",
                    },
                ],
            },
            {
                id: 10,
                firstName: "Felicia",
                email: "cloyd_mckenzie@yahoo.com",
                lastName: "Veum",
                status: false,
                birthday: "2020-09-19T04:51:10.923Z",
                avatar: [
                    {
                        name: "Felicia.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/40b00cefdfc699a9cce8dd27b24a2501?s=300",
                    },
                ],
            },
            {
                id: 11,
                firstName: "Fidel",
                email: "dereck.predovic25@gmail.com",
                lastName: "Hahn",
                status: true,
                birthday: "2020-11-02T07:16:44.305Z",
                avatar: [
                    {
                        name: "Fidel.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/707f3742ad088234b67dff8b9c71cec4?s=300",
                    },
                ],
            },
            {
                id: 12,
                firstName: "Roderick",
                email: "javonte.blick23@gmail.com",
                lastName: "Cremin",
                status: true,
                birthday: "2021-01-01T05:01:09.191Z",
                avatar: [
                    {
                        name: "Roderick.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/151501da9ce62922ac54390dc67c7fb6?s=300",
                    },
                ],
            },
            {
                id: 13,
                firstName: "Jayme",
                email: "august_armstrong@yahoo.com",
                lastName: "Predovic",
                status: false,
                birthday: "2021-03-30T18:43:00.405Z",
                avatar: [
                    {
                        name: "Jayme.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/b6a05bc5d1b1c26023910b7a6c7a6f3f?s=300",
                    },
                ],
            },
            {
                id: 14,
                firstName: "Narciso",
                email: "mertie_toy@gmail.com",
                lastName: "Flatley",
                status: true,
                birthday: "2021-03-22T21:23:34.168Z",
                avatar: [
                    {
                        name: "Narciso.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/234e94d874cf6ac8141218bd1b80e5a2?s=300",
                    },
                ],
            },
            {
                id: 15,
                firstName: "Christy",
                email: "zechariah.vonrueden@gmail.com",
                lastName: "Robel",
                status: true,
                birthday: "2021-03-05T01:11:43.467Z",
                avatar: [
                    {
                        name: "Christy.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/6fd104a5b6c336c8a94d014e962ca74f?s=300",
                    },
                ],
            },
            {
                id: 16,
                firstName: "Marlee",
                email: "tanya.casper@gmail.com",
                lastName: "McLaughlin",
                status: true,
                birthday: "2021-03-01T19:57:35.502Z",
                avatar: [
                    {
                        name: "Marlee.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/4ae191dc84be401952e693834513b11a?s=300",
                    },
                ],
            },
            {
                id: 17,
                firstName: "Gudrun",
                email: "ressie35@hotmail.com",
                lastName: "O'Hara",
                status: false,
                birthday: "2021-01-27T09:20:49.675Z",
                avatar: [
                    {
                        name: "Gudrun.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/0a9dabe445777d0679cbe1bbfeadb128?s=300",
                    },
                ],
            },
            {
                id: 18,
                firstName: "Gia",
                email: "rogelio.schuppe47@hotmail.com",
                lastName: "Wiza",
                status: true,
                birthday: "2020-12-11T23:03:57.591Z",
                avatar: [
                    {
                        name: "Gia.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/8cde85fdb968b67a102ff11344997731?s=300",
                    },
                ],
            },
            {
                id: 19,
                firstName: "Brielle",
                email: "audreanne_king@gmail.com",
                lastName: "Goodwin",
                status: true,
                birthday: "2021-05-20T22:01:31.169Z",
                avatar: [
                    {
                        name: "Brielle.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/192c4704980eba2508a39436cd1b2c62?s=300",
                    },
                ],
            },
            {
                id: 20,
                firstName: "Jermaine",
                email: "yazmin48@gmail.com",
                lastName: "Macejkovic",
                status: true,
                birthday: "2021-01-11T12:33:09.024Z",
                avatar: [
                    {
                        name: "Jermaine.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/35579d77a7cc7d0bbd65b7603ac7d410?s=300",
                    },
                ],
            },
            {
                id: 21,
                firstName: "Ruthe",
                email: "joesph.tillman@hotmail.com",
                lastName: "Jast",
                status: true,
                birthday: "2020-10-11T07:19:41.277Z",
                avatar: [
                    {
                        name: "Ruthe.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/8116f550d8d66fe7b2cd30112df89263?s=300",
                    },
                ],
            },
            {
                id: 22,
                firstName: "Hailee",
                email: "brenden.raynor89@hotmail.com",
                lastName: "Bergstrom",
                status: false,
                birthday: "2020-08-04T11:59:47.700Z",
                avatar: [
                    {
                        name: "Hailee.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/183fe523c7619079c8f2054ce90114dd?s=300",
                    },
                ],
            },
            {
                id: 23,
                firstName: "Vincent",
                email: "edmund_hackett@hotmail.com",
                lastName: "Nitzsche",
                status: true,
                birthday: "2021-02-01T15:15:15.253Z",
                avatar: [
                    {
                        name: "Vincent.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/b535bc7eff03f2ba26fd6ae2bee84d45?s=300",
                    },
                ],
            },
            {
                id: 24,
                firstName: "Layla",
                email: "adaline4@gmail.com",
                lastName: "Rippin",
                status: false,
                birthday: "2021-04-12T12:43:46.184Z",
                avatar: [
                    {
                        name: "Layla.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/88aa8e1438d1cd3146d33dc11154276a?s=300",
                    },
                ],
            },
            {
                id: 25,
                firstName: "Joel",
                email: "marcellus.connelly@gmail.com",
                lastName: "Kautzer",
                status: true,
                birthday: "2021-03-25T07:21:59.009Z",
                avatar: [
                    {
                        name: "Joel.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/1390de1dca31b92e27de74157c4940db?s=300",
                    },
                ],
            },
            {
                id: 26,
                firstName: "Jolie",
                email: "haskell_emard70@hotmail.com",
                lastName: "Grant",
                status: false,
                birthday: "2020-11-27T05:13:22.904Z",
                avatar: [
                    {
                        name: "Jolie.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/aef9a3303f99b235364f9b96271d8507?s=300",
                    },
                ],
            },
            {
                id: 27,
                firstName: "Claudia",
                email: "glennie.grant7@gmail.com",
                lastName: "Ruecker",
                status: false,
                birthday: "2020-09-09T00:39:53.169Z",
                avatar: [
                    {
                        name: "Claudia.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902164",
                        url:
                            "http://www.gravatar.com/avatar/0ea5ec952c455af5bfff5a53f4c07f28?s=300",
                    },
                ],
            },
            {
                id: 28,
                firstName: "Rasheed",
                email: "norberto_kunde@hotmail.com",
                lastName: "Armstrong",
                status: true,
                birthday: "2021-05-02T00:47:18.955Z",
                avatar: [
                    {
                        name: "Rasheed.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/c8a6d08bf72b32b524e2522353acabd2?s=300",
                    },
                ],
            },
            {
                id: 29,
                firstName: "Tianna",
                email: "darron66@gmail.com",
                lastName: "Torphy",
                status: false,
                birthday: "2020-08-03T12:08:52.026Z",
                avatar: [
                    {
                        name: "Tianna.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/9d240c9bb208d6e5571753c62efe37fa?s=300",
                    },
                ],
            },
            {
                id: 30,
                firstName: "Alvena",
                email: "blake_hauck74@hotmail.com",
                lastName: "Heathcote",
                status: true,
                birthday: "2021-03-11T12:01:07.013Z",
                avatar: [
                    {
                        name: "Alvena.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/2a58501ac239470777c68859063b521d?s=300",
                    },
                ],
            },
            {
                id: 31,
                firstName: "Neal",
                email: "art.homenick51@yahoo.com",
                lastName: "Donnelly",
                status: false,
                birthday: "2021-02-21T07:28:07.312Z",
                avatar: [
                    {
                        name: "Neal.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/62271034e565b3b20e748a1f8a72d145?s=300",
                    },
                ],
            },
            {
                id: 32,
                firstName: "Kristy",
                email: "hermina_braun74@gmail.com",
                lastName: "Conn",
                status: false,
                birthday: "2020-07-12T16:55:23.038Z",
                avatar: [
                    {
                        name: "Kristy.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/919790033f0e32f6b5f3bb7d94f88e44?s=300",
                    },
                ],
            },
            {
                id: 33,
                firstName: "Vivien",
                email: "fletcher_ondricka@yahoo.com",
                lastName: "Maggio",
                status: true,
                birthday: "2021-03-16T03:12:41.357Z",
                avatar: [
                    {
                        name: "Vivien.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/114a641308b1ee3ae17186cbb49cd5d9?s=300",
                    },
                ],
            },
            {
                id: 34,
                firstName: "Christopher",
                email: "ova50@yahoo.com",
                lastName: "Haley",
                status: true,
                birthday: "2020-07-31T04:16:34.180Z",
                avatar: [
                    {
                        name: "Christopher.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/5802e68a71ba47365114e0541099e2a1?s=300",
                    },
                ],
            },
            {
                id: 35,
                firstName: "Rosanna",
                email: "zander.rice@gmail.com",
                lastName: "Harvey",
                status: false,
                birthday: "2020-12-24T05:50:15.430Z",
                avatar: [
                    {
                        name: "Rosanna.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/8ec0d97bb36688e019d09a31db42d331?s=300",
                    },
                ],
            },
            {
                id: 36,
                firstName: "Raegan",
                email: "hallie84@hotmail.com",
                lastName: "Sipes",
                status: true,
                birthday: "2020-07-14T00:35:18.018Z",
                avatar: [
                    {
                        name: "Raegan.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/c865551aa5a6d03b9a4ff3ae53302fdc?s=300",
                    },
                ],
            },
            {
                id: 37,
                firstName: "Braxton",
                email: "rosie51@gmail.com",
                lastName: "Schultz",
                status: false,
                birthday: "2020-07-03T04:20:45.542Z",
                avatar: [
                    {
                        name: "Braxton.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/a040a3b18fbd2e2c4dbe1013e03ed738?s=300",
                    },
                ],
            },
            {
                id: 38,
                firstName: "Selena",
                email: "oswaldo.lehner39@yahoo.com",
                lastName: "Harber",
                status: true,
                birthday: "2020-12-16T13:42:28.214Z",
                avatar: [
                    {
                        name: "Selena.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/6755fc9535dc2eec01fc979d7b2d5f0a?s=300",
                    },
                ],
            },
            {
                id: 39,
                firstName: "Carleton",
                email: "kiarra.yundt@yahoo.com",
                lastName: "Funk",
                status: false,
                birthday: "2021-01-29T04:21:04.635Z",
                avatar: [
                    {
                        name: "Carleton.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/25ec66f243247df404cb71aa559fc56c?s=300",
                    },
                ],
            },
            {
                id: 40,
                firstName: "Rosalyn",
                email: "craig_ullrich@gmail.com",
                lastName: "Jerde",
                status: true,
                birthday: "2020-08-02T18:43:05.102Z",
                avatar: [
                    {
                        name: "Rosalyn.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/da9528699710c2687cd948037cf00498?s=300",
                    },
                ],
            },
            {
                id: 41,
                firstName: "Araceli",
                email: "eden_koss@gmail.com",
                lastName: "Ankunding",
                status: false,
                birthday: "2021-03-23T13:12:26.611Z",
                avatar: [
                    {
                        name: "Araceli.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/7b3024ae9cd6a7250117a95359bf43bc?s=300",
                    },
                ],
            },
            {
                id: 42,
                firstName: "Michele",
                email: "emil_west60@hotmail.com",
                lastName: "Towne",
                status: false,
                birthday: "2020-09-17T06:26:51.746Z",
                avatar: [
                    {
                        name: "Michele.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/c5b02ed347e4b3ab6d3dc9932b1fbeef?s=300",
                    },
                ],
            },
            {
                id: 43,
                firstName: "Lue",
                email: "beverly.hansen54@hotmail.com",
                lastName: "Flatley",
                status: true,
                birthday: "2020-08-30T15:25:14.041Z",
                avatar: [
                    {
                        name: "Lue.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/5e1173a26f4a76740220719def6f9ab0?s=300",
                    },
                ],
            },
            {
                id: 44,
                firstName: "Eliane",
                email: "richie85@hotmail.com",
                lastName: "Prosacco",
                status: false,
                birthday: "2021-04-15T02:29:38.508Z",
                avatar: [
                    {
                        name: "Eliane.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/7c65b19b968806dfbba7e44d0bad0494?s=300",
                    },
                ],
            },
            {
                id: 45,
                firstName: "Dale",
                email: "katrine_stamm@gmail.com",
                lastName: "Kuphal",
                status: true,
                birthday: "2021-01-25T09:51:49.691Z",
                avatar: [
                    {
                        name: "Dale.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/d5b9d32f63315715a2ee7eec3537eefd?s=300",
                    },
                ],
            },
            {
                id: 46,
                firstName: "Gerard",
                email: "virginie94@hotmail.com",
                lastName: "Wunsch",
                status: true,
                birthday: "2021-01-13T19:52:35.023Z",
                avatar: [
                    {
                        name: "Gerard.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/6c0a671f425be190610aaa5d9ee6b751?s=300",
                    },
                ],
            },
            {
                id: 47,
                firstName: "Greta",
                email: "gabriella_jacobson69@hotmail.com",
                lastName: "Shields",
                status: true,
                birthday: "2021-01-31T12:37:35.124Z",
                avatar: [
                    {
                        name: "Greta.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/96e99dd6d42919a5bbaa523e039ed505?s=300",
                    },
                ],
            },
            {
                id: 48,
                firstName: "Elinore",
                email: "kyleigh_powlowski47@yahoo.com",
                lastName: "Padberg",
                status: true,
                birthday: "2021-03-16T12:56:08.925Z",
                avatar: [
                    {
                        name: "Elinore.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/8a3aff921b1286caef37c3a6ab8922ed?s=300",
                    },
                ],
            },
            {
                id: 49,
                firstName: "Vita",
                email: "bernice_reichel@gmail.com",
                lastName: "Gottlieb",
                status: true,
                birthday: "2020-07-14T04:25:13.203Z",
                avatar: [
                    {
                        name: "Vita.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/65c2a79bd56b843604b7d1edace158f7?s=300",
                    },
                ],
            },
            {
                id: 50,
                firstName: "Cortez",
                email: "rahul.damore39@yahoo.com",
                lastName: "Crooks",
                status: false,
                birthday: "2021-03-06T13:48:02.030Z",
                avatar: [
                    {
                        name: "Cortez.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621595902165",
                        url:
                            "http://www.gravatar.com/avatar/ff556a7e4fcbc159b55bde887e4669a1?s=300",
                    },
                ],
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Fri, 21 May 2021 12:27:49 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "24079",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Vary",
            "Origin, Accept-Encoding",
            "Access-Control-Allow-Credentials",
            "true",
            "Cache-Control",
            "no-cache",
            "Pragma",
            "no-cache",
            "Expires",
            "-1",
            "Access-Control-Allow-Origin",
            "*",
            "X-Content-Type-Options",
            "nosniff",
            "ETag",
            'W/"5e0f-Mda+l0GWKw7XFWneFgP2RUrwx7c"',
        ],
    );

nock("https://refine-fake-rest.pankod.com:443", {
    encodedQueryParams: true,
})
    .post("/users", {
        firstName: "test",
        lastName: "test",
        email: "test@mail.com",
        status: true,
    })
    .reply(
        201,
        {
            firstName: "test",
            lastName: "test",
            email: "test@mail.com",
            status: true,
            id: 51,
        },
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Fri, 21 May 2021 12:30:07 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "105",
            "Connection",
            "close",
            "X-Powered-By",
            "Express",
            "Vary",
            "Origin, X-HTTP-Method-Override, Accept-Encoding",
            "Access-Control-Allow-Credentials",
            "true",
            "Cache-Control",
            "no-cache",
            "Pragma",
            "no-cache",
            "Expires",
            "-1",
            "Access-Control-Allow-Origin",
            "*",
            "Access-Control-Expose-Headers",
            "Location",
            "Location",
            "http://refine-fake-rest.pankod.com/users/51",
            "X-Content-Type-Options",
            "nosniff",
            "ETag",
            'W/"69-ZOo+LCFMeEdi+N0u0NisuFgdFO4"',
        ],
    );

nock("https://refine-fake-rest.pankod.com:443", {
    encodedQueryParams: true,
})
    .get("/users")
    .query({})
    .reply(
        200,
        [
            {
                id: 1,
                firstName: "Kyla",
                email: "tiana_gleason63@hotmail.com",
                lastName: "Romaguera",
                status: false,
                birthday: "2020-10-12T09:00:23.833Z",
                avatar: [
                    {
                        name: "Kyla.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096181",
                        url:
                            "http://www.gravatar.com/avatar/86d13aa71a6653086e50c8b72c2b5818?s=300",
                    },
                ],
            },
            {
                id: 2,
                firstName: "Julien",
                email: "jonas_pfannerstill89@gmail.com",
                lastName: "Thompson",
                status: true,
                birthday: "2020-09-08T21:08:10.790Z",
                avatar: [
                    {
                        name: "Julien.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096182",
                        url:
                            "http://www.gravatar.com/avatar/1e922375d17c7d8627ec1b451df8aac4?s=300",
                    },
                ],
            },
            {
                id: 3,
                firstName: "Bernhard",
                email: "alexandre.nicolas@yahoo.com",
                lastName: "Lueilwitz",
                status: false,
                birthday: "2020-09-18T10:37:23.892Z",
                avatar: [
                    {
                        name: "Bernhard.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096182",
                        url:
                            "http://www.gravatar.com/avatar/fec06a4715862bd21c9ba067bdd7ed65?s=300",
                    },
                ],
            },
            {
                id: 4,
                firstName: "Genesis",
                email: "margret_davis75@hotmail.com",
                lastName: "Bode",
                status: true,
                birthday: "2020-12-04T20:11:53.547Z",
                avatar: [
                    {
                        name: "Genesis.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096182",
                        url:
                            "http://www.gravatar.com/avatar/9f950d6fc4b4968597b9d2a2155085af?s=300",
                    },
                ],
            },
            {
                id: 5,
                firstName: "Greyson",
                email: "gabriella_stiedemann69@gmail.com",
                lastName: "Legros",
                status: false,
                birthday: "2020-06-14T11:58:52.780Z",
                avatar: [
                    {
                        name: "Greyson.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/9310f6d7b6bb5d63fdee44c9477cf342?s=300",
                    },
                ],
            },
            {
                id: 6,
                firstName: "Jamaal",
                email: "pauline.pouros2@gmail.com",
                lastName: "Olson",
                status: false,
                birthday: "2020-07-19T09:31:16.478Z",
                avatar: [
                    {
                        name: "Jamaal.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/40c325efbfcc2863a8d48cb3282e2ba7?s=300",
                    },
                ],
            },
            {
                id: 7,
                firstName: "Alexis",
                email: "muhammad.veum22@gmail.com",
                lastName: "Homenick",
                status: true,
                birthday: "2021-01-03T03:09:59.670Z",
                avatar: [
                    {
                        name: "Alexis.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/40722a4a441d91214e3765b3a732f41d?s=300",
                    },
                ],
            },
            {
                id: 8,
                firstName: "Rosalia",
                email: "arlie19@hotmail.com",
                lastName: "Stamm",
                status: false,
                birthday: "2020-06-07T23:55:47.045Z",
                avatar: [
                    {
                        name: "Rosalia.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/2cd9bb750b9e75908a9f5a950e75cd0b?s=300",
                    },
                ],
            },
            {
                id: 9,
                firstName: "Bella",
                email: "favian57@gmail.com",
                lastName: "Jenkins",
                status: true,
                birthday: "2020-10-24T15:07:44.349Z",
                avatar: [
                    {
                        name: "Bella.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/acc331824c8f89e49b09cf68a3547bfb?s=300",
                    },
                ],
            },
            {
                id: 10,
                firstName: "Douglas",
                email: "wilburn48@yahoo.com",
                lastName: "Raynor",
                status: true,
                birthday: "2021-03-23T02:36:24.532Z",
                avatar: [
                    {
                        name: "Douglas.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/13ced187c09d3229f394c54d8f2e4e07?s=300",
                    },
                ],
            },
            {
                id: 11,
                firstName: "Josephine",
                email: "brice18@yahoo.com",
                lastName: "Hahn",
                status: true,
                birthday: "2020-08-29T19:22:08.978Z",
                avatar: [
                    {
                        name: "Josephine.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/824fde0bdca7a3116ccb06cb45ed4601?s=300",
                    },
                ],
            },
            {
                id: 12,
                firstName: "Jaquelin",
                email: "alexanne.connelly60@hotmail.com",
                lastName: "Collins",
                status: false,
                birthday: "2021-02-18T17:16:17.297Z",
                avatar: [
                    {
                        name: "Jaquelin.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/07e281cae06a7a33774f96aa4bad2a4a?s=300",
                    },
                ],
            },
            {
                id: 13,
                firstName: "Margarett",
                email: "jaron_collins26@gmail.com",
                lastName: "Krajcik",
                status: false,
                birthday: "2020-12-22T13:18:50.983Z",
                avatar: [
                    {
                        name: "Margarett.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/27949d4bb1075e8ecc5aaf1d1a104324?s=300",
                    },
                ],
            },
            {
                id: 14,
                firstName: "Cheyanne",
                email: "kiana_cummings49@hotmail.com",
                lastName: "Mante",
                status: false,
                birthday: "2021-02-04T05:07:53.275Z",
                avatar: [
                    {
                        name: "Cheyanne.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/b4cb6f682cdbbea46ae429ae40b7a9b4?s=300",
                    },
                ],
            },
            {
                id: 15,
                firstName: "Delores",
                email: "darion.doyle@hotmail.com",
                lastName: "Dickinson",
                status: false,
                birthday: "2020-08-13T01:22:43.455Z",
                avatar: [
                    {
                        name: "Delores.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/556014bdad0097985613ed1b8bd9c87b?s=300",
                    },
                ],
            },
            {
                id: 16,
                firstName: "Frida",
                email: "idell.shanahan@yahoo.com",
                lastName: "Feeney",
                status: true,
                birthday: "2021-04-20T01:10:47.497Z",
                avatar: [
                    {
                        name: "Frida.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/be1939d55c424134f9dee1c116bf84dd?s=300",
                    },
                ],
            },
            {
                id: 17,
                firstName: "Breanna",
                email: "hipolito.block12@gmail.com",
                lastName: "Heathcote",
                status: false,
                birthday: "2020-09-29T06:33:09.567Z",
                avatar: [
                    {
                        name: "Breanna.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/fb17bfd91b4e8b609805c7176797f3fe?s=300",
                    },
                ],
            },
            {
                id: 18,
                firstName: "Malachi",
                email: "genoveva.klein@yahoo.com",
                lastName: "Schiller",
                status: false,
                birthday: "2020-09-01T16:12:14.666Z",
                avatar: [
                    {
                        name: "Malachi.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/f1586b4e0e98408cb4b382495a04a4ee?s=300",
                    },
                ],
            },
            {
                id: 19,
                firstName: "Jefferey",
                email: "llewellyn.farrell73@yahoo.com",
                lastName: "Crona",
                status: false,
                birthday: "2020-06-14T22:28:17.327Z",
                avatar: [
                    {
                        name: "Jefferey.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/443a97a667cb3a0497bf2e9beb8e9874?s=300",
                    },
                ],
            },
            {
                id: 20,
                firstName: "Shanon",
                email: "kayla65@yahoo.com",
                lastName: "Pouros",
                status: false,
                birthday: "2020-06-03T18:13:23.078Z",
                avatar: [
                    {
                        name: "Shanon.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/6dfaf3a6ce20c47b0c75f76901ade310?s=300",
                    },
                ],
            },
            {
                id: 21,
                firstName: "Braeden",
                email: "cullen.gleason@gmail.com",
                lastName: "Hermann",
                status: false,
                birthday: "2021-01-05T07:09:28.446Z",
                avatar: [
                    {
                        name: "Braeden.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/a3c3c9d9166714d2a5d0e9a3d5411d4f?s=300",
                    },
                ],
            },
            {
                id: 22,
                firstName: "Henriette",
                email: "simone_bruen@gmail.com",
                lastName: "Padberg",
                status: false,
                birthday: "2021-02-18T11:34:24.982Z",
                avatar: [
                    {
                        name: "Henriette.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/2b39f72f7fd999c088ce4f4d4f0eeef3?s=300",
                    },
                ],
            },
            {
                id: 23,
                firstName: "Jaleel",
                email: "gerhard3@hotmail.com",
                lastName: "Hartmann",
                status: false,
                birthday: "2020-10-03T18:46:04.864Z",
                avatar: [
                    {
                        name: "Jaleel.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096183",
                        url:
                            "http://www.gravatar.com/avatar/429673c5d892241731a98b7ef9be66f1?s=300",
                    },
                ],
            },
            {
                id: 24,
                firstName: "Abbie",
                email: "felicity.lang38@hotmail.com",
                lastName: "Harris",
                status: false,
                birthday: "2020-07-14T06:27:59.269Z",
                avatar: [
                    {
                        name: "Abbie.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/d697222fcc70e4699a5aef4092fd4960?s=300",
                    },
                ],
            },
            {
                id: 25,
                firstName: "Adelle",
                email: "maxwell26@gmail.com",
                lastName: "Pouros",
                status: true,
                birthday: "2021-03-24T01:48:48.384Z",
                avatar: [
                    {
                        name: "Adelle.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/5734baae4fd9224ecf46599a7f728657?s=300",
                    },
                ],
            },
            {
                id: 26,
                firstName: "Madalyn",
                email: "harmony.osinski6@hotmail.com",
                lastName: "Green",
                status: true,
                birthday: "2020-06-14T03:04:17.723Z",
                avatar: [
                    {
                        name: "Madalyn.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/c66cd3f75ddccce6c6b0de482afc905f?s=300",
                    },
                ],
            },
            {
                id: 27,
                firstName: "Dannie",
                email: "tod_rohan@gmail.com",
                lastName: "Kilback",
                status: false,
                birthday: "2020-12-16T03:57:53.581Z",
                avatar: [
                    {
                        name: "Dannie.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/c7bba5ced38b23732056592d6934a896?s=300",
                    },
                ],
            },
            {
                id: 28,
                firstName: "Alford",
                email: "jayme79@hotmail.com",
                lastName: "Fadel",
                status: false,
                birthday: "2020-12-10T18:37:47.297Z",
                avatar: [
                    {
                        name: "Alford.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/1fe3443ec365478153ab3f1da7d381c9?s=300",
                    },
                ],
            },
            {
                id: 29,
                firstName: "Zander",
                email: "myrtis77@yahoo.com",
                lastName: "Kuhn",
                status: false,
                birthday: "2021-04-19T06:32:12.236Z",
                avatar: [
                    {
                        name: "Zander.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/40ba136ac7db00a32ccc891bd6acd434?s=300",
                    },
                ],
            },
            {
                id: 30,
                firstName: "Ewell",
                email: "fausto24@gmail.com",
                lastName: "Mayert",
                status: true,
                birthday: "2020-12-29T13:09:12.689Z",
                avatar: [
                    {
                        name: "Ewell.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/0162b59bccdcbb4c5af22d364c17a78b?s=300",
                    },
                ],
            },
            {
                id: 31,
                firstName: "Orie",
                email: "jacynthe_vonrueden@gmail.com",
                lastName: "Dare",
                status: false,
                birthday: "2021-02-11T05:26:29.934Z",
                avatar: [
                    {
                        name: "Orie.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/cc8f9646e1fe768891a6166abea6bcf5?s=300",
                    },
                ],
            },
            {
                id: 32,
                firstName: "Orrin",
                email: "leonard.miller@hotmail.com",
                lastName: "Kertzmann",
                status: true,
                birthday: "2021-03-12T22:11:22.174Z",
                avatar: [
                    {
                        name: "Orrin.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/bcebc7267b320488d0e00cc47e9acacd?s=300",
                    },
                ],
            },
            {
                id: 33,
                firstName: "Abdul",
                email: "lavonne.shanahan90@gmail.com",
                lastName: "Lockman",
                status: false,
                birthday: "2020-11-17T13:58:18.061Z",
                avatar: [
                    {
                        name: "Abdul.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/dd3de8bfc60efb277caeb9f6f73b1832?s=300",
                    },
                ],
            },
            {
                id: 34,
                firstName: "Llewellyn",
                email: "earl.beer51@gmail.com",
                lastName: "Barton",
                status: false,
                birthday: "2020-08-31T07:05:19.048Z",
                avatar: [
                    {
                        name: "Llewellyn.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/2db4c8759510c35800a1bc4f446d141d?s=300",
                    },
                ],
            },
            {
                id: 35,
                firstName: "Ari",
                email: "loren74@gmail.com",
                lastName: "Gislason",
                status: true,
                birthday: "2020-07-22T16:10:10.515Z",
                avatar: [
                    {
                        name: "Ari.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/a8353bd5c84d41385b6127b1103edade?s=300",
                    },
                ],
            },
            {
                id: 36,
                firstName: "Fletcher",
                email: "tamia40@gmail.com",
                lastName: "Gulgowski",
                status: true,
                birthday: "2021-02-22T04:04:18.851Z",
                avatar: [
                    {
                        name: "Fletcher.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/fe8944dc6c778431e59e95111960f998?s=300",
                    },
                ],
            },
            {
                id: 37,
                firstName: "Clementine",
                email: "riley.oconner7@hotmail.com",
                lastName: "Romaguera",
                status: true,
                birthday: "2020-11-12T11:10:20.476Z",
                avatar: [
                    {
                        name: "Clementine.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/00fa97f9d8daf4a44438c58413d4b489?s=300",
                    },
                ],
            },
            {
                id: 38,
                firstName: "Mandy",
                email: "nina_marquardt@gmail.com",
                lastName: "Bayer",
                status: false,
                birthday: "2020-11-28T13:28:43.957Z",
                avatar: [
                    {
                        name: "Mandy.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/fa140cd26c0953defa82fee122ce174c?s=300",
                    },
                ],
            },
            {
                id: 39,
                firstName: "Nyah",
                email: "audreanne_turcotte17@hotmail.com",
                lastName: "Luettgen",
                status: false,
                birthday: "2021-04-22T11:21:27.467Z",
                avatar: [
                    {
                        name: "Nyah.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/2c4edd92c9a9ba3c5c1ad4047eb97a0e?s=300",
                    },
                ],
            },
            {
                id: 40,
                firstName: "Treva",
                email: "braeden.hudson@gmail.com",
                lastName: "Reichel",
                status: false,
                birthday: "2021-04-02T04:43:55.763Z",
                avatar: [
                    {
                        name: "Treva.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/85892bdf84d24aed7a3eddc3ada02811?s=300",
                    },
                ],
            },
            {
                id: 41,
                firstName: "Genevieve",
                email: "dell31@gmail.com",
                lastName: "Runte",
                status: true,
                birthday: "2020-06-12T05:06:37.672Z",
                avatar: [
                    {
                        name: "Genevieve.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/1f833bb3c9781b5aefbc4b320d7b9196?s=300",
                    },
                ],
            },
            {
                id: 42,
                firstName: "Andrew",
                email: "desiree.torphy@hotmail.com",
                lastName: "Smith",
                status: false,
                birthday: "2020-11-25T00:47:11.641Z",
                avatar: [
                    {
                        name: "Andrew.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/e379d08fd05a3a40de8df3b27603dfdb?s=300",
                    },
                ],
            },
            {
                id: 43,
                firstName: "Rick",
                email: "lew65@hotmail.com",
                lastName: "Bosco",
                status: true,
                birthday: "2021-05-17T11:46:51.343Z",
                avatar: [
                    {
                        name: "Rick.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/f843c28611ade198d373ec756b5b7c95?s=300",
                    },
                ],
            },
            {
                id: 44,
                firstName: "Faustino",
                email: "albin.shanahan11@yahoo.com",
                lastName: "Murphy",
                status: true,
                birthday: "2020-11-28T00:55:32.379Z",
                avatar: [
                    {
                        name: "Faustino.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/2cfa047ffaf066c00445adffedc24f5d?s=300",
                    },
                ],
            },
            {
                id: 45,
                firstName: "Warren",
                email: "eliseo_stehr56@hotmail.com",
                lastName: "Flatley",
                status: true,
                birthday: "2020-06-09T21:28:41.120Z",
                avatar: [
                    {
                        name: "Warren.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/92416d6a5ef35ebaac420df658f8acc6?s=300",
                    },
                ],
            },
            {
                id: 46,
                firstName: "Coy",
                email: "rosalyn_hackett@yahoo.com",
                lastName: "Kirlin",
                status: true,
                birthday: "2020-08-10T18:45:21.803Z",
                avatar: [
                    {
                        name: "Coy.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/ca181d0649631c9daa13ba7b5a8196db?s=300",
                    },
                ],
            },
            {
                id: 47,
                firstName: "Eleanora",
                email: "susie.roob3@hotmail.com",
                lastName: "Carter",
                status: false,
                birthday: "2020-08-14T11:02:33.390Z",
                avatar: [
                    {
                        name: "Eleanora.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/9b0a9ef967a48c3c2231085c64c3419d?s=300",
                    },
                ],
            },
            {
                id: 48,
                firstName: "Colten",
                email: "ned_oconner12@hotmail.com",
                lastName: "West",
                status: false,
                birthday: "2021-03-12T21:17:41.461Z",
                avatar: [
                    {
                        name: "Colten.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/015c6616701542f56ce361e796a6aa58?s=300",
                    },
                ],
            },
            {
                id: 49,
                firstName: "Elias",
                email: "jace_ratke@gmail.com",
                lastName: "Torphy",
                status: false,
                birthday: "2020-08-15T07:15:52.313Z",
                avatar: [
                    {
                        name: "Elias.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/ffd320a3bd93fbe4b1b220c6d4934962?s=300",
                    },
                ],
            },
            {
                id: 50,
                firstName: "Brandon",
                email: "lester24@hotmail.com",
                lastName: "Hoppe",
                status: true,
                birthday: "2021-05-10T03:34:23.484Z",
                avatar: [
                    {
                        name: "Brandon.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096184",
                        url:
                            "http://www.gravatar.com/avatar/aa6ca36a2385db30cdd87d05b5f0aead?s=300",
                    },
                ],
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Tue, 25 May 2021 07:12:40 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "24109",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Vary",
            "Origin, Accept-Encoding",
            "Access-Control-Allow-Credentials",
            "true",
            "Cache-Control",
            "no-cache",
            "Pragma",
            "no-cache",
            "Expires",
            "-1",
            "Access-Control-Allow-Origin",
            "*",
            "X-Content-Type-Options",
            "nosniff",
            "ETag",
            'W/"5e2d-phKB0P7pdC91ACQZWKjQOOYZB90"',
        ],
    );

nock("https://refine-fake-rest.pankod.com:443", {
    encodedQueryParams: true,
})
    .get("/users")
    .query({ email: "tiana_gleason63%40hotmail.com" })
    .reply(
        200,
        [
            {
                id: 1,
                firstName: "Kyla",
                email: "tiana_gleason63@hotmail.com",
                lastName: "Romaguera",
                status: false,
                birthday: "2020-10-12T09:00:23.833Z",
                avatar: [
                    {
                        name: "Kyla.jpg",
                        percent: 100,
                        size: 40088,
                        status: "done",
                        type: "image/jpeg",
                        uid: "rc-upload-1621879096181",
                        url:
                            "http://www.gravatar.com/avatar/86d13aa71a6653086e50c8b72c2b5818?s=300",
                    },
                ],
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Tue, 25 May 2021 07:17:50 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "485",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Vary",
            "Origin, Accept-Encoding",
            "Access-Control-Allow-Credentials",
            "true",
            "Cache-Control",
            "no-cache",
            "Pragma",
            "no-cache",
            "Expires",
            "-1",
            "Access-Control-Allow-Origin",
            "*",
            "X-Content-Type-Options",
            "nosniff",
            "ETag",
            'W/"1e5-eKJLrCvV7sta2h3LMct6tDe1DnU"',
        ],
    );
