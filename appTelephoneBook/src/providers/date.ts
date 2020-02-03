import { Injectable } from '@angular/core';


@Injectable()
export class DateService {

    auxURL = null;
    setutl(u) {
        let r = u;
        alert('setutl :: ' + JSON.stringify(r));
        this.auxURL = r;
        alert('auxURL :: ' + JSON.stringify(this.auxURL));
    }
    validateTime(hour:number,minutes:number){        
        return ((hour>=0 && hour<=24) && (minutes>=0 && minutes<=60));
    }
    
    validateDate(year:number, month:number, day:number) {
        let daych = 31
        if (year >1753){
            if (month == 2) {
                if (year % 400 == 0) {
                    daych = 29
                } else if (year % 4 == 0 && year % 100 != 0) {
                    daych = 29
                } else {
                    daych = 28
                }
            } else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
                daych = 30
            } 
            return ((month >= 1 && month <= 12) && (day >= 1 && day <= daych))
        }else{
            return false;
        }

    }

    toString(sourceDate) {
        let year = sourceDate.getFullYear();
        let month = sourceDate.getMonth() + 1;
        let day = sourceDate.getDate();
        let hour = sourceDate.getHours();
        let minutes = sourceDate.getMinutes();
        let result = year.toString();
        if (month < 10) {
            result += "0" + month.toString();
        }
        else {
            result += month.toString();
        }
        if (day < 10) {
            result += "0" + day.toString();
        }
        else {
            result += day.toString();
        }
        if (hour < 10) {
            result += "0" + hour.toString();
        }
        else {
            result += hour.toString();
        }
        if (minutes < 10) {
            result += "0" + minutes.toString();
        }
        else {
            result += minutes.toString();
        }
        return result;
    };

    toCompleteString(sourceDate) {
        let year = sourceDate.getFullYear();
        let month = sourceDate.getMonth() + 1;
        let day = sourceDate.getDate();
        let hour = sourceDate.getHours();
        let minutes = sourceDate.getMinutes();
        let seconds = sourceDate.getSeconds();
        let milliseconds = sourceDate.getMilliseconds();
        let result = year.toString();
        if (month < 10) {
            result += "0" + month.toString();
        }
        else {
            result += month.toString();
        }
        if (day < 10) {
            result += "0" + day.toString();
        }
        else {
            result += day.toString();
        }
        if (hour < 10) {
            result += "0" + hour.toString();
        }
        else {
            result += hour.toString();
        }
        if (minutes < 10) {
            result += "0" + minutes.toString();
        }
        else {
            result += minutes.toString();
        }
        if (seconds < 10) {
            result += "0" + seconds.toString();
        }
        else {
            result += seconds.toString();
        }
        if (milliseconds < 10) {
            result += "00";
        }
        else if (milliseconds < 100) {
            result += "0" + milliseconds.toString().substr(0, 1);
        }
        else {
            result += milliseconds.toString().substr(0, 2);
        }
        return result;
    };

    fromCompleteString(sourceString) {
        let year = parseInt(sourceString.substr(0, 4));
        let month = parseInt(sourceString.substr(4, 2));
        let day = parseInt(sourceString.substr(6, 2));
        let hours = parseInt(sourceString.substr(8, 2));
        let minutes = parseInt(sourceString.substr(10, 2));
        let seconds = parseInt(sourceString.substr(12, 2));
        let milliseconds = parseInt(sourceString.substr(14, 2)) * 10;
        return new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
    };

    fromString(sourceString) {
        let year = parseInt(sourceString.substr(0, 4));
        let month = parseInt(sourceString.substr(4, 2));
        let day = parseInt(sourceString.substr(6, 2));
        let hours = parseInt(sourceString.substr(8, 2));
        let minutes = parseInt(sourceString.substr(10, 2));
        return new Date(year, month - 1, day, hours, minutes, 0, 0);
    };

    formatToShow(sourceString) {
        let year = sourceString.substr(0, 4);
        let month = sourceString.substr(4, 2);
        let day = sourceString.substr(6, 2);
        let hours = sourceString.substr(8, 2);
        let minutes = sourceString.substr(10, 2);
        return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
    };

    formatToTime(sourceString) {

        let hours = sourceString.substr(8, 2);
        let minutes = sourceString.substr(10, 2);
        return hours + ":" + minutes;
    };
    
    formatDateToShow(sourceString:number) {
        var _date =new Date(sourceString);
        let year = _date.getFullYear();
        let month = _date.getMonth() + 1;
        let day = _date.getDate();    
        return day + "/" + month + "/" + year;
    };

    formatDateTimeToShow(sourceString:number) {
        var _date =new Date(sourceString);
        let year = _date.getFullYear();
        let month = _date.getMonth() + 1;
        let day = _date.getDate();   
        let hour = _date.getHours();
        let minutes = _date.getMinutes(); 
        return day + "/" + month + "/" + year+' '+hour+':'+minutes;
    };

    /*formatDateToShow(sourceString) {
        let year = sourceString.substr(0, 4);
        let month = sourceString.substr(4, 2);
        let day = sourceString.substr(6, 2);
        return day + "/" + month + "/" + year;
    };*/
    formatDateToShowStr(sourceString) {
      //  let year = sourceString.substr(0, 4);
        let month = this.getMonthName(sourceString.substr(4, 2));
        let day = sourceString.substr(6, 2);

        return day + " " + month;
    };

    formatDateToShowMonthYear(sourceString) {
        let year = sourceString.substr(0, 4);
        let month = this.getMonthName(sourceString.substr(4, 2));
       // let day = sourceString.substr(6, 2);

        return month + " " + year;
    };

    getWeekDay(sourceString) {
        let weekDay = this.fromString(sourceString).getDay();
        switch (weekDay) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda';
            case 2:
                return 'Terça';
            case 3:
                return 'Quarta';
            case 4:
                return 'Quinta';
            case 5:
                return 'Sexta';
            case 6:
                return 'Sábado';
            default:
                return '';

        }
    }

    getMonthName(monthStr) {
        let month = parseInt(monthStr);
        switch (month) {
            case 1:
                return 'Jan';
            case 2:
                return 'Fev';
            case 3:
                return 'Mar';
            case 4:
                return 'Abr';
            case 5:
                return 'Mai';
            case 6:
                return 'Jun';
            case 7:
                return 'Jul';
            case 8:
                return 'Ago';
            case 9:
                return 'Set';
            case 10:
                return 'Out';
            case 11:
                return 'Nov';
            case 12:
                return 'Dez';
            default:
                return '';
        }
    }
}
