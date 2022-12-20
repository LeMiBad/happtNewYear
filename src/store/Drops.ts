import { createStore } from "effector";


const initialDrops = [
    [
        {
            id: 0,
            top: 0, 
            left: 1,
            time: 2000,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 1,
            top: 40, 
            left: 0,
            time: 2600,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 2,
            top: 200, 
            left: 3,
            time: 4000,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 3,
            top: 250, 
            left: 1,
            time: 6000,
            url: 'https://s3-alpha-sig.figma.com/img/fbfa/ba86/560d7f6f6d95baf8ecba403960d4b7c9?Expires=1672012800&Signature=BWzIe1k-8CN5lKzsMLjRNx8o5D-0EdHEVDeWO1IKhBofczyBV6yIztPv9nB3G7sXftyV4L9g8rlb1GOM5u5dlR9eckqwke8OZQkxqfO2vLlXil1p3EuG2Zc-Nkq6n~7~Accc6EuWeY40be193~nXZoCp2C5YwuR8RM4yv76z6TH2GCDY3fud-Q152RDqLOdrN7-ewFrNM-RLXzj~wP9VrLIL-~B5g6PZN0TpUz-JRiPhYOzZ9gG7IurJWL8U1zydNHZ-NsWrmVU9flp~4SkPbIgJdPUpPk65GOt72gv07B0S3Qm2bcUN2xLRBafuNf2DK~q-9Z24wQ0I48R5EH9bfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id: 4,
            top: 500, 
            left: 0,
            time: 7000,
            url: 'https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
    ],
    [],
    []
]



export const $drops = createStore(initialDrops)