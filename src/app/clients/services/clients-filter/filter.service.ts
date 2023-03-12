import { Injectable } from '@angular/core';
import { BySort, SortKeyWord } from 'src/app/shared/models/sorting';

@Injectable({
  providedIn: 'any',
})
export class FilterService {
  isId: boolean = false;
  isFirstName = false;
  isLastName = false;
  isPatName = false;
  isBirthday = false;
  isPhone = false;
  isDateLast = false;
  isSumm = false;
  isBonus = false;
  isBarcode = false;
  keyWord: string = '';
  sortingDirection: string = '';
  activeClass: string = '';
  valueSort: string = '';
  flagSortDirection: string = '';

  getKeyWord(value: string): void {
    this.keyWord = value.trim();
  }

  changeSortValue(value: string): void {
    this.isId = false;
    this.isFirstName = false;
    this.isLastName = false;
    this.isPatName = false;
    this.isBirthday = false;
    this.isPhone = false;
    this.isDateLast = false;
    this.isSumm = false;
    this.isBonus = false;
    this.isBarcode = false;
    this.valueSort = value;
    this.activeClass = value;

    this.getSortingDirection();
    this.getSortingValue(value);
  }

  private getSortingDirection(): void {
    if (
      this.sortingDirection === '' ||
      this.sortingDirection === BySort.descending
    ) {
      this.sortingDirection = BySort.ascending;
    } else {
      this.sortingDirection = BySort.descending;
    }

    this.flagSortDirection = this.sortingDirection;
  }

  private getSortingValue(value: string): void {
    switch (value) {
      case SortKeyWord.byId: {
        this.isId = true;
        break;
      }
      case SortKeyWord.byFirstName: {
        this.isFirstName = true;
        break;
      }
      case SortKeyWord.byLastName: {
        this.isLastName = true;
        break;
      }
      case SortKeyWord.byPatName: {
        this.isPatName = true;
        break;
      }
      case SortKeyWord.byBirthday: {
        this.isBirthday = true;
        break;
      }
      case SortKeyWord.byPhone: {
        this.isPhone = true;
        break;
      }
      case SortKeyWord.byDateLast: {
        this.isDateLast = true;
        break;
      }
      case SortKeyWord.bySumm: {
        this.isSumm = true;
        break;
      }
      case SortKeyWord.byBonus: {
        this.isBonus = true;
        break;
      }
      default:
        this.isBarcode = true;
    }
  }
}
