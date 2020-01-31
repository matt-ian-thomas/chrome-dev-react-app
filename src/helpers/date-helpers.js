import moment from 'moment';

export function getCurrentTime() {
	return moment().format('MMMM Do YYYY, h:mm:ss a');
}
