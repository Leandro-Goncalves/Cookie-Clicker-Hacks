let setIntervalValue_goldemCookie = null;
let setIntervalValue_bigCookie = null;

const goldemCookie = {
    main:() => {
        const cookie = document.getElementsByClassName("shimmer")
        for (let item of cookie) {
            item.click()
        }
    },
    start:() => {
        setIntervalValue_goldemCookie = setInterval(goldemCookie.main, 10)
    },
    stop:() => {
        clearInterval(setIntervalValue_goldemCookie)
        setIntervalValue_goldemCookie = null
    }
}

const bigCookie = {
    main: () => {
        const bigCookie = document.getElementById("bigCookie")
        bigCookie.click()
    },
    start: () => {
        setIntervalValue_bigCookie = setInterval(bigCookie.main, 10)
    },
    stop: () => {
        clearInterval(setIntervalValue_bigCookie)
        setIntervalValue_bigCookie = null
    }
}