import { Pipe, PipeTransform } from '@angular/core';
import { Clients } from 'src/app/clients/models/clients';
import { BySort, SortKeyWord } from '../../models/sorting';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(items: Clients[], bySort: string, keySort: string): Clients[] {
    switch (bySort) {
      case SortKeyWord.byId: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.user_id - a.user_id,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byFirstName: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.first_name < a.first_name
          ? -1
          : 1,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byLastName: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.last_name < a.last_name
          ? -1
          : 1,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byPatName: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.pat_name < a.pat_name
          ? -1
          : 1,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byBirthday: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.birthday < a.birthday
          ? -1
          : 1,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byPhone: {
        const sort: Clients[] = [...items].sort(
          (a, b) => Number(b.phone) - Number(a.phone),
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byDateLast: {
        const sort: Clients[] = [...items].sort(
          (a, b) => b.date_last < a.date_last
          ? -1
          : 1,
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.bySumm: {
        const sort: Clients[] = [...items].sort(
          (a, b) => Number(b.summ) - Number(a.summ),
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byBonus: {
        const sort: Clients[] = [...items].sort(
          (a, b) => Number(b.bonus) - Number(a.bonus),
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      case SortKeyWord.byBarcode: {
        const sort: Clients[] = [...items].sort(
          (a, b) => Number(b.barcode) - Number(a.barcode),
        );

        return keySort === BySort.descending ? sort.reverse() : sort;
      }
      default:
        return [...items];
    }
  }
}
