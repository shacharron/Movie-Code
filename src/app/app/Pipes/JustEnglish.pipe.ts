import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'JustEnglish'
})

export class JustEnglish implements PipeTransform {

    transform(value: string, args?: any[]) {
        if (!value)
            return null;
        var res = value.replace(/[^a-zA-Z0-9 +]+/g, '');
        // alert(printable_ASCII_only_string );
        return res;
    }
}