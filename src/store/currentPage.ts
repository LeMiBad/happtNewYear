import { createEvent, createStore } from "effector";





export const setCurrentPage = createEvent<number>()
export const $currentPage = createStore(0)
    .on(setCurrentPage, (_, id) => id)


const initialRecipe = {
    recipe: [
        [
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Яйца вареные',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8f44/9dee/5420e87dc0eee7f3964ca80622dc06a1?Expires=1672012800&Signature=Ry4BsJ2rqr~WY~x8qOdMDvs4PnE2mCtGgTArUwd45LBNAjQcls0T-edtywPMcnjnRrUKtVy2yofEORrRKw2OM8v6OX~ZgfjMrpmwowgn3ujfbFgQjkt3BVp~zxGN~cKumPcMoydBjTjZ9c8v4D1TGfw-AfZIZXk9ZevisWsMQYXQKlNgQ34sCgcnsV~6QJx0R7Ki0dleUbaud9WKU3Bqsiihk0hPwXIlJt4pyjU7xNBsTP2qJfs8Fs02~W1V1flYBRcbQgiJdYS0EMRiKvxbdZF8piI6SJqEvnKKiDBfrYtvJJG~3k2kT34ob-CMSpwHZDbz8Y4uwhqcQ40GTlPCEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Картошка',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/3d5f/f079/b187f502d377967b1abf6e04901e76ac?Expires=1672012800&Signature=UKTm9H-DN6wQ5b7jztXBOdMKlWlZKJAqJdo272HyzWZsS9v95mbVJapwdFJ2sbfMKCBEkC8VIcM-8HK37a6m7Akr3yQoTC77Z2lHzIige55swIR~1Nb1HVjwfyZ8~Px4mhFCQodOYMY1nA3LVbNqZx136oqo-gpo1Ck2oPrdFgBWUdFtxZ3vBp4qEhtbfy7haHb1~qY8VZzFHUFs6fZ8f85Z2j78Tspyio8gHMBKunju2GpnOaUf6oCDh36T9s9DUh-Q58yiq2rEEoQY6xMqm4fb3tpaI8k9eUngizcOHiW7Nyj9X34ApsjZJPlfI~zQ0dDpZKC9XfXbhBmDpH-WYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Морковь',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8e24/84d0/bc9ed3a15b9a73133f870a6b6492def0?Expires=1672012800&Signature=ny2yFeCZuVqAIcmPlCY9H~RugJ~H9pbd5mU63eIVaoVnQ9P9u6iNehYeUlCbatxBdtk5IwFBSwFvj~Uhu4o8M2lhrneB9npIhQfK1fOEpiO00vRUnK7hMRIgIBcGDw1RxJJMTkXkYBcgfoKK3fgLzpKippumchxadtAC0QM~4JTr2tIEwwPrPez5AK6jIR0BuDhG-T2rQ5XW277PfG9Ym-iYRTBU6ObTDw1hPTf9ZL53YxElO908BHcAuQOTwneL4MtUroJpKZBoyYtVbML575MPWPeLdvcp2HfdADw6xsGlyTRnRD6IImblZYZC7FgcIUPa~UlWaKauHObvSqBGUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Зеленый горошек',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/f924/af9e/21782a09a09825522d876c3b5144e9ad?Expires=1672012800&Signature=KqXL6IFEv2436TfdnWjZnBQ-~BcejwdgYNOZaxE7Dk~SrDTIT-SOrslSb5N6FU6sZgZrrNO0Mb-YdeKyhxlfcyYrpBjqqE1ufTbYzJ8OM5-vLRSUngGYNWWNbZqRZR6WY85SWUfiQ~mvaHCZCT9fIypNNRrGPuGfXBBMasIpU9t0fwqZOVacGseLpgFqfVzg-d562dn6lLpbjk0ftA-BICTWnwggIFrTJm18c9xic7By1qNThkVNPevYCaqR6umOThccQYXijAYPLzniH9dmkknD3RtTE0s2e~utmEDz1n-GBV-oUqFO6dHBb78wYN3y1vdSGJhDaBLaSAVCHnvL6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Соленые огурцы',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/ab40/2090/a223870207df16ef92158b0ce9ec25ca?Expires=1672012800&Signature=lNTjzAwxSPnF9CXniGZ4K0fPsF-UFXlIulZWqnsNfpYFOmVbtek9kybzcs3hPtnoh57EzGbExURIlqawOGXSKauxEUhs35PiyU6WQhehvxTc1Uk4KEgdGtA~jL-qO~Qra2fTwapWrzIQlruOEtcCBr2hOa~wr-wDMH1e7ZXKDe7ljcMm3yf~7n8vVpgJMwQAOSyTqtRvftXr8CCY2a-O6aqC~NhEu5dYN9ygQOd5adgYvxy-Ah0X9QKEEBGArTRK5y4OxcJ-cIOSclRNP~Zz36YEBpfHlmLPwy0P~xEjGlb0hOxs76GgGFuXxL7MgRHN12grlUOEGW8d6OoFiEv21Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Ветчина',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/d403/5f13/381cc4e5107c4569a632454ca022e2d5?Expires=1672012800&Signature=f1oxpYch9ly-wcsVsSj3QUBCzcohospad9XyHfr6cD5W7t~H21CaYggGfAhLuTyfLxXZsV69g6HyAwwqhP~d5nmubDZnk9le~jgcWQe5gu-tkC2sqOgpwpJqQFOAq2SaNLqDrSFRWmNyBIZuwcas2n33whYneG2chRh3vn62S7kIoWKrVoH6IQl7yhKsas9Ff738LxOG0AMTzKtvOTCtmEDgUXnOWgavOtcrNpnyiLxbzHGTGyvHxwovnHS0pkg9Uw0FFa9NcDCnwi0Pm25zX1m61-x9SN~NeY6tx4BpLyAHM5qFO2T5Ho~NzwMVbFWZyzaFx5f2D0F3PiITKhXDHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Зелень',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/734e/9a0f/0ea772b6c8b4f150ade25a97435951a1?Expires=1672012800&Signature=MkpIeZ3rRfKirGI0gPg~ubERl1R7jfodGLe5BX69Fh3Sq4yho-2jvSpx9Mpl8X0SyB5EdC8FO1ZNMaCTJi~gK~Rt~3VOAJx6Rcwc-IsO0yqN62opCMwisoXe4it6BzsSoueTwLCAuvz6ZwqW24nbHerqo3nzoBZzBppb5mrRISI-nauB80DghRPpMCv5NxjD1ZHNXM3j3mZ00yIJ~ubYCHwPPjRlqPMWzJvxH4AB8-sUVI2iYVZLrwkjcnziqFM4DOM0tOeTLid067eIEpEB6TNiZLC97MxATNNFLY-gWBiPmfiSNEltNkxMPMZBP3fd3-qNK48H3eT3ZOqxDU4LjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Майонез',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8d33/5129/4afaec1b120faaced7b0190629046c03?Expires=1672012800&Signature=CP-zH82p2DxtqdRWgn9-nPDSJ0grtggeTAS5E~CgIqB21fLj-k9OwCeDSWqL381bs1k~ZjzVUj8R30Cgja6SQFLHB~PUknQG2pnhkHf~8XYJzlBNyVDmbUcuqk8GXwgLtbcUKb7Q3xRlWktK3vNLx4Qc7TpPD1dhubaTdzFUxi4vrcdqyQtsEGByjXU9jX0mPoyCN02NikcGrweI8-aq43hIu3yVamsbZdd44IJjmWYirS0vyJghUziKeX~MK8QNEUQilTQmKicvc3O6HGy2OvXd1mxctWJE3JL8xnUYYBr5uprNwYBj0gbQtYWzQ1SjajbtdGbSPFki7vcZY67kiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Соль/перец',
                    isPicked: false
                }
            ],
        ],
        [
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/d2e1/276f/5a5ab8e3f0d9289e81fe0d09913331d9?Expires=1672617600&Signature=VaSwZPCl6muKb5O2kH2oEbOBYl77hYqlI0cOvORf~gg037OiUqAH0sPCGmoaWobUtCX7KH5KfBqV1BhAzIPzBXXR1MuU6HRHUQSM3cUOu-Vb4nzcj92rKHTEm5av8JX8Naq1Cc09noPBSm-W8LXjWPSB35bmW45sGXt3ciZ3d1hDc9~47GN3VsnmYo3QPgroMJNN--n99vVjkemRAb8qqMtMOWhloX1EoZgNwOwajLZ1QgURK7WdR11-hDeZJgZ5FopnZWAFaujpznKr2rXBCFkBEaOXqgvEwX6yz98T9XPvcma-WXS~HGPem3uSEoVUMQlDh4mWbXm~6uBxMInYHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Куриное филе',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/7d21/a15d/546922e1c926188665b11a02f1199ff4?Expires=1672012800&Signature=aqyOAlPUuLnz0RVsIXz9chngtYBRwh-NLz0bFNHc4~x1KAih2GXLyBsgUj~ESA3Bt6n4uybuRkvOKmf4riQKOkYHlRPdL8QNDVRlmAHqh9wa9sePCPEQsG4AaX0ipJR~2~4dptWrmWwtPKj-2x9M2L7AKN~VnUBdbaM2BhEBCcJ-eXGeq44XuQVLH-oYZ4MyoXEI3jpYsx5Q8Eebet2MRu3jDPqHv~l4vVFuE0vQKpGWgGVgv83Zrz0hyTEX8~TDi-Kwfl~KgrzhgLZBLPUA1FHXkD0uWcqn~2wWlmTGOTImG8ezbAe9BvvrQhUYOULLv9nLNyo3MLEWt4TWXrV4sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Шампиньоны',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/b953/edda/31a8446f7cd7f06b040334da9f43207f?Expires=1672012800&Signature=hAZ-3U179PE25h22xUcbbRiAL1xNA6t7gcEekJY62k5sa5AVpRT~CZtdEq0dMK-cdyWougWpICHJ1QMzPS2IeRXfST3GIZJfdfbUeqysdOV~aPGGcSxAhYzl~7igYWrXs3NCN6PYCnysFruEO1TBl8BzGHuHDSQjtUxDHOjzM0FnKfCa1T16-S~oWbcjJqjPiADOHtx7Uhj-K9k2VJUiTMzucJYsmgbA4oAojmfJzzS2uFjMELznBv2999Vlsa0vgKSe6j-CyJ316dWgG8Ti~-5N7fdSq-Q3oStpPmT6lLHJLlYImPoHPNjf6iaSI4rw0wZxEclEKiIq60li6qcJJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Сыр',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/dcc9/f57b/fb49fa4b559148bd17ae89af45248925?Expires=1672012800&Signature=g9GJ0xjq28FsOXQL7dlbt8mrC8EBl~eeEqG6CQQP03fvlBx0zC6m3KJms-cYl-Eztwjo2n3XahstjDGlcJGCQ~Jf5efDMLkpxmgL6lIFS5eucRGwdjIKOq4rJayHOEsaZRyyoEQy~Uw9qLTDLEojnku9nix~LSNbnJ6HnjbMac4k6VQ9J0vvgrdPCyNLonrki59KoeAi1asL0dp4-862GVsbFjaiMapmMCXxk4R3VWV0il3G7e2QmtIePVjzi~KlgUk9CFUnXzvmpBZTvScCkMPF6mXYDzsESXDGKPQ~wymQKSoWBjIIPOTONV1n3oQgX34CiVsvvY~NN2qWItuitA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Подсолнечное масло',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8689/d8dd/3ef44563e3fc6fc8ca322953598fc2e9?Expires=1672012800&Signature=O-k588Ex70dFtTFJ4EosTSAYUFqV-GfiRbbukwJjX0GwknZVn9YxA30P7iOf~QGanTc7wWJm-ohyzrbh949NYZFGuEH9O6iJ~Ym7u9b-9iu22fsF2APrZmIB7Pu5sHOnMJHipWm5uoad-2jYaymaEi5blEIoQ9hPHbkxRB2HnQhpoRn9iTTZR1Jf2~pTahwCHnTLF-u8LBPK9moscyWlayir~0V~Z1abr-~s8WowZ8JZyXjv0Bh~DNZMl34a6GTTs8dSbw1G0FY9GYIfr6sAuf6G24OPfRKCEZGeOveIs95lEdleSg92eQSbt34ltEjAWBA9vnwBukS7LcXAcOZwIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Молоко',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8954/2a92/b6b5c11a757c6f8b2b4b711a76e700e9?Expires=1672012800&Signature=GMAXC1Cp~VTZ7xor9FzsxxuSkxv7cwKRFuGDl5qZqui8S0Wac6FLUsZs~Q96QtTcYsQh1ipM6aJOlOSAyCJD5KxstHiAjlC5jI~W-ji4g8klyXZAYuvENWDxcSwn7wRkrEQiyjIt9xJ6ViBwnr5xUCa8E-ojnsFeGh~pli1nrgNvOXLHe1FDlZMlUb--vMMRpzkePRfPW6Lk8rvA34ddgoukFdyIY-5NSsWY7UwF-1WYWFw4XBWamp4YE9CWlT6pm4-CetQ7LUGLAy8kbwCsiLSuPAL3mwhlxWGJTNTBywRJxA883HzMon9Jpu~FZQ62ewgJ-g7Up90tJiRmEutmBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Специи',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/734e/9a0f/0ea772b6c8b4f150ade25a97435951a1?Expires=1672012800&Signature=MkpIeZ3rRfKirGI0gPg~ubERl1R7jfodGLe5BX69Fh3Sq4yho-2jvSpx9Mpl8X0SyB5EdC8FO1ZNMaCTJi~gK~Rt~3VOAJx6Rcwc-IsO0yqN62opCMwisoXe4it6BzsSoueTwLCAuvz6ZwqW24nbHerqo3nzoBZzBppb5mrRISI-nauB80DghRPpMCv5NxjD1ZHNXM3j3mZ00yIJ~ubYCHwPPjRlqPMWzJvxH4AB8-sUVI2iYVZLrwkjcnziqFM4DOM0tOeTLid067eIEpEB6TNiZLC97MxATNNFLY-gWBiPmfiSNEltNkxMPMZBP3fd3-qNK48H3eT3ZOqxDU4LjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Майонез',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/9544/cf89/918ab38a42f3a27b87585936673cade2?Expires=1672012800&Signature=anMwPv78gXohquxnyWBCrEXqNHYVQr7LEwDZnK-xdkTWF0BAJRgbrqT533NwM5MxbfpwgAIdlv0MjfKunv6t6IVAd0cmCR-AkI32eM7Zq6ZOPqKHT8Sl7QcKR4usii2R1bDELC8PKSXfxRM1bxLfMhrCyWImLKyBtoYwSIWyVJZc7rScRt-OvXAUAArKI~8X58v122ZeNUzrVmPmstYrHQ8OEdwEh0OumdItlBkv9i0EzelzVrrZH~svhsF82-ZNFlhKda~LNuWsQqjfwqivckpMx6~rhvurSpyvhHbObEV4GK0M8vZ5WZzyjYfcGbf5zsQBeSgZge~dfF-gpKtcTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Сок половинки лимона',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/1ba3/6a42/c96cd0d1d3756581d87dc8b9b0419aa0?Expires=1672012800&Signature=Mo0qFicjNNkAYj48Kw6~~kx7yOdXts1VXmTd858D2sFwrU2xji4FFWCaEZL1~PmtHQiSNsO3WgAIUD2GQ-a3OExmTYOfDtE6aopB8lfZNNgiqncHeFkr6~FTM8mqHI7hCG5c0VRcsflz-2i-iBIwaKlrqr7ARcakhCysRMqzx9x2YQmdoebWGSwFF0VHQA8cP6Qbui0gOuBMVgaR1hewZI2q0DSFJXatgtcbQ4j-fPsIo64-r9OtJOFQwEuakJN8zZyrQ3yBsuNHAN3vYVTmWV-mvSRwlYv~rlN0eqfSsjM1~sCtwnamcyq25OJtP19KzhHTxAPrYfkrF2~sDzOtqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Измельченный лавровый лист',
                    isPicked: false
                },
            ],
        ],
        [
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/8a8d/83ee/7957db95dd1fcbeebd5b12e07e6e60d6?Expires=1672012800&Signature=TmAkeZSDAQ6THsreY-MHAjhoawlUkdIypFi9yy7scYJegEuRiMpq46iYugfYYZAo00LwYowt-3aeOMow7naQpfWYJ91RKV~qzKl7PUC89b9V9XaC~-W4kZINE27-fQbzGbCiv2ie66xy71S9EhZJcVl8uopt53LFeWgMjJFNeM--urK9Wn4d0f5gizAp5YUbisJnXgq-7ZebbzXlUcH2HoN-OmXWSj2Pd5fTSZ~bM0iQIuEJZrTJzOmJ5GWPcdcbs7swF8shDyoo1zdm3m6j-n~ynayqvX6ucOzzE9rcn8OocGJdS9jIlILnmhyHh85OKaljUofZEwvpLr8PU1m2yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Вино',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/5b31/772f/739e8a837a953ebd588af2dedd759a95?Expires=1672012800&Signature=LDdDruEBamLQmYOE~tTPloRzXENJ1OsmZKdmjOS8FJgS2JmgqcbzzB8vrK8-X2LHdtJ7Ou9SboGTH3KrqidiPxVAN0~b-39pKKlDyD4kp4m0Jdg4Cv1FKeF6fYNlFlTnQv-AjFa1eAEOlEi~j0jHSomOOdSlW0ICNhTVwri4hQXVy-FT1s7U8Qm2k7ah0h-D9yNyHkrDQWsYP0xiZdyIrYebMTZE~3HhuuyuoT0KUTAz6lgsYtbJeamwm-ye2JhEKsv0oVcODtJxs06ffGp9QL2AV9GoZMCic-fsJo3gJmKEpp~d7rdq08mniQJWPh-MzegzrozBo3JAK4Mlzpm3qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Апельсины',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/fcdb/2470/219d54433d2d209855463eb45650fc33?Expires=1672012800&Signature=hbSSsPDzg1ODihjZIhiPZemhJ65eax5HuADtS9wdbjj7CT9yguj-v6d7fsBtMynl-f-PIpGXL3yxYkliNugDv-mAowsgydlI~6jp8g46I9kOJmtp8nKRf8kEbONugwTa~V8C0QQQu8N6t1konYQ65alD4cDJpLSkL8bkbth~ooYhIfKq~BzYWESe0hKqoft~k9EOSIvaBTv7lTfQzWm82Je9dP5~opF6SLHZmCnemml9vgMreYjUwXhqGQyg9J2C~BN~zOf8QjWh84IQ5tUIYKRQeTarVS1u97VEB48e2kEpCwPAQRloQYKbbqH5-bArtFQcLbt8xtcyaYs2-oN0Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Кусочек имбиря',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/5ced/8995/612a890dee16159b7ccf4c1331542b74?Expires=1672012800&Signature=odGwasCNvYnlm330PQHJKrWicrJDxqERQKPbQr27reLXYcnfPbLDAFAV4yWv-SzdkL3fqPVuDsVv6KvrKGFU8IfHvBLMld7Aw3AUYx0IAzM8IT~vbRA5dayXMHvO28m15uY60QQC8UZXalJin9YmVFmDVe7ZVvPjZXUmbWRdJIYUj0TifECul~wnE3TL5ZnJhVmTt4hTkwttRDkLV1tZF9PiiayaftR7oJKPw94kV7jsT34fl33pKtvQQHq2pfpHTdRfIbMoZm8yKMc0JhuoxEI3XN5Fo6YIgyVItc3zmB7r30jg9Zzq5X8YEQ~GLHPEJXVOPE-L1yiTDUCM2nApQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Вода',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/72c2/bf22/557973c02e67119caff0c54f892172bc?Expires=1672012800&Signature=Yi0KjMybPOMAHNnnTmB40xP~0ScaBG9M6Utplc1VAhbdQ3PgHWu~mFDFFmDgU56e8DKN5rEsJ1o2yig28C5f2LgUY3W3dbILfBtqE2MoZk9lW7TqQ2cfrxXNLHUyH4FnI3dilPCQ5wT-hc4Ll74JiNJet7wIu52fFBo28gJJcsipUdE3CRtdNwrbGKD64Q9HAdox5LcwkhyG3LARK4oDkHd9~L~KA1zfDNnIpjIZJVNRTQGhkLDQ9Qtz9c5IiFq3qN-QTlJ4RCFFglTOYJ1W51LbQ9Gqer4Wo7xHtBF1HK03yUfk3p8A8eGMO1OvFDAcwLqJYdiMg9DpYcdy592Tzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Палочки корицы',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/c2a8/cfb0/e4a628f381bd357aafc4ecc4dbd09741?Expires=1672012800&Signature=ZWXZe-WfQtX7hAL0fWOW0skLg9W-jXZn4VL3YwsrirHz7vZH0YQsz5BFPZ4OqxkoGS85hxBAKUMq1w07PKeo2mDY9XTZ9OEcYzVXu316zUgqXB6752j24LMAHSDrOiJoN4uNDE9miTvEN8QC2fFJT-Ait0Rj71ch9Ak1zbfdmRHEctjP0IorzYhkJMRxTl5ST2PGA2cKi-fMBY3DLdiHUmgZb-rLeJLz2CP4o0QTetwXkZxx5MqzB~qZIpfN~qnLzoUWGQWUR5xPMtiyspKmOOAS~kPZJKYpigNmPtCLC4f3JMlmLI6-gc41MeMmJJ39PnQHiMWlD~F-hiEYLtDxKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Бутончики гвоздики',
                    isPicked: false
                }
            ],
            [
                {
                    url: 'https://s3-alpha-sig.figma.com/img/aaca/b720/a5c3d7b1d798283bc83d667abd54a91e?Expires=1672012800&Signature=mCEuBNHQ8TC5zqf~-FpFRyXlzEAA3Ptq4lmCBLIWmQh~U9mN7-sAioCMb~u628aaeBGoTfDoSUGTWXF-JdO0sJaH6wxmeGEb4PKL6hCVrVWMKMSyVtGd~0~p5HKBgCOQLfhsYOwaUF5mPPbReT~fKYAT66yg2RP-LXttuKOkZf7j5B1Ahla1AfPi7Ybi9bwz7T9QyzmBSno-lLbH6yHbiXdhTXH4RgXSaUmtU0GwhJRnF6cPyZCGKLnsT2G~wy8dUgxPMCq9JbkwC0jeYm~Uq6YeB5WPO3z4vRcBlRUlmhRbPT81blWl3Z3uGFMhMY1bTS4s8GYREqTLeYJC8UYAkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Звездочки бадьяна',
                    isPicked: false
                },
                {
                    url: 'https://s3-alpha-sig.figma.com/img/e579/db3b/24456b857aee3f62cf44255b32b80192?Expires=1672012800&Signature=q~WEITzp1OnYLfKQnykk5NYbnvcafwIHMlb7yduaChRbxiT9f6JRKx4ySJl7fdx-tpPPY4EjWZ09BgmHhbhAHaWPd4RtVkug6~0P0roZtenuUlhh2ep3rS4waLW78B4F7rCgHXcCvITVoIQkPWSmuUM2SCarvlR0pRzJmzMo-L6fNJeJU5CfE4~iDteN2X-Oq~1qJ4Lc8Jde60OQYzJaSGmAkTswe-rukh9zrzCPH0-t0jmZMPvjCCw1WL-5lHAwMtesYeO37E11zjJrIb47s~0TR7zRlRLnnw5u6UwzlVKr-Kgil~CbMo3oqJCwhUXPonVJXgapskN3azxXS~WL4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    name: 'Сахар',
                    isPicked: false
                }
            ],
        ],
    ], 
    hearts: 3,
    svitokCount: 0
}


export const damage = createEvent()
export const pickSvitok = createEvent()
export const pickFood = createEvent<string>()
export const $Recipe = createStore(initialRecipe)
    .on(damage, state => {return {...state, hearts: state.hearts-1}})
    .on(pickSvitok, state => {return {...state, svitokCount: state.svitokCount+1}})
    .on(pickFood, (state, food) => {
        const newState = state.recipe.map(rec => {
            return rec.map(arr => {
                return arr.map(foodItem => {
                    if(foodItem.url === food) {
                        return {...foodItem, isPicked: true}
                    }
                    else return foodItem
                })
            })
        })
        
        return {...state, recipe: newState}
    })







export const setPickedFood = createEvent<number>()
export const $Foods = createStore(-1)
    .on(setPickedFood, (_, i) => i)