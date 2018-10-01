import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'CapitalLetters'
})

export class CapitalLetters implements PipeTransform {

    transform(value: string, args?: any[]) {
        if (!value)
            return null;
        
            var splitStr = value.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }


}