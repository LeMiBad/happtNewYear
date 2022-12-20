import { createStore } from "effector";


const initialDrops = [
    [
        {
            id: 0,
            type: 'friend',
            top: 0, 
            left: 1,
            time: 2000,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 1,
            type: 'svitok',
            top: 40, 
            left: 0,
            time: 2600,
            url: 'https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 2,
            type: 'friend',
            top: 200, 
            left: 3,
            time: 4000,
            url: 'https://s3-alpha-sig.figma.com/img/ab40/2090/a223870207df16ef92158b0ce9ec25ca?Expires=1672012800&Signature=lNTjzAwxSPnF9CXniGZ4K0fPsF-UFXlIulZWqnsNfpYFOmVbtek9kybzcs3hPtnoh57EzGbExURIlqawOGXSKauxEUhs35PiyU6WQhehvxTc1Uk4KEgdGtA~jL-qO~Qra2fTwapWrzIQlruOEtcCBr2hOa~wr-wDMH1e7ZXKDe7ljcMm3yf~7n8vVpgJMwQAOSyTqtRvftXr8CCY2a-O6aqC~NhEu5dYN9ygQOd5adgYvxy-Ah0X9QKEEBGArTRK5y4OxcJ-cIOSclRNP~Zz36YEBpfHlmLPwy0P~xEjGlb0hOxs76GgGFuXxL7MgRHN12grlUOEGW8d6OoFiEv21Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 3,
            type: 'friend',
            top: 250, 
            left: 1,
            time: 6000,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 4,
            type: 'svitok',
            top: 500, 
            left: 0,
            time: 7000,
            url: 'https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 5,
            type: 'friend',
            top: 600, 
            left: 3,
            time: 9000,
            url: 'https://s3-alpha-sig.figma.com/img/3d5f/f079/b187f502d377967b1abf6e04901e76ac?Expires=1672012800&Signature=UKTm9H-DN6wQ5b7jztXBOdMKlWlZKJAqJdo272HyzWZsS9v95mbVJapwdFJ2sbfMKCBEkC8VIcM-8HK37a6m7Akr3yQoTC77Z2lHzIige55swIR~1Nb1HVjwfyZ8~Px4mhFCQodOYMY1nA3LVbNqZx136oqo-gpo1Ck2oPrdFgBWUdFtxZ3vBp4qEhtbfy7haHb1~qY8VZzFHUFs6fZ8f85Z2j78Tspyio8gHMBKunju2GpnOaUf6oCDh36T9s9DUh-Q58yiq2rEEoQY6xMqm4fb3tpaI8k9eUngizcOHiW7Nyj9X34ApsjZJPlfI~zQ0dDpZKC9XfXbhBmDpH-WYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 6,
            type: 'friend',
            top: 700, 
            left: 1,
            time: 11000,
            url: 'https://s3-alpha-sig.figma.com/img/8f44/9dee/5420e87dc0eee7f3964ca80622dc06a1?Expires=1672012800&Signature=Ry4BsJ2rqr~WY~x8qOdMDvs4PnE2mCtGgTArUwd45LBNAjQcls0T-edtywPMcnjnRrUKtVy2yofEORrRKw2OM8v6OX~ZgfjMrpmwowgn3ujfbFgQjkt3BVp~zxGN~cKumPcMoydBjTjZ9c8v4D1TGfw-AfZIZXk9ZevisWsMQYXQKlNgQ34sCgcnsV~6QJx0R7Ki0dleUbaud9WKU3Bqsiihk0hPwXIlJt4pyjU7xNBsTP2qJfs8Fs02~W1V1flYBRcbQgiJdYS0EMRiKvxbdZF8piI6SJqEvnKKiDBfrYtvJJG~3k2kT34ob-CMSpwHZDbz8Y4uwhqcQ40GTlPCEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 7,
            type: 'friend',
            top: 800, 
            left: 3,
            time: 13000,
            url: 'https://s3-alpha-sig.figma.com/img/8e24/84d0/bc9ed3a15b9a73133f870a6b6492def0?Expires=1672012800&Signature=ny2yFeCZuVqAIcmPlCY9H~RugJ~H9pbd5mU63eIVaoVnQ9P9u6iNehYeUlCbatxBdtk5IwFBSwFvj~Uhu4o8M2lhrneB9npIhQfK1fOEpiO00vRUnK7hMRIgIBcGDw1RxJJMTkXkYBcgfoKK3fgLzpKippumchxadtAC0QM~4JTr2tIEwwPrPez5AK6jIR0BuDhG-T2rQ5XW277PfG9Ym-iYRTBU6ObTDw1hPTf9ZL53YxElO908BHcAuQOTwneL4MtUroJpKZBoyYtVbML575MPWPeLdvcp2HfdADw6xsGlyTRnRD6IImblZYZC7FgcIUPa~UlWaKauHObvSqBGUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 8,
            type: 'svitok',
            top: 900, 
            left: 0,
            time: 14000,
            url: 'https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 9,
            type: 'friend',
            top: 1000, 
            left: 3,
            time: 15500,
            url: 'https://s3-alpha-sig.figma.com/img/8d33/5129/4afaec1b120faaced7b0190629046c03?Expires=1672012800&Signature=CP-zH82p2DxtqdRWgn9-nPDSJ0grtggeTAS5E~CgIqB21fLj-k9OwCeDSWqL381bs1k~ZjzVUj8R30Cgja6SQFLHB~PUknQG2pnhkHf~8XYJzlBNyVDmbUcuqk8GXwgLtbcUKb7Q3xRlWktK3vNLx4Qc7TpPD1dhubaTdzFUxi4vrcdqyQtsEGByjXU9jX0mPoyCN02NikcGrweI8-aq43hIu3yVamsbZdd44IJjmWYirS0vyJghUziKeX~MK8QNEUQilTQmKicvc3O6HGy2OvXd1mxctWJE3JL8xnUYYBr5uprNwYBj0gbQtYWzQ1SjajbtdGbSPFki7vcZY67kiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 10,
            type: 'friend',
            top: 1100, 
            left: 1,
            time: 17500,
            url: 'https://s3-alpha-sig.figma.com/img/f924/af9e/21782a09a09825522d876c3b5144e9ad?Expires=1672012800&Signature=KqXL6IFEv2436TfdnWjZnBQ-~BcejwdgYNOZaxE7Dk~SrDTIT-SOrslSb5N6FU6sZgZrrNO0Mb-YdeKyhxlfcyYrpBjqqE1ufTbYzJ8OM5-vLRSUngGYNWWNbZqRZR6WY85SWUfiQ~mvaHCZCT9fIypNNRrGPuGfXBBMasIpU9t0fwqZOVacGseLpgFqfVzg-d562dn6lLpbjk0ftA-BICTWnwggIFrTJm18c9xic7By1qNThkVNPevYCaqR6umOThccQYXijAYPLzniH9dmkknD3RtTE0s2e~utmEDz1n-GBV-oUqFO6dHBb78wYN3y1vdSGJhDaBLaSAVCHnvL6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 11,
            type: 'svitok',
            top: 1200, 
            left: 0,
            time: 19500,
            url: 'https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 12,
            type: 'friend',
            top: 1300, 
            left: 3,
            time: 21000,
            url: 'https://s3-alpha-sig.figma.com/img/734e/9a0f/0ea772b6c8b4f150ade25a97435951a1?Expires=1672012800&Signature=MkpIeZ3rRfKirGI0gPg~ubERl1R7jfodGLe5BX69Fh3Sq4yho-2jvSpx9Mpl8X0SyB5EdC8FO1ZNMaCTJi~gK~Rt~3VOAJx6Rcwc-IsO0yqN62opCMwisoXe4it6BzsSoueTwLCAuvz6ZwqW24nbHerqo3nzoBZzBppb5mrRISI-nauB80DghRPpMCv5NxjD1ZHNXM3j3mZ00yIJ~ubYCHwPPjRlqPMWzJvxH4AB8-sUVI2iYVZLrwkjcnziqFM4DOM0tOeTLid067eIEpEB6TNiZLC97MxATNNFLY-gWBiPmfiSNEltNkxMPMZBP3fd3-qNK48H3eT3ZOqxDU4LjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 12,
            type: 'friend',
            top: 1300, 
            left: 3,
            time: 21000,
            url: 'https://s3-alpha-sig.figma.com/img/734e/9a0f/0ea772b6c8b4f150ade25a97435951a1?Expires=1672012800&Signature=MkpIeZ3rRfKirGI0gPg~ubERl1R7jfodGLe5BX69Fh3Sq4yho-2jvSpx9Mpl8X0SyB5EdC8FO1ZNMaCTJi~gK~Rt~3VOAJx6Rcwc-IsO0yqN62opCMwisoXe4it6BzsSoueTwLCAuvz6ZwqW24nbHerqo3nzoBZzBppb5mrRISI-nauB80DghRPpMCv5NxjD1ZHNXM3j3mZ00yIJ~ubYCHwPPjRlqPMWzJvxH4AB8-sUVI2iYVZLrwkjcnziqFM4DOM0tOeTLid067eIEpEB6TNiZLC97MxATNNFLY-gWBiPmfiSNEltNkxMPMZBP3fd3-qNK48H3eT3ZOqxDU4LjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 13,
            type: 'friend',
            top: 1300, 
            left: 1,
            time: 22500,
            url: 'https://s3-alpha-sig.figma.com/img/d403/5f13/381cc4e5107c4569a632454ca022e2d5?Expires=1672012800&Signature=f1oxpYch9ly-wcsVsSj3QUBCzcohospad9XyHfr6cD5W7t~H21CaYggGfAhLuTyfLxXZsV69g6HyAwwqhP~d5nmubDZnk9le~jgcWQe5gu-tkC2sqOgpwpJqQFOAq2SaNLqDrSFRWmNyBIZuwcas2n33whYneG2chRh3vn62S7kIoWKrVoH6IQl7yhKsas9Ff738LxOG0AMTzKtvOTCtmEDgUXnOWgavOtcrNpnyiLxbzHGTGyvHxwovnHS0pkg9Uw0FFa9NcDCnwi0Pm25zX1m61-x9SN~NeY6tx4BpLyAHM5qFO2T5Ho~NzwMVbFWZyzaFx5f2D0F3PiITKhXDHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
    ],
    [],
    []
]



export const $drops = createStore(initialDrops)


