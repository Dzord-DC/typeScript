declare module 'flat-rent-sdk.js'{
  export function cloneDate(date: Date): Date

  export function addDays(date: Date, days: number): Date

  export class FlatRentSdk {

  }

  export interface Callback<R> {
    (error?: Error, result?: R)
  }

  export function get(id:string):Promise<object|null>

  export function search(parameters: {
    city: string;
    checkInDate: Date;
    checkOutDate: Date;
    priceLimit?: number;
  }): object[]

  export function book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  export function _assertDatesAreCorrect(checkInDate:Date, checkOutDate:Date):void

  export function _resetTime(date:Date):void

  export function _calculateDifferenceInDays(startDate:Date, endDate:Date):number

  export function _generateDateRange(from:Date, to:Date):Date

  export function _generateTransactionId():number

  export function _areAllDatesAvailable(flat:object, dateRange:Date[]):Date[]
  
  export function _formatFlatObject(flat:object, nightNumber:number):object

  export function _readDatabase():object|null
  
  export function _writeDatabase(database:object[]):void

  export function _syncDatabase(database:object[]):void
}

