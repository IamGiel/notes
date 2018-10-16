import { Pipe, PipeTransform } from "@angular/core";
import { isNgTemplate } from "@angular/compiler";

@Pipe({
  name: "filterNgFor"
})
export class FilterNgForPipe implements PipeTransform {
  transform(collections: any[], filter: Object): any {
    if (!collections || !filter) {
      return collections;
    }
    return collections.filter(
      collection => collection.indexOf(filter.name) !== -1
    );
  }
}
