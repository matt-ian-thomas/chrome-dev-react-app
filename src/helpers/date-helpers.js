import moment from 'moment';

export function showCurrentTime() {
	document.getElementById("time").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}