import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'transformTable'
})
export class TransformTablePipe implements PipeTransform{
  transform(value: any, property: string): any {
    if(value){}
  }

}
