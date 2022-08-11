import { observable } from "mobx";

const store = observable({
    winner: " ",
    style: "",
    show: "noShow",
    arr: [
        {
            "name": "",
            "distance": 0
        },

    ],

    NewArr(payload) {
        this.arr = payload;

    },

    NewWinner(payload) {
        this.winner = payload;

    },

    Style(payload) {
        this.style = payload;

    },

    Show(payload) {
        this.show = payload;

    }


});

export default store;