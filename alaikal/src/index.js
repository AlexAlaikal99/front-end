import $ from "jquery";
import moment from "moment";

const tampilwaktu = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};

const aturwaktu = () => {
    tampilwaktu();
    setTimeout(updateTime, 1000)
};

aturwaktu();